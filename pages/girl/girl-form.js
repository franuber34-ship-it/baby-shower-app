// Validar formato de teléfono (8-15 dígitos)
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^[0-9]{8,15}$/;
  return phoneRegex.test(phoneNumber.replace(/[\s\-\(\)]/g, ''));
}

function getGirlFormData() {
  return {
    color: localStorage.getItem('girlSelectedColor'),
    effects: JSON.parse(localStorage.getItem('girlSelectedEffects') || '[]'),
    theme: localStorage.getItem('girlSelectedTheme'),
  };
}

// Regalos predefinidos para niña
const defaultGiftsGirl = [
  'Pañales talla 1',
  'Fórmula infantil',
  'Biberones',
  'Ropa de bebé (0-3 meses)',
  'Mudas y baberos',
  'Toallitas húmedas',
  'Crema para el pañal',
  'Mantas y cobijas',
  'Juguetes sonajeros',
  'Cuna portátil'
];

document.addEventListener('DOMContentLoaded', function() {
  const selectedColor = localStorage.getItem('girlSelectedColor') || '#E91E63';
  document.documentElement.style.setProperty('--primary-color', selectedColor);
  
  // Aplicar estilo al selector de país con el color seleccionado
  const countrySelect = document.getElementById('countryCode');
  if (countrySelect) {
    countrySelect.style.cssText = `
      width: 100px;
      padding: 12px 8px;
      border: 2px solid ${selectedColor};
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      color: ${selectedColor};
      background: white;
      cursor: pointer;
      transition: all 0.3s ease;
    `;
    countrySelect.addEventListener('focus', function() {
      this.style.background = `${selectedColor}15`;
      this.style.boxShadow = `0 0 0 3px ${selectedColor}25`;
    });
    countrySelect.addEventListener('blur', function() {
      this.style.background = 'white';
      this.style.boxShadow = 'none';
    });
  }

  // Manejar cambio de tipo de lista de regalos
  document.querySelectorAll('input[name="giftListType"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const customList = document.getElementById('customGiftList');
      if (this.value === 'custom') {
        customList.classList.remove('hidden');
      } else {
        customList.classList.add('hidden');
      }
    });
  });

  const form = document.getElementById('girlForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = getGirlFormData();
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    // Validar teléfono
    if (!validatePhoneNumber(phoneNumber)) {
      alert('⚠️ Por favor ingresa un número de teléfono válido (8-15 dígitos)');
      document.getElementById('phoneNumber').focus();
      return;
    }
    
    data.phone = countryCode + phoneNumber;
    data.babyName = document.getElementById('babyName').value;
    data.fatherName = document.getElementById('fatherName').value;
    data.motherName = document.getElementById('motherName').value;
    data.eventDate = document.getElementById('eventDate').value;
    data.eventTime = document.getElementById('eventTime').value;
    data.address = document.getElementById('address').value;
    data.googleMapsLink = document.getElementById('googleMapsLink').value;
    data.wazeLink = document.getElementById('wazeLink').value;
    data.invitationMessage = document.getElementById('invitationMessage').value;
    
    // Capturar lista de regalos
    const giftListType = document.querySelector('input[name="giftListType"]:checked').value;
    if (giftListType === 'custom') {
      const customGifts = document.getElementById('customGiftList').value
        .split('\n')
        .map(gift => gift.trim())
        .filter(gift => gift.length > 0);
      data.gifts = customGifts;
    } else {
      data.gifts = defaultGiftsGirl;
    }
    
    localStorage.setItem('girlFormData', JSON.stringify(data));
    window.location.href = 'preview.html';
  });
});
