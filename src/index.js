import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import global_es from "./Translations/es/global.json"
import global_en from "./Translations/en/global.json"


const userLang = navigator.language.substring(0, 2); 

i18next.use(initReactI18next).init({  
        interpolation : { escapeValue: false}, 
        lng: userLang,
        fallbackLng: "es", 
        resources: {
          es: {
            global:global_es,
          },
          en: {
            global:global_en,
          }
        },                                      
});

i18next.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
