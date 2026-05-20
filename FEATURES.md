# ResumeCraft - Feature Showcase

## 🎯 Core Features Overview

### 1. Split-Pane Editor Interface
```
┌─────────────────────────────────────────────┐
│  ResumeCraft Header                         │
├──────────────────┬──────────────────────────┤
│                  │                          │
│   LEFT PANEL     │    RIGHT PANEL          │
│  (Editor)        │   (Live Preview)        │
│                  │                          │
│  • Personal Info │  Real-time resume      │
│  • Sections      │  preview with your    │
│  • Entries       │  custom styling       │
│  • Customize     │                        │
│                  │                        │
└──────────────────┴──────────────────────────┘
```

### 2. Personal Information Section
Easily manage your contact details:
- Full Name
- Email Address
- Phone Number
- Location
- Website/Portfolio Link

### 3. Resume Sections
**Pre-built Sections:**
- Experience (with multiple job entries)
- Education
- Skills

**Custom Sections:**
- Languages
- Volunteer Work
- Publications
- Certifications
- Awards
- Projects
- Or anything else you want!

### 4. Entry Management
Each entry can have:
- Multiple dynamic fields
- Easy add/edit/delete operations
- Rich text descriptions
- Links and custom information

**Example Entry Fields:**
```
Experience Entry:
├── Position: [Input]
├── Company: [Input]
├── Duration: [Input]
├── Location: [Input]
├── Description: [Text Area]
└── [Delete Button]
```

### 5. Customization Panel

#### Font Sizes
```
Small   → Compact (28px heading)
Medium  → Standard (32px heading) 
Large   → Spacious (36px heading)
```

#### Font Families
```
Sans-serif    → Inter (modern, clean)
Serif         → Merriweather (elegant)
Monospace     → Fira Code (technical)
```

#### Spacing Options
```
Compact   → Tight layout
Normal    → Balanced spacing
Spacious  → Generous spacing
```

#### Accent Colors
```
Presets: Slate, Blue, Green, Red, Purple, Gray, Black
Custom:  Use color picker for any color
```

### 6. Real-Time Preview
Your resume preview updates instantly as you:
- Edit text content
- Change styling options
- Add/remove sections
- Modify entry details

### 7. Auto-Save to Local Storage
```
You Type → Automatic Save → Browser Storage
         ↓
   Resume Safe (No Login Needed)
```

## 📥 Export Capabilities

### Export as HTML
```
Click HTML → Downloads .html file → Open in browser/email
```
✅ Perfect for: Email submissions, web sharing
✅ Includes: All styling, fonts, colors
✅ File size: ~50KB

### Export as JSON
```
Click JSON → Downloads .json file → Backup & restore
```
✅ Perfect for: Backup, sharing with collaborators
✅ Includes: All resume data
✅ File size: ~5KB

### Export as PDF
```
Click Print → Browser Print Dialog → Save as PDF
```
✅ Perfect for: Formal submissions, printing
✅ Quality: High-resolution, professional
✅ File size: ~500KB

## 🎨 Styling Example

### Before (Default)
```
Your Name
Software Engineer
Location • email@example.com • +123456789
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPERIENCE
Frontend Designer & Developer at Company (2024-2025)
Description of your work...
```

### After (Customized)
```
Your Name [Large, Bold]
Software Engineer [Medium, Gray]
Location • email • phone
━━━━━━━━━━━━━━━━━━━ [Custom Color]

EXPERIENCE [Serif Font]
Frontend Designer & Developer [Bold]
Company Name in Blue • 2024-2025
Spacious description with better readability
```

## 🔄 Workflow Example

### Step 1: Create Resume
1. Open ResumeCraft
2. Default template loads with sample data

### Step 2: Edit Content
1. Update personal information
2. Edit experience entries
3. Add education details
4. Customize skill sections

### Step 3: Customize Styling
1. Open "Customize" panel
2. Try different font sizes
3. Choose accent color
4. Adjust spacing

### Step 4: Review & Export
1. Check preview on right
2. Make final adjustments
3. Download as HTML or JSON
4. Print to PDF

## 📱 Responsive Features

### Desktop (1200px+)
```
┌────────────────────────────────────┐
│ Full split-pane view               │
│ Editor on left, preview on right   │
│ All panels visible simultaneously  │
└────────────────────────────────────┘
```

### Tablet (768px - 1200px)
```
┌────────────┐
│ Adjustable │
│ split pane │
│ or tabs    │
└────────────┘
```

### Mobile (< 768px)
```
┌──────────┐
│ Editor   │
│ Tab      │
├──────────┤
│ Customize│
│ Tab      │
├──────────┤
│ Preview  │
│ Full     │
└──────────┘
```

## 🔐 Privacy & Data

✅ **100% Private**
- No account required
- No server uploads
- No tracking
- No ads
- All data stored locally

✅ **Data Security**
- Stored in browser localStorage
- Only on your device
- Encrypted by default (HTTPS)

⚠️ **Important Notes**
- Clearing browser data deletes resume
- Export to JSON for backup
- Works offline after initial load

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Add Section | Tab through form |
| Delete Entry | Click red X button |
| Expand Section | Click section title |
| Print | Ctrl+P (Windows/Linux) or Cmd+P (Mac) |

## 🎯 Best Practices

### Content Tips
✅ Keep descriptions concise
✅ Use action verbs (Led, Created, Managed)
✅ Include metrics and achievements
✅ Tailor for the job description

### Styling Tips
✅ Use professional colors (not neon)
✅ Keep font readable in small sizes
✅ Don't mix more than 3 fonts
✅ Maintain consistent spacing

### Export Tips
✅ Always export as backup
✅ Test PDF in different viewers
✅ Verify links in HTML export
✅ Keep multiple versions (JSON)

## 🚀 Advanced Usage

### Import Data from JSON
1. Download your resume as JSON
2. Edit the JSON file
3. Use localStorage in browser DevTools:
```javascript
localStorage.setItem('resume_builder_data', JSON.stringify(data))
```
4. Refresh page

### Customize Template
Edit `src/components/ResumePreview.tsx` to:
- Change header layout
- Modify section styling
- Add custom elements
- Alter spacing and sizing

### Add Custom Fields
1. Edit `ResumeEditor.tsx`
2. Add new input fields
3. Update TypeScript types
4. Fields auto-display in preview

## 📊 File Structure

```
Your Resume Data
├── Personal Info (Name, Email, etc.)
├── Sections
│   ├── Experience
│   │   └── Entries
│   ├── Education
│   │   └── Entries
│   ├── Skills
│   │   └── Entries
│   └── Custom Sections
│       └── Entries
└── Styling
    ├── Font Size (small/medium/large)
    ├── Font Family (sans/serif/mono)
    ├── Spacing (compact/normal/spacious)
    └── Accent Color (#000000)
```

---

**ResumeCraft: Build. Customize. Export. 🎨**

For more help, see SETUP.md or README.md
