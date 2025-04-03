const isFirefox = typeof browser !== 'undefined';
const contextMenus = isFirefox ? browser.contextMenus : chrome.contextMenus;
const tabs = isFirefox ? browser.tabs : chrome.tabs;

contextMenus.create({
    id: 'easy-wpp',
    title: 'Iniciar conversa com este número',
    contexts: ['selection']
});

contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'easy-wpp' && info.selectionText) {
        const numero = info.selectionText.replace(/\D/g, ''); // Remove não números
        const url = `https://wa.me/${numero}`;
        tabs.create({ url }); // Abre a aba com o link
    }
});
