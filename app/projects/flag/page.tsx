'use client';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from "@/components/magicui/scroll-progress";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
      <>
        <div className="relative min-h-screen text-white font-lexend-regular bg-black">
          <Navbar />
          <ScrollProgress className="top" />
          
          <div className="relative">
            <main className="max-w-4xl mx-auto py-16 px-4">
              {/* Title section */}
              <div className="text-center mb-12">
                <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
                  Flag Frenzy
                </h1>
                
                <p className="text-md text-gray-400 mb-6 font-lexend-regular">
                  April 2023
                </p>

                <div className="w-full h-[1px] bg-gray-800 mt-8"></div>
              </div>

              {/* Main content */}
              <div className="space-y-8 font-lexend-regular">

                {/* YouTube Video */}
                <div className="relative w-full aspect-video">
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/NXhg0Tb4EIM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <p className="text-gray-300">
                  A cryptic and ominous 6 player game inspired by Duck Duck Goose, Capture the Flag, and Proximity Sensors.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <p className="text-gray-300">
                  As a mechanical engineer at The Cooper Union, the curriculum has me take{' '}
                  <Link href="https://cooper.edu/engineering/courses/mechanical-engineering-undergraduate/me-211" target="_blank" className="text-purple-400 hover:text-purple-300">
                    ME 211 Design and Prototyping
                  </Link>
                  {' '}taught by Professor Eric Lima. I'm now at the end of the semester where the class is coming to a close and so our final project, Flag Frenzy, is ready to show off.
                </p>

                <p className="text-gray-300">
                  Our professor loved the game so much that he asked us to use it as an example for next year's class. If you would like to learn more about Flag Frenzy, below, I go into the design process and a bit about game theory.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Creating the Game</h3>

                <p className="text-gray-300">
                  On our first day of the class, Prof. Lima asked us to make groups of four. I made a group with Akil Foster, Jude Pizzone, and Aymane Saissi. Our task was to create an enjoyable and captivating multiplayer game that we could potentially sell to a market. In the first week, we presented our game for the class to play, and every subsequent week, we showcased an updated version of the game. During these presentations, we exchanged feedback with our classmates, aiming to improve the game each time. Throughout the iterations, I discovered the delicate equilibrium between making the game fun while also maintaining an appropriate level of challenge.
                </p>

                <p className="text-gray-300">
                  The first week we presented a combination of Tag + Capture the Flag and the class loved it. The second week, we attempted an 8-player version of tic-tac-toe, but it turned out to be overly complicated. The third week, we came up with an interesting twist on Minesweeper, the classic single-player puzzle game from 1989. And finally, in the fourth week, we tried a competitive water drinking game. After exploring these four different game types, we ultimately decided to stick with the first one, as it received the most positive response from the class.
                </p>

                <p className="text-gray-300">
                  And here are the rules: The game is a round based game where 2 players are chosen randomly. One of the chosen players is the <span className="text-blue-400">rabbit</span> and the other is the <span className="text-red-400">fox</span>. The <span className="text-red-400">fox</span> gets a point if they catch the <span className="text-blue-400">rabbit</span> before 20 seconds is up. The <span className="text-blue-400">rabbit</span> gets a point if they survive without being tagged for 20 seconds. A player wins once they get 5 points.
                </p>

                <p className="text-gray-300">
                  Although the rules are simple, the intentionally long choosing time and flipping nature of the roles makes Flag Frenzy very exciting and fun to play over and over again.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Coding the Game</h3>

                <p className="text-gray-300">
                  Initially, we programmed the game virtually using tinkercad to verify the code's logical functioning. The coding process was relatively straightforward. It involved assigning a distinct LED to each of the six players and incorporating a corresponding proximity sensor for each player as well. Through this setup, the game randomly designated one player as the "fox" and another as the "rabbit" based on the detection of nearby players within the proximity range of the sensor. The fox was to catch and tag the rabbit before the time ran out, and inversely the rabbit was to run away from the fox until the time ran out. The way we verified who caught/escaped who was by checking the proximity sensors if they detected that the players had sat back down. If the player did not return, the program would take them out of the pool of current players.
                </p>

                <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/flag/Coding the Game.webp"
                    alt="Coding the Game"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Game Design</h3>

                <p className="text-gray-300">
                  Finding the right balance between fun and difficulty can be quite challenging. Initially, everyone aims to make their game as enjoyable as possible. They want to create an undeniable sense of fun, with satisfying gameplay and plenty of dopamine-inducing moments for players. However, there's a catch— if a game is excessively fun, it can become monotonous and lose player interest rather quickly. So, what's the solution? Introducing more difficulty seems like a good idea, right? Well, it's not that simple. If a game lacks sufficient challenge, players won't feel engaged, and if it's overly difficult, players may become discouraged and not want to invest time in learning the mechanics. With this knowledge, we quickly noticed that striking the right balance between fun and difficulty becomes the primary challenge to overcome.
                </p>

                <div className="relative w-full max-w-lg mx-auto aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/flag/Game Design Chart.webp"
                    alt="Game Design Chart"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-gray-400 text-sm text-center">Credit: gamedev.net</p>

                <p className="text-gray-300">
                  After finalizing our game choice, we collaboratively established the game rules. With a clear set of rules in hand, we outlined a plan to develop a prototype with LEDs, design an enclosure, and ensure the game code was flawless.
                </p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Soldering NeoPixels</h3>

                <p className="text-gray-300">
                  One of our classmates introduced us to NeoPixels. A type of LED that made our task much simpler. Each individual LED could be located then programmed separate to the rest. All we needed to do after that was cut the LED strip and then solder the pieces back together to increase the distance between the LEDs.
                </p>

                <p className="text-gray-300">
                  I took on the challenge of soldering, despite having no prior experience. After receiving a helpful soldering tutorial from an experienced Electrical Engineer, I felt prepared to make my first attempt. Although I faced some difficulties and even ended up burning my fingers a couple of times, I eventually succeeded in soldering the pieces together. Here's how it turned out:
                </p>

                <div className="relative w-full max-w-lg mx-auto aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/flag/NeoPixel Case.gif"
                    alt="NeoPixel Case"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-gray-300">If anyone was wondering the cookies were great!</p>

                <div className="w-full h-[1px] bg-gray-800"></div>

                <h3 className="text-2xl font-lexend-bold text-white">Making the Enclosure</h3>

                <p className="text-gray-300">
                  I took on the task of designing the enclosure, and considering that our game accommodated six players, I opted for a hexagonal prism shape. To construct the enclosure, I utilized a black acrylic board and used a laser cutter to create the base, roof, and six walls. To ensure a secure and sturdy structure, I incorporated finger edge joints, allowing the acrylic boards to fit snugly together and then glued together using a strong acrylic adhesive.
                </p>

                <div className="relative w-full max-w-lg mx-auto aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/flag/MakerCase.webp"
                    alt="Maker Case"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </main>
          </div>
  
          <Footer />
        </div>
      </>
    );
}