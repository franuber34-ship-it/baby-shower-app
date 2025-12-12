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

const langMap = {
  es: {
    pageTitle: 'Formulario - Niño',
    title: 'Completa la información',
    whatsapp: 'WhatsApp de Contacto',
    countryPlaceholder: 'Códigos de país',
    phonePlaceholder: '987654321',
    babyInfo: 'Información del Bebé',
    babyName: 'Nombre del bebé',
    parents: 'Padres',
    fatherName: 'Nombre del papá',
    motherName: 'Nombre de la mamá',
    event: 'Fecha y Hora del Evento',
    location: 'Ubicación',
    address: 'Dirección completa del evento',
    mapsLink: 'Enlace de Google Maps (opcional)',
    wazeLink: 'Enlace de Waze (opcional)',
    message: 'Mensaje de Invitación',
    messagePlaceholder: 'Escribe un mensaje especial para tus invitados...',
    gifts: 'Lista de Regalos',
    giftDefault: 'Usar lista de regalos por defecto',
    giftCustom: 'Agregar mi propia lista',
    customGiftsPlaceholder: 'Escribe cada regalo en una línea nueva\nEjemplo:\nPañales\nBiberón\nRopa de bebé',
    continue: 'Continuar →',
    phoneError: '⚠️ Ingresa un número válido de 8 a 15 dígitos (solo números)',
    countryError: '⚠️ Selecciona un código de país'
  },
  en: {
    pageTitle: 'Form - Boy',
    title: 'Complete the information',
    whatsapp: 'WhatsApp Contact',
    countryPlaceholder: 'Country codes',
    phonePlaceholder: '987654321',
    babyInfo: 'Baby Information',
    babyName: 'Baby name',
    parents: 'Parents',
    fatherName: 'Father\'s name',
    motherName: 'Mother\'s name',
    event: 'Event Date & Time',
    location: 'Location',
    address: 'Full event address',
    mapsLink: 'Google Maps link (optional)',
    wazeLink: 'Waze link (optional)',
    message: 'Invitation Message',
    messagePlaceholder: 'Write a special message for your guests...',
    gifts: 'Gift List',
    giftDefault: 'Use default gift list',
    giftCustom: 'Add my own list',
    customGiftsPlaceholder: 'Write each gift on a new line\nExample:\nDiapers\nBaby bottle\nBaby clothes',
    continue: 'Continue →',
    phoneError: '⚠️ Enter a valid number of 8 to 15 digits (numbers only)',
    countryError: '⚠️ Select a country code'
  }
};

const defaultGifts = {
  es: [
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
  ],
  en: [
    'Size 1 diapers',
    'Infant formula',
    'Baby bottles',
    'Baby clothes (0-3 months)',
    'Burp cloths and bibs',
    'Baby wipes',
    'Diaper cream',
    'Blankets',
    'Rattle toys',
    'Portable crib'
  ]
};

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

function getLang() {
  return localStorage.getItem('babyShowerLanguage') || 'es';
}

function getTexts() {
  const lang = getLang();
  return langMap[lang] || langMap.es;
}

function getDefaultGifts() {
  const lang = getLang();
  return defaultGifts[lang] || defaultGifts.es;
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

function applyLanguage() {
  const t = getTexts();
  document.documentElement.lang = getLang();
  document.title = t.pageTitle;

  const headerTitle = document.querySelector('.header h2');
  if (headerTitle) headerTitle.textContent = t.title;

  const sectionTitles = document.querySelectorAll('.form-section-title');
  const order = [t.whatsapp, t.babyInfo, t.parents, t.event, t.location, t.message, t.gifts];
  sectionTitles.forEach((el, idx) => {
    if (order[idx]) el.textContent = order[idx];
  });

  const countrySelect = document.getElementById('countryCode');
  if (countrySelect && countrySelect.options[0]) {
    countrySelect.options[0].textContent = t.countryPlaceholder;
  }

  const phoneInput = document.getElementById('phoneNumber');
  if (phoneInput) phoneInput.placeholder = t.phonePlaceholder;
  const babyNameInput = document.getElementById('babyName');
  if (babyNameInput) babyNameInput.placeholder = t.babyName;
  const fatherInput = document.getElementById('fatherName');
  if (fatherInput) fatherInput.placeholder = t.fatherName;
  const motherInput = document.getElementById('motherName');
  if (motherInput) motherInput.placeholder = t.motherName;
  const addressInput = document.getElementById('address');
  if (addressInput) addressInput.placeholder = t.address;
  const gmInput = document.getElementById('googleMapsLink');
  if (gmInput) gmInput.placeholder = t.mapsLink;
  const wazeInput = document.getElementById('wazeLink');
  if (wazeInput) wazeInput.placeholder = t.wazeLink;
  const messageArea = document.getElementById('invitationMessage');
  if (messageArea) messageArea.placeholder = t.messagePlaceholder;
  const customGiftList = document.getElementById('customGiftList');
  if (customGiftList) customGiftList.placeholder = t.customGiftsPlaceholder;

  const giftLabels = document.querySelectorAll('.gift-option-label span');
  if (giftLabels[0]) giftLabels[0].textContent = t.giftDefault;
  if (giftLabels[1]) giftLabels[1].textContent = t.giftCustom;

  const submitBtn = document.querySelector('.floating-action-btn');
  if (submitBtn) submitBtn.textContent = t.continue;
}

document.addEventListener('DOMContentLoaded', function() {
  applyLanguage();
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
    const t = getTexts();
    
    // Validar teléfono
    if (!validatePhoneNumber(phoneNumber)) {
      alert(t.phoneError);
      document.getElementById('phoneNumber').focus();
      return;
    }
    if (!countryCode) {
      alert(t.countryError);
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
      data.gifts = getDefaultGifts();
    }
    
    localStorage.setItem('boyFormData', JSON.stringify(data));
    window.location.href = 'preview.html';
  });
});
