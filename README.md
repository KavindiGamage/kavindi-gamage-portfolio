# Kavindi Gamage - Professional QA Engineer Portfolio

A modern, professional personal portfolio website for **Kavindi Gamage**, a Software Quality Assurance Engineer. This portfolio showcases skills, experience, education, certifications, and projects with a clean, minimal design optimized for QA Engineer job applications.

## 🌟 Live Website

Access the portfolio at: [Your Deployed URL]

## 📋 Project Overview

This portfolio website is designed to present a professional online presence for a QA Engineer, highlighting:
- Technical skills in manual and API testing
- Professional experience in agile environments
- Educational background and certifications
- Project work and QA achievements
- Contact information and social links

## ✨ Features

### Design & UI
- **Modern, Clean Design**: Soft neutral colors (white, light gray, muted blue/lavender accents)
- **Smooth Animations**: Fade-in effects, hover animations, and scroll-triggered animations
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices
- **Professional Aesthetic**: Tech-focused design suitable for IT and QA roles
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support

### Interactive Elements
- **Fixed Navigation Bar**: With smooth scroll to sections
- **Mobile-Responsive Menu**: Hamburger menu for mobile devices
- **Scroll to Top Button**: Appears on scroll for easy navigation
- **Hover Effects**: Interactive cards and buttons with smooth transitions
- **Animated Timeline**: Professional experience displayed in timeline format
- **Floating Icons**: Animated elements in hero section

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── css/
│   └── style.css      # Complete styling with animations
├── js/
│   └── script.js      # Interactive functionality
└── README.md          # Project documentation
```

## 🎨 Sections Included

### 1. Navigation
- Fixed navigation bar with smooth scroll
- Responsive mobile menu
- Active section highlighting

### 2. Hero Section
- Name: **Kavindi Gamage**
- Title: **Software Quality Assurance Engineer**
- Professional introduction
- Call-to-action buttons:
  - View Projects
  - Download CV
  - Contact Me
- Animated profile card with floating tech icons

### 3. About Me
- Educational background (BSc IT from SLIIT)
- Professional experience overview
- Passion for quality-driven development
- User-centric approach to testing

### 4. Skills & Expertise
Eight key skill areas displayed as modern cards:
- Manual Testing
- Test Case Design & Execution
- Bug Reporting & Tracking
- API Testing (Postman)
- Agile & Scrum
- Cross-Browser & Responsive Testing
- UI/UX Validation
- Basic Automation Knowledge (JUnit)

### 5. Professional Experience
**Associate Software Quality Assurance Engineer**
- Fagginapps Pvt Ltd / Neura IT Pvt Ltd
- March 2024 – January 2026
- Key responsibilities and achievements

**Intern – Software Quality Assurance Engineer**
- September 2023 – March 2024
- Learning and growth experience

### 6. Education & Certifications

**Academic Education:**
- BSc (Hons) in Information Technology – SLIIT (2021-2025)
- GCE Advanced Level – Southlands College, Galle
- GCE Ordinary Level – Southlands College, Galle

**Professional Certifications:**
- AI/ML Engineer – Stage 1 (SLIIT)
- AI/ML Engineer – Stage 2 (SLIIT)
- Introduction to Software Quality Assurance (University of Moratuwa)

### 7. Projects & Work Highlights
- Mobile Application Testing
- Web Application Testing
- API Testing Projects
- Test Documentation
- GitHub profile integration

### 8. Contact Section
**Contact Information:**
- Email: kavindigamage20@gmail.com
- Phone: +94 70 594 5095
- Location: Galle, Sri Lanka

**Social Links:**
- LinkedIn
- GitHub
- Email
- Phone

### 9. Footer
- Professional branding
- Social media links
- Copyright information

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs as a static website

### Installation

1. **Clone or download the project files**
2. **Open the project folder**
3. **Double-click `index.html`** or open it in your browser

That's it! The portfolio is ready to view.

## 🔧 Customization Guide

### Update Personal Information

1. **LinkedIn & GitHub URLs**: Edit `js/script.js`
   ```javascript
   const socialLinks = {
       linkedin: 'YOUR_LINKEDIN_URL',
       github: 'YOUR_GITHUB_URL',
       ...
   };
   ```

2. **Add Your CV**: 
   - Upload your CV file (e.g., `Kavindi_Gamage_CV.pdf`)
   - Update the download link in `js/script.js`:
   ```javascript
   document.getElementById('downloadCV')?.addEventListener('click', (e) => {
       e.preventDefault();
       window.open('Kavindi_Gamage_CV.pdf', '_blank');
   });
   ```

3. **Update Content**: Edit `index.html` to modify:
   - Personal information
   - Skills and expertise
   - Work experience details
   - Project descriptions
   - Contact information

### Styling Customization

Edit `css/style.css` to change:
- **Colors**: Modify CSS variables in `:root`
  ```css
  :root {
      --primary-color: #8B7FD6;
      --secondary-color: #6C63FF;
      ...
  }
  ```
- **Fonts**: Change Google Fonts imports
- **Spacing**: Adjust padding and margins
- **Animations**: Modify transition speeds and effects

## 🌐 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Inter & Poppins typography
- **Font Awesome 6**: Professional icons
- **Intersection Observer API**: Scroll animations
- **CSS Variables**: Easy theme customization

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO & Performance

- Semantic HTML structure
- Meta tags for search engines
- Optimized loading with CDN resources
- Responsive images
- Smooth scroll performance
- Accessibility best practices

## 📊 Current Status

### ✅ Completed Features
- Complete responsive design
- All sections implemented
- Smooth scroll navigation
- Mobile menu functionality
- Interactive animations
- Contact information
- Social media integration
- Professional styling

### 🔄 Recommended Next Steps

1. **Add Professional Photos**
   - Replace icon-based profile with actual photo
   - Add project screenshots

2. **Upload CV File**
   - Add downloadable CV/resume
   - Update download button link

3. **Add Social Media Links**
   - Update LinkedIn profile URL
   - Update GitHub profile URL
   - Add any additional social profiles

4. **Expand Projects Section**
   - Add detailed case studies
   - Include screenshots of testing work
   - Link to GitHub repositories
   - Add test case examples

5. **Add Blog Section** (Optional)
   - Write about QA best practices
   - Share testing experiences
   - Technical articles

6. **Implement Contact Form** (Optional)
   - Add functional contact form
   - Integrate with email service

7. **Add Analytics**
   - Google Analytics integration
   - Track visitor engagement

8. **PWA Features** (Optional)
   - Add service worker
   - Enable offline functionality
   - Add to home screen capability

## 🎨 Color Scheme

- **Primary**: `#8B7FD6` (Lavender)
- **Secondary**: `#6C63FF` (Blue)
- **Accent**: `#A99FF5` (Light Purple)
- **Text Primary**: `#2D3748` (Dark Gray)
- **Text Secondary**: `#4A5568` (Medium Gray)
- **Text Light**: `#718096` (Light Gray)
- **Background**: `#FFFFFF` (White)
- **Background Secondary**: `#F7FAFC` (Very Light Gray)

