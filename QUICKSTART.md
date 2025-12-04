# 🚀 Quick Start Guide

Welcome to your new professional portfolio! This guide will help you get it up and running in minutes.

---

## ⚡ 5-Minute Setup

### **Step 1: Test Locally**
1. Open `index.html` in your web browser
2. Check if everything loads correctly
3. Test the dark/light mode toggle
4. Try the navigation menu

### **Step 2: Add Your Profile Photo**
1. Add your photo as `assets/images/profile.jpg`
2. Open `index.html`
3. Find line ~67 (search for "profile-placeholder")
4. Replace the placeholder div with:
```html
<img src="assets/images/profile.jpg" alt="Your Name" class="profile-image">
```

### **Step 3: Add Your CV**
1. Save your resume as `CV.pdf`
2. Place it in `assets/documents/CV.pdf`
3. The download buttons will automatically work!

### **Step 4: Update Personal Info**
Open `index.html` and search for these (Ctrl+F):
- "Md. Shahidul Islam Prodhan" → Replace with your name
- "nahidulprodhan2000@gmail.com" → Your email
- LinkedIn, GitHub, Kaggle URLs → Your profiles

### **Step 5: Deploy to GitHub Pages**
```bash
# Navigate to your folder
cd "c:\Users\theSh\OneDrive\Desktop\theShahidul"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio"

# Create repo on GitHub (username.github.io)
# Then push
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

Your site will be live at `https://yourusername.github.io` in 2-3 minutes!

---

## 🎨 Customization Checklist

### **Essential** (Do these first):
- [ ] Add profile photo
- [ ] Add CV/Resume
- [ ] Update name and contact info
- [ ] Update hero section description
- [ ] Update about section
- [ ] Add at least 2-3 project images

### **Important** (Do when you have time):
- [ ] Add project screenshots
- [ ] Write blog posts or add blog images
- [ ] Add hobby/tour photos
- [ ] Update skills section
- [ ] Add YouTube video embeds
- [ ] Update education and experience

### **Optional** (Nice to have):
- [ ] Customize brand colors
- [ ] Add more sections
- [ ] Create custom animations
- [ ] Add testimonials section
- [ ] Add contact form

---

## 📁 File Organization

```
Your Portfolio/
├── index.html          ← Main file (edit content here)
├── css/style.css       ← Styles (edit colors/design here)
├── js/main.js          ← JavaScript (functionality)
├── assets/
│   ├── images/         ← Put all images here
│   ├── videos/         ← Put videos here (or use YouTube)
│   └── documents/      ← Put CV here
└── README.md          ← Full documentation
```

---

## 🎯 Common Tasks

### **Change Brand Colors**
Edit `css/style.css` (lines 8-12):
```css
:root {
    --accent-primary: #4f46e5;    /* Your main color */
    --accent-secondary: #6366f1;  /* Your secondary color */
}
```

### **Add a New Project**
1. Copy an existing project card in `index.html`
2. Update image, title, description, and links
3. Add project image to `assets/images/projects/`

### **Add a Blog Post**
1. Copy an existing blog card in `index.html`
2. Update image, title, excerpt, and link
3. Add featured image to `assets/images/blogs/`

### **Add a YouTube Video**
Replace placeholder div with:
```html
<div class="video-embed-container">
    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowfullscreen></iframe>
</div>
```

---

## 🐛 Troubleshooting

### **Images not showing?**
- Check file path is correct
- Ensure image is in the right folder
- Check filename matches exactly (case-sensitive)

### **Dark mode not working?**
- Clear browser cache
- Check browser console for errors (F12)
- Ensure `js/main.js` is loading

### **Smooth scroll not working?**
- Make sure section IDs match navigation hrefs
- Check for JavaScript errors in console

### **Portfolio looks broken on mobile?**
- Clear cache and reload
- Test in browser dev tools (F12 → Device toolbar)
- Check CSS file is loading

---

## 🌟 Pro Tips

1. **Optimize images** before uploading (use TinyPNG or Squoosh)
2. **Test on multiple browsers** (Chrome, Firefox, Safari, Edge)
3. **Test on mobile devices** before deploying
4. **Use meaningful commit messages** when pushing to Git
5. **Keep a backup** of your original files
6. **Update regularly** with new projects and skills

---

## 📱 Mobile Testing

### **On Your Phone:**
1. Save the portfolio folder
2. Deploy to GitHub Pages
3. Visit the URL on your phone
4. Test all links and navigation
5. Check image loading

### **Using Browser Dev Tools:**
1. Open portfolio in Chrome
2. Press F12
3. Click device toolbar icon (or Ctrl+Shift+M)
4. Test different screen sizes

---

## 🚀 Performance Tips

1. **Compress images** to under 500KB
2. **Use WebP format** for better compression
3. **Minimize CSS/JS** for production
4. **Enable browser caching** on GitHub Pages
5. **Use lazy loading** for images below the fold

---

## 📚 Learn More

- **Full documentation**: See `README.md`
- **Image guide**: See `assets/images/README.md`
- **Video guide**: See `assets/videos/README.md`
- **Documents guide**: See `assets/documents/README.md`

---

## ✅ Pre-Deploy Checklist

Before pushing to GitHub:

- [ ] Tested locally in browser
- [ ] All images load correctly
- [ ] Profile photo added
- [ ] CV/Resume added
- [ ] Personal info updated
- [ ] All links work (external and internal)
- [ ] Tested dark/light mode
- [ ] Tested on mobile view
- [ ] No console errors (F12)
- [ ] Content is proofread

---

## 🎉 You're Ready!

Once you've completed the essential steps above, your portfolio is ready to deploy!

**Need help?** Check the main `README.md` file for detailed instructions.

---

**Good luck with your portfolio! 🌟**

*Created by: Md. Shahidul Islam Prodhan*  
*Date: December 4, 2025*
