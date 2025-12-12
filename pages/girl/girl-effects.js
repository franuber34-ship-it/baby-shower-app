// Efectos flotantes para niña - SVG embebidos
const svgTemplates = {
    corazon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.51 4.51" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><path class="fil0" d="M2.25 1.25c-0.03,-0.04 -0.11,-0.17 -0.2,-0.27 -0.67,-0.76 -1.79,-0.05 -1.57,0.96 0.14,0.7 0.8,1.05 1.3,1.46 0.15,0.12 0.3,0.24 0.42,0.38l0.05 0.07 0.23 -0.25c0.08,-0.07 0.17,-0.13 0.25,-0.21 0.44,-0.39 1.15,-0.7 1.3,-1.45 0.1,-0.49 -0.1,-1.01 -0.59,-1.21 -0.28,-0.11 -0.51,-0.09 -0.74,0.05 -0.27,0.16 -0.32,0.32 -0.45,0.47z"/></g></svg>`,
    
    estrella: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.66 8.66" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><polygon class="fil0" points="4.33,1.03 5.14,3.56 7.8,3.55 5.65,5.11 6.47,7.63 4.33,6.06 2.19,7.63 3.01,5.11 0.86,3.55 3.52,3.56 "/></g></svg>`,
    
    hojas: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.93 5.93" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><g id="_1078175304"><path class="fil0" d="M3.62 2.7l-0.06 0.06c-0.14,0.14 -0.25,0.31 -0.35,0.5 -0.07,0.13 -0.22,0.47 -0.24,0.61l0 0.05 0.04 0.04c0.15,0.05 0.27,0.13 0.48,0.13 0.78,0 1.14,-1.13 1.36,-1.65 0.21,-0.5 0.45,-0.59 0.49,-0.69 -0.69,-0.03 -1.61,0.07 -2.1,0.34 -0.28,0.16 -0.47,0.35 -0.58,0.65 -0.05,0.16 -0.07,0.36 -0.05,0.56 0.02,0.15 0.06,0.38 0.12,0.48 0.04,-0.03 0.21,-0.36 0.24,-0.41 0.09,-0.15 0.15,-0.25 0.25,-0.38 0.14,-0.18 0.44,-0.5 0.73,-0.53 -0.09,0.08 -0.24,0.13 -0.33,0.24z"/><path class="fil0" d="M2.41 3.78l-0.05 -0.04c-0.1,-0.1 -0.2,-0.19 -0.33,-0.27 -0.24,-0.15 -0.32,-0.11 -0.45,-0.16 0.29,-0.15 0.98,0.45 1.03,0.46 0,-0.1 -0.03,-0.23 -0.06,-0.34 -0.21,-0.63 -0.87,-0.56 -1.39,-0.4 -0.06,0.02 -0.54,0.18 -0.57,0.23 0.1,0.05 0.17,0.07 0.27,0.13 0.22,0.14 0.35,0.35 0.62,0.55 0.73,0.55 1.03,0 1.03,-0.03 -0.03,-0.06 -0.06,-0.08 -0.1,-0.13z"/><path class="fil0" d="M3.01 3.96l-0.04 -0.04 0 -0.05c-0.03,0.03 -0.01,-0.04 -0.03,0.04 0.03,0.04 0.02,0.03 0.07,0.05z"/><path class="fil0" d="M3.56 2.76l0.06 -0.06c-0.04,0.02 -0.02,0 -0.04,0.03 -0.02,0.02 -0.01,0 -0.02,0.03z"/><polygon class="fil0" points="2.41,3.78 2.4,3.75 2.36,3.74 "/></g></g></svg>`,
    
    huella: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.04 7.04" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><path class="fil0" d="M2.88 2.98c-0.09,-0.05 -0.08,-0.12 -0.09,-0.24l-0.1 -0.94c-0.02,-0.18 -0.02,-0.46 -0.11,-0.57 -0.23,-0.28 -0.6,-0.11 -0.67,0.08 -0.04,0.1 -0.02,0.21 -0.01,0.31 0.05,0.38 0.11,0.87 0.14,1.25 0,0.08 0.04,0.23 0,0.29 -0.05,0.09 -0.18,0.07 -0.22,-0.02 -0.08,-0.2 -0.25,-0.9 -0.33,-1.05 -0.2,-0.38 -0.8,-0.18 -0.71,0.26l0.16 0.53c0.05,0.18 0.1,0.35 0.16,0.53 0.06,0.19 0.08,0.37 0.11,0.59 0.16,0.96 0.27,1.75 1.26,2.2 0.83,0.37 1.63,-0.08 2.24,-0.6 0.19,-0.16 0.36,-0.33 0.55,-0.49 0.23,-0.2 0.54,-0.42 0.78,-0.62 0.07,-0.06 0.31,-0.25 0.2,-0.42 -0.16,-0.27 -0.72,-0.31 -1.02,-0.08 -0.06,0.05 -0.34,0.29 -0.39,0.3 -0.09,-0.05 -0.12,-0.15 -0.13,-0.27 -0.01,-0.17 0.02,-0.21 0.07,-0.35l0.69 -1.81c0.1,-0.27 -0.02,-0.45 -0.23,-0.53 -0.26,-0.1 -0.45,0.04 -0.52,0.24 -0.15,0.41 -0.31,0.81 -0.46,1.21 -0.03,0.08 -0.08,0.25 -0.13,0.29 -0.09,0.08 -0.24,0.01 -0.24,-0.12l0.17 -1.5c0.01,-0.11 0.04,-0.27 0.02,-0.37 -0.06,-0.37 -0.51,-0.51 -0.73,-0.23 -0.07,0.09 -0.07,0.18 -0.09,0.32l-0.19 1.7c-0.02,0.11 -0.08,0.11 -0.18,0.11z"/></g></svg>`,
    
    ondas: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.12 5.12" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><path class="fil0" d="M1.76 4.45c-0.1,-0.27 -0.27,-0.55 -0.03,-0.86l0.05 -0.05c-0.02,0.32 0.03,0.64 0.31,0.7 0.15,0.03 0.29,-0.06 0.3,-0.2 0,-0.16 -0.1,-0.24 -0.16,-0.35 -0.21,-0.39 -0.19,-0.91 0.08,-1.27l0.12 -0.13c0.04,-0.04 0.02,-0.04 0.07,-0.06 -0.1,0.24 -0.17,0.37 -0.08,0.67 0.05,0.2 0.19,0.4 0.29,0.54 0.1,0.14 0.25,0.34 0.29,0.55 0.05,0.23 -0.05,0.41 -0.18,0.58 -0.02,0.02 -0.01,0 -0.02,0.04 0.35,-0.08 0.57,-0.2 0.79,-0.46 0.04,-0.05 0.06,-0.09 0.1,-0.15 0.31,-0.52 0.2,-1.16 -0.17,-1.63 -0.02,-0.02 -0.04,-0.04 -0.06,-0.06 -0.03,-0.04 -0.11,-0.11 -0.14,-0.13 0.05,0.16 0.13,0.32 0.12,0.51 -0.03,0.5 -0.6,0.4 -0.53,-0.05 0.01,-0.09 0.04,-0.18 0.05,-0.26 0.08,-0.5 -0.02,-1.02 -0.32,-1.38l-0.16 -0.16c-0.03,-0.03 -0.04,-0.05 -0.08,-0.08 -0.1,-0.08 -0.24,-0.2 -0.38,-0.25 0.02,0.04 0.04,0.06 0.06,0.1 0.08,0.11 0.14,0.24 0.16,0.38 0.04,0.31 -0.08,0.58 -0.21,0.82l-0.14 0.23c-0.04,0.06 -0.09,0.14 -0.14,0.21 -0.04,0.07 -0.09,0.15 -0.14,0.22 -0.08,0.14 -0.18,0.28 -0.25,0.45 -0.07,0.18 -0.12,0.39 -0.11,0.6 0.02,0.32 0.09,0.49 0.26,0.71 0.02,0.02 0.02,0.03 0.04,0.05l0.17 0.15c0.04,0.02 0,0 0.04,0.02z"/></g></svg>`,
    
    animales: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.02 4.02" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><path class="fil0" d="M1.96 1.22c0.38,-0.08 0.49,0.51 0.11,0.58 -0.39,0.07 -0.5,-0.5 -0.11,-0.58zm0.04 0.3l0 0.16c-0.12,-0.01 -0.09,-0.06 -0.15,-0.07 0.03,0.15 0.29,0.14 0.33,-0.01 -0.07,0.02 -0.03,0.08 -0.15,0.08l0 -0.15c0.16,-0.08 0.07,-0.16 -0.02,-0.16 -0.13,0 -0.14,0.12 -0.01,0.15zm1.09 1.57c0.08,-0.44 -0.51,-0.64 -0.72,-0.28 -0.05,0.09 -0.08,0.23 -0.1,0.35 -0.07,0.36 0.21,0.51 0.43,0.45 0.13,-0.04 0.18,-0.12 0.24,-0.22 0.05,-0.09 0.12,-0.19 0.15,-0.3zm-2.15 0.01c0.02,0.1 0.1,0.22 0.15,0.3 0.06,0.1 0.12,0.18 0.24,0.21 0.15,0.04 0.28,-0.03 0.35,-0.1 0.08,-0.09 0.1,-0.21 0.07,-0.36 -0.05,-0.27 -0.1,-0.49 -0.38,-0.53 -0.26,-0.03 -0.49,0.21 -0.43,0.48zm1.96 -0.73c0.18,-0.08 0.35,-0.1 0.37,-0.31 0.03,-0.2 -0.12,-0.36 -0.31,-0.35 -0.06,0 -0.22,0.05 -0.26,0.08 -0.07,0.03 -0.24,0.32 -0.69,0.32 -0.44,0 -0.61,-0.29 -0.7,-0.33 -0.06,-0.03 -0.19,-0.08 -0.26,-0.07 -0.18,0 -0.33,0.16 -0.3,0.36 0.03,0.19 0.2,0.23 0.37,0.3l0.01 0.14c0.03,0.01 0.05,0 0.09,-0.01 0.2,-0.04 0.41,0.04 0.53,0.21 0.07,0.1 0.13,0.35 0.14,0.49 0.03,0.19 -0.07,0.22 0.24,0.18 -0.02,-0.21 0.05,-0.54 0.15,-0.68 0.06,-0.08 0.14,-0.15 0.25,-0.18 0.06,-0.02 0.12,-0.03 0.19,-0.03 0.06,0 0.13,0.02 0.17,0.02l0.01 -0.14zm-0.63 -1.32c0.12,-0.05 0.17,0.13 0.06,0.16 -0.12,0.04 -0.17,-0.12 -0.06,-0.16zm-0.58 0c0.11,-0.05 0.17,0.13 0.07,0.16 -0.12,0.04 -0.18,-0.12 -0.07,-0.16zm-0.01 -0.5c-0.06,-0.04 -0.12,-0.15 -0.31,-0.15 -0.27,0 -0.43,0.28 -0.34,0.51 0.07,0.15 0.16,0.16 0.24,0.21 -0.01,0.27 0.04,0.46 0.19,0.61 0.02,0.02 0.03,0.04 0.05,0.06 0.13,0.11 0.33,0.19 0.51,0.18 0.27,0 0.43,-0.12 0.55,-0.25 0.15,-0.16 0.19,-0.33 0.19,-0.6 0.12,-0.08 0.17,-0.06 0.23,-0.21 0.1,-0.24 -0.07,-0.51 -0.34,-0.51 -0.16,0 -0.23,0.08 -0.3,0.15 -0.22,-0.05 -0.34,-0.15 -0.67,0z"/></g></svg>`
};

const floatingEffects = {
    F: [
        { id: 'corazon' },
        { id: 'estrella' },
        { id: 'hojas' },
        { id: 'huella' },
        { id: 'ondas' },
        { id: 'animales' }
    ]
};

const effectLabels = {
    corazon: { es: 'Corazón', en: 'Heart' },
    estrella: { es: 'Estrella', en: 'Star' },
    hojas: { es: 'Hojas', en: 'Leaves' },
    huella: { es: 'Huellas', en: 'Footprints' },
    ondas: { es: 'Olas', en: 'Waves' },
    animales: { es: 'Animales', en: 'Animals' }
};

const langMap = {
    es: {
        title: 'Efectos Flotantes',
        desc: 'Personaliza tu invitación seleccionando hasta 3 efectos decorativos',
        selectedLabel: 'Efectos seleccionados',
        continue: 'Continuar →',
        alertMax: 'Solo puedes seleccionar hasta 3 efectos.',
        alertNone: 'Por favor selecciona al menos un efecto.',
        pageTitle: 'Efectos - Niña'
    },
    en: {
        title: 'Floating Effects',
        desc: 'Customize your invitation by selecting up to 3 decorative effects',
        selectedLabel: 'Selected effects',
        continue: 'Continue →',
        alertMax: 'You can only select up to 3 effects.',
        alertNone: 'Please select at least one effect.',
        pageTitle: 'Effects - Girl'
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
    const color = localStorage.getItem('girlSelectedColor') || '#E91E63';
    document.documentElement.style.setProperty('--primary-color', color);
    return color;
}

function getColoredSVG(effectId, color) {
    const svg = svgTemplates[effectId];
    if (!svg) return '';
    return svg.replace(/COLOR/g, color);
}

window.appState = { selectedEffects: [] };

function renderEffectsOptions() {
    const effectsOptions = document.getElementById('effectsOptions');
    const effects = floatingEffects.F;
    const selectedColor = applySelectedColor();

    effectsOptions.innerHTML = effects.map((effect) => {
        const mainIcon = getColoredSVG(effect.id, selectedColor);
        const mini1 = getColoredSVG(effect.id, selectedColor).replace('<svg', '<svg class="mini-ball mini-ball-1"');
        const mini2 = getColoredSVG(effect.id, selectedColor).replace('<svg', '<svg class="mini-ball mini-ball-2"');
        const mini3 = getColoredSVG(effect.id, selectedColor).replace('<svg', '<svg class="mini-ball mini-ball-3"');
        const label = getEffectLabel(effect.id);
        
        return `
            <div class="effect-option" data-effect="${effect.id}" title="${label}">
                <div class="ball-field">
                    ${mini1}
                    ${mini2}
                    ${mini3}
                </div>
                <div class="effect-icon main-ball-icon">${mainIcon}</div>
                <span>${label}</span>
            </div>
        `;
    }).join('');

    effects.forEach((effect, i) => {
        const opt = effectsOptions.querySelector(`[data-effect="${effect.id}"]`);
        if (opt) {
            opt.addEventListener('click', () => toggleEffect(effect.id, i));
        }
    });
    updateSelectedEffectsUI();
}
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
    const effects = floatingEffects.F;
    const effectCount = document.getElementById('effectCount');
    
    if (effectsOptions) {
        effectsOptions.querySelectorAll('.effect-option').forEach((opt, i) => {
            opt.classList.toggle('selected', window.appState.selectedEffects.includes(effects[i].id));
        });
    }
    
    if (effectCount) {
        effectCount.textContent = `${window.appState.selectedEffects.length}`;
    }
    
    const selectedList = document.getElementById('selectedEffectsList');
    if (selectedList) {
        selectedList.innerHTML = window.appState.selectedEffects.map(id => {
            const eff = effects.find(e => e.id === id);
            const label = getEffectLabel(id);
            return `<span class="selected-effect-label">${label}</span>`;
        }).join(' ');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const t = applyLanguage();
    renderEffectsOptions();
    attachContinueHandler(t);
});

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
        localStorage.setItem('girlSelectedEffects', JSON.stringify(effects));
        window.location.href = 'theme.html';
    });
}
