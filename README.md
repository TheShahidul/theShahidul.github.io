# 🌟 Professional Portfolio - Md. Shahidul Islam Prodhan

A modern, responsive, and professional portfolio website featuring glassmorphism design, light/dark mode, and comprehensive sections showcasing skills, projects, research, blogs, and hobbies.

![Portfolio Preview](assets/images/preview.png)

## ✨ Features

- **Modern Glassmorphism Design** - Beautiful frosted glass effects with backdrop blur
- **Light & Dark Mode** - Seamless theme switching with localStorage persistence
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll-reveal animations and smooth transitions
- **Professional Sections**:
  - Hero section with profile image
  - About section with statistics
  - Education timeline
  - Work experience
  - Research & publications
  - Projects showcase with media support
  - Blog posts
  - Skills & expertise
  - Hobbies & interests with photo gallery
  - Contact information
- **Media Support** - Ready for images, videos, GIFs, and YouTube embeds
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Loading** - Optimized CSS and JavaScript

## 📁 Project Structure

```
theShahidul/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles (glassmorphism, themes, responsive)
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── profile.jpg    # Your profile photo
│   │   ├── projects/      # Project screenshots
│   │   ├── hobbies/       # Hobby photos
│   │   ├── tours/         # Travel photos
│   │   ├── university/    # University life photos
│   │   └── blogs/         # Blog post images
│   ├── videos/            # Video files
│   └── documents/
│       └── CV.pdf         # Your resume/CV
├── README.md              # This file
└── index.html.backup      # Backup of original file
```

## 🚀 Quick Start

### 1. **Add Your Content**

#### Profile Photo
- Add your profile image as `assets/images/profile.jpg`
- Update line ~67 in `index.html`:
```html
<img src="assets/images/profile.jpg" alt="Md. Shahidul Islam Prodhan" class="profile-image">
```

#### Resume/CV
- Place your CV in `assets/documents/CV.pdf`
- The download buttons will automatically link to it

#### Project Images
- Add project screenshots to `assets/images/projects/`
- Update the project cards in the Projects section (~350-450 in index.html)

#### Blog Images
- Add blog post featured images to `assets/images/blogs/`
- Update the blog cards (~525-600 in index.html)

#### Tour & Hobby Photos
- Add photos to `assets/images/tours/` and `assets/images/hobbies/`
- Update the Hobbies section (~800-900 in index.html)

### 2. **Customize Content**

#### Update Personal Information
Search and replace the following in `index.html`:
- Your name: "Md. Shahidul Islam Prodhan"
- Email: "nahidulprodhan2000@gmail.com"
- LinkedIn: "https://linkedin.com/in/theshahidul/"
- GitHub: "https://github.com/TheShahidul"
- Kaggle: "https://www.kaggle.com/theshahidul"

#### Add YouTube Videos
Replace placeholder divs with YouTube embed code:
```html
<div class="video-embed-container">
    <iframe 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        allowfullscreen>
    </iframe>
</div>
```

#### Add Blog Posts
Duplicate and modify blog card structure:
```html
<a href="YOUR_BLOG_URL" class="blog-card glass-card glass-card-hover">
    <div class="blog-image-container">
        <img src="assets/images/blogs/your-image.jpg" alt="Blog Post" class="blog-image">
    </div>
    <div class="blog-content">
        <div class="blog-meta">
            <span><i data-lucide="calendar" style="width: 14px; height: 14px;"></i> Date</span>
            <span><i data-lucide="clock" style="width: 14px; height: 14px;"></i> X min read</span>
        </div>
        <h3 class="blog-title">Your Blog Title</h3>
        <p class="blog-excerpt">Your excerpt...</p>
        <span class="blog-read-more">
            Read More <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
        </span>
    </div>
</a>
```

### 3. **Customize Colors & Styling**

Edit `css/style.css` to change colors:
```css
:root {
    --accent-primary: #4f46e5;    /* Primary brand color */
    --accent-secondary: #6366f1;  /* Secondary brand color */
    /* Other variables... */
}
```

## 🌐 Deploy to GitHub Pages

### Method 1: Standard GitHub Pages

1. **Create a new repository** named `yourusername.github.io` (replace with your GitHub username)

2. **Clone the repository**:
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

3. **Copy all portfolio files** to the repository folder

4. **Push to GitHub**:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

5. **Access your site** at `https://yourusername.github.io`

### Method 2: Deploy from this folder

1. **Initialize git** (if not already):
```powershell
cd "c:\Users\theSh\OneDrive\Desktop\theShahidul"
git init
```

2. **Add files**:
```powershell
git add .
git commit -m "Professional portfolio website"
```

3. **Create GitHub repository** (on github.com)

4. **Push to GitHub**:
```powershell
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

5. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

Your site will be live at `https://yourusername.github.io` in a few minutes!

## 📝 Content Management Guide

### Adding New Projects

1. Navigate to the Projects section in `index.html`
2. Copy an existing project card
3. Update:
   - Image source
   - Tags
   - Title
   - Description
   - Links (GitHub, demo, etc.)

### Adding New Skills

1. Find the Skills section in `index.html`
2. Add new skill tags within appropriate category:
```html
<span class="skill-tag">
    <i data-lucide="check" style="width: 14px; height: 14px;"></i>
    Your Skill Name
</span>
```

### Updating Education/Experience

1. Locate the Timeline sections
2. Add new timeline items:
```html
<div class="timeline-item">
    <div class="glass-card glass-card-hover timeline-content">
        <span class="timeline-date">Start - End Date</span>
        <h3 class="timeline-title">Position/Degree Title</h3>
        <p class="timeline-organization">Organization Name</p>
        <div class="timeline-description">
            <p>Description...</p>
        </div>
    </div>
</div>
```

## 🎨 Customization Tips

### Change Font
Replace Google Fonts link in `index.html` head section and update CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'YourHeadingFont', serif;
}
```

### Add Animations
The portfolio includes scroll-reveal animations. Add to any element:
```html
<div class="scroll-reveal">Your content</div>
```

### Custom Icons
The portfolio uses Lucide Icons. Browse available icons at [lucide.dev](https://lucide.dev/) and use:
```html
<i data-lucide="icon-name"></i>
```

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## ⚡ Performance Optimization

### Image Optimization
- Use WebP format for better compression
- Compress images before uploading
- Recommended max size: 500KB per image
- Tools: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)

### Loading Speed
- Minify CSS and JavaScript for production
- Use CDN for external libraries
- Enable browser caching

## 🤝 Support & Contact

If you need help or have questions:
- Email: nahidulprodhan2000@gmail.com
- LinkedIn: [linkedin.com/in/theshahidul](https://linkedin.com/in/theshahidul/)
- GitHub: [github.com/TheShahidul](https://github.com/TheShahidul)

## 📄 License

This portfolio is free to use and modify for personal purposes. Please give credit if you use the design as a template.

## 🙏 Acknowledgments

- **Lucide Icons** - Beautiful open-source icons
- **Google Fonts** - Inter & Lora fonts
- **Glassmorphism** - Modern UI trend inspiration

---

**Built with ❤️ by Md. Shahidul Islam Prodhan**

*Last Updated: December 4, 2025*
