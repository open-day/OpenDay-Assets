const assets_messages = {
    de: {
        title: 'OpenDay | Assets',
    },
    en: {
        title: 'OpenDay | Assets',
    },
};

const language = navigator.language;
const { title } = assets_messages[(language.includes('de')) ? 'de' : 'en'];

document.getElementById('title').innerHTML = title;
