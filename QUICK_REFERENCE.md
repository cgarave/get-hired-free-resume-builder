# ResumeCraft - Quick Reference

## ⚡ Quick Start (5 Minutes)

### Installation
```bash
# 1. Navigate to project folder
cd resume-builder

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit: http://localhost:3000
```

## 🎯 Key Features at a Glance

| Feature | How to Use |
|---------|-----------|
| **Edit Content** | Left panel → Fill in personal info & sections |
| **Add Section** | Bottom of editor → Enter section name → Click Add |
| **Add Entry** | Expand section → Click "Add Entry" button |
| **Change Fonts** | Right panel → Select font size/family |
| **Change Colors** | Right panel → Click color or use picker |
| **Export HTML** | Click green "HTML" button (bottom right) |
| **Export JSON** | Click blue "JSON" button (bottom right) |
| **Print/PDF** | Click purple "Print" button (bottom right) |
| **Reset** | Customize panel → Click "Reset to Default" |

## 🖱️ Editor Controls

### Personal Information Section
```
Input Fields:
├── Full Name          (displays in header)
├── Email              (clickable link)
├── Phone              (displayed in header)
├── Location           (displayed in header)
└── Website/Portfolio  (clickable link)
```

### Section Management
```
Expand/Collapse:     Click section header
Edit Section Title:  Click title → type new name
Add Entry:          Click "Add Entry" button
Delete Entry:       Click red trash icon
Delete Section:     Click trash (custom sections only)
Add Custom Section: Bottom input → "Add" button
```

### Entry Editing
```
Edit Fields:    Click textarea → type
Multiline Text: Description, Skills (auto-expand)
Delete Entry:   Red trash icon below entry
```

## 🎨 Customization Panel

### Font Sizes
| Size | Usage |
|------|-------|
| Small | Compact layout (28px heading) |
| Medium | **Default, recommended** |
| Large | Spacious layout (36px heading) |

### Font Families
| Family | Best For |
|--------|----------|
| Sans | Modern, clean (default) |
| Serif | Elegant, traditional |
| Mono | Technical, coding |

### Spacing
| Option | Result |
|--------|--------|
| Compact | Tight, fits more |
| Normal | **Default, balanced** |
| Spacious | Generous, cleaner |

### Colors (Presets)
```
Slate (Dark Gray)  ◾ Blue    ◾ Green   ◾
Red    ◾ Purple   ◾ Gray    ◾ Black   ◾
Custom → Use color picker for any color
```

## 💾 Data & Storage

### Auto-Save
```
Changes Made
    ↓
Auto-saved to localStorage
    ↓
Data Persists (even after closing)
```

### Backup Your Resume
```
Click JSON button
    ↓
Download "resume.json"
    ↓
Save it somewhere safe
    ↓
Can restore anytime
```

### Clear Data
```
Customize Panel
    ↓
Click "Reset to Default"
    ↓
Confirm action
    ↓
Resume cleared
```

## 📥 Export Options

### HTML Export
```
Click HTML Button
    ↓
Browser downloads .html file
    ↓
Can email, upload to website
    ↓
Open in any browser
```
**Best for**: Email submissions, web sharing

### JSON Export
```
Click JSON Button
    ↓
Browser downloads .json file
    ↓
Contains all resume data
    ↓
Can import back later
```
**Best for**: Backup, sharing with collaborators

### PDF/Print
```
Click Print Button
    ↓
Browser print dialog opens
    ↓
Select "Save as PDF"
    ↓
Choose location
```
**Best for**: Official submissions, printing

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Create production build
npm run start        # Run production build
npm run lint         # Check code quality

