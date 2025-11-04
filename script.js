// Language switching functionality
class LanguageManager {
    constructor() {
        this.currentLang = 'ro';
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.setupFAQ();
        this.setupSmoothScroll();
    }

    setupLanguageToggle() {
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ro' ? 'en' : 'ro';
        this.updateContent();
        this.updateLangSwitch();
    }

    updateContent() {
        // Update all elements with data attributes
        document.querySelectorAll('[data-ro], [data-en]').forEach(element => {
            const roText = element.getAttribute('data-ro');
            const enText = element.getAttribute('data-en');
            
            if (roText && enText) {
                element.textContent = this.currentLang === 'ro' ? roText : enText;
            }
        });

        // Update page title
        if (this.currentLang === 'en') {
            document.title = 'Sex Well - Sexual Health & Wellness Tracking App | Android';
        } else {
            document.title = 'Sex Well - Aplicație Sănătate Sexuală și Wellness | Android';
        }
    }

    updateLangSwitch() {
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.textContent = this.currentLang === 'ro' ? 'EN' : 'RO';
        }
    }

    setupFAQ() {
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = answer.classList.contains('active');
                
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('active');
                });
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });
                
                // Toggle current answer
                if (!isActive) {
                    answer.classList.add('active');
                    question.classList.add('active');
                }
            });
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Privacy page specific functionality
class PrivacyPageManager {
    constructor() {
        this.currentLang = 'ro';
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.setupContentVisibility();
    }

    setupLanguageToggle() {
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ro' ? 'en' : 'ro';
        this.updateContent();
        this.updateLangSwitch();
    }

    updateContent() {
        const roContent = document.querySelector('.ro-content');
        const enContent = document.querySelector('.en-content');
        
        if (roContent && enContent) {
            if (this.currentLang === 'ro') {
                roContent.style.display = 'block';
                enContent.style.display = 'none';
                document.title = 'Politica de Confidențialitate - Sex Well';
            } else {
                roContent.style.display = 'none';
                enContent.style.display = 'block';
                document.title = 'Privacy Policy - Sex Well';
            }
        }
    }

    updateLangSwitch() {
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.textContent = this.currentLang === 'ro' ? 'EN' : 'RO';
        }
    }

    setupContentVisibility() {
        // Initial setup
        this.updateContent();
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('privacy.html') || window.location.pathname.includes('privacy')) {
        new PrivacyPageManager();
    } else {
        new LanguageManager();
    }
});
