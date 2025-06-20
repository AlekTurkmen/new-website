/**
 * @fileoverview Control real time music with text prompts
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {css, CSSResultGroup, html, LitElement, svg} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';

import {
  GoogleGenAI,
  type LiveMusicGenerationConfig,
  type LiveMusicServerMessage,
  type LiveMusicSession,
} from '@google/genai';
import {decode, decodeAudioData} from './utils';
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: 'v1alpha',
});
let model = 'lyria-realtime-exp';

interface Prompt {
  readonly promptId: string;
  readonly color: string;
  text: string;
  weight: number;
}

type PlaybackState = 'stopped' | 'playing' | 'loading' | 'paused';

/** Throttles a callback to be called at most once per `freq` milliseconds. */
function throttle(func: (...args: unknown[]) => void, delay: number) {
  let lastCall = 0;
  return (...args: unknown[]) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;
    if (timeSinceLastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}

const PROMPT_COLOR_MAP = new Map([
  ['Bossa Nova', '#9900ff'],
  ['Techno', '#5200ff'], 
  ['House', '#9900ff'],
  ['Funk', '#2af6de'],
  ['Disco', '#ffdd28'],
  ['Soul', '#3dffab'],
  ['Jazz', '#d8ff3e'],
  ['Staccato Rhythms', '#ffdd28'],
  ['Neo Soul', '#ff0000'],
  ['Trip Hop', '#00ff00'],
  ['Rain', '#2af6de']
]);

// Extract preset prompts from the color map
const PROMPT_TEXT_PRESETS = Array.from(PROMPT_COLOR_MAP.keys());

// Extract colors for fallback use
const COLORS = Array.from(PROMPT_COLOR_MAP.values()).concat([
  '#0000ff',
  '#ffff00',
  '#00ffff',
  '#ff00ff',
  '#ffffff',
]);

function getColorForPrompt(text: string, usedColors: string[]): string {
  // Check if the text matches a preset and return its mapped color
  const mappedColor = PROMPT_COLOR_MAP.get(text);
  if (mappedColor) {
    return mappedColor;
  }
  // If not a preset, return a random unused color
  return getUnusedRandomColor(usedColors);
}

function getUnusedRandomColor(usedColors: string[]): string {
  const availableColors = COLORS.filter((c) => !usedColors.includes(c));
  if (availableColors.length === 0) {
    // If no available colors, pick a random one from the original list.
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }
  return availableColors[Math.floor(Math.random() * availableColors.length)];
}

// WeightSlider component
// -----------------------------------------------------------------------------

type VelocityMode = 'none' | 'up1' | 'up2' | 'up3' | 'down1' | 'down2' | 'down3';
type VelocityBehavior = 'stop' | 'bounce' | 'flip';

interface VelocityConfig {
  rate: number; // Change per second
  arrows: number; // Number of arrows to show (positive for up, negative for down)
}

const VELOCITY_CONFIGS: Record<VelocityMode, VelocityConfig> = {
  none: { rate: 0, arrows: 0 },
  up1: { rate: 0.01 / 50, arrows: 1 },    // 0.01/s in display range (0-100) 
  up2: { rate: 0.05 / 50, arrows: 2 },    // 0.05/s in display range (0-100)
  up3: { rate: 0.1 / 50, arrows: 3 },     // 0.1/s in display range (0-100)
  down1: { rate: -0.01 / 50, arrows: -1 }, // -0.01/s in display range (0-100)
  down2: { rate: -0.05 / 50, arrows: -2 }, // -0.05/s in display range (0-100)
  down3: { rate: -0.1 / 50, arrows: -3 },  // -0.1/s in display range (0-100)
};

/** A slider for adjusting and visualizing prompt weight. */
@customElement('weight-slider')
class WeightSlider extends LitElement {
  static override styles = css`
    :host {
      cursor: ns-resize;
      position: relative;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 5px;
    }
    .main-container {
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.5vmin;
    }
    .scroll-container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .value-display {
      font-size: 1.3vmin;
      color: #ccc;
      margin: 0.5vmin 0;
      user-select: none;
      text-align: center;
      font-weight: bold;
    }
    .slider-container {
      position: relative;
      width: 10px;
      height: 100%;
      background-color: #0009;
      border-radius: 4px;
    }
    #thumb {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 4px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
    }
    .velocity-controls {
      display: flex;
      flex-direction: column;
      gap: 0.2vmin;
      align-items: center;
    }
    .velocity-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.4vmin;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2vmin;
      width: 4vmin;
      min-height: 3vmin;
    }
    .velocity-button:hover {
      background-color: #333;
      border-radius: 4px;
    }
    .arrow {
      width: 0;
      height: 0;
      border-style: solid;
      transition: opacity 0.2s ease;
    }
    .arrow.up {
      border-left: 0.6vmin solid transparent;
      border-right: 0.6vmin solid transparent;
      border-bottom: 0.8vmin solid #666;
      margin-bottom: 0.2vmin;
    }
    .arrow.down {
      border-left: 0.6vmin solid transparent;
      border-right: 0.6vmin solid transparent;
      border-top: 0.8vmin solid #666;
      margin-top: 0.2vmin;
    }
    .arrow.active {
      border-bottom-color: white !important;
      border-top-color: white !important;
    }
    .arrow.inactive {
      opacity: 0.2;
    }
    .pause-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.6vmin;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4vmin;
      height: 3vmin;
      margin: 0.2vmin 0;
    }
    .pause-button:hover {
      background-color: #333;
      border-radius: 4px;
    }
    .pause-icon {
      width: 1.2vmin;
      height: 1.2vmin;
      background-color: #666;
      border-radius: 2px;
    }
    .pause-icon.active {
      background-color: white;
    }
  `;

  @property({type: Number}) value = 0; // Range 0-2 (internal)
  @property({type: String}) color = '#000';
  @property({type: String}) velocityBehavior: VelocityBehavior = 'bounce';
  @state() private velocityMode: VelocityMode = 'none';
  private velocityTimer: number | null = null;

  @query('.scroll-container') private scrollContainer!: HTMLDivElement;

  private dragStartPos = 0;
  private dragStartValue = 0;
  private containerBounds: DOMRect | null = null;

  // Convert internal value (0-2) to display value (0-100)
  private getDisplayValue(): number {
    return this.value * 50;
  }

  // Convert display value (0-100) to internal value (0-2)
  private setFromDisplayValue(displayValue: number): void {
    this.value = displayValue / 50;
  }

  constructor() {
    super();
    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleDownClick = this.handleDownClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.updateVelocity = this.updateVelocity.bind(this);
  }

  private handlePointerDown(e: PointerEvent) {
    e.preventDefault();
    // Pause velocity when manually dragging
    this.velocityMode = 'none';
    this.updateVelocityTimer();
    
    this.containerBounds = this.scrollContainer.getBoundingClientRect();
    this.dragStartPos = e.clientY;
    this.dragStartValue = this.value;
    document.body.classList.add('dragging');
    window.addEventListener('pointermove', this.handlePointerMove);
    window.addEventListener('touchmove', this.handleTouchMove, {
      passive: false,
    });
    window.addEventListener('pointerup', this.handlePointerUp, {once: true});
    this.updateValueFromPosition(e.clientY);
  }

  private handlePointerMove(e: PointerEvent) {
    this.updateValueFromPosition(e.clientY);
  }

  private handleTouchMove(e: TouchEvent) {
    e.preventDefault();
    this.updateValueFromPosition(e.touches[0].clientY);
  }

  private handlePointerUp(e: PointerEvent) {
    window.removeEventListener('pointermove', this.handlePointerMove);
    document.body.classList.remove('dragging');
    this.containerBounds = null;
  }

  private handleWheel(e: WheelEvent) {
    e.preventDefault();
    // Pause velocity when manually scrolling
    this.velocityMode = 'none';
    this.updateVelocityTimer();
    
    const delta = e.deltaY;
    this.value = this.value + delta * -0.005;
    this.value = Math.max(0, Math.min(2, this.value));
    this.dispatchInputEvent();
  }

  private updateValueFromPosition(clientY: number) {
    if (!this.containerBounds) return;

    const trackHeight = this.containerBounds.height;
    // Calculate position relative to the top of the track
    const relativeY = clientY - this.containerBounds.top;
    // Invert and normalize (0 at bottom, 1 at top)
    const normalizedValue =
      1 - Math.max(0, Math.min(trackHeight, relativeY)) / trackHeight;
    // Scale to 0-2 range
    this.value = normalizedValue * 2;

    this.dispatchInputEvent();
  }

  private dispatchInputEvent() {
    this.dispatchEvent(new CustomEvent<number>('input', {detail: this.value}));
  }

  private handleUpClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.cycleUpVelocity();
  }

  private handleDownClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.cycleDownVelocity();
  }

  private handlePauseClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.velocityMode = 'none';
    this.updateVelocityTimer();
  }

  private cycleUpVelocity() {
    const upModes: VelocityMode[] = ['none', 'up1', 'up2', 'up3'];
    const currentIndex = upModes.indexOf(this.velocityMode);
    
    if (currentIndex === -1 || this.velocityMode.startsWith('down')) {
      // If currently in down mode or invalid, start with up1
      this.velocityMode = 'up1';
    } else {
      // Cycle through up modes
      const nextIndex = (currentIndex + 1) % upModes.length;
      this.velocityMode = upModes[nextIndex];
    }
    
    this.updateVelocityTimer();
  }

  private cycleDownVelocity() {
    const downModes: VelocityMode[] = ['none', 'down1', 'down2', 'down3'];
    const currentIndex = downModes.indexOf(this.velocityMode);
    
    if (currentIndex === -1 || this.velocityMode.startsWith('up')) {
      // If currently in up mode or invalid, start with down1
      this.velocityMode = 'down1';
    } else {
      // Cycle through down modes
      const nextIndex = (currentIndex + 1) % downModes.length;
      this.velocityMode = downModes[nextIndex];
    }
    
    this.updateVelocityTimer();
  }

  private updateVelocityTimer() {
    // Clear existing timer
    if (this.velocityTimer !== null) {
      clearInterval(this.velocityTimer);
      this.velocityTimer = null;
    }

    const config = VELOCITY_CONFIGS[this.velocityMode];
    if (config.rate !== 0) {
      // Update every 100ms for smoother animation and more accurate timing
      // Rate is per second, so divide by 10 for 100ms intervals
      this.velocityTimer = window.setInterval(() => {
        this.updateVelocity();
      }, 100);
    }
  }

  private updateVelocity() {
    const config = VELOCITY_CONFIGS[this.velocityMode];
    // Rate is per second, so divide by 10 for 100ms intervals
    const incrementPerUpdate = config.rate / 10;
    let newValue = this.value + incrementPerUpdate;
    
    // Handle boundary behavior based on velocityBehavior setting
    if (newValue > 2) {
      if (this.velocityBehavior === 'stop') {
        newValue = 2;
        this.velocityMode = 'none';
        this.updateVelocityTimer();
      } else if (this.velocityBehavior === 'bounce') {
        newValue = 2;
        this.flipVelocityDirection();
      } else if (this.velocityBehavior === 'flip') {
        newValue = 0; // Loop from 100% back to 0%
      }
    } else if (newValue < 0) {
      if (this.velocityBehavior === 'stop') {
        newValue = 0;
        this.velocityMode = 'none';
        this.updateVelocityTimer();
      } else if (this.velocityBehavior === 'bounce') {
        newValue = 0;
        this.flipVelocityDirection();
      } else if (this.velocityBehavior === 'flip') {
        newValue = 2; // Loop from 0% back to 100%
      }
    }
    
    this.value = newValue;
    this.dispatchInputEvent();
  }

  private flipVelocityDirection() {
    // Map current mode to opposite direction with same intensity
    const velocityMap: Record<VelocityMode, VelocityMode> = {
      'none': 'none',
      'up1': 'down1',
      'up2': 'down2', 
      'up3': 'down3',
      'down1': 'up1',
      'down2': 'up2',
      'down3': 'up3',
    };
    
    this.velocityMode = velocityMap[this.velocityMode];
    this.updateVelocityTimer();
  }

  override connectedCallback() {
    super.connectedCallback();
    this.updateVelocityTimer();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.velocityTimer !== null) {
      clearInterval(this.velocityTimer);
      this.velocityTimer = null;
    }
  }

  private renderVelocityArrows(direction: 'up' | 'down', count: number) {
    const config = VELOCITY_CONFIGS[this.velocityMode];
    const isActive = (direction === 'up' && config.arrows > 0) || (direction === 'down' && config.arrows < 0);
    const activeCount = Math.abs(config.arrows);
    
    const arrows = [];
    for (let i = 0; i < count; i++) {
      let isArrowActive: boolean;
      
      if (direction === 'up') {
        // For up arrows, highlight from bottom to top (reverse order)
        const reverseIndex = count - 1 - i;
        isArrowActive = isActive && reverseIndex < activeCount;
      } else {
        // For down arrows, keep the normal top to bottom order
        isArrowActive = isActive && i < activeCount;
      }
      
      const arrowClasses = classMap({
        arrow: true,
        [direction]: true,
        active: isArrowActive,
        inactive: isActive && !isArrowActive,
      });
      arrows.push(html`<div class=${arrowClasses}></div>`);
    }
    return arrows;
  }



  override render() {
    const thumbHeightPercent = (this.value / 2) * 100;
    const thumbStyle = styleMap({
      height: `${thumbHeightPercent}%`,
      backgroundColor: this.color,
      // Hide thumb if value is 0 or very close to prevent visual glitch
      display: this.value > 0.01 ? 'block' : 'none',
    });
    // Display value in 0-100 range with 2 decimal places
    const displayValue = this.getDisplayValue().toFixed(2);
    
    const pauseIconClasses = classMap({
      'pause-icon': true,
      'active': this.velocityMode === 'none',
    });

    return html`
      <div class="main-container">
        <div
          class="scroll-container"
          @pointerdown=${this.handlePointerDown}
          @wheel=${this.handleWheel}>
          <div class="slider-container">
            <div id="thumb" style=${thumbStyle}></div>
          </div>
          <div class="value-display">${displayValue}</div>
        </div>
        <div class="velocity-controls">
          <button class="velocity-button" @click=${this.handleUpClick}>
            ${this.renderVelocityArrows('up', 3)}
          </button>
          <button class="pause-button" @click=${this.handlePauseClick}>
            <div class=${pauseIconClasses}></div>
          </button>
          <button class="velocity-button" @click=${this.handleDownClick}>
            ${this.renderVelocityArrows('down', 3)}
          </button>
        </div>
      </div>
    `;
  }
}

// Base class for icon buttons.
class IconButton extends LitElement {
  static override styles = css`
    :host {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    :host(:hover) svg {
      transform: scale(1.2);
    }
    svg {
      width: 100%;
      height: 100%;
      transition: transform 0.5s cubic-bezier(0.25, 1.56, 0.32, 0.99);
    }
    .hitbox {
      pointer-events: all;
      position: absolute;
      width: 65%;
      aspect-ratio: 1;
      top: 9%;
      border-radius: 50%;
      cursor: pointer;
    }
  ` as CSSResultGroup;

  // Method to be implemented by subclasses to provide the specific icon SVG
  protected renderIcon() {
    return svg``; // Default empty icon
  }

  private renderSVG(icon?: any) {
    return html`
      <svg
        width="140"
        height="140"
        viewBox="0 -10 140 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="22"
          y="6"
          width="96"
          height="96"
          rx="48"
          fill="black"
          fill-opacity="0.05" />
        <rect
          x="23.5"
          y="7.5"
          width="93"
          height="93"
          rx="46.5"
          stroke="black"
          stroke-opacity="0.3"
          stroke-width="3" />
        <g filter="url(#filter0_ddi_1048_7373)">
          <rect
            x="25"
            y="9"
            width="90"
            height="90"
            rx="45"
            fill="white"
            fill-opacity="0.05"
            shape-rendering="crispEdges" />
        </g>
        ${icon || this.renderIcon()}
        <defs>
          <filter
            id="filter0_ddi_1048_7373"
            x="0"
            y="0"
            width="140"
            height="140"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1048_7373" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="16" />
            <feGaussianBlur stdDeviation="12.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1048_7373"
              result="effect2_dropShadow_1048_7373" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1048_7373"
              result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect3_innerShadow_1048_7373" />
          </filter>
        </defs>
      </svg>`;
  }

  override render() {
    return html`${this.renderSVG()}<div class="hitbox"></div>`;
  }
}

// PlayPauseButton
// -----------------------------------------------------------------------------

/** A button for toggling play/pause. */
@customElement('play-pause-button')
export class PlayPauseButton extends IconButton {
  @property({type: String}) playbackState: PlaybackState = 'stopped';

  static override styles = [
    IconButton.styles,
    css`
      .loader {
        stroke: #ffffff;
        stroke-width: 3;
        stroke-linecap: round;
        animation: spin linear 1s infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    `,
  ];

  private renderPause() {
    return svg`<path
      d="M75.0037 69V39H83.7537V69H75.0037ZM56.2537 69V39H65.0037V69H56.2537Z"
      fill="#FEFEFE"
    />`;
  }

  private renderPlay() {
    return svg`<path d="M60 71.5V36.5L87.5 54L60 71.5Z" fill="#FEFEFE" />`;
  }

  private renderLoading() {
    return svg`<path shape-rendering="crispEdges" class="loader" d="M70,74.2L70,74.2c-10.7,0-19.5-8.7-19.5-19.5l0,0c0-10.7,8.7-19.5,19.5-19.5
            l0,0c10.7,0,19.5,8.7,19.5,19.5l0,0"/>`;
  }

  override renderIcon() {
    if (this.playbackState === 'playing') {
      return this.renderPause();
    } else if (this.playbackState === 'loading') {
      return this.renderLoading();
    } else {
      return this.renderPlay();
    }
  }
}

@customElement('reset-button')
export class ResetButton extends IconButton {
  private renderResetIcon() {
    return svg`
    <g stroke="#FEFEFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <!-- Circular refresh arrow -->
      <circle cx="70" cy="54" r="12" stroke-dasharray="30 8"></circle>
      <!-- Arrow head -->
      <path d="M82 54 L77 49 L77 59 Z" fill="#FEFEFE"></path>
    </g>`;
  }

  override renderIcon() {
    return this.renderResetIcon();
  }
}

// AddPromptButton component
// -----------------------------------------------------------------------------
/** A button for adding a new prompt. */
@customElement('add-prompt-button')
export class AddPromptButton extends IconButton {
  private renderAddIcon() {
    return svg`<path d="M67 40 H73 V52 H85 V58 H73 V70 H67 V58 H55 V52 H67 Z" fill="#FEFEFE" />`;
  }

  override renderIcon() {
    return this.renderAddIcon();
  }
}

// Toast Message component
// -----------------------------------------------------------------------------

@customElement('toast-message')
class ToastMessage extends LitElement {
  static override styles = css`
    .toast {
      line-height: 1.6;
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #000;
      color: white;
      padding: 15px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      min-width: 200px;
      max-width: 80vw;
      transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      z-index: 999999;
    }
    .close-button {
      border-radius: 100px;
      aspect-ratio: 1;
      border: none;
      color: #000;
      cursor: pointer;
      background: white;
    }
    .action-button {
      border-radius: 5px;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
      font-weight: bold;
      background: #5200ff;
      color: white;
      margin-left: 10px;
    }
    .action-button:hover {
      background: #6a1aff;
    }
    .toast:not(.showing) {
      transition-duration: 1s;
      transform: translate(-50%, -200%);
    }
    .message-content {
      flex: 1;
    }
    .button-container {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  `;

  @property({type: String}) message = '';
  @property({type: Boolean}) showing = false;
  @property({type: String}) actionText = '';
  @property({type: Function}) actionCallback?: () => void;
  @property({type: Boolean}) showClose = true;

  override render() {
    return html`<div class=${classMap({showing: this.showing, toast: true})}>
      <div class="message-content">${this.message}</div>
      <div class="button-container">
        ${this.actionText ? html`
          <button class="action-button" @click=${this.handleAction}>
            ${this.actionText}
          </button>
        ` : ''}
        ${this.showClose ? html`
          <button class="close-button" @click=${this.hide}>✕</button>
        ` : ''}
      </div>
    </div>`;
  }

  show(message: string, actionText?: string, actionCallback?: () => void, showClose: boolean = true) {
    this.showing = true;
    this.message = message;
    this.actionText = actionText || '';
    this.actionCallback = actionCallback;
    this.showClose = showClose;
  }

  hide() {
    this.showing = false;
    this.actionText = '';
    this.actionCallback = undefined;
  }

  private handleAction() {
    if (this.actionCallback) {
      this.actionCallback();
    }
    this.hide();
  }
}

/** A single prompt input */
@customElement('prompt-controller')
class PromptController extends LitElement {
  static override styles = css`
    .prompt {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      overflow: visible;
      background-color: #2a2a2a;
      border-radius: 5px;
    }
    .remove-button {
      position: absolute;
      top: 1.2vmin;
      left: 1.2vmin;
      background: #666;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 2.8vmin;
      height: 2.8vmin;
      font-size: 1.8vmin;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 2.8vmin;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.2s;
      z-index: 10;
    }
    .remove-button:hover {
      opacity: 1;
    }
    weight-slider {
      /* Calculate height: 100% of parent minus controls height and margin */
      max-height: calc(100% - 9vmin);
      flex: 1;
      min-height: 10vmin;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      margin: 2vmin 0 1vmin;
    }
    .controls {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: center;
      gap: 0.2vmin;
      width: 100%;
      height: 8vmin;
      padding: 0 0.5vmin;
      box-sizing: border-box;
      margin-bottom: 1vmin;
      position: relative;
      z-index: 1;
    }
    #text {
      font-family: 'Google Sans', sans-serif;
      font-size: 1.8vmin;
      width: 100%;
      flex-grow: 1;
      max-height: 100%;
      padding: 0.4vmin;
      box-sizing: border-box;
      text-align: center;
      word-wrap: break-word;
      overflow-y: auto;
      border: none;
      outline: none;
      -webkit-font-smoothing: antialiased;
      color: #fff;
      scrollbar-width: thin;
      scrollbar-color: #666 #1a1a1a;
    }
    #text::-webkit-scrollbar {
      width: 6px;
    }
    #text::-webkit-scrollbar-track {
      background: #0009;
      border-radius: 3px;
    }
    #text::-webkit-scrollbar-thumb {
      background-color: #666;
      border-radius: 3px;
    }
    :host([filtered='true']) #text {
      background: #da2000;
    }
    .input-container {
      position: relative;
      width: 100%;
    }
    #prompt-input {
      font-family: 'Google Sans', sans-serif;
      font-size: 1.6vmin;
      width: 100%;
      padding: 0.4vmin;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid #666;
      border-radius: 3px;
      background: #2a2a2a;
      color: #eee;
      outline: none;
    }
    #prompt-input:focus {
      border-color: #5200ff;
      box-shadow: 0 0 0 2px rgba(82, 0, 255, 0.3);
    }
    #dropdown {
      position: fixed;
      background-color: #2a2a2a;
      border: 1px solid #666;
      border-top: none;
      border-radius: 0 0 5px 5px;
      max-height: 200px;
      overflow-y: auto;
      z-index: 999999;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      min-width: 200px;
    }
    #dropdown .option {
      padding: 0.6vmin;
      cursor: pointer;
      color: #eee;
      border-bottom: 1px solid #444;
    }
    #dropdown .option:hover {
      background-color: #3a3a3a;
    }
    #dropdown .option:last-child {
      border-bottom: none;
    }
  `;

  @property({type: String, reflect: true}) promptId = '';
  @property({type: String}) text = '';
  @property({type: Number}) weight = 0;
  @property({type: String}) color = '';
  @property({type: String}) velocityBehavior: VelocityBehavior = 'bounce';

  @query('weight-slider') private weightInput!: WeightSlider;
  @query('#text') private textInput!: HTMLSpanElement;
  @query('#prompt-input') private promptInput!: HTMLInputElement;
  @query('#dropdown') private dropdown!: HTMLDivElement;

  @state() private isDropdownOpen = false;
  @state() private filteredPresets: string[] = [];

  private handlePromptInputFocus() {
    this.isDropdownOpen = true;
    this.updateFilteredPresets();
    // Position dropdown after it renders
    this.updateComplete.then(() => {
      this.positionDropdown();
    });
  }

  private positionDropdown() {
    if (this.dropdown && this.promptInput) {
      const inputRect = this.promptInput.getBoundingClientRect();
      this.dropdown.style.left = `${inputRect.left}px`;
      this.dropdown.style.top = `${inputRect.bottom}px`;
      this.dropdown.style.width = `${inputRect.width}px`;
    }
  }

  private handlePromptInputBlur() {
    // Delay hiding dropdown to allow clicks on options
    setTimeout(() => {
      this.isDropdownOpen = false;
    }, 150);
  }

