// Paleta de colores para niña
const colorPalettes = {
    F: [
        { name: 'Rosa Suave', value: '#FFB6C1' },
        { name: 'Rosa Fuerte', value: '#EC4899' },
        { name: 'Rosa Coral', value: '#FF7F9E' },
        { name: 'Lavanda', value: '#E6E6FA' },
        { name: 'Lila', value: '#C8A2C8' },
        { name: 'Fucsia', value: '#FF1493' },
        { name: 'Melocotón', value: '#FFC4A3' },
        { name: 'Turquesa Suave', value: '#6EE7B7' }
    ]
};
window.appState = { selectedColor: null };

const langMap = {
    es: {
        title: 'Elige el color',
        continue: 'Continuar →',
        alertSelect: 'Por favor selecciona un color.',
        pageTitle: 'Color - Niña'
    },
    en: {
        title: 'Choose the color',
        continue: 'Continue →',
        alertSelect: 'Please select a color.',
        pageTitle: 'Color - Girl'
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
        localStorage.setItem('girlSelectedColor', color);
        window.location.href = 'effects.html';
    });
}

function renderColorOptions() {
    const colorOptions = document.getElementById('colorOptions');
    const colors = colorPalettes.F;
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
