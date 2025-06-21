import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Traduções
const resources = {
  en: {
    translation: {
      // ... (todas as chaves anteriores)
      settings: "Settings",
      languageSettings: "Language Settings",
      accountSettings: "Account Settings",
      privacySettings: "Privacy Settings",
      securitySettings: "Security Settings",
      logout: "Log Out",
    }
  },
  pt: {
    translation: {
      // ... (todas as chaves anteriores)
      settings: "Configurações",
      languageSettings: "Configurações de Idioma",
      accountSettings: "Configurações de Conta",
      privacySettings: "Configurações de Privacidade",
      securitySettings: "Configurações de Segurança",
      logout: "Sair",
    }
  },
  es: {
    translation: {
      // ... (todas as chaves anteriores)
      settings: "Configuración",
      languageSettings: "Configuración de Idioma",
      accountSettings: "Configuración de Cuenta",
      privacySettings: "Configuración de Privacidad",
      securitySettings: "Configuración de Seguridad",
      logout: "Cerrar Sesión",
    }
  }
};

// Detectar o idioma do dispositivo
const deviceLanguage = Localization.locale.split('-')[0];

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: deviceLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3'
  });

export default i18n;
