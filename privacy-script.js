// Simplified version for privacy page
document.addEventListener('DOMContentLoaded', function() {
    let currentLang = 'ro';
    const langSwitch = document.getElementById('langSwitch');
    const roContent = document.querySelector('.ro-content');
    const enContent = document.querySelector('.en-content');

    function updateContent() {
        if (roContent && enContent) {
            if (currentLang === 'ro') {
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

    function updateLangSwitch() {
        if (langSwitch) {
            langSwitch.textContent = currentLang === 'ro' ? 'EN' : 'RO';
        }
    }

    if (langSwitch) {
        langSwitch.addEventListener('click', function() {
            currentLang = currentLang === 'ro' ? 'en' : 'ro';
            updateContent();
            updateLangSwitch();
        });
    }

    // Initial setup
    updateContent();
    updateLangSwitch();
});