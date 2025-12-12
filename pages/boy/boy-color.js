// Paleta de colores para niño
const colorPalettes = {
    M: [
        { name: 'Azul Cielo', value: '#5DADE2' },
        { name: 'Azul Royal', value: '#3498DB' },
        { name: 'Azul Marino', value: '#2874A6' },
        { name: 'Turquesa', value: '#48C9B0' },
        { name: 'Aguamarina', value: '#1ABC9C' },
        { name: 'Azul Acero', value: '#5DADE2' },
        { name: 'Océano', value: '#17A2B8' },
        { name: 'Índigo', value: '#6C5CE7' }
    ]
};
window.appState = { selectedColor: null };

const langMap = {
    es: {
        title: 'Elige el color',
        continue: 'Continuar →',
        alertSelect: 'Por favor selecciona un color.',
        pageTitle: 'Color - Niño'
    },
    en: {
        title: 'Choose the color',
        continue: 'Continue →',
        alertSelect: 'Please select a color.',
        pageTitle: 'Color - Boy'
    }
};

let currentTexts = null;
let feedbackTimeoutId = null;

function getLang() {
    return localStorage.getItem('babyShowerLanguage') || 'es';
}

function applyLanguage() {
    const lang = getLang();
    const t = langMap[lang] || langMap.es;
    const h2 = document.querySelector('.header h2');
    if (h2) h2.textContent = t.title;
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

function attachContinueHandler(t) {
    const btn = document.getElementById('continueBtn');
    if (!btn) return;
    const clone = btn.cloneNode(true);
    btn.parentNode.replaceChild(clone, btn);
    clone.addEventListener('click', () => {
        const color = window.appState?.selectedColor;
        if (!color) {
            showFeedback(t.alertSelect, 'warn');
            return;
        }
        localStorage.setItem('boySelectedColor', color);
        window.location.href = 'effects.html';
    });
}

function renderColorOptions() {
    const colorOptions = document.getElementById('colorOptions');
    const colors = colorPalettes.M;
    colorOptions.innerHTML = colors.map((color, index) => `
        <div class="color-option" style="background-color: ${color.value}" data-color="${color.value}" data-index="${index}" title="${color.name}"></div>
    `).join('');
    colorOptions.querySelectorAll('.color-option').forEach((opt, i) => {
        opt.addEventListener('click', () => selectColor(colors[i].value, i));
    });
}
function selectColor(color, index) {
    window.appState.selectedColor = color;
    document.querySelectorAll('.color-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}
document.addEventListener('DOMContentLoaded', () => {
  const t = applyLanguage();
  renderColorOptions();
  attachContinueHandler(t);
});
