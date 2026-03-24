// ===================================
// Navigation & Mobile Menu
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe skill cards for staggered animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe project cards for staggered animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ===================================
// Social Links & External Links
// ===================================
// Update these with actual URLs when available
const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/kavindi-gamage',
    github: 'https://github.com/KavindiGamage',
    email: 'mailto:kavindigamage20@gmail.com',
    phone: 'tel:+94705945095'
};

// LinkedIn links
document.getElementById('linkedinLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(socialLinks.linkedin, '_blank');
});

document.getElementById('footerLinkedin')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(socialLinks.linkedin, '_blank');
});

// GitHub links
document.getElementById('githubLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(socialLinks.github, '_blank');
});

document.getElementById('githubSocialLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(socialLinks.github, '_blank');
});

document.getElementById('footerGithub')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(socialLinks.github, '_blank');
});

// Download CV button
document.getElementById('downloadCV')?.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Track CV download
    trackCVDownload();
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = 'Kavindi_Gamage.pdf';
    link.download = 'Kavindi_Gamage_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// ===================================
// Analytics Tracking System
// ===================================
const ADMIN_PASSWORD = 'kavindi2024'; // Change this to your preferred password

// Initialize analytics data
function initAnalytics() {
    if (!localStorage.getItem('portfolioViews')) {
        localStorage.setItem('portfolioViews', '0');
    }
    if (!localStorage.getItem('cvDownloads')) {
        localStorage.setItem('cvDownloads', '0');
    }
    if (!localStorage.getItem('firstViewDate')) {
        localStorage.setItem('firstViewDate', new Date().toISOString());
    }
}

// Track page view
function trackPageView() {
    initAnalytics();
    const views = parseInt(localStorage.getItem('portfolioViews')) || 0;
    localStorage.setItem('portfolioViews', (views + 1).toString());
    localStorage.setItem('lastViewDate', new Date().toISOString());
}

// Track CV download
function trackCVDownload() {
    initAnalytics();
    const downloads = parseInt(localStorage.getItem('cvDownloads')) || 0;
    localStorage.setItem('cvDownloads', (downloads + 1).toString());
    localStorage.setItem('lastDownloadDate', new Date().toISOString());
}

// Get analytics data
function getAnalytics() {
    initAnalytics();
    return {
        views: parseInt(localStorage.getItem('portfolioViews')) || 0,
        downloads: parseInt(localStorage.getItem('cvDownloads')) || 0,
        firstView: localStorage.getItem('firstViewDate'),
        lastView: localStorage.getItem('lastViewDate'),
        lastDownload: localStorage.getItem('lastDownloadDate')
    };
}

