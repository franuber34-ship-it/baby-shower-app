// Efectos flotantes para niño
const floatingEffects = {
    M: [
        { id: 'football', icon: '<img src="../../recursos/boy/balon_boy.svg" alt="Balón" width="32" height="32">' },
        { id: 'footprints', icon: '<img src="../../recursos/boy/huella_boy.svg" alt="Huellas" width="32" height="32">' },
        { id: 'animals', icon: '<img src="../../recursos/boy/animales_boy.svg" alt="Animales" width="32" height="32">' },
        { id: 'waves', icon: '<img src="../../recursos/boy/ondas_boy.svg" alt="Olas" width="32" height="32">' },
        { id: 'cars', icon: '<img src="../../recursos/boy/carros_boy.svg" alt="Carros" width="32" height="32">' },
        { id: 'tools', icon: '<img src="../../recursos/boy/herramientas_boy.svg" alt="Herramientas" width="32" height="32">' }
    ]
};

const effectLabels = {
    football: { es: 'Balón', en: 'Ball' },
    footprints: { es: 'Huellas', en: 'Footprints' },
    animals: { es: 'Animales', en: 'Animals' },
    waves: { es: 'Olas', en: 'Waves' },
    cars: { es: 'Carros', en: 'Cars' },
    tools: { es: 'Herramientas', en: 'Tools' }
};

window.appState = { selectedEffects: [] };

const langMap = {
    es: {
        title: 'Efectos Flotantes',
        desc: 'Personaliza tu invitación seleccionando hasta 3 efectos decorativos',
        selectedLabel: 'Efectos seleccionados',
        continue: 'Continuar →',
        alertMax: 'Solo puedes seleccionar hasta 3 efectos.',
        alertNone: 'Por favor selecciona al menos un efecto.',
        pageTitle: 'Efectos - Niño'
    },
    en: {
        title: 'Floating Effects',
        desc: 'Customize your invitation by selecting up to 3 decorative effects',
        selectedLabel: 'Selected effects',
        continue: 'Continue →',
        alertMax: 'You can only select up to 3 effects.',
        alertNone: 'Please select at least one effect.',
        pageTitle: 'Effects - Boy'
    }
};

let currentTexts = null;
let feedbackTimeoutId = null;

function getLang() {
    return localStorage.getItem('babyShowerLanguage') || 'es';
}

function getEffectLabel(effectId) {
    const lang = getLang();
    const label = effectLabels[effectId];
    if (!label) return effectId;
    return label[lang] || label.es;
}

