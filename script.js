
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,te,hi',
      autoDisplay: false
    },
    'google_translate_element'
  );
}

function chooseLanguage(language) {
  const screen = document.getElementById('languageScreen');

  if (language === 'en') {
    screen.style.display = 'none';
    return;
  }

  let attempts = 0;

  const timer = setInterval(function () {
    const combo = document.querySelector('.goog-te-combo');
    attempts++;

    if (combo) {
      clearInterval(timer);

      combo.value = language;
      combo.dispatchEvent(new Event('change'));

      screen.style.display = 'none';
    }

    if (attempts >= 30) {
      clearInterval(timer);
      alert('Translation could not load. Check your internet connection and try again.');
    }
  }, 500);
}

// Mobile navigation
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navigation = document.getElementById('navigation');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', function () {
      const open = navigation.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', open);
    });
  }

  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