// Show admin panel - define directly on window to ensure global access
window.showAdminPanel = function showAdminPanel() {
    try {
        console.log('🎯 showAdminPanel() called');
        
        // Remove existing panel if any
        const existingPanel = document.getElementById('adminPanel');
        if (existingPanel) {
            existingPanel.remove();
            console.log('🗑️ Removed existing panel');
        }
        
        const analytics = getAnalytics();
        console.log('📊 Analytics data:', analytics);
        
        const adminPanel = document.createElement('div');
        adminPanel.id = 'adminPanel';
    adminPanel.innerHTML = `
        <div class="admin-overlay">
            <div class="admin-container">
                <div class="admin-header">
                    <h2><i class="fas fa-chart-line"></i> Portfolio Analytics</h2>
                    <button class="admin-close" onclick="closeAdminPanel()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="admin-content">
                    <div class="stat-card">
                        <div class="stat-icon views">
                            <i class="fas fa-eye"></i>
                        </div>
                        <div class="stat-info">
                            <h3>${analytics.views.toLocaleString()}</h3>
                            <p>Portfolio Views</p>
                            ${analytics.lastView ? `<small>Last: ${new Date(analytics.lastView).toLocaleDateString()}</small>` : ''}
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon downloads">
                            <i class="fas fa-download"></i>
                        </div>
                        <div class="stat-info">
                            <h3>${analytics.downloads.toLocaleString()}</h3>
                            <p>CV Downloads</p>
                            ${analytics.lastDownload ? `<small>Last: ${new Date(analytics.lastDownload).toLocaleDateString()}</small>` : ''}
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon date">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <div class="stat-info">
                            <h3>${analytics.firstView ? new Date(analytics.firstView).toLocaleDateString() : 'N/A'}</h3>
                            <p>Tracking Since</p>
                        </div>
                    </div>
                    <div class="admin-actions">
                        <button class="btn-reset" onclick="resetAnalytics()">
                            <i class="fas fa-redo"></i> Reset Stats
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    if (!document.body) {
        console.error('❌ document.body is not available yet!');
        setTimeout(showAdminPanel, 100);
        return;
    }
    
    document.body.appendChild(adminPanel);
    console.log('✅ Admin panel added to DOM');
    console.log('✅ Panel element:', document.getElementById('adminPanel'));
    } catch (error) {
        console.error('❌ Error showing admin panel:', error);
    }
};

// Confirm it's on window
console.log('✅ showAdminPanel defined directly on window:', typeof window.showAdminPanel);

// Immediately expose to window
window.showAdminPanel = showAdminPanel;
console.log('✅ showAdminPanel function exposed to window');

// Close admin panel
function closeAdminPanel() {
    const panel = document.getElementById('adminPanel');
    if (panel) {
        panel.remove();
    }
}

// Reset analytics
function resetAnalytics() {
    if (confirm('Are you sure you want to reset all analytics data?')) {
        localStorage.removeItem('portfolioViews');
        localStorage.removeItem('cvDownloads');
        localStorage.removeItem('firstViewDate');
        localStorage.removeItem('lastViewDate');
        localStorage.removeItem('lastDownloadDate');
        closeAdminPanel();
        alert('Analytics data has been reset.');
    }
}

// Make functions globally accessible for onclick handlers and console
window.closeAdminPanel = closeAdminPanel;
window.resetAnalytics = resetAnalytics;
window.showAdminPanel = showAdminPanel; // Already set above, but ensure it's set
window.getAnalytics = getAnalytics; // For debugging

// Double-check all functions are exposed
console.log('🔍 Function exposure check:', {
    showAdminPanel: typeof window.showAdminPanel,
    closeAdminPanel: typeof window.closeAdminPanel,
    resetAnalytics: typeof window.resetAnalytics,
    getAnalytics: typeof window.getAnalytics
});

// Check for admin access
function checkAdminAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const password = urlParams.get('admin');
    
    console.log('Checking admin access. Password from URL:', password);
    console.log('Expected password:', ADMIN_PASSWORD);
    
    if (password === ADMIN_PASSWORD) {
        console.log('Admin access granted! Showing panel...');
        showAdminPanel();
        // Remove password from URL for security
        window.history.replaceState({}, document.title, window.location.pathname);
    } else {
        console.log('Admin access denied or no password provided');
    }
}

// Track page view on load
trackPageView();

// Check for admin access - simplified and runs multiple times to ensure it works
function runAdminCheck() {
    const urlParams = new URLSearchParams(window.location.search);
    const password = urlParams.get('admin');
    
    console.log('🔍 [ADMIN CHECK] URL password:', password);
    console.log('🔍 [ADMIN CHECK] Expected password:', ADMIN_PASSWORD);
    console.log('🔍 [ADMIN CHECK] Match?', password === ADMIN_PASSWORD);
    
    if (password === ADMIN_PASSWORD) {
        console.log('✅ [ADMIN] Access GRANTED! Attempting to show panel...');
        
        // Try to show panel immediately
        if (document.body) {
            console.log('✅ [ADMIN] document.body exists, showing panel now');
            showAdminPanel();
        } else {
            console.log('⏳ [ADMIN] Waiting for DOM...');
            setTimeout(function() {
                if (document.body) {
                    console.log('✅ [ADMIN] DOM ready, showing panel');
                    showAdminPanel();
                }
            }, 500);
        }
        
        // Remove password from URL for security
        setTimeout(function() {
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 1000);
    } else {
        console.log('❌ [ADMIN] Access denied. Password:', password ? 'provided but incorrect' : 'not provided');
    }
}

// Run admin check immediately
runAdminCheck();

// Also run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAdminCheck);
} else {
    setTimeout(runAdminCheck, 100);
}

// Also run on window load as final backup
window.addEventListener('load', function() {
    setTimeout(runAdminCheck, 200);
});

// Keyboard shortcut: Press Ctrl+Shift+A to open admin panel (for testing)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        console.log('⌨️ [KEYBOARD] Shortcut triggered - Opening admin panel...');
        if (typeof window.showAdminPanel === 'function') {
            window.showAdminPanel();
        } else {
            console.error('❌ showAdminPanel function not found!');
        }
    }
});

// Confirm functions are loaded
console.log('%c✅ Analytics system loaded!', 'color: #14B8A6; font-weight: bold; font-size: 14px;');
console.log('%c💡 TIP: Type showAdminPanel() in console to test', 'color: #14B8A6; font-weight: bold;');
console.log('%c⌨️ TIP: Press Ctrl+Shift+A to open admin panel', 'color: #14B8A6; font-weight: bold;');
console.log('🔑 Admin functions available:', {
    showAdminPanel: typeof window.showAdminPanel,
    closeAdminPanel: typeof window.closeAdminPanel,
    getAnalytics: typeof window.getAnalytics
});

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.textContent = `© ${currentYear} Kavindi Gamage. All rights reserved.`;
}

// ===================================
// Page Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroElements = document.querySelectorAll('.fade-in-up');
    heroElements.forEach(element => {
        element.style.opacity = '1';
    });
});

// ===================================
// Typing Effect for Hero Subtitle (Optional Enhancement)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero subtitle
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     setTimeout(() => {
//         typeWriter(heroSubtitle, originalText, 80);
//     }, 1000);
// }

// ===================================
// Parallax Effect Disabled
// Keeping sections static while scrolling
// ===================================

// ===================================
// Skills Card Hover Effect Enhancement
// ===================================
const skillsCards = document.querySelectorAll('.skill-card');

skillsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Timeline Item Reveal Animation
// ===================================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// ===================================
// Education Cards Animation
// ===================================
const educationCards = document.querySelectorAll('.education-card, .certification-card');

const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1
});

educationCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    educationObserver.observe(card);
});

// ===================================
// Contact Cards Hover Effect
// ===================================
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.contact-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.contact-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ===================================
// Add Click Effect to Buttons
// ===================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Console Welcome Message
// ===================================
console.log('%c👋 Welcome to Kavindi Gamage\'s Portfolio!', 'color: #14B8A6; font-size: 20px; font-weight: bold;');
console.log('%cIf you\'re viewing this, you might be interested in working together!', 'color: #06B6D4; font-size: 14px;');
console.log('%cFeel free to reach out: kavindigamage20@gmail.com', 'color: #718096; font-size: 12px;');

// ===================================
// Performance Optimization
// ===================================
// Lazy load images if needed in future
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Prevent Default for Empty Anchor Links
// ===================================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#' && !link.id) {
            e.preventDefault();
        }
    });
});

// ===================================
// Accessibility: Skip to Main Content
// ===================================
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 0 0 4px 0;
    z-index: 10000;
    transition: top 0.3s;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ===================================
// Initialize Everything on DOM Content Loaded
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active link
    setActiveLink();
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Log page load time for debugging
    if (performance && performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`%cPage loaded in ${loadTime}ms`, 'color: #10B981; font-weight: bold;');
    }
});

// ===================================
// Service Worker Registration (Optional - for PWA)
// ===================================
// Uncomment if you want to add PWA capabilities
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/

// ===================================
// Final Global Function Exposure (Ensure availability)
// ===================================
(function() {
    // Ensure all admin functions are globally available
    if (typeof showAdminPanel === 'function') {
        window.showAdminPanel = showAdminPanel;
    }
    if (typeof closeAdminPanel === 'function') {
        window.closeAdminPanel = closeAdminPanel;
    }
    if (typeof resetAnalytics === 'function') {
        window.resetAnalytics = resetAnalytics;
    }
    if (typeof getAnalytics === 'function') {
        window.getAnalytics = getAnalytics;
    }
    
    // Final verification
    console.log('🔍 [FINAL CHECK] Global functions:', {
        showAdminPanel: typeof window.showAdminPanel,
        closeAdminPanel: typeof window.closeAdminPanel,
        resetAnalytics: typeof window.resetAnalytics,
        getAnalytics: typeof window.getAnalytics
    });
    
    if (typeof window.showAdminPanel === 'function') {
        console.log('✅ showAdminPanel is NOW available globally!');
    } else {
        console.error('❌ ERROR: showAdminPanel is still not available!');
    }
})();
