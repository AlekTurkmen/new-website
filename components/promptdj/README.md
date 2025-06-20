# PromptDJ

An AI-powered music mixing application that creates seamless transitions between songs based on their vibes and characteristics.

## Integration with Website

PromptDJ is now integrated as a component within the main website and served as static files.

### Location
- **Source**: `components/promptdj/`
- **Built files**: `public/promptdj/`
- **Live URL**: `/projects/vibe-mixing`

### Development Workflow

1. **Normal development**: Just run `npm run dev` from the root directory
2. **Visit**: `http://localhost:3000/projects/vibe-mixing`
3. **PromptDJ loads automatically** with full functionality

### Building
PromptDJ is automatically built when you run the main build command:
```bash
npm run build
```

Or build just PromptDJ:
```bash
npm run build:promptdj
```

### Environment Variables
Requires `GEMINI_API_KEY` in `.env.local` at the project root.
