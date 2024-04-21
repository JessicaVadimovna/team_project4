const i18next = require('i18next');
const I18nextBrowserLanguageDetector = require('i18next-browser-languagedetector');
const environmentVariables = require('./translator');
const { i18nextLanguages } = environmentVariables;

i18next
    .use(I18nextBrowserLanguageDetector)
    .init({
        resources: i18nextLanguages,
        fallbackLng: 'ru',
        lowerCaseLng: true,
        debug: false,
    });

document.querySelector('.header-toplang-en').addEventListener('click', () => {
    i18next.changeLanguage('en');
    window.location.reload();
});