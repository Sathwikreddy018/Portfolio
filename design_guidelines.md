# Terminal-Style Portfolio Design Guidelines

## Design Approach
**Reference-Based**: Drawing from cyberpunk terminal aesthetics, retro computing interfaces (CRT monitors), and modern developer tools (VS Code, iTerm2, Hyper terminal). Balance nostalgic terminal UI with contemporary polish and professional presentation.

## Core Design Principles
1. **Authentic Terminal Feel**: Real command-line interaction, not just visual mimicry
2. **Professional Substance**: Creative interface wrapping recruiter-friendly, substantive content
3. **Subtle Futurism**: Cyberpunk aesthetics without overwhelming the professional context
4. **Accessibility First**: Terminal UI with fallback options for all users

## Layout System

**Two-Panel Desktop Layout** (60/40 split on large screens, 50/50 on tablets):
- **Left Panel**: Contextual visual content (portrait, project previews, timeline, QR codes)
- **Right Panel**: Interactive terminal interface

**Spacing**: Use Tailwind units of 4, 6, and 8 for consistent rhythm. Terminal padding: p-6 to p-8. Panel gaps: gap-4 to gap-6.

**Mobile Fallback**: Stack panels vertically with toggle between terminal and card-based views.

## Typography

**Primary (Terminal Text)**: 
- Monospace fonts: 'JetBrains Mono', 'Fira Code', or 'Roboto Mono' via Google Fonts
- Terminal output: text-sm to text-base
- Command prompt: font-bold
- Headers in terminal: text-lg to text-xl, uppercase tracking-wider

**Accessibility**: Minimum 14px for terminal text, 16px for commands. High contrast ratios throughout.

## Component Library

### 1. Terminal Interface
- Command prompt with blinking cursor (CSS animation)
- Clickable command shortcuts bar at top (help, about, projects, skills, experience, contact, clear)
- Auto-suggestion tooltip for first-time users
- Command history navigation (up/down arrows)
- Scrollable output area with smooth scroll behavior

### 2. Left Panel Portrait Card
- Professional monochrome headshot
- Floating card with subtle border glow
- 3D tilt/parallax effect using mouse position (vanilla JS or lightweight library)
- Hover tooltip: "Name · Software Engineer · AI Enthusiast"
- Click triggers 'about' command
- Contextual transformations:
  - Default: Portrait
  - projects: 2x2 grid of project thumbnails
  - experience: Minimal vertical timeline visual
  - contact: QR code + social icon row

### 3. Command Output Components

**Projects Display**:
- Card layout per project with sections:
  - Problem statement (1-2 lines, emphasized text)
  - Tech stack (inline badges/chips)
  - Impact metrics (bold numbers + descriptions)
  - Action links (GitHub, Live Demo with icons)
- 3-5 flagship projects maximum

**Skills Display**:
- Grouped by category headers (Languages, Frameworks, AI/ML, Tools)
- Tag/badge style for individual skills
- Grid layout: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

**Experience Display**:
- Role title with company and dates
- Bullet points: Responsibility → Outcome format
- Highlight metrics and achievements

**Contact Display**:
- Email, LinkedIn, GitHub with copy-to-clipboard buttons
- Click-to-copy confirmation animation
- Social icons with terminal-style borders

### 4. Visual Effects (Applied Sparingly)
- **Scanline Effect**: Subtle, low-opacity CSS overlay (5-10% opacity)
- **Terminal Glow**: Soft box-shadow on terminal container
- **Typing Animation**: Smooth character-by-character reveal for command output (fast, 20-30ms per char)
- **Cursor Blink**: 1s interval CSS animation
- **Image Tilt**: 3D transform on mousemove (max 10-15deg rotation)

## Interaction Patterns

**Primary Navigation**: Type commands or click shortcuts
**Supported Commands**: 
- `help` - Show available commands
- `about` - Personal introduction
- `projects` - Project showcase
- `skills` - Technical skills
- `experience` - Work history
- `education` - Academic background
- `certifications` - Professional credentials
- `leadership` - Leadership experience
- `contact` - Contact information
- `clear` - Clear terminal

**Progressive Disclosure**: Commands reveal content in terminal with typing effect, left panel updates contextually

## Accessibility Features
- Keyboard-only navigation (Tab, Enter, Arrow keys)
- Screen reader support with semantic HTML
- Skip-to-content link
- Mobile toggle: Terminal view ↔ Card-based view
- High contrast mode compatible
- Focus indicators on all interactive elements

## Performance Optimization
- Lazy load portrait and project images
- Minimal animation libraries (prefer CSS animations)
- Debounced 3D tilt effect
- Code splitting for terminal commands
- Optimized monochrome portrait (WebP format, <100KB)

## Images

**Primary Portrait**: 
- Professional headshot, converted to monochrome/duotone
- Square aspect ratio (500x500px minimum)
- High contrast for terminal aesthetic
- Placement: Left panel, centered vertically

**Project Thumbnails** (when projects command active):
- 4 small preview images in 2x2 grid
- Same monochrome treatment as portrait
- 200x200px each

**No Hero Image**: This design uses the two-panel layout without traditional hero section.

This terminal-style portfolio balances creative presentation with professional substance, ensuring both visual impact and recruiter-friendly content accessibility.