const themes = [
    { id: 'classic', fontFamily: 'Georgia, serif' },
    { id: 'modern', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' },
    { id: 'playful', fontFamily: 'Comic Sans MS, cursive' },
    { id: 'elegant', fontFamily: 'Garamond, serif' },
    { id: 'bold', fontFamily: 'Arial Black, sans-serif' }
];

const themeLabels = {
    classic: { es: { name: 'Clásico', desc: 'Tipografía tradicional y elegante' }, en: { name: 'Classic', desc: 'Traditional and elegant typography' } },
    modern: { es: { name: 'Moderno', desc: 'Estilo limpio y actual' }, en: { name: 'Modern', desc: 'Clean and contemporary style' } },
    playful: { es: { name: 'Divertido', desc: 'Tipografía alegre y desenfadada' }, en: { name: 'Playful', desc: 'Cheerful and relaxed typography' } },
    elegant: { es: { name: 'Elegante', desc: 'Estilo sofisticado y refinado' }, en: { name: 'Elegant', desc: 'Sophisticated and refined style' } },
    bold: { es: { name: 'Negrita', desc: 'Tipografía fuerte y llamativa' }, en: { name: 'Bold', desc: 'Strong and striking typography' } }
};
window.appState = window.appState || {};
window.appState.selectedTheme = null;

const langMap = {
    es: {
        title: 'Estilo de Invitación',
        desc: 'Elige el estilo tipográfico que mejor represente tu celebración',
        continue: 'Continuar →',
        alertSelect: 'Por favor selecciona un estilo.',
        pageTitle: 'Estilo - Niña'
    },
    en: {
        title: 'Invitation Style',
        desc: 'Choose the typography style that best represents your celebration',
        continue: 'Continue →',
        alertSelect: 'Please select a style.',
        pageTitle: 'Style - Girl'
    }
};

let currentTexts = null;
let feedbackTimeoutId = null;

function getLang() {
    return localStorage.getItem('babyShowerLanguage') || 'es';
}

function getThemeText(themeId) {
    const lang = getLang();
    const entry = themeLabels[themeId];
    if (!entry) return { name: themeId, desc: '' };
    return entry[lang] || entry.es;
}

function applyLanguage() {
    const lang = getLang();
    const t = langMap[lang] || langMap.es;
    const h2 = document.querySelector('.header h2');
    if (h2) h2.textContent = t.title;
    const p = document.querySelector('.header p');
    if (p) p.textContent = t.desc;
    const btn = document.getElementById('continueBtn');
    if (btn) btn.textContent = t.continue;
    document.title = t.pageTitle;
    currentTexts = t;
    return t;
}

function getTexts() {
    return currentTexts || applyLanguage();
}

function showFeedback(message, variant = 'warn') {
    const bar = document.getElementById('inlineFeedback');
    if (!bar) return;
    const msg = bar.querySelector('.message');
    if (msg) msg.textContent = message;
    bar.dataset.variant = variant;
    bar.classList.add('is-visible');
    clearTimeout(feedbackTimeoutId);
    feedbackTimeoutId = setTimeout(() => {
        bar.classList.remove('is-visible');
    }, 2600);
}

function renderThemeOptions() {
    const themeOptions = document.getElementById('themeOptions');
    const selectedColor = localStorage.getItem('girlSelectedColor') || '#E91E63';
    document.documentElement.style.setProperty('--primary-color', selectedColor);

    themeOptions.innerHTML = themes.map((theme, index) => `
        <div class="theme-option" data-theme="${theme.id}" title="${getThemeText(theme.id).name}" style="font-family: ${theme.fontFamily};">
            <span class="theme-name">${getThemeText(theme.id).name}</span>
            <span class="theme-desc">${getThemeText(theme.id).desc}</span>
        </div>
    `).join('');
    themeOptions.querySelectorAll('.theme-option').forEach((opt, i) => {
        opt.addEventListener('click', () => selectTheme(themes[i].id, i));
    });
}
function selectTheme(themeId, index) {
    window.appState.selectedTheme = themeId;
    document.querySelectorAll('.theme-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const t = applyLanguage();
    renderThemeOptions();
    attachContinueHandler(t);
});

function attachContinueHandler(t) {
    const btn = document.getElementById('continueBtn');
    if (!btn) return;
    const clone = btn.cloneNode(true);
    btn.parentNode.replaceChild(clone, btn);
    clone.addEventListener('click', () => {
        const theme = window.appState?.selectedTheme;
        if (!theme) {
            showFeedback(t.alertSelect, 'warn');
            return;
        }
        localStorage.setItem('girlSelectedTheme', theme);
        window.location.href = 'form.html';
    });
}
