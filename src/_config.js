export const process = {
    dev: true
};


export const site = {
    home: process.dev ? "http://localhost.8080" : "https://real_domen.ru" // пишем реальный домен
};

export const links = [
    {
        title: 'Home',
        alias: 'home',
        url: '/'
    },
    {
        title: 'About',
        alias: 'about',
        url: '/about'
    },
];

export const app = {
    title: 'Notes2',
};