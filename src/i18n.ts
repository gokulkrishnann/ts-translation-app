import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: ['en'],
    defaultNS: "translations",
    whitelist: ['en','hi','te'],
    detection: [{
        order:['querystring','navigator','path','subdomain'],
        lookupQuerystring: 'language',
        lookupCookie: 'i18next',
        lookupFromPathIndex: 0,
        lookupFromSubdomainIndex:0,
        caches: ['cookie'],
        excludeCacheFor: ['cimode'],
        cookieMinutes: 10,
        cookieDomain: 'myDomain',
        checkWhitelist: true
    }],
    interpolation: {
        escapeValue: false
    }

})

export default i18n;