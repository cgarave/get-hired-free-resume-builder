# ResumeCraft - File Structure

## 📁 Complete Project Organization

```
resume-builder/
│
├── 📄 Configuration Files
│   ├── package.json                 # Project dependencies & scripts
│   ├── tsconfig.json               # TypeScript configuration
│   ├── next.config.js              # Next.js configuration
│   ├── tailwind.config.js           # Tailwind CSS setup
│   ├── postcss.config.js            # PostCSS configuration
│   └── .gitignore                  # Git ignore rules
│
├── 📖 Documentation
│   ├── README.md                   # Main project documentation
│   ├── SETUP.md                    # Installation & setup guide
│   ├── FEATURES.md                 # Feature showcase
│   └── FILE_STRUCTURE.md           # This file
│
└── src/
    │
    ├── 🎨 app/
    │   ├── layout.tsx              # Root layout component
    │   ├── page.tsx                # Main resume builder page
    │   └── globals.css             # Global styles & animations
    │
    ├── 🧩 components/
    │   ├── ResumeEditor.tsx        # Left panel - content editor
    │   ├── ResumePreview.tsx       # Right panel - resume preview
    │   ├── StylePanel.tsx          # Customization/styling panel
    │   └── ActionButtons.tsx       # Export buttons
    │
    ├── 🪝 hooks/
    │   └── useResumeData.ts        # Resume state management hook
    │
    ├── 📚 lib/
    │   └── resume-defaults.ts      # Default data & utility functions
    │
    └── 📋 types/
        └── resume.ts               # TypeScript interfaces
```

## 📄 File Descriptions

### Configuration Files (Root)

#### `package.json`
- Project metadata and version
- Dependencies (React, Next.js, Tailwind, Lucide)
- NPM scripts (dev, build, start, lint)
- Development dependencies

