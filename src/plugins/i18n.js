import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Your Vue.js App',
        guide: 'For a guide and recipes on how to configure / customize this project,',
        checkout: 'check out the',
        plugins: 'Installed CLI Plugins',
        links: 'Essential Links',
        ecosystem: 'Ecosystem'
    },
    'es': {
        welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
        guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
        checkout: 'revisar la',
        plugins: 'Plugins de CLI instalados',
        links: 'Enlaces esenciales',
        ecosystem: 'Ecosistema'
    }
    ,
    'br': {
        welcomeMsg: 'Bem-vindo ao seu aplicativo Vue.js',
        guide: 'Para um guia e receitas sobre como configurar / personalizar este projeto,',
        checkout: 'confira a',
        plugins: 'Plugins Instalados da CLI',
        links: 'Links Essenciais',
        ecosystem: 'Ecossistema'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    fallbackTwoLocale: 'br',
    messages, // set locale messages
});

export default i18n;