function applyLanguage() {
    const lang = getLang();
    const t = langMap[lang] || langMap.es;
    const h2 = document.querySelector('.header h2');
    if (h2) h2.textContent = t.title;
    const p = document.querySelector('.header p');
    if (p) p.textContent = t.desc;
    const selLabel = document.querySelector('.selected-effects p');
    if (selLabel) {
        const countSpan = selLabel.querySelector('#effectCount');
        const countText = countSpan ? countSpan.textContent : '0';
        selLabel.innerHTML = `${t.selectedLabel}: <span id="effectCount">${countText}</span>/3`;
    }
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

function applySelectedColor() {
    const selectedColor = localStorage.getItem('boySelectedColor') || '#3498DB';
    document.documentElement.style.setProperty('--primary-color', selectedColor);
    return selectedColor;
}

function getEffectSVG(effectId, selectedColor, size = 32) {
    const commonAttrs = `width="${size}" height="${size}"`;
    switch (effectId) {
        case 'footprints':
            return `<svg ${commonAttrs} viewBox="0 0 0.35 0.35" xmlns="http://www.w3.org/2000/svg"><g><path fill="${selectedColor}" d="M0.14 0.15c0,-0.01 0,-0.01 0,-0.01l-0.01 -0.05c0,-0.01 0,-0.02 0,-0.03 -0.01,-0.01 -0.03,0 -0.04,0 0,0.01 0,0.01 0,0.02 0.01,0.02 0.01,0.04 0.01,0.06 0,0.01 0,0.01 0,0.02 0,0 -0.01,0 -0.01,0 0,-0.01 -0.01,-0.05 -0.02,-0.06 -0.01,-0.02 -0.04,-0.01 -0.03,0.02l0.01 0.02c0,0.01 0,0.02 0,0.03 0.01,0.01 0.01,0.02 0.01,0.03 0.01,0.05 0.01,0.08 0.06,0.11 0.04,0.01 0.08,-0.01 0.11,-0.03 0.01,-0.01 0.02,-0.02 0.03,-0.03 0.01,-0.01 0.03,-0.02 0.04,-0.03 0,0 0.01,-0.01 0.01,-0.02 -0.01,-0.01 -0.04,-0.01 -0.05,0 0,0 -0.02,0.01 -0.02,0.01 -0.01,0 -0.01,-0.01 -0.01,-0.01 0,-0.01 0,-0.01 0.01,-0.02l0.03 -0.09c0,-0.01 0,-0.02 -0.01,-0.02 -0.01,-0.01 -0.02,0 -0.03,0.01 0,0.02 -0.01,0.04 -0.02,0.06 0,0 0,0.01 -0.01,0.01 0,0.01 -0.01,0 -0.01,0l0.01 -0.08c0,0 0,-0.01 0,-0.02 0,-0.01 -0.02,-0.02 -0.03,-0.01 -0.01,0.01 -0.01,0.01 -0.01,0.02l-0.01 0.08c0,0.01 0,0.01 -0.01,0.01z"/></g></svg>`;
        case 'animals':
            return `<svg ${commonAttrs} viewBox="0 0 0.34 0.34" xmlns="http://www.w3.org/2000/svg"><g><path fill="${selectedColor}" d="M0.16 0.1c0.04,-0.01 0.04,0.04 0.01,0.05 -0.03,0.01 -0.04,-0.04 -0.01,-0.05zm0.01 0.03l0 0.01c-0.01,0 -0.01,-0.01 -0.02,-0.01 0.01,0.02 0.03,0.02 0.03,0 0,0.01 0,0.01 -0.01,0.01l0 -0.01c0.01,-0.01 0.01,-0.02 0,-0.02 -0.01,0 -0.01,0.01 0,0.02zm0.09 0.13c0,-0.04 -0.04,-0.06 -0.06,-0.03 -0.01,0.01 -0.01,0.02 -0.01,0.03 -0.01,0.03 0.02,0.05 0.03,0.04 0.02,0 0.02,-0.01 0.02,-0.02 0.01,0 0.02,-0.01 0.02,-0.02zm-0.18 0c0,0.01 0.01,0.02 0.01,0.02 0.01,0.01 0.01,0.02 0.02,0.02 0.01,0 0.02,0 0.03,-0.01 0.01,-0.01 0.01,-0.01 0.01,-0.03 -0.01,-0.02 -0.01,-0.04 -0.04,-0.04 -0.02,0 -0.04,0.02 -0.03,0.04zm0.16 -0.06c0.02,-0.01 0.03,-0.01 0.03,-0.03 0.01,-0.02 -0.01,-0.03 -0.02,-0.03 -0.01,0 -0.02,0.01 -0.03,0.01 0,0 -0.02,0.03 -0.05,0.03 -0.04,0 -0.05,-0.03 -0.06,-0.03 -0.01,0 -0.02,-0.01 -0.02,-0.01 -0.02,0 -0.03,0.02 -0.03,0.03 0,0.02 0.02,0.02 0.03,0.03l0 0.01c0.01,0 0.01,0 0.01,0 0.02,-0.01 0.04,0 0.05,0.02 0,0 0.01,0.02 0.01,0.04 0,0.01 -0.01,0.02 0.02,0.01 0,-0.02 0,-0.04 0.01,-0.06 0,0 0.01,-0.01 0.02,-0.01 0.01,0 0.01,0 0.02,0 0,0 0.01,0 0.01,0l0 -0.01zm-0.05 -0.11c0.01,-0.01 0.01,0.01 0,0.01 -0.01,0 -0.01,-0.01 0,-0.01zm-0.05 0c0.01,-0.01 0.02,0.01 0.01,0.01 -0.01,0 -0.02,-0.01 -0.01,-0.01zm0 -0.04c-0.01,-0.01 -0.01,-0.02 -0.03,-0.02 -0.02,0 -0.03,0.03 -0.02,0.05 0,0.01 0.01,0.01 0.02,0.01 0,0.03 0,0.04 0.01,0.05 0,0.01 0,0.01 0.01,0.01 0.01,0.01 0.02,0.01 0.04,0.01 0.02,0 0.03,-0.01 0.04,-0.02 0.02,-0.01 0.02,-0.02 0.02,-0.05 0.01,0 0.01,0 0.02,-0.01 0.01,-0.02 -0.01,-0.05 -0.03,-0.05 -0.01,0 -0.02,0.01 -0.02,0.02 -0.02,-0.01 -0.03,-0.02 -0.06,0z"/></g></svg>`;
        case 'waves':
            return `<svg ${commonAttrs} viewBox="0 0 0.35 0.35" xmlns="http://www.w3.org/2000/svg"><g><path fill="${selectedColor}" d="M0.25 0.23c0.01,0.02 0,0.01 -0.02,0.01 -0.03,0 -0.11,0.01 -0.13,0 -0.01,-0.01 0.01,-0.01 0.02,-0.01 0.03,0 0.12,0 0.13,0zm-0.18 -0.05c0.01,-0.01 0.02,0 0.02,0.01 0,0.01 -0.01,0.02 -0.01,0.02 -0.03,0.01 -0.04,-0.03 -0.01,-0.03zm0.19 0.02c0,-0.03 0.03,-0.03 0.04,-0.01 0,0.02 -0.03,0.03 -0.04,0.01zm-0.17 -0.07c0,0 0,0 0,0 0,0 0,0 0,-0.01l0.01 -0.01c0.01,-0.01 0.01,-0.02 0.02,-0.02l0.11 0c0.01,0 0.01,0 0.01,0.01 0,0 0.02,0.03 0.02,0.03 -0.01,0 -0.15,0 -0.17,0zm0.21 0c-0.01,-0.01 -0.01,0 -0.02,-0.01 -0.01,0 -0.02,-0.01 -0.03,-0.02 0,0 0,0 0,-0.01 -0.01,-0.01 -0.01,-0.01 -0.02,-0.01l-0.07 0c-0.04,0 -0.04,-0.01 -0.08,0.03 0,0.01 0,0.01 -0.02,0.01 0,0.01 -0.01,0 -0.01,0.02 0,0.01 0.01,0.01 0.01,0.01 0,0 -0.02,0.01 -0.02,0.03 -0.01,0.01 0,0.04 0,0.05 0,0.03 -0.01,0.04 0.01,0.04 0.01,0 0.02,0.01 0.03,0 0.01,0 0.01,0 0.01,-0.01l0.17 0c0.01,0.01 0,0.01 0.01,0.01 0.01,0 0.01,0 0.01,0 0,0 0.01,0 0.01,0 0.01,0 0.02,0.01 0.02,0 0.01,-0.01 0.01,-0.06 0.01,-0.07 0,-0.02 -0.01,-0.03 -0.01,-0.03 -0.01,-0.02 -0.02,-0.02 -0.02,-0.02 0,0 0,0 0,0 0.01,-0.01 0.02,0 0.01,-0.02z"/></g></svg>`;
        case 'cars':
            return `<svg ${commonAttrs} viewBox="0 0 0.34 0.34" xmlns="http://www.w3.org/2000/svg"><g><path fill="${selectedColor}" d="M0.08 0.28c-0.01,0 -0.01,-0.01 -0.02,-0.01 -0.01,-0.01 -0.01,-0.01 0,-0.02 0,-0.02 0,-0.02 0.04,-0.03l0.02 0.02c-0.01,0.04 0,0.04 -0.04,0.04zm-0.04 -0.22c0.01,0.03 0.03,0.03 0.05,0.05l0.04 0.04c0.01,0 0.02,0 0.02,-0.01l-0.05 -0.05c-0.02,-0.01 -0.01,-0.02 -0.03,-0.03 0,-0.01 -0.01,-0.01 -0.01,-0.01 -0.01,0 -0.01,0.01 -0.02,0.01zm0.13 0.16c0.02,0.01 0.03,0.03 0.05,0.05 0.03,0.03 0.04,0.04 0.06,0.02 0.01,-0.01 0.02,-0.02 0.01,-0.03l-0.08 -0.09 -0.04 0.05zm0.13 -0.14c-0.02,0.02 -0.02,0.04 -0.05,0.01 -0.04,-0.03 0,-0.03 0.01,-0.06 -0.02,0 -0.03,0.01 -0.05,0.02 -0.01,0.01 -0.01,0.02 -0.01,0.05 0,0 -0.01,0.01 -0.01,0.01l-0.08 0.08c-0.02,0.02 -0.02,0 -0.05,0.02 -0.03,0.01 -0.04,0.05 -0.01,0.08 0.03,0.03 0.09,0.01 0.09,-0.04 0,-0.02 -0.01,0 0.04,-0.05 0,-0.01 0.05,-0.06 0.06,-0.06 0.01,0 0.03,0 0.05,-0.01 0.01,-0.02 0.02,-0.03 0.01,-0.05z"/></g></svg>`;
        case 'tools':
            return `<svg ${commonAttrs} viewBox="0 0 0.34 0.34" xmlns="http://www.w3.org/2000/svg"><g><path fill="${selectedColor}" d="M0.12 0.3c-0.01,-0.02 -0.02,-0.04 0,-0.06l0 0c0,0.02 0,0.04 0.02,0.04 0.01,0 0.02,0 0.02,-0.01 0,-0.01 -0.01,-0.02 -0.01,-0.02 -0.02,-0.03 -0.01,-0.06 0,-0.09l0.01 -0.01c0,0 0,0 0.01,0 -0.01,0.01 -0.01,0.02 -0.01,0.04 0.01,0.02 0.01,0.03 0.02,0.04 0.01,0.01 0.02,0.02 0.02,0.04 0,0.01 0,0.02 -0.01,0.03 0,0.01 0,0.01 0,0.01 0.02,-0.01 0.03,-0.02 0.05,-0.03 0,-0.01 0,-0.01 0.01,-0.01 0.02,-0.04 0.01,-0.08 -0.02,-0.11 0,0 0,0 0,-0.01 0,0 -0.01,0 -0.01,0 0,0.01 0.01,0.02 0.01,0.03 0,0.03 -0.04,0.03 -0.04,0 0,-0.01 0.01,-0.02 0.01,-0.02 0,-0.03 0,-0.07 -0.02,-0.09l-0.01 -0.01c-0.01,-0.01 -0.01,-0.01 -0.01,-0.01 -0.01,0 -0.02,-0.01 -0.03,-0.02 0.01,0.01 0.01,0.01 0.01,0.01 0,0.01 0.01,0.02 0.01,0.03 0,0.02 -0.01,0.03 -0.01,0.05l-0.01 0.02c-0.01,0 -0.01,0.01 -0.01,0.01 -0.01,0 -0.01,0.01 -0.01,0.01 -0.01,0.01 -0.01,0.02 -0.02,0.03 0,0.02 -0.01,0.03 -0.01,0.04 0,0.03 0.01,0.04 0.02,0.05 0,0 0,0 0,0.01l0.01 0.01c0.01,0 0,0 0.01,0z"/></g></svg>`;
        case 'football':
        default:
            return getFootballSVG(selectedColor).replace('width="32"', `width="${size}"`).replace('height="32"', `height="${size}"`);
    }
}

function getFootballSVG(selectedColor) {
    const ballPath = "M0.08 0.13c0,0 0,0 0,0 0.03,0.02 0.04,0.07 0.05,0.09 0.01,0.01 0.01,0.03 0.02,0.04 0.01,0.02 0.02,0.03 0.05,0.04 0.01,0 0.02,0 0.02,0 0.02,-0.01 0.04,-0.02 0.05,-0.03 0,0 0,0 0,0 0.01,-0.01 0.02,-0.02 0.02,-0.03 0,0 0,0 0,0 0,-0.01 0,-0.01 0,-0.01 -0.01,-0.01 -0.01,-0.01 -0.01,-0.02 -0.01,-0.01 -0.02,-0.02 -0.03,-0.02l-0.01 -0.01c-0.02,-0.02 -0.05,-0.04 -0.07,-0.05 -0.02,-0.01 -0.06,-0.02 -0.08,-0.03 0,0.01 -0.01,0.02 -0.01,0.03zm0 -0.03c-0.01,0 -0.01,0 -0.02,0.01 -0.01,0 -0.01,0 -0.01,0 -0.01,0.01 -0.01,0.03 -0.01,0.04 0,-0.01 0,-0.01 0,-0.01 0.01,-0.01 0.02,-0.01 0.03,-0.01l0.01 -0.03zm-0.03 0c0.03,0 0.02,0 0.04,0 0,-0.01 0.01,-0.02 0.01,-0.02 0,0 -0.01,-0.01 -0.01,-0.02 -0.01,0.01 -0.03,0.03 -0.04,0.04zm0.06 -0.02c0.01,-0.02 0.04,-0.04 0.06,-0.04 0,0 0,0 0,0l0 -0.01c-0.02,0 -0.05,0.01 -0.07,0.02 0,0 -0.01,0.01 -0.01,0.01 0,0 0,0.01 0.01,0.01 0,0 0,0.01 0.01,0.01zm-0.05 0.17c0,-0.01 0,-0.01 -0.01,-0.02 0,-0.01 0,-0.03 0,-0.05 0.01,-0.01 0.01,-0.02 0.01,-0.04 0.01,0 0.01,-0.01 0.01,-0.01 -0.02,0 -0.03,0.03 -0.04,0.03 0,0.02 0.01,0.04 0.01,0.06 0.01,0.01 0.01,0.02 0.02,0.03zm0.05 -0.17c0.05,0 0.09,-0.03 0.14,-0.01 0.01,0 0.01,0 0.02,0.01 0,0 0.01,0 0.01,0.01 0,-0.01 -0.01,-0.01 -0.01,-0.02 0,0 0,0 -0.01,0 -0.02,-0.02 -0.03,-0.03 -0.06,-0.03 -0.02,-0.01 -0.02,-0.01 -0.03,0 -0.01,0.01 -0.03,0.01 -0.04,0.02 0,0.01 -0.01,0.02 -0.02,0.02zm-0.04 0.05c0,0.01 -0.01,0.03 -0.01,0.03 0,0.03 0,0.06 0,0.08 0,0.02 0,0.02 0.01,0.03 0,0 0.01,0 0.01,0l0 0.01c0.01,0 0.01,0 0.01,0 0.02,0.02 0.05,0.03 0.08,0.03 0.01,0 0.03,0 0.04,0 -0.02,-0.01 -0.04,-0.02 -0.05,-0.03 -0.02,-0.01 -0.02,-0.03 -0.03,-0.05 -0.01,-0.02 -0.01,-0.04 -0.02,-0.06 -0.01,-0.01 -0.02,-0.04 -0.04,-0.04zm0.02 -0.03c0.01,0 0.02,0 0.02,0 0.03,0.01 0.08,0.03 0.1,0.05 0.01,0.01 0.02,0.01 0.03,0.02l0.01 0.01c0.01,0.01 0.03,0.03 0.04,0.04 0,0 0.01,0.01 0.01,0.01 0,0 0,-0.01 0,-0.02 0.01,-0.02 0.01,-0.05 0.01,-0.07 -0.01,-0.01 -0.01,-0.02 -0.02,-0.04 -0.01,0 -0.02,-0.01 -0.03,-0.02 -0.05,-0.03 -0.09,0.01 -0.14,0 0,0 -0.01,0 -0.01,0 0,0 0,0 0,0.01 -0.01,0 -0.01,0.01 -0.02,0.01z";
    return `<svg width="32" height="32" viewBox="0 0 0.34 0.34" xmlns="http://www.w3.org/2000/svg"><g><path fill="${selectedColor}" d="${ballPath}"/></g></svg>`;
}

function renderEffectsOptions() {
    const effectsOptions = document.getElementById('effectsOptions');
    const effects = floatingEffects.M;
    const selectedColor = applySelectedColor();

    effectsOptions.innerHTML = effects.map((effect) => {
        const mainIcon = getEffectSVG(effect.id, selectedColor, 32);
        const mini1 = getEffectSVG(effect.id, selectedColor, 25).replace('<svg', '<svg class="mini-ball mini-ball-1"');
        const mini2 = getEffectSVG(effect.id, selectedColor, 25).replace('<svg', '<svg class="mini-ball mini-ball-2"');
        const mini3 = getEffectSVG(effect.id, selectedColor, 25).replace('<svg', '<svg class="mini-ball mini-ball-3"');
        const label = getEffectLabel(effect.id);
        return `<div class="effect-option" data-effect="${effect.id}" title="${label}">
            <div class="ball-field">
                ${mini1}
                ${mini2}
                ${mini3}
            </div>
            <div class="effect-icon main-ball-icon">${mainIcon}</div>
            <span>${label}</span>
        </div>`;
    }).join('');

    effectsOptions.querySelectorAll('.effect-option').forEach((opt, i) => {
        opt.addEventListener('click', () => toggleEffect(effects[i].id, i));
    });
    updateSelectedEffectsUI();
}

document.addEventListener('DOMContentLoaded', () => {
    const t = applyLanguage();
    renderEffectsOptions();
    attachContinueHandler(t);
});

function toggleEffect(effectId, index) {
    const idx = window.appState.selectedEffects.indexOf(effectId);
    if (idx > -1) {
        window.appState.selectedEffects.splice(idx, 1);
    } else {
        if (window.appState.selectedEffects.length >= 3) {
            const t = getTexts();
            showFeedback(t.alertMax, 'warn');
            return;
        }
        window.appState.selectedEffects.push(effectId);
    }
    updateSelectedEffectsUI();
}

function updateSelectedEffectsUI() {
    const effectsOptions = document.getElementById('effectsOptions');
    const effectCount = document.getElementById('effectCount');
    
    if (effectsOptions) {
        effectsOptions.querySelectorAll('.effect-option').forEach(opt => {
            const effectId = opt.dataset.effect;
            if (window.appState.selectedEffects.includes(effectId)) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });
    }
    
    if (effectCount) {
        effectCount.textContent = `${window.appState.selectedEffects.length}`;
    }
}

function attachContinueHandler(t) {
  const btn = document.getElementById('continueBtn');
  if (!btn) return;
  const clone = btn.cloneNode(true);
  btn.parentNode.replaceChild(clone, btn);
  clone.addEventListener('click', () => {
    const effects = window.appState?.selectedEffects || [];
    if (effects.length === 0) {
      showFeedback(t.alertNone, 'warn');
      return;
    }
    localStorage.setItem('boySelectedEffects', JSON.stringify(effects));
    window.location.href = 'theme.html';
  });
}