# Cleanup
rm -rf node_modules  # Delete dependencies
npm install          # Reinstall dependencies
```

## 🐛 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Modules not found | `npm install` then `npm run dev` |
| Changes not showing | Press `Ctrl+Shift+R` (hard refresh) |
| Data disappeared | Check localStorage in DevTools |
| Export not working | Disable browser extensions |

## 💡 Pro Tips

### Content Tips
✅ Use action verbs: "Led", "Created", "Managed"
✅ Include numbers: "Increased by 25%", "Led team of 5"
✅ Tailor to job posting
✅ Keep it concise

### Styling Tips
✅ Use professional colors
✅ Keep it readable (don't go too large/small)
✅ Consistent font throughout
✅ Good spacing improves readability

### Export Tips
✅ Always export JSON as backup
✅ Test PDF in multiple viewers
✅ Keep multiple versions
✅ Verify links work after export

## 🎨 Customization Ideas

### For Design Jobs
```
Large font size
Serif font
Blue or purple accent
Spacious layout
```

### For Tech Jobs
```
Medium font size
Mono font (optional)
Dark accent (black/slate)
Normal spacing
```

### For Creative Jobs
```
Large font
Sans font
Custom color
Spacious layout
```

## 📱 Mobile Usage

### On Mobile Device
1. Visit resume builder
2. Editor on left tab
3. Customize on right tab
4. Preview takes full width
5. Export buttons at bottom

### Responsive Breakpoints
```
Desktop (1200px+)    → Full split-pane
Tablet (768-1199px) → Adjustable panes
Mobile (<768px)      → Tabs + Preview
```

## 🔐 Privacy & Security

✅ 100% Private - No accounts needed
✅ All data local - Nothing uploaded
✅ No tracking - No analytics
✅ Open source - Code visible
✅ Free forever - No subscription

## 🚀 Advanced Features

### Custom Fields
Add any field to entries:
```
Position: [text]
Company: [text]
Duration: [text]
Location: [text]
Description: [text]
Awards: [text]         ← Custom
Certifications: [text] ← Custom
```

### Custom Sections
Create any section:
- Languages
- Volunteer Work
- Publications
- Certifications
- Awards
- Projects
- Or anything else!

### Modify Template
Edit `src/components/ResumePreview.tsx` to customize:
- Layout
- Fonts
- Colors
- Spacing
- Section order
- Field display

## 📊 File Size Reference

| Filetype | Size | Use |
|----------|------|-----|
| HTML | ~50KB | Web/Email |
| JSON | ~5KB | Backup |
| PDF | ~500KB | Print |

## 🎯 Next Steps

1. **Start Building**
   ```bash
   npm run dev
   Open http://localhost:3000
   ```

2. **Customize**
   - Edit personal info
   - Add sections
   - Change styling

3. **Export**
   - Download HTML for sharing
   - Download JSON for backup
   - Print to PDF for applications

4. **Deploy** (Optional)
   - Deploy to Vercel
   - Deploy to Netlify
   - Self-host with Docker

## 📚 Documentation

```
README.md      → Overview & features
SETUP.md       → Installation guide
FEATURES.md    → Detailed feature guide
FILE_STRUCTURE → Code organization
```

## ❓ Common Questions

**Q: Where is my data stored?**
A: In your browser's localStorage (local only)

**Q: Can I use offline?**
A: Not initially, but works offline after first load

**Q: How do I restore from backup?**
A: Use the downloaded JSON file and localStorage in DevTools

**Q: Can I have multiple resumes?**
A: Export each as JSON, then restore via localStorage

**Q: Is my data secure?**
A: Yes, never leaves your device

**Q: Can I use this on phone?**
A: Yes, fully responsive design

## 🎯 Keyboard Shortcuts

| Action | Key(s) |
|--------|--------|
| Print | Ctrl+P / Cmd+P |
| Open DevTools | F12 |
| Hard Refresh | Ctrl+Shift+R / Cmd+Shift+R |
| Tab Navigation | Tab key |

## 🚀 Performance Tips

- Use Medium font size for best readability
- Normal spacing is most versatile
- Don't use custom colors excessively
- Clear browser cache if slow
- Keep descriptions concise

---

## 🎓 Learning Path

1. **Beginner**: Use default template, edit content
2. **Intermediate**: Customize colors, fonts, spacing
3. **Advanced**: Modify component code, add custom fields
4. **Expert**: Deploy to production, custom deployment

---

**Happy Building! 🎉**

For more details, check README.md or SETUP.md