  private handlePromptInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.text = input.value;
    this.updateFilteredPresets();
    this.dispatchPromptChange();
  }

  private handlePromptInputKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const currentText = this.text.trim();
      
      // If it's a new custom prompt, add it to the map
      if (currentText && !PROMPT_COLOR_MAP.has(currentText)) {
        const usedColors = Array.from(PROMPT_COLOR_MAP.values());
        const newColor = getUnusedRandomColor(usedColors);
        PROMPT_COLOR_MAP.set(currentText, newColor);
        // Update all components that might be using presets
        this.updateFilteredPresets();
      }
      
      this.isDropdownOpen = false;
      this.promptInput.blur();
      this.dispatchPromptChange();
    } else if (e.key === 'Escape') {
      this.isDropdownOpen = false;
      this.promptInput.blur();
    }
  }

  private updateFilteredPresets() {
    // Always show all presets from the current map
    this.filteredPresets = Array.from(PROMPT_COLOR_MAP.keys());
  }

  private handlePresetSelect(preset: string) {
    this.text = preset;
    this.isDropdownOpen = false;
    this.dispatchPromptChange();
  }

  private dispatchPromptChange() {
    this.dispatchEvent(
      new CustomEvent<Prompt>('prompt-changed', {
        detail: {
          promptId: this.promptId,
          text: this.text,
          weight: this.weight,
          color: this.color,
        },
      }),
    );
  }

  private dispatchPromptRemoved() {
    this.dispatchEvent(
      new CustomEvent<string>('prompt-removed', {
        detail: this.promptId,
        bubbles: true,
        composed: true,
      }),
    );
  }

  private updateWeight() {
    this.weight = this.weightInput.value;
    this.dispatchPromptChange();
  }

  connectedCallback() {
    super.connectedCallback();
    // Reposition dropdown on window resize
    window.addEventListener('resize', this.positionDropdown.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.positionDropdown.bind(this));
  }

  override render() {
    const classes = classMap({
      'prompt': true,
    });
    
    return html`<div class=${classes}>
      <button class="remove-button" @click=${this.dispatchPromptRemoved}
        >×</button
      >
      <weight-slider
        id="weight"
        value=${this.weight}
        color=${this.color}
        .velocityBehavior=${this.velocityBehavior}
        @input=${this.updateWeight}></weight-slider>
      <div class="controls">
        <div class="input-container">
          <input
            id="prompt-input"
            type="text"
            .value=${this.text}
            @input=${this.handlePromptInputChange}
            @keydown=${this.handlePromptInputKeyDown}
            @focus=${this.handlePromptInputFocus}
            @blur=${this.handlePromptInputBlur}
            placeholder="Type or select a prompt..."
          />
          ${this.isDropdownOpen ? html`
            <div id="dropdown">
              ${this.filteredPresets.map(preset => {
                const color = PROMPT_COLOR_MAP.get(preset) || '#eee';
                const isSelected = this.text === preset;
                return html`
                  <div 
                    class="option" 
                    style="color: ${color}; font-weight: bold; background-color: ${isSelected ? '#3a3a3a' : 'transparent'};"
                    @click=${() => this.handlePresetSelect(preset)}
                  >
                    ${preset} ${isSelected ? '✓' : ''}
                  </div>
                `;
              })}
              ${!PROMPT_COLOR_MAP.has(this.text) && this.text.trim() !== '' ? html`
                <div class="option" style="color: #ccc; font-style: italic;">
                  Press Enter to add "${this.text}"
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </div>
    </div>`;
  }
}

