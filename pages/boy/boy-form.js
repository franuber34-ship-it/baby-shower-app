// Validar formato de teléfono (8-15 dígitos)
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^[0-9]{8,15}$/;
  return phoneRegex.test(phoneNumber.replace(/[\s\-\(\)]/g, ''));
}

// Catálogo minimalista de países (siglas + código) para WhatsApp/SMS
const countryOptions = [
  { iso: 'US', code: '+1' },
  { iso: 'CA', code: '+1' },
  { iso: 'MX', code: '+52' },
  { iso: 'BR', code: '+55' },
  { iso: 'AR', code: '+54' },
  { iso: 'CO', code: '+57' },
  { iso: 'PE', code: '+51' },
  { iso: 'CL', code: '+56' },
  { iso: 'ES', code: '+34' },
  { iso: 'FR', code: '+33' },
  { iso: 'IT', code: '+39' },
  { iso: 'DE', code: '+49' },
  { iso: 'PT', code: '+351' },
  { iso: 'IN', code: '+91' },
  { iso: 'PH', code: '+63' }
];

const COUNTRY_STORAGE_KEY = 'invitationCountryCode';

function detectPreferredIso() {
  const stored = localStorage.getItem(COUNTRY_STORAGE_KEY);
  if (stored) return stored;
  const lang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
  const region = (lang.split('-')[1] || '').toUpperCase();
  const langCode = (lang.split('-')[0] || '').toLowerCase();
  const isoFromRegion = countryOptions.find(c => c.iso === region)?.iso;
  if (isoFromRegion) return isoFromRegion;
  const langFallback = {
    es: 'ES', en: 'US', pt: 'BR', fr: 'FR', it: 'IT', de: 'DE', hi: 'IN', tl: 'PH'
  };
  return langFallback[langCode] || 'ES';
}

function renderCountrySelect(selectEl) {
  if (!selectEl) return;
  const preferredIso = detectPreferredIso();
  const sorted = [...countryOptions].sort((a, b) => {
    if (a.iso === preferredIso) return -1;
    if (b.iso === preferredIso) return 1;
    return 0;
  });
  selectEl.innerHTML = sorted
    .map(({ iso, code }) => `<option value="${code}" ${iso === preferredIso ? 'selected' : ''}>${iso} ${code}</option>`)
    .join('');
  selectEl.addEventListener('change', () => {
    const selectedIso = countryOptions.find(c => c.code === selectEl.value)?.iso;
    if (selectedIso) localStorage.setItem(COUNTRY_STORAGE_KEY, selectedIso);
  });
}

function getBoyFormData() {
  return {
    color: localStorage.getItem('boySelectedColor'),
    effects: JSON.parse(localStorage.getItem('boySelectedEffects') || '[]'),
    theme: localStorage.getItem('boySelectedTheme'),
  };
}

// Regalos predefinidos para niño
const defaultGiftsBoy = [
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
  const selectedColor = localStorage.getItem('boySelectedColor') || '#3498DB';
  document.documentElement.style.setProperty('--primary-color', selectedColor);
  
  // Renderizar selector de país (siglas + código) y aplicar estilo minimalista
  const countrySelect = document.getElementById('countryCode');
  renderCountrySelect(countrySelect);
  if (countrySelect) {
    countrySelect.style.cssText = `
      width: 110px;
      padding: 12px 8px;
      border: 2px solid ${selectedColor};
      border-radius: 10px;
      font-size: 13px;
      font-weight: 700;
      color: ${selectedColor};
      background: white;
      cursor: pointer;
      transition: all 0.25s ease;
      letter-spacing: 0.02em;
    `;
    countrySelect.addEventListener('focus', function() {
      this.style.background = `${selectedColor}12`;
      this.style.boxShadow = `0 0 0 3px ${selectedColor}22`;
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

  const form = document.getElementById('boyForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = getBoyFormData();
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    // Validar teléfono
    if (!validatePhoneNumber(phoneNumber)) {
      alert('⚠️ Ingresa un número válido de 8 a 15 dígitos (solo números)');
      document.getElementById('phoneNumber').focus();
      return;
    }
    if (!countryCode) {
      alert('⚠️ Selecciona un código de país');
      countrySelect.focus();
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
      data.gifts = defaultGiftsBoy;
    }
    
    localStorage.setItem('boyFormData', JSON.stringify(data));
    window.location.href = 'preview.html';
  });
});