## 📄 License

This project is created for Kavindi Gamage's personal use. Feel free to use it as inspiration for your own portfolio.

## 👤 About

**Kavindi Gamage**  
Software Quality Assurance Engineer  
BSc (Hons) IT - SLIIT

Passionate about quality-driven development, comprehensive testing practices, and ensuring exceptional user experiences through meticulous QA processes.

## 📞 Contact

- **Email**: kavindigamage20@gmail.com
- **Phone**: +94 70 594 5095
- **Location**: Galle, Sri Lanka
- **LinkedIn**: [Add your LinkedIn URL]
- **GitHub**: [Add your GitHub URL]

## 🚀 Deployment Instructions

### Option 1: Deploy to Netlify
1. Create account at [Netlify](https://www.netlify.com/)
2. Drag and drop project folder
3. Get instant URL

### Option 2: Deploy to GitHub Pages
1. Create GitHub repository
2. Push files to repository
3. Enable GitHub Pages in settings
4. Access at `username.github.io/repository-name`

### Option 3: Deploy to Vercel
1. Create account at [Vercel](https://vercel.com/)
2. Import project
3. Deploy with one click

### Option 4: Use the Publish Tab
Go to the **Publish tab** in this development environment and publish with one click to get your live website URL.

---

**Built with ❤️ for Quality Assurance Excellence**

*Last Updated: January 2026*