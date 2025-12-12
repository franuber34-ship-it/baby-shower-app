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
document.addEventListener('DOMContentLoaded', renderColorOptions);