/** A panel for managing real-time music generation settings. */
@customElement('settings-controller')
class SettingsController extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 2vmin;
      background-color: #2a2a2a;
      color: #eee;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: 'Google Sans', sans-serif;
      font-size: 1.5vmin;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: #666 #1a1a1a;
      transition: width 0.3s ease-out max-height 0.3s ease-out;
    }
    :host([showadvanced]) {
      max-height: 40vmin;
    }
    :host::-webkit-scrollbar {
      width: 6px;
    }
    :host::-webkit-scrollbar-track {
      background: #1a1a1a;
      border-radius: 3px;
    }
    :host::-webkit-scrollbar-thumb {
      background-color: #666;
      border-radius: 3px;
    }
    .setting {
      margin-bottom: 0.5vmin;
      display: flex;
      flex-direction: column;
      gap: 0.5vmin;
    }
    label {
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      white-space: nowrap;
      user-select: none;
    }
    label span:last-child {
      font-weight: normal;
      color: #ccc;
      min-width: 3em;
      text-align: right;
    }
    input[type='range'] {
      --track-height: 8px;
      --track-bg: #0009;
      --track-border-radius: 4px;
      --thumb-size: 16px;
      --thumb-bg: #5200ff;
      --thumb-border-radius: 50%;
      --thumb-box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
      --value-percent: 0%;
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: var(--track-height);
      background: transparent;
      cursor: pointer;
      margin: 0.5vmin 0;
      border: none;
      padding: 0;
      vertical-align: middle;
    }
    input[type='range']::-webkit-slider-runnable-track {
      width: 100%;
      height: var(--track-height);
      cursor: pointer;
      border: none;
      background: linear-gradient(
        to right,
        var(--thumb-bg) var(--value-percent),
        var(--track-bg) var(--value-percent)
      );
      border-radius: var(--track-border-radius);
    }
    input[type='range']::-moz-range-track {
      width: 100%;
      height: var(--track-height);
      cursor: pointer;
      background: var(--track-bg);
      border-radius: var(--track-border-radius);
      border: none;
    }
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: var(--thumb-size);
      width: var(--thumb-size);
      background: var(--thumb-bg);
      border-radius: var(--thumb-border-radius);
      box-shadow: var(--thumb-box-shadow);
      cursor: pointer;
      margin-top: calc((var(--thumb-size) - var(--track-height)) / -2);
    }
    input[type='range']::-moz-range-thumb {
      height: var(--thumb-size);
      width: var(--thumb-size);
      background: var(--thumb-bg);
      border-radius: var(--thumb-border-radius);
      box-shadow: var(--thumb-box-shadow);
      cursor: pointer;
      border: none;
    }
    input[type='number'],
    input[type='text'],
    select {
      background-color: #2a2a2a;
      color: #eee;
      border: 1px solid #666;
      border-radius: 3px;
      padding: 0.4vmin;
      font-size: 1.5vmin;
      font-family: inherit;
      box-sizing: border-box;
    }
    input[type='number'] {
      width: 6em;
    }
    input[type='text'] {
      width: 100%;
    }
    input[type='text']::placeholder {
      color: #888;
    }
    input[type='number']:focus,
    input[type='text']:focus {
      outline: none;
      border-color: #5200ff;
      box-shadow: 0 0 0 2px rgba(82, 0, 255, 0.3);
    }
    select {
      width: 100%;
    }
    select:focus {
      outline: none;
      border-color: #5200ff;
    }
    select option {
      background-color: #2a2a2a;
      color: #eee;
    }
    .checkbox-setting {
      flex-direction: row;
      align-items: center;
      gap: 1vmin;
    }
    input[type='checkbox'] {
      cursor: pointer;
      accent-color: #5200ff;
    }
    .core-settings-row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4vmin;
      margin-bottom: 1vmin;
      justify-content: space-evenly;
    }
    .core-settings-row .setting {
      min-width: 16vmin;
    }
    .core-settings-row label span:last-child {
      min-width: 2.5em;
    }
    .advanced-toggle {
      cursor: pointer;
      margin: 2vmin 0 1vmin 0;
      color: #aaa;
      text-decoration: underline;
      user-select: none;
      font-size: 1.4vmin;
      width: fit-content;
    }
    .advanced-toggle:hover {
      color: #eee;
    }
    .advanced-settings {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10vmin, 1fr));
      gap: 3vmin;
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transition:
        max-height 0.3s ease-out,
        opacity 0.3s ease-out;
    }
    .advanced-settings.visible {
      max-width: 120vmin;
      max-height: 40vmin;
      opacity: 1;
    }
    hr.divider {
      display: none;
      border: none;
      border-top: 1px solid #666;
      margin: 2vmin 0;
      width: 100%;
    }
    :host([showadvanced]) hr.divider {
      display: block;
    }
    .auto-row {
      display: flex;
      align-items: center;
      gap: 0.5vmin;
    }
    .setting[auto='true'] input[type='range'] {
      pointer-events: none;
      filter: grayscale(100%);
    }
    .auto-row span {
      margin-left: auto;
    }
    .auto-row label {
      cursor: pointer;
    }
    .auto-row input[type='checkbox'] {
      cursor: pointer;
      margin: 0;
    }
  `;

  private readonly defaultConfig = {
    temperature: 1.1,
    topK: 40,
    guidance: 4.0,
  };

  @state() private config: LiveMusicGenerationConfig = this.defaultConfig;

  @state() showAdvanced = false;

  @state() autoDensity = true;

  @state() private lastDefinedDensity: number = 0.5;

  @state() autoBrightness = true;

  @state() private lastDefinedBrightness: number = 0.5;

  @state() private velocityBehavior: VelocityBehavior = 'bounce';

  public resetToDefaults() {
    this.config = this.defaultConfig;
    this.autoDensity = true;
    this.lastDefinedDensity = 0.5;
    this.autoBrightness = true;
    this.lastDefinedBrightness = 0.5;
    this.velocityBehavior = 'bounce';
    this.dispatchSettingsChange();
  }

  private updateSliderBackground(inputEl: HTMLInputElement) {
    if (inputEl.type !== 'range') {
      return;
    }
    const min = Number(inputEl.min) || 0;
    const max = Number(inputEl.max) || 100;
    const value = Number(inputEl.value);
    const percentage = ((value - min) / (max - min)) * 100;
    inputEl.style.setProperty('--value-percent', `${percentage}%`);
  }

  private handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const key = target.id as
      | keyof LiveMusicGenerationConfig
      | 'auto-density'
      | 'auto-brightness'
      | 'velocity-behavior';
    let value: string | number | boolean | undefined = target.value;

    if (target.type === 'number' || target.type === 'range') {
      value = target.value === '' ? undefined : Number(target.value);
      // Update slider background if it's a range input before handling the value change.
      if (target.type === 'range') {
        this.updateSliderBackground(target as HTMLInputElement);
      }
    } else if (target.type === 'checkbox') {
      value = (target as HTMLInputElement).checked;
    } else if (target.type === 'select-one' || target.tagName === 'SELECT') {
      const selectElement = target as HTMLSelectElement;
      if (selectElement.options[selectElement.selectedIndex]?.disabled) {
        value = undefined;
      } else {
        value = target.value;
      }
    }

    const newConfig = {
      ...this.config,
      [key]: value,
    };

    if (newConfig.density !== undefined) {
      this.lastDefinedDensity = newConfig.density;
      console.log(this.lastDefinedDensity);
    }

    if (newConfig.brightness !== undefined) {
      this.lastDefinedBrightness = newConfig.brightness;
    }

    if (key === 'auto-density') {
      this.autoDensity = Boolean(value);
      newConfig.density = this.autoDensity
        ? undefined
        : this.lastDefinedDensity;
    } else if (key === 'auto-brightness') {
      this.autoBrightness = Boolean(value);
      newConfig.brightness = this.autoBrightness
        ? undefined
        : this.lastDefinedBrightness;
    } else if (key === 'velocity-behavior') {
      this.velocityBehavior = value as VelocityBehavior;
      this.dispatchVelocityBehaviorChange();
    }

    this.config = newConfig;
    this.dispatchSettingsChange();
  }

  override updated(changedProperties: Map<string | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('config')) {
      this.shadowRoot
        ?.querySelectorAll<HTMLInputElement>('input[type="range"]')
        .forEach((slider: HTMLInputElement) => {
          const configValue =
            this.config[slider.id as keyof LiveMusicGenerationConfig];
          if (typeof configValue === 'number') {
            slider.value = String(configValue);
          } else if (slider.id === 'density' || slider.id === 'brightness') {
            // Handle potentially undefined density/brightness with default for background
            slider.value = String(configValue ?? 0.5);
          }
          this.updateSliderBackground(slider);
        });
    }
  }

  private dispatchSettingsChange() {
    this.dispatchEvent(
      new CustomEvent<LiveMusicGenerationConfig>('settings-changed', {
        detail: this.config,
        bubbles: true,
        composed: true,
      }),
    );
  }

  private dispatchVelocityBehaviorChange() {
    this.dispatchEvent(
      new CustomEvent<VelocityBehavior>('velocity-behavior-changed', {
        detail: this.velocityBehavior,
        bubbles: true,
        composed: true,
      }),
    );
  }

  private toggleAdvancedSettings() {
    this.showAdvanced = !this.showAdvanced;
  }

  override render() {
    const cfg = this.config;
    const advancedClasses = classMap({
      'advanced-settings': true,
      'visible': this.showAdvanced,
    });
    const scaleMap = new Map<string, string>([
      ['Auto', 'SCALE_UNSPECIFIED'],
      ['C Major / A Minor', 'C_MAJOR_A_MINOR'],
      ['C# Major / A# Minor', 'D_FLAT_MAJOR_B_FLAT_MINOR'],
      ['D Major / B Minor', 'D_MAJOR_B_MINOR'],
      ['D# Major / C Minor', 'E_FLAT_MAJOR_C_MINOR'],
      ['E Major / C# Minor', 'E_MAJOR_D_FLAT_MINOR'],
      ['F Major / D Minor', 'F_MAJOR_D_MINOR'],
      ['F# Major / D# Minor', 'G_FLAT_MAJOR_E_FLAT_MINOR'],
      ['G Major / E Minor', 'G_MAJOR_E_MINOR'],
      ['G# Major / F Minor', 'A_FLAT_MAJOR_F_MINOR'],
      ['A Major / F# Minor', 'A_MAJOR_G_FLAT_MINOR'],
      ['A# Major / G Minor', 'B_FLAT_MAJOR_G_MINOR'],
      ['B Major / G# Minor', 'B_MAJOR_A_FLAT_MINOR'],
    ]);

    return html`
      <div class="core-settings-row">
        <div class="setting">
          <label for="temperature"
            >Temperature<span>${cfg.temperature!.toFixed(1)}</span></label
          >
          <input
            type="range"
            id="temperature"
            min="0"
            max="3"
            step="0.1"
            .value=${cfg.temperature!.toString()}
            @input=${this.handleInputChange} />
        </div>
        <div class="setting">
          <label for="guidance"
            >Guidance<span>${cfg.guidance!.toFixed(1)}</span></label
          >
          <input
            type="range"
            id="guidance"
            min="0"
            max="6"
            step="0.1"
            .value=${cfg.guidance!.toString()}
            @input=${this.handleInputChange} />
        </div>
        <div class="setting">
          <label for="topK">Top K<span>${cfg.topK}</span></label>
          <input
            type="range"
            id="topK"
            min="1"
            max="100"
            step="1"
            .value=${cfg.topK!.toString()}
            @input=${this.handleInputChange} />
        </div>
      </div>
      <hr class="divider" />
      <div class=${advancedClasses}>
        <div class="setting">
          <label for="seed">Seed</label>
          <input
            type="number"
            id="seed"
            .value=${cfg.seed ?? ''}
            @input=${this.handleInputChange}
            placeholder="Auto" />
        </div>
        <div class="setting">
          <label for="bpm">BPM</label>
          <input
            type="number"
            id="bpm"
            min="60"
            max="180"
            .value=${cfg.bpm ?? ''}
            @input=${this.handleInputChange}
            placeholder="Auto" />
        </div>
        <div class="setting" auto=${this.autoDensity}>
          <label for="density">Density</label>
          <input
            type="range"
            id="density"
            min="0"
            max="1"
            step="0.05"
            .value=${this.lastDefinedDensity}
            @input=${this.handleInputChange} />
          <div class="auto-row">
            <input
              type="checkbox"
              id="auto-density"
              .checked=${this.autoDensity}
              @input=${this.handleInputChange} />
            <label for="auto-density">Auto</label>
            <span>${(this.lastDefinedDensity ?? 0.5).toFixed(2)}</span>
          </div>
        </div>
        <div class="setting" auto=${this.autoBrightness}>
          <label for="brightness">Brightness</label>
          <input
            type="range"
            id="brightness"
            min="0"
            max="1"
            step="0.05"
            .value=${this.lastDefinedBrightness}
            @input=${this.handleInputChange} />
          <div class="auto-row">
            <input
              type="checkbox"
              id="auto-brightness"
              .checked=${this.autoBrightness}
              @input=${this.handleInputChange} />
            <label for="auto-brightness">Auto</label>
            <span>${(this.lastDefinedBrightness ?? 0.5).toFixed(2)}</span>
          </div>
        </div>
        <div class="setting">
          <label for="scale">Scale</label>
          <select
            id="scale"
            .value=${cfg.scale || 'SCALE_UNSPECIFIED'}
            @change=${this.handleInputChange}>
            <option value="" disabled selected>Select Scale</option>
            ${[...scaleMap.entries()].map(
              ([displayName, enumValue]) =>
                html`<option value=${enumValue}>${displayName}</option>`,
            )}
          </select>
        </div>
        <div class="setting">
          <label for="velocity-behavior">Velocity Behavior</label>
          <select
            id="velocity-behavior"
            .value=${this.velocityBehavior}
            @change=${this.handleInputChange}>
            <option value="stop">Stop</option>
            <option value="bounce">Bounce</option>
            <option value="flip">Flip</option>
          </select>
        </div>
        <div class="setting">
          <div class="setting checkbox-setting">
            <input
              type="checkbox"
              id="muteBass"
              .checked=${!!cfg.muteBass}
              @change=${this.handleInputChange} />
            <label for="muteBass" style="font-weight: normal;">Mute Bass</label>
          </div>
          <div class="setting checkbox-setting">
            <input
              type="checkbox"
              id="muteDrums"
              .checked=${!!cfg.muteDrums}
              @change=${this.handleInputChange} />
            <label for="muteDrums" style="font-weight: normal;"
              >Mute Drums</label
            >
          </div>
          <div class="setting checkbox-setting">
            <input
              type="checkbox"
              id="onlyBassAndDrums"
              .checked=${!!cfg.onlyBassAndDrums}
              @change=${this.handleInputChange} />
            <label for="onlyBassAndDrums" style="font-weight: normal;"
              >Only Bass & Drums</label
            >
          </div>
        </div>
      </div>
      <div class="advanced-toggle" @click=${this.toggleAdvancedSettings}>
        ${this.showAdvanced ? 'Hide' : 'Show'} Advanced Settings
      </div>
    `;
  }
}

/** Component for the PromptDJ UI. */
@customElement('prompt-dj')
class PromptDj extends LitElement {
  static override styles = css`
    :host {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 2vmin;
      position: relative;
      font-size: 1.8vmin;
    }
    #background {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      background: #111;
    }
    .prompts-area {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex: 4;
      width: 100%;
      margin-top: 2vmin;
      gap: 2vmin;
    }
    #prompts-container {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      flex-shrink: 1;
      height: 100%;
      gap: 2vmin;
      margin-left: 10vmin;
      padding: 1vmin;
      overflow-x: auto;
      overflow-y: visible;
      scrollbar-width: thin;
      scrollbar-color: #666 #1a1a1a;
    }
    #prompts-container::-webkit-scrollbar {
      height: 8px;
    }
    #prompts-container::-webkit-scrollbar-track {
      background: #111;
      border-radius: 4px;
    }
    #prompts-container::-webkit-scrollbar-thumb {
      background-color: #666;
      border-radius: 4px;
    }
    #prompts-container::-webkit-scrollbar-thumb:hover {
      background-color: #777;
    }
    /* Add pseudo-elements for centering while keeping elements visible when scrolling */
    #prompts-container::before,
    #prompts-container::after {
      content: '';
      flex: 1;
      min-width: 0.5vmin;
    }
    .add-prompt-button-container {
      display: flex;
      align-items: flex-end;
      height: 100%;
      flex-shrink: 0;
    }
    #settings-container {
      flex: 1;
      margin: 2vmin 0 1vmin 0;
    }
    .playback-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    play-pause-button,
    add-prompt-button,
    reset-button {
      width: 12vmin;
      flex-shrink: 0;
    }
    prompt-controller {
      height: 100%;
      max-height: 80vmin;
      min-width: 14vmin;
      max-width: 16vmin;
      flex: 1;
    }
  `;

  @property({
    type: Object,
    attribute: false,
  })
  private prompts: Map<string, Prompt>;
  private nextPromptId: number; // Monotonically increasing ID for new prompts
  private session?: LiveMusicSession;
  private readonly sampleRate = 48000;
  private audioContext = new (window.AudioContext || (window as any).webkitAudioContext)(
    {sampleRate: this.sampleRate},
  );
  private outputNode: GainNode = this.audioContext.createGain();
  private nextStartTime = 0;
  private readonly bufferTime = 2; // adds an audio buffer in case of netowrk latency
  @state() private playbackState: PlaybackState = 'stopped';
  @property({type: Object})
  private filteredPrompts = new Set<string>();
  @state() private velocityBehavior: VelocityBehavior = 'bounce';
  private connectionError = true;
  private reconnectionAttempts = 0;
  private maxReconnectionAttempts = 3;
  private reconnectionDelay = 2000; // Start with 2 seconds
  private lastPlaybackTime = 0;
  private oneHourTimer?: number;
  private isUserActive = true;
  private lastFrameTime = Date.now();
  private animationFrame?: number;
  private currentDeltaTime = 0;
  private gradientPoints: Map<string, {x: number, y: number, vx: number, vy: number}> = new Map();

  @query('play-pause-button') private playPauseButton!: PlayPauseButton;
  @query('toast-message') private toastMessage!: ToastMessage;
  @query('settings-controller') private settingsController!: SettingsController;
  @query('volume-button') private volumeButton!: VolumeButton;

  constructor(prompts: Map<string, Prompt>) {
    super();
    this.prompts = prompts;
    this.nextPromptId = prompts.size;
    this.outputNode.connect(this.audioContext.destination);
    this.outputNode.gain.value = 1; // Initial volume
    this.startOneHourTimer();
  }

  override async firstUpdated() {
    await this.connectToSession();
    this.setSessionPrompts();
    this.startBackgroundAnimation();
  }

  private startOneHourTimer() {
    // Clear existing timer
    if (this.oneHourTimer) {
      clearTimeout(this.oneHourTimer);
    }
    
    // Set timer for 1 hour (3600000 ms)
    this.oneHourTimer = window.setTimeout(() => {
      if (this.playbackState === 'playing') {
        this.pauseAudio();
        this.showOneHourPrompt();
      }
    }, 3600000); // 1 hour
  }

  private showOneHourPrompt() {
    this.toastMessage.show(
      'Are you still listening?',
      'Yes',
      () => {
        this.continueListening();
      },
      false // Don't show close button
    );
  }

  private continueListening() {
    this.startOneHourTimer(); // Restart the timer
    this.handlePlayPause(); // Resume music
  }

  private async attemptReconnection() {
    if (this.reconnectionAttempts >= this.maxReconnectionAttempts) {
      this.toastMessage.show(
        'Connection failed after multiple attempts. Please check your internet connection.',
        'Retry',
        () => {
          this.reconnectionAttempts = 0;
          this.attemptReconnection();
        }
      );
      return;
    }

    this.reconnectionAttempts++;
    this.playbackState = 'loading';
    
    try {
      await this.connectToSession();
      await this.setSessionPrompts();
      
      // If we were playing before, resume playback
      if (this.lastPlaybackTime > 0) {
        this.loadAudio();
      }
      
      this.reconnectionAttempts = 0; // Reset on successful connection
      this.reconnectionDelay = 2000; // Reset delay
      
    } catch (error) {
      // Exponential backoff for reconnection delay
      this.reconnectionDelay = Math.min(this.reconnectionDelay * 2, 10000);
      
      setTimeout(() => {
        this.attemptReconnection();
      }, this.reconnectionDelay);
    }
  }

  private async connectToSession() {
    this.session = await ai.live.music.connect({
      model: model,
      callbacks: {
        onmessage: async (e: LiveMusicServerMessage) => {
          console.log('Received message from the server: %s\n');
          console.log(e);
          if (e.setupComplete) {
            this.connectionError = false;
          }
          if (e.filteredPrompt) {
            this.filteredPrompts = new Set([
              ...this.filteredPrompts,
              e.filteredPrompt.text!,
            ]);
            this.toastMessage.show(e.filteredPrompt.filteredReason!);
          }
          if (e.serverContent?.audioChunks !== undefined) {
            if (
              this.playbackState === 'paused' ||
              this.playbackState === 'stopped'
            )
              return;
            
            // Update last playback time for reconnection tracking
            this.lastPlaybackTime = Date.now();
            
            const audioBuffer = await decodeAudioData(
              decode(e.serverContent?.audioChunks[0].data),
              this.audioContext,
              48000,
              2,
            );
            const source = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.outputNode);
            if (this.nextStartTime === 0) {
              this.nextStartTime =
                this.audioContext.currentTime + this.bufferTime;
              setTimeout(() => {
                this.playbackState = 'playing';
              }, this.bufferTime * 1000);
            }

            if (this.nextStartTime < this.audioContext.currentTime) {
              console.log('under run');
              this.playbackState = 'loading';
              this.nextStartTime = 0;
              return;
            }
            source.start(this.nextStartTime);
            this.nextStartTime += audioBuffer.duration;
          }
        },
        onerror: (e: ErrorEvent) => {
          console.log('Error occurred: %s\n', JSON.stringify(e));
          this.connectionError = true;
          this.stopAudio();
          // Automatically attempt reconnection instead of showing error
          setTimeout(() => {
            this.attemptReconnection();
          }, 1000);
        },
        onclose: (e: CloseEvent) => {
          console.log('Connection closed.');
          this.connectionError = true;
          this.stopAudio();
          // Automatically attempt reconnection instead of showing error
          setTimeout(() => {
            this.attemptReconnection();
          }, 1000);
        },
      },
    });
  }

  private setSessionPrompts = throttle(async () => {
    const promptsToSend = Array.from(this.prompts.values()).filter((p) => {
      return !this.filteredPrompts.has(p.text) && p.weight !== 0;
    });
    try {
      if (this.session) {
        await this.session.setWeightedPrompts({
          weightedPrompts: promptsToSend,
        });
      }
    } catch (e: any) {
      this.toastMessage.show(e.message);
      this.pauseAudio();
    }
  }, 200);

  private dispatchPromptsChange() {
    this.dispatchEvent(
      new CustomEvent('prompts-changed', {detail: this.prompts}),
    );
  }

  private handlePromptChanged(e: CustomEvent<Prompt>) {
    e.stopPropagation();
    const updatedPrompt = {...e.detail};
    
    // Update color if the text matches a preset
    const mappedColor = PROMPT_COLOR_MAP.get(updatedPrompt.text);
    if (mappedColor && updatedPrompt.color !== mappedColor) {
      updatedPrompt.color = mappedColor;
    }
    
    if (this.prompts.has(updatedPrompt.promptId)) {
      const newPrompts = new Map(this.prompts);
      newPrompts.set(updatedPrompt.promptId, updatedPrompt);
      this.prompts = newPrompts;
      this.setSessionPrompts();
      this.dispatchPromptsChange();
    } else {
      console.warn(
        `Attempted to update non-existent prompt ID: ${updatedPrompt.promptId}`,
      );
    }
  }

  /** Generates radial gradients for each prompt based on weight and color. */
  private makeBackground() {
    const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

    const MAX_WEIGHT = 0.5;
    const MAX_ALPHA = 0.6;

    const bg: string[] = [];

    [...this.prompts.values()].forEach((p, i) => {
      const alphaPct = clamp01(p.weight / MAX_WEIGHT) * MAX_ALPHA;
      const alpha = Math.round(alphaPct * 0xff)
        .toString(16)
        .padStart(2, '0');

      const stop = p.weight / 2;
      
      // Get DVD screensaver style bouncing position
      const position = this.getDVDPosition(p.promptId, p.weight);
      const s = `radial-gradient(circle at ${position.x * 100}% ${position.y * 100}%, ${p.color}${alpha} 0px, ${p.color}00 ${stop * 100}%)`;

      bg.push(s);
    });

    return bg.join(', ');
  }

  /** Initializes a DVD-style bouncing point for a prompt */
  private initializeDVDPoint(promptId: string, weight: number) {
    if (!this.gradientPoints.has(promptId)) {
      // Random starting position (avoid edges)
      const x = 0.2 + Math.random() * 0.6;
      const y = 0.2 + Math.random() * 0.6;
      
      // Speed based on intensity: 0 intensity = 0.1 speed, 100 intensity = 0.05 speed
      const intensity = weight * 50; // Convert weight (0-2) to intensity (0-100)
      const baseSpeed = 0.1 - (intensity / 100) * (0.1 - 0.05); // Linear interpolation
      const vx = (Math.random() > 0.5 ? 1 : -1) * (baseSpeed + Math.random() * baseSpeed * 0.3);
      const vy = (Math.random() > 0.5 ? 1 : -1) * (baseSpeed + Math.random() * baseSpeed * 0.3);
      
      this.gradientPoints.set(promptId, { x, y, vx, vy });
    }
  }

  /** Gets the current DVD screensaver position for a prompt */
  private getDVDPosition(promptId: string, weight: number): {x: number, y: number} {
    this.initializeDVDPoint(promptId, weight);
    
    const point = this.gradientPoints.get(promptId)!;
    
    // Update speed based on current intensity
    const intensity = weight * 50; // Convert weight (0-2) to intensity (0-100)
    const currentSpeed = 0.1 - (intensity / 100) * (0.1 - 0.05); // Linear interpolation
    
    // Normalize current velocity to direction only, then apply new speed
    const currentMagnitude = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
    if (currentMagnitude > 0) {
      const directionX = point.vx / currentMagnitude;
      const directionY = point.vy / currentMagnitude;
      point.vx = directionX * currentSpeed;
      point.vy = directionY * currentSpeed;
    }
    
    // Only move when music is playing
    if (this.playbackState === 'playing' && this.currentDeltaTime > 0) {
      // Update position based on velocity (DVD screensaver style movement)
      let newX = point.x + point.vx * this.currentDeltaTime;
      let newY = point.y + point.vy * this.currentDeltaTime;
      let newVx = point.vx;
      let newVy = point.vy;
      
      // DVD screensaver bouncing: reverse velocity when hitting edges
      if (newX <= 0 || newX >= 1) {
        newVx = -newVx;
        newX = Math.max(0, Math.min(1, newX)); // Clamp to bounds
      }
      
      if (newY <= 0 || newY >= 1) {
        newVy = -newVy;
        newY = Math.max(0, Math.min(1, newY)); // Clamp to bounds
      }
      
      // Update the stored point
      this.gradientPoints.set(promptId, { x: newX, y: newY, vx: newVx, vy: newVy });
    }
    
    return { x: point.x, y: point.y };
  }

  private async handlePlayPause() {
    if (this.playbackState === 'playing') {
      this.pauseAudio();
    } else if (
      this.playbackState === 'paused' ||
      this.playbackState === 'stopped'
    ) {
      if (this.connectionError) {
        await this.attemptReconnection();
      } else {
        this.loadAudio();
      }
      // Restart the 1-hour timer when starting playback
      this.startOneHourTimer();
    } else if (this.playbackState === 'loading') {
      this.stopAudio();
    }
    console.debug('handlePlayPause');
  }

  private pauseAudio() {
    this.session?.pause();
    this.playbackState = 'paused';
    this.outputNode.gain.setValueAtTime(1, this.audioContext.currentTime);
    this.outputNode.gain.linearRampToValueAtTime(
      0,
      this.audioContext.currentTime + 0.1,
    );
    this.nextStartTime = 0;
    this.outputNode = this.audioContext.createGain();
    this.outputNode.connect(this.audioContext.destination);
    this.outputNode.gain.value = 1; // Maintain volume setting
    
    // Clear the 1-hour timer when paused
    if (this.oneHourTimer) {
      clearTimeout(this.oneHourTimer);
    }
  }

  private loadAudio() {
    this.audioContext.resume();
    this.session?.play();
    this.playbackState = 'loading';
    this.outputNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    this.outputNode.gain.linearRampToValueAtTime(
      1,
      this.audioContext.currentTime + 0.1,
    );
  }

  private stopAudio() {
    this.session?.stop();
    this.playbackState = 'stopped';
    this.outputNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    this.outputNode.gain.linearRampToValueAtTime(
      1,
      this.audioContext.currentTime + 0.1,
    );
    this.nextStartTime = 0;
    
    // Clear the 1-hour timer when stopped
    if (this.oneHourTimer) {
      clearTimeout(this.oneHourTimer);
    }
  }

  private async handleAddPrompt() {
    const newPromptId = `prompt-${this.nextPromptId++}`;
    const usedColors = [...this.prompts.values()].map((p) => p.color);
    const newPrompt: Prompt = {
      promptId: newPromptId,
      text: 'New Prompt', // Default text
      weight: 0,
      color: getColorForPrompt('New Prompt', usedColors),
    };
    const newPrompts = new Map(this.prompts);
    newPrompts.set(newPromptId, newPrompt);
    this.prompts = newPrompts;

    await this.setSessionPrompts();

    // Wait for the component to update and render the new prompt.
    // Do not dispatch the prompt change event until the user has edited the prompt text.
    await this.updateComplete;

    // Find the newly added prompt controller element
    const newPromptElement = this.renderRoot.querySelector<PromptController>(
      `prompt-controller[promptId="${newPromptId}"]`,
    );
    if (newPromptElement) {
      // Scroll the prompts container to the new prompt element
      newPromptElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'end',
      });

      // Select the new prompt text
      const textSpan =
        newPromptElement.shadowRoot?.querySelector<HTMLSpanElement>('#text');
      if (textSpan) {
        textSpan.focus();
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(textSpan);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  }

  private handlePromptRemoved(e: CustomEvent<string>) {
    e.stopPropagation();
    const promptIdToRemove = e.detail;
    if (this.prompts.has(promptIdToRemove)) {
      this.prompts.delete(promptIdToRemove);
      const newPrompts = new Map(this.prompts);
      this.prompts = newPrompts;
      this.setSessionPrompts();
      this.dispatchPromptsChange();
    } else {
      console.warn(
        `Attempted to remove non-existent prompt ID: ${promptIdToRemove}`,
      );
    }
  }

  // Handle scrolling X-axis the prompts container.
  private handlePromptsContainerWheel(e: WheelEvent) {
    const container = e.currentTarget as HTMLElement;
    if (e.deltaX !== 0) {
      // Prevent the default browser action (like page back/forward)
      e.preventDefault();
      container.scrollLeft += e.deltaX;
    }
  }

  private handleVolumeChange(e: CustomEvent<number>) {
    const volume = e.detail;
    this.outputNode.gain.value = volume;
  }

  private updateSettings = throttle(
    async (...args: unknown[]) => {
      const e = args[0] as CustomEvent<LiveMusicGenerationConfig>;
      await this.session?.setMusicGenerationConfig({
        musicGenerationConfig: e.detail,
      });
    },
    200,
  );

  private handleVelocityBehaviorChange(e: CustomEvent<VelocityBehavior>) {
    this.velocityBehavior = e.detail;
  }

  private async handleReset() {
    if (this.connectionError) {
      await this.attemptReconnection();
    } else {
      this.pauseAudio();
      this.session?.resetContext();
      this.settingsController.resetToDefaults();
      this.session?.setMusicGenerationConfig({
        musicGenerationConfig: {},
      });
      setTimeout(this.loadAudio.bind(this), 100);
    }
    // Restart the 1-hour timer
    this.startOneHourTimer();
  }

  private startBackgroundAnimation() {
    const animate = () => {
      const currentTime = Date.now();
      this.currentDeltaTime = (currentTime - this.lastFrameTime) / 1000;
      this.lastFrameTime = currentTime;
      
      // Trigger a re-render to update the background
      this.requestUpdate();
      this.animationFrame = requestAnimationFrame(animate);
    };
    this.animationFrame = requestAnimationFrame(animate);
  }

  private stopBackgroundAnimation() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = undefined;
    }
  }

  // Add cleanup on component disconnect
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.oneHourTimer) {
      clearTimeout(this.oneHourTimer);
    }
    this.stopBackgroundAnimation();
  }

  override render() {
    const bg = styleMap({
      backgroundImage: this.makeBackground(),
    });
    return html`<div id="background" style=${bg}></div>
      <div class="prompts-area">
        <div
          id="prompts-container"
          @prompt-removed=${this.handlePromptRemoved}
          @wheel=${this.handlePromptsContainerWheel}>
          ${this.renderPrompts()}
        </div>
        <div class="add-prompt-button-container">
          <add-prompt-button @click=${this.handleAddPrompt}></add-prompt-button>
        </div>
      </div>
      <div id="settings-container">
        <settings-controller
          @settings-changed=${this.updateSettings}
          @velocity-behavior-changed=${this.handleVelocityBehaviorChange}></settings-controller>
      </div>
      <div class="playback-container">
        <play-pause-button
          @click=${this.handlePlayPause}
          .playbackState=${this.playbackState}></play-pause-button>
        <reset-button @click=${this.handleReset}></reset-button>
        <volume-button @volume-change=${this.handleVolumeChange}></volume-button>
      </div>
      <toast-message></toast-message>`;
  }

  private renderPrompts() {
    return [...this.prompts.values()].map((prompt) => {
      return html`<prompt-controller
        .promptId=${prompt.promptId}
        filtered=${this.filteredPrompts.has(prompt.text)}
        .text=${prompt.text}
        .weight=${prompt.weight}
        .color=${prompt.color}
        .velocityBehavior=${this.velocityBehavior}
        @prompt-changed=${this.handlePromptChanged}>
      </prompt-controller>`;
    });
  }
}

function gen(parent: HTMLElement) {
  const initialPrompts = getStoredPrompts();

  const pdj = new PromptDj(initialPrompts);
  parent.appendChild(pdj);
}

function getStoredPrompts(): Map<string, Prompt> {
  const {localStorage} = window;
  
  // Check for version to force new defaults when needed
  const currentVersion = '2.0'; // Update this when you want to force new defaults
  const storedVersion = localStorage.getItem('promptsVersion');
  
  if (storedVersion !== currentVersion) {
    localStorage.removeItem('prompts');
    localStorage.setItem('promptsVersion', currentVersion);
    console.log('Cleared old prompts, using new defaults');
  }
  
  const storedPrompts = localStorage.getItem('prompts');

  if (storedPrompts) {
    try {
      const prompts = JSON.parse(storedPrompts) as Prompt[];
      console.log('Loading stored prompts', prompts);
      return new Map(prompts.map((prompt) => [prompt.promptId, prompt]));
    } catch (e) {
      console.error('Failed to parse stored prompts', e);
    }
  }

  console.log('No stored prompts, creating prompt presets');

  // Create specific default prompts with specified weights
  const defaultPrompts: Prompt[] = [
    {
      promptId: 'prompt-0',
      text: 'House',
      weight: 1.6, // 80 on 0-100 scale = 1.6 on 0-2 scale
      color: getColorForPrompt('House', []),
    },
    {
      promptId: 'prompt-1',
      text: 'Techno',
      weight: 0.1, // 5 on 0-100 scale = 0.1 on 0-2 scale
      color: getColorForPrompt('Techno', []),
    },
    {
      promptId: 'prompt-2',
      text: 'Staccato Rhythms',
      weight: 0.4, // 20 on 0-100 scale = 0.4 on 0-2 scale
      color: getColorForPrompt('Staccato Rhythms', []),
    },
    {
      promptId: 'prompt-3',
      text: 'Rain',
      weight: 0.4, // 20 on 0-100 scale = 0.4 on 0-2 scale
      color: getColorForPrompt('Rain', []),
    }
  ];
  
  return new Map(defaultPrompts.map((p) => [p.promptId, p]));
}

function setStoredPrompts(prompts: Map<string, Prompt>) {
  const storedPrompts = JSON.stringify([...prompts.values()]);
  const {localStorage} = window;
  localStorage.setItem('prompts', storedPrompts);
}

function main(container: HTMLElement) {
  gen(container);
}

main(document.body);

declare global {
  interface HTMLElementTagNameMap {
    'prompt-dj': PromptDj;
    'prompt-controller': PromptController;
    'settings-controller': SettingsController;
    'add-prompt-button': AddPromptButton;
    'play-pause-button': PlayPauseButton;
    'reset-button': ResetButton;
    'weight-slider': WeightSlider;
    'toast-message': ToastMessage;
    'volume-button': VolumeButton;
  }
}

// VolumeButton component
// -----------------------------------------------------------------------------
/** A button for adjusting audio volume. */
@customElement('volume-button')
export class VolumeButton extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 0.5vmin;
      color: #eee;
      font-family: 'Google Sans', sans-serif;
    }
    .volume-container {
      display: flex;
      align-items: center;
      gap: 0.5vmin;
    }
    .volume-icon {
      width: 3vmin;
      height: 3vmin;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .volume-slider {
      width: 8vmin;
      height: 0.5vmin;
      -webkit-appearance: none;
      appearance: none;
      background: #333;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }
    .volume-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1.5vmin;
      height: 1.5vmin;
      background: #5200ff;
      border-radius: 50%;
      cursor: pointer;
    }
    .volume-slider::-moz-range-thumb {
      width: 1.5vmin;
      height: 1.5vmin;
      background: #5200ff;
      border-radius: 50%;
      cursor: pointer;
      border: none;
    }
  `;

  @property({type: Number}) volume = 1;

  private handleVolumeChange(e: Event) {
    const slider = e.target as HTMLInputElement;
    this.volume = parseFloat(slider.value);
    this.dispatchEvent(new CustomEvent('volume-change', {
      detail: this.volume,
      bubbles: true,
    }));
  }

  private renderVolumeIcon() {
    if (this.volume === 0) {
      return svg`
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      `;
    } else if (this.volume < 0.5) {
      return svg`
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="m15.54 8.46a5 5 0 0 1 0 7.07"></path>
      `;
    } else {
      return svg`
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="m15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="m19.07 4.93a10 10 0 0 1 0 14.14"></path>
      `;
    }
  }

  override render() {
    return html`
      <div class="volume-container">
        <svg class="volume-icon" viewBox="0 0 24 24">
          ${this.renderVolumeIcon()}
        </svg>
        <input
          type="range"
          class="volume-slider"
          min="0"
          max="1"
          step="0.01"
          .value=${this.volume.toString()}
          @input=${this.handleVolumeChange}
        />
      </div>
    `;
  }
}
