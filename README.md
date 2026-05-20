# ResumeCraft - Free Resume Builder

A modern, feature-rich resume builder built with Next.js 14 and Tailwind CSS. No AI, no subscription, 100% free. Fully customizable with live preview.

## ✨ Features

- **🎨 Live Preview**: See your resume update in real-time as you edit
- **📝 Full Customization**: 
  - Font sizes (small, medium, large)
  - Font families (Sans, Serif, Monospace)
  - Accent colors (preset or custom)
  - Spacing options (compact, normal, spacious)
- **🔧 Flexible Sections**: Add, edit, and customize resume sections beyond the defaults
- **💾 Auto-Save**: Your resume is automatically saved to browser storage
- **📥 Export Options**:
  - Download as HTML file
  - Download as JSON (for backup or sharing)
  - Print to PDF (using browser print feature)
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🚀 Zero Dependencies**: Built with modern web standards

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone or copy the project files**

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

## 📖 Usage Guide

### Editing Your Resume

1. **Personal Information**
   - Enter your name, email, phone, location, and website
   - This appears in the header of your resume

2. **Managing Sections**
   - Click the section header to expand/collapse
   - Edit the section title by clicking on it
   - Add entries with the "Add Entry" button
   - Each entry can have multiple fields (position, company, duration, location, description, etc.)

3. **Custom Sections**
   - Add any custom section (Languages, Volunteer Work, Publications, etc.)
   - Enter the section name and click "Add"
   - Add entries with dynamic fields

4. **Customizing Appearance**
   - Open the "Customize" panel on the right sidebar
   - Adjust font size, family, spacing, and accent color
   - See changes instantly in the preview

### Exporting Your Resume

**Download as HTML**
- Click the green "HTML" button (bottom right)
- Open in any browser, print to PDF, or share
- Perfect for email submissions

**Download as JSON**
- Click the blue "JSON" button (bottom right)
- Backup your resume data
- Share with others who use ResumeCraft

**Print to PDF**
- Click the purple "Print" button (bottom right)
- Use your browser's print dialog
- Select "Save as PDF" as the destination
- Professional quality output

## 🏗️ Project Structure

```
resume-builder/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ResumeEditor.tsx    # Left panel editor
│   │   ├── ResumePreview.tsx   # Resume preview
│   │   ├── StylePanel.tsx      # Customization panel
│   │   └── ActionButtons.tsx   # Export buttons
│   ├── hooks/
│   │   └── useResumeData.ts    # Resume state management
│   ├── lib/
│   │   └── resume-defaults.ts  # Default data & utilities
│   ├── types/
│   │   └── resume.ts           # TypeScript interfaces
│   └── ...
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization Options

### Font Families
- **Sans-serif** (Inter): Clean, modern, professional
- **Serif** (Merriweather): Elegant, traditional
- **Monospace** (Fira Code): Technical, code-focused

### Font Sizes
- **Small**: Compact layout for detailed content
- **Medium**: Balanced, standard resume size
- **Large**: Easy to read, larger text

### Spacing
- **Compact**: Tight spacing, fits more content
- **Normal**: Standard spacing, most versatile
- **Spacious**: Generous spacing, cleaner look

### Accent Colors
Preset colors: Slate, Blue, Green, Red, Purple, Gray, Black
Custom color picker for any color you prefer

## 💾 Data Storage

ResumeCraft stores your resume data in your browser's **localStorage**. This means:
- ✅ Your data stays on your device (no server uploads)
- ✅ Automatic saving - no need to manually save
- ✅ Data persists across browser sessions
- ✅ Export your data as JSON for backup

**Note**: Clearing browser data will delete your resume. Use "Download as JSON" to backup.

## 🔧 Development

### Build Commands
```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3+
- **Language**: TypeScript
- **Icons**: Lucide React
- **State Management**: React Hooks + localStorage

### Adding New Fields

To add new fields to resume entries, edit `src/lib/resume-defaults.ts`:

```typescript
export const defaultResumeData: ResumData = {
  // ...
  sections: [
    {
      // ...
      entries: [
        {
          id: '1',
          position: 'Your Position',
          company: 'Company Name',
          newField: 'Add your custom field here', // 👈 New field
          // ... other fields
        },
      ],
    },
  ],
  // ...
}
```

## 🎯 Future Enhancement Ideas

- [ ] Multiple resume templates
- [ ] Rich text editor for descriptions
- [ ] Built-in PDF generation (without print)
- [ ] Resume templates library
- [ ] Import from LinkedIn
- [ ] Dark mode
- [ ] Internationalization (i18n)
- [ ] Resume scoring/feedback
- [ ] Share public resume links

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and improve ResumeCraft. Share your enhancements!

## ❓ FAQ

**Q: Is my data safe?**
A: Yes! Your resume data is stored locally on your device only. No data is sent to any server.

**Q: Can I use this offline?**
A: Not currently, but you can run it locally with `npm run dev`.

**Q: How do I backup my resume?**
A: Click the blue "JSON" button to download your resume as a JSON file. Import it back by modifying localStorage.

**Q: Can I customize the template?**
A: Yes! You can modify `src/components/ResumePreview.tsx` to change the layout, styling, and structure.

**Q: Does it support multiple resumes?**
A: Currently, the app stores one resume. You can download as JSON to keep multiple versions locally.

---

**Built with ❤️ using Next.js + Tailwind CSS**

No AI. No subscription. Pure craftsmanship. 🎨
