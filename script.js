// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            // If clicked question wasn't active, open it
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });

    // Language toggle
    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = 'ro';
    
    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ro' ? 'en' : 'ro';
        languageToggle.textContent = currentLanguage === 'ro' ? 'RO/EN' : 'EN/RO';
        // Here you would add language switching logic
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});