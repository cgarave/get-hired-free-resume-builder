# ResumeCraft Setup Guide

Complete step-by-step guide to get ResumeCraft running on your machine.

## System Requirements

- **Node.js**: v18.0.0 or higher (check with `node --version`)
- **npm**: v8.0.0 or higher (comes with Node.js)
- **Disk Space**: ~500MB
- **Operating System**: Windows, macOS, or Linux

## Installation Steps

### Step 1: Install Node.js

If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download LTS (Long-term Support) version
3. Run the installer and follow the prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Prepare Project Files

1. Create a new folder for your project:
   ```bash
   mkdir resume-builder
   cd resume-builder
   ```

2. Copy all the provided files into this folder:
   - `package.json`
   - `tsconfig.json`
   - `next.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `.gitignore`
   - `README.md`
   - `src/` folder (all files)

### Step 3: Install Dependencies

```bash
npm install
```

This will:
- Download all required packages
- Create a `node_modules` folder
- Install Next.js, React, Tailwind CSS, and other dependencies
- Take 2-5 minutes depending on your internet speed

### Step 4: Run Development Server

```bash
npm run dev
```

You should see:
```
> resume-builder@1.0.0 dev
> next dev

  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 3.2s
```

### Step 5: Open in Browser

1. Open your web browser
2. Go to: `http://localhost:3000`
3. Start building your resume!

## Common Issues & Solutions

### Issue: "command not found: npm"
**Solution**: Node.js isn't installed or not in PATH
- Reinstall Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

### Issue: "Port 3000 already in use"
**Solution**: Another app is using port 3000
```bash
# Use a different port
npm run dev -- -p 3001
```
Then visit `http://localhost:3001`

### Issue: "Cannot find module"
**Solution**: Dependencies not installed
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Changes aren't showing
**Solution**: Clear browser cache and refresh
- Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or open DevTools (F12) and disable cache

## Production Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy Options

#### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

#### Option 2: Netlify
1. Build locally: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings as needed

#### Option 3: Docker
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t resume-builder .
docker run -p 3000:3000 resume-builder
```

## Customization Guide

### Change the Default Template

Edit `src/lib/resume-defaults.ts`:
```typescript
export const defaultResumeData: ResumData = {
  personalInfo: {
    fullName: 'Your Name',
    email: 'your@email.com',
    // ... customize
  },
  // ...
}
```

### Modify Resume Layout

Edit `src/components/ResumePreview.tsx` to change:
- Section styling
- Header format
- Font treatment
- Spacing and padding

### Add Custom Fields

In `ResumeEditor.tsx`, customize the entry form fields:
```typescript
// Add a new field input
<input
  type="text"
  placeholder="Your custom field"
  // ...
/>
```

### Change Colors & Styling

Modify `src/app/globals.css` and `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

## Troubleshooting

### High CPU/Memory Usage
- Close unnecessary applications
- Clear browser cache: DevTools > Application > Clear storage

### Slow Build Times
- Check your disk space
- Consider adding `.next` to `.gitignore`
- Use SSD instead of HDD if possible

### Can't Export to PDF
- Use browser's print feature (Ctrl+P / Cmd+P)
- Select "Save as PDF" from the printer dropdown

## Getting Help

1. Check the [README.md](./README.md)
2. Review your browser console for errors (F12 > Console)
3. Check Node.js version compatibility
4. Try clearing cache and reinstalling dependencies

## Next Steps

1. Customize your resume content
2. Adjust styling to your preference
3. Export as HTML or JSON
4. Print to PDF for submission
5. Share your feedback!

---

**Happy Resume Building! 🚀**
