const themes = [
    { id: 'classic', name: 'Clásico', desc: 'Tipografía tradicional y elegante', fontFamily: 'Georgia, serif' },
    { id: 'modern', name: 'Moderno', desc: 'Estilo limpio y actual', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' },
    { id: 'playful', name: 'Divertido', desc: 'Tipografía alegre y desenfadada', fontFamily: 'Comic Sans MS, cursive' },
    { id: 'elegant', name: 'Elegante', desc: 'Estilo sofisticado y refinado', fontFamily: 'Garamond, serif' },
    { id: 'bold', name: 'Negrita', desc: 'Tipografía fuerte y llamativa', fontFamily: 'Arial Black, sans-serif' }
];
window.appState = window.appState || {};
window.appState.selectedTheme = null;

function applySelectedColor() {
    const selectedColor = localStorage.getItem('boySelectedColor') || '#3498DB';
    document.documentElement.style.setProperty('--primary-color', selectedColor);
    return selectedColor;
}

function renderThemeOptions() {
    const themeOptions = document.getElementById('themeOptions');
    const selectedColor = applySelectedColor();

    themeOptions.innerHTML = themes.map((theme, index) => `
        <div class="theme-option" data-theme="${theme.id}" title="${theme.name}" style="font-family: ${theme.fontFamily};">
            <span class="theme-name">${theme.name}</span>
            <span class="theme-desc">${theme.desc}</span>
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
document.addEventListener('DOMContentLoaded', renderThemeOptions);
