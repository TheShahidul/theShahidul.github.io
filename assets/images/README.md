# Image Assets Guide

## 📸 How to Add Images to Your Portfolio

This folder contains all images for your portfolio. Follow the instructions below to add your content.

---

## 📁 Folder Structure

```
assets/images/
├── profile.jpg           ← Your main profile photo
├── projects/            ← Project screenshots and demos
├── hobbies/             ← Photos of your hobbies
├── tours/               ← Travel and tour photos
├── university/          ← University life photos
└── blogs/               ← Blog post featured images
```

---

## 🖼️ Image Requirements

### **Profile Photo** (`profile.jpg`)
- **Recommended Size**: 500x500 px (square)
- **Format**: JPG or PNG
- **Max File Size**: 300KB
- **Tips**: Professional headshot with good lighting, clean background

### **Project Images** (`projects/`)
- **Recommended Size**: 1200x675 px (16:9 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Naming**: Use descriptive names (e.g., `smart-uniassist-dashboard.jpg`)
- **Max File Size**: 500KB per image

### **Blog Images** (`blogs/`)
- **Recommended Size**: 1200x630 px (for social sharing)
- **Format**: JPG or PNG
- **Naming**: Match blog post title (e.g., `machine-learning-guide.jpg`)
- **Max File Size**: 400KB per image

### **Hobby/Tour Photos** (`hobbies/`, `tours/`)
- **Recommended Size**: 800x800 px (square) or 1200x900 px
- **Format**: JPG (or GIF for animations)
- **Max File Size**: 500KB per image
- **Tips**: High-quality photos that showcase your interests

### **University Photos** (`university/`)
- **Recommended Size**: 1200x900 px or 1600x900 px
- **Format**: JPG or PNG
- **Examples**: Campus photos, project presentations, competitions, group photos

---

## 🎨 Image Optimization Tips

### Before Uploading:
1. **Compress images** using:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/) (Mac)

2. **Convert to WebP** (optional, for better performance):
   - Use [Squoosh](https://squoosh.app/)
   - Or online converters

3. **Resize** to recommended dimensions:
   - Use [Canva](https://www.canva.com/)
   - Or Photoshop/GIMP

### Good Practices:
✅ Use descriptive filenames (e.g., `dengue-prediction-results.jpg`)  
✅ Keep file sizes under 500KB  
✅ Use consistent aspect ratios within categories  
✅ Optimize before uploading to GitHub  
❌ Don't use spaces in filenames (use hyphens instead)  
❌ Don't upload raw/uncompressed images  

---

## 📝 How to Add Images to Your Portfolio

### 1. **Profile Photo**
Add `profile.jpg` to this folder, then update line ~67 in `index.html`:
```html
<!-- Remove or comment out the placeholder -->
<!-- <div class="profile-placeholder glass-card">...</div> -->

<!-- Add this line -->
<img src="assets/images/profile.jpg" alt="Md. Shahidul Islam Prodhan" class="profile-image">
```

### 2. **Project Images**
Add images to `projects/` folder, then update project cards in `index.html`:
```html
<div class="project-image-container">
    <img src="assets/images/projects/your-project.jpg" alt="Project Name" class="project-image">
</div>
```

### 3. **Blog Images**
Add images to `blogs/` folder, then update blog cards:
```html
<div class="blog-image-container">
    <img src="assets/images/blogs/your-blog-image.jpg" alt="Blog Post" class="blog-image">
</div>
```

### 4. **Hobby/Tour Photos**
Add photos to respective folders, then update the gallery:
```html
<div class="glass-card media-item">
    <img src="assets/images/tours/your-photo.jpg" alt="Tour Photo">
    <div class="media-caption">Photo Caption</div>
</div>
```

### 5. **GIF Files**
For animated GIFs, simply use the same `<img>` tag:
```html
<img src="assets/images/hobbies/funny-moment.gif" alt="Fun Moment">
```

---

## 🎯 Quick Checklist

Before deploying to GitHub Pages:

- [ ] Added profile photo (`profile.jpg`)
- [ ] Added at least 3 project images
- [ ] Added blog featured images
- [ ] Added tour/hobby photos
- [ ] All images are optimized (under 500KB)
- [ ] All images have descriptive filenames
- [ ] Updated image paths in `index.html`
- [ ] Tested portfolio locally

---

## 🔗 Useful Tools

- **Image Compression**: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- **Image Editing**: [Canva](https://www.canva.com/), [Photopea](https://www.photopea.com/)
- **Format Conversion**: [CloudConvert](https://cloudconvert.com/)
- **Placeholder Images**: [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/)

---

**Need Help?** Check the main `README.md` file in the root directory for more detailed instructions.
