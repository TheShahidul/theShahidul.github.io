# Video Assets Guide

## 🎥 How to Add Videos to Your Portfolio

This folder is for storing video files that you want to host directly. However, for better performance, we **strongly recommend using YouTube** for videos.

---

## 📁 Video Options

### **Option 1: YouTube (Recommended) ✅**

**Advantages:**
- Free unlimited hosting
- Automatic optimization for all devices
- Better loading performance
- Built-in player controls
- Analytics

**How to embed YouTube videos:**

1. Upload your video to YouTube
2. Get the video ID from the URL:
   - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`

3. Add to your portfolio in `index.html`:
```html
<div class="video-embed-container">
    <iframe 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="Video Title"
        allowfullscreen>
    </iframe>
</div>
```

### **Option 2: Direct Video Files (Not Recommended)**

Only use this for short clips (< 10 seconds)

**Requirements:**
- Format: MP4 (H.264 codec)
- Max File Size: 10MB
- Recommended: 720p resolution
- Compress before uploading

**How to add:**
```html
<video controls style="width: 100%; border-radius: 12px;">
    <source src="assets/videos/your-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

---

## 🎬 Video Content Ideas

### **Project Demos**
- Screen recordings of your projects in action
- Feature walkthroughs
- Before/after comparisons

### **Presentations**
- Conference talks
- Project presentations
- Research presentations

### **Tutorials**
- Technical tutorials you've created
- Code walkthroughs
- Concept explanations

---

## 🛠️ Tools for Creating Videos

### **Screen Recording:**
- [OBS Studio](https://obsproject.com/) (Free, Windows/Mac/Linux)
- [ShareX](https://getsharex.com/) (Free, Windows)
- [QuickTime](https://support.apple.com/quicktime) (Mac built-in)
- [Windows Game Bar](https://support.xbox.com/en-US/help/friends-social-activity/share-socialize/record-game-clips-game-bar-windows-10) (Win+G)

### **Video Editing:**
- [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) (Free)
- [Shotcut](https://shotcut.org/) (Free)
- [OpenShot](https://www.openshot.org/) (Free)
- [CapCut](https://www.capcut.com/) (Free, easy to use)

### **Video Compression:**
- [HandBrake](https://handbrake.fr/) (Free)
- [CloudConvert](https://cloudconvert.com/) (Online)
- [FFmpeg](https://ffmpeg.org/) (Command-line)

---

## 📝 Quick Compression Guide

### Using HandBrake:
1. Download and install HandBrake
2. Open your video file
3. Select "Fast 720p30" preset
4. Click "Start Encode"
5. Your compressed video will be much smaller!

### Using FFmpeg (Command Line):
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec mp2 output.mp4
```

---

## 🎯 Best Practices

✅ **DO:**
- Upload long videos (>30 seconds) to YouTube
- Use descriptive video titles
- Add captions/subtitles for accessibility
- Test videos on mobile devices
- Compress videos before uploading

❌ **DON'T:**
- Upload large video files (>10MB) directly to GitHub
- Use obscure video formats (stick to MP4)
- Forget to optimize for mobile viewing
- Upload videos without testing playback

---

## 🌐 Alternative Video Hosting Platforms

If you don't want to use YouTube:
- [Vimeo](https://vimeo.com/) - Professional, clean player
- [Loom](https://www.loom.com/) - Great for screen recordings
- [Streamable](https://streamable.com/) - Quick sharing
- [Cloudinary](https://cloudinary.com/) - Developer-friendly

---

## 📋 Example: Adding a YouTube Video

### Step-by-Step:

1. **Record and upload your video** to YouTube
   - Title: "Smart UniAssist Project Demo"
   - Description: Add project details
   - Visibility: Public or Unlisted

2. **Get the embed code**:
   - Click "Share" → "Embed"
   - Copy the iframe code

3. **Add to your portfolio**:
   - Find the presentations section in `index.html`
   - Replace a placeholder div with:

```html
<div class="glass-card glass-card-hover" style="padding: 1rem;">
    <div class="video-embed-container">
        <iframe 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="Smart UniAssist Demo"
            allowfullscreen>
        </iframe>
    </div>
    <h4 style="margin-top: 1rem; font-size: 1rem;">Smart UniAssist Project Demo</h4>
</div>
```

---

## 🎓 Pro Tips

### For Screen Recordings:
- Record in 1080p for best quality
- Use a clean desktop background
- Close unnecessary applications
- Add cursor highlighting if possible
- Consider adding voiceover narration

### For Presentations:
- Export from PowerPoint/Google Slides as video
- Or record yourself presenting with Zoom/OBS
- Add chapters for long videos

### For Project Demos:
- Show the problem first, then your solution
- Keep videos under 3 minutes
- Highlight key features
- Include a call-to-action at the end

---

**Need more help?** Check the main `README.md` file in the root directory!