#### `tsconfig.json`
- TypeScript compiler options
- Path aliases (@/*)
- Strict mode enabled
- Module resolution settings

#### `next.config.js`
- Next.js app configuration
- React strict mode enabled
- Performance optimizations

#### `tailwind.config.js`
- Custom font families (Inter, Merriweather, Fira Code)
- Color palette extensions
- Theme customizations

#### `postcss.config.js`
- Tailwind CSS post-processing
- Autoprefixer configuration

#### `.gitignore`
- Node modules
- Build artifacts
- Environment files
- IDE configurations

### Documentation Files

#### `README.md` (Main Guide)
- Feature overview
- Quick start instructions
- Usage guide
- Project structure
- Tech stack information
- FAQ section

#### `SETUP.md` (Installation Guide)
- System requirements
- Step-by-step installation
- Common issues & solutions
- Production deployment options
- Customization guide
- Troubleshooting tips

#### `FEATURES.md` (Feature Showcase)
- Feature overview with diagrams
- Section management guide
- Customization options
- Export capabilities
- Workflow examples
- Best practices

### Source Code Files

#### `src/app/layout.tsx`
- Root HTML structure
- Head metadata
- Language configuration
- Global layout wrapper

#### `src/app/page.tsx` (Main Component)
- Resume builder interface
- Split-pane layout
- Header component
- Mobile responsiveness
- Tab switching for mobile
- State management integration

#### `src/app/globals.css`
- Tailwind directives
- Custom fonts (Google Fonts)
- Global styles
- Custom scrollbar
- Print styles
- Animations (fadeIn, slideIn)
- Form element styles

#### `src/components/ResumeEditor.tsx`
- Personal information form
- Section management
- Entry editing interface
- Add/delete functionality
- Collapsible sections
- Dynamic field rendering

#### `src/components/ResumePreview.tsx`
- Resume template rendering
- Font/size application
- Color customization
- Responsive layout
- Professional formatting
- Link handling

#### `src/components/StylePanel.tsx`
- Font size selector
- Font family selector
- Spacing adjuster
- Color picker (preset + custom)
- Reset functionality
- Visual color grid

#### `src/components/ActionButtons.tsx`
- Download as JSON button
- Download as HTML button
- Print functionality
- Floating action buttons
- Mobile responsive
- Icon-based UI

#### `src/hooks/useResumeData.ts`
- Resume state management
- LocalStorage integration
- CRUD operations for entries
- Section management
- Style updates
- Auto-save functionality
- Data persistence

#### `src/lib/resume-defaults.ts`
- Default resume template
- Font size mappings
- Font family mappings
- Spacing configurations
- Utility functions:
  - `generateUUID()` - Unique ID generation
  - `validateEmail()` - Email validation
  - `downloadResume()` - File download helper

#### `src/types/resume.ts`
- `ResumeSection` interface
- `ResumeEntry` interface
- `ResumeStyle` interface
- `ResumeData` interface
- TypeScript type definitions

## 🔄 Data Flow

```
User Input
    ↓
ResumeEditor (captures input)
    ↓
useResumeData Hook (manages state)
    ↓
LocalStorage (persists data)
    ↓
ResumePreview (renders output)
    ↓
Browser Display
```

## 🎯 Component Relationships

```
Page (page.tsx)
├── Header
├── Left Sidebar
│   ├── ResumeEditor
│   └── StylePanel
├── Right Panel
│   └── ResumePreview
├── ActionButtons
└── useResumeData Hook
```

## 📊 State Management Flow

```
Initial Load
    ↓
useResumeData Hook
    ├── Check LocalStorage
    ├── Load default data if needed
    └── Initialize state
    ↓
Component Render
    ├── ResumeEditor (displays forms)
    └── ResumePreview (displays output)
    ↓
User Makes Change
    ├── Event handler triggered
    ├── Hook updates state
    ├── LocalStorage updated
    └── Components re-render
```

## 🚀 Build Process

```
npm run build
    ↓
TypeScript Compilation
    ↓
Next.js Build Optimization
    ↓
Output: .next/ folder
    ↓
Production Ready
```

## 📦 Dependencies

### Production Dependencies
- **next**: 14.2.0+ (React framework)
- **react**: 18.3.1+ (UI library)
- **react-dom**: 18.3.1+ (DOM rendering)
- **tailwindcss**: 3.4.1+ (CSS framework)
- **postcss**: 8.4.38+ (CSS processing)
- **autoprefixer**: 10.4.17+ (Browser prefixes)
- **lucide-react**: 0.408.0+ (Icons)

### Development Dependencies
- **typescript**: 5.4.2+ (Type checking)
- **@types/node**: 20.11.5+ (Node types)
- **@types/react**: 18.2.48+ (React types)

## 🔐 Security Considerations

1. **No External API Calls**: All processing happens locally
2. **No Authentication**: No backend required
3. **LocalStorage Only**: Data never leaves the browser
4. **No Analytics**: No tracking or telemetry
5. **Open Source**: Code is transparent and auditable

## 🎨 Styling Architecture

```
globals.css
    └── Tailwind Base
    └── Tailwind Components
    └── Tailwind Utilities
    └── Custom Animations
    └── Print Styles

Component-Level Styles
    └── Tailwind Classes
    └── Inline Styles (for dynamic colors)
```

## 🧪 Testing Recommendations

### Manual Testing Checklist
- [ ] Add/edit/delete sections
- [ ] Add/edit/delete entries
- [ ] Update personal information
- [ ] Change font sizes
- [ ] Change font families
- [ ] Change spacing options
- [ ] Change accent colors
- [ ] Export as JSON
- [ ] Export as HTML
- [ ] Print to PDF
- [ ] Test on mobile
- [ ] Test on tablet
- [ ] Clear browser storage and reload
- [ ] Check localStorage in DevTools

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test in production mode: `npm run start`
- [ ] Test all export functions
- [ ] Verify responsive design
- [ ] Check localStorage functionality
- [ ] Test on target browsers
- [ ] Minify assets (automatic)
- [ ] Deploy to hosting platform

## 📝 Maintenance Notes

- **Update Dependencies**: `npm update` periodically
- **Check Security**: `npm audit` for vulnerabilities
- **Monitor Build Size**: Keep under 1MB for fast loads
- **Backup**: Use GitHub for version control

---

**ResumeCraft Architecture Complete** ✅

All files are properly organized and documented for easy maintenance and future development.
