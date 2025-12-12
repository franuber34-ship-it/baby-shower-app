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
document.addEventListener('DOMContentLoaded', renderColorOptions);
