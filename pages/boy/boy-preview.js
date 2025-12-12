// Funciones para manejar spinner de carga
function hideLoadingSpinner() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.classList.add('hidden');
  }
}

function showLoadingSpinner() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) {
    spinner.classList.remove('hidden');
  }
}

const langMap = {
  es: {
    pageTitle: 'Baby Shower - Invitación Digital',
    adminError: 'Error al cargar la vista. Por favor intenta de nuevo.',
    guestError: 'Error al cargar la invitación. Por favor intenta de nuevo.',
    copyLink: 'Enlace copiado',
    shareMessage: '¡Estás invitado a mi Baby Shower! 👶\n\nMira los detalles aquí:',
    rateLimit: '⏳ Ya confirmaste tu asistencia recientemente. Por favor intenta de nuevo en {{minutes}} minuto(s).',
    successTitle: 'Asistencia confirmada',
    successLine1: 'Gracias {{name}}',
    successLine2: 'Se confirmó la asistencia para {{count}} persona(s)',
    confirmWhatsGreeting: 'Hola, soy {{name}}.',
    confirmWhatsBody: 'Confirmo mi asistencia al Baby Shower de {{baby}}',
    confirmWhatsCountSingular: 'persona',
    confirmWhatsCountPlural: 'personas',
    confirmWhatsContact: 'Contacto: {{phone}}'
  },
  en: {
    pageTitle: 'Baby Shower - Digital Invitation',
    adminError: 'Error loading the view. Please try again.',
    guestError: 'Error loading the invitation. Please try again.',
    copyLink: 'Link copied',
    shareMessage: 'You are invited to my Baby Shower! 👶\n\nSee the details here:',
    rateLimit: '⏳ You already confirmed recently. Please try again in {{minutes}} minute(s).',
    successTitle: 'Attendance confirmed',
    successLine1: 'Thank you {{name}}',
    successLine2: 'Attendance confirmed for {{count}} person(s)',
    confirmWhatsGreeting: 'Hi, this is {{name}}.',
    confirmWhatsBody: 'I confirm my attendance to the Baby Shower for {{baby}}',
    confirmWhatsCountSingular: 'person',
    confirmWhatsCountPlural: 'people',
    confirmWhatsContact: 'Contact: {{phone}}'
  }
};

let cachedLang;
function getLang() {
  if (cachedLang) return cachedLang;
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get('lang');
  if (paramLang && (paramLang === 'en' || paramLang === 'es')) {
    localStorage.setItem('babyShowerLanguage', paramLang);
    cachedLang = paramLang;
    return cachedLang;
  }
  cachedLang = localStorage.getItem('babyShowerLanguage') || 'es';
  return cachedLang;
}

function getTexts() {
  const lang = getLang();
  return langMap[lang] || langMap.es;
}

function translateHtml(html, lang) {
  if (lang !== 'en') return html;
  const replacements = {
    '¡ES UN NIÑO!': "IT'S A BOY!",
    'LOS FUTUROS PAPÁS': 'PROUD PARENTS',
    'Te invitan a celebrar la llegada de': 'Invite you to celebrate the arrival of',
    'Personalización': 'Customization',
    'Tema:': 'Theme:',
    'Color:': 'Color:',
    'Efectos:': 'Effects:',
    'seleccionados': 'selected',
    'Mensaje:': 'Message:',
    'Lista de Regalos:': 'Gift List:',
    'Lista de Regalos': 'Gift List',
    'Compartir Invitación': 'Share Invitation',
    'Compartir': 'Share',
    'Copiar enlace': 'Copy link',
    'Compartir por WhatsApp': 'Share via WhatsApp',
    'Nueva invitación': 'New invitation',
    'MENSAJE': 'MESSAGE',
    'UBICACIÓN': 'LOCATION',
    'REGALOS': 'GIFTS',
    'CONFIRMAR': 'CONFIRM',
    'Mensaje': 'Message',
    'Ubicación': 'Location',
    'Confirmar Asistencia': 'Confirm Attendance',
    'personas confirmadas': 'people confirmed',
    'Tu nombre': 'Your name',
    'Tu número de teléfono': 'Your phone number',
    'NOMBRE COMPLETO': 'FULL NAME',
    'TELÉFONO': 'PHONE',
    '¿CUÁNTAS PERSONAS ASISTIRÁN?': 'HOW MANY PEOPLE WILL ATTEND?',
    'MENSAJE PARA LOS PAPITOS': 'MESSAGE FOR THE PARENTS',
    'Escribe un mensaje para los futuros papás (opcional)': 'Write a message for the parents (optional)',
    'CONFIRMAR ASISTENCIA': 'CONFIRM ATTENDANCE',
    'Abrir en Google Maps': 'Open in Google Maps',
    'Abrir en Waze': 'Open in Waze',
    '¡Gracias por acompañarnos en este momento tan especial!': 'Thanks for joining us in this special moment!',
    'Gracias por acompañarnos en este momento tan especial!': 'Thanks for joining us in this special moment!',
    'Tu presencia hará este día aún más memorable': 'Your presence will make this day even more memorable',
    'Ver ruta en Google Maps': 'Open route in Google Maps',
    'Enlace no válido': 'Invalid link',
    'Invitación no encontrada': 'Invitation not found',
    'Enlace vencido': 'Expired link',
    'Será un placer contar con tu presencia en este día tan especial. ¡Tu compañía hará este momento inolvidable!': 'We would love to have you join us on this special day. Your presence will make it unforgettable!',
    'No hay datos para mostrar': 'No data to display',
    'Parece que el formulario no se completó correctamente.': 'It seems the form was not completed correctly.',
    'Datos en localStorage:': 'Data in localStorage:',
    'Formulario:': 'Form:',
    'Volver al Inicio': 'Back to Home',
    'Datos incompletos': 'Incomplete data',
    'El formulario parece estar vacío.': 'The form appears to be empty.',
    'Volver al Formulario': 'Back to the Form'
  };
  let localized = html;
  Object.entries(replacements).forEach(([esText, enText]) => {
    const re = new RegExp(esText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    localized = localized.replace(re, enText);
  });
  return localized;
}

function iconSVG(name, color) {
  const c = color || 'currentColor';
  switch (name) {
    case 'calendar':
      return `<svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="3" y1="9" x2="21" y2="9"/></svg>`;
    case 'clock':
      return `<svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`;
    case 'message':
      return `<svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z"/></svg>`;
    case 'pin':
      return `<svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>`;
    case 'gift':
      return `<svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18"/><path d="M12 8v13"/><path d="M12 8s-1-5 3-5c3 0 3 3 3 3s-3 2-6 2"/><path d="M12 8s1-5-3-5c-3 0-3 3-3 3s3 2 6 2"/></svg>`;
    case 'check':
      return `<svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
    case 'map':
      return `<svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l7-3 7 3 8-3v14l-8 3-7-3-7 3V6z"/><path d="M8 3v14"/><path d="M15 6v14"/></svg>`;
    case 'car':
      return `<svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13l2-5a3 3 0 0 1 3-2h6a3 3 0 0 1 3 2l2 5"/><path d="M5 16h14"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>`;
    default:
      return '';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  console.log('Preview page loaded');
  document.title = getTexts().pageTitle;
  showLoadingSpinner();
  // Detectar si es vista de administrador o invitado
  const urlParams = new URLSearchParams(window.location.search);
  const invitationId = urlParams.get('id');
  const isAdminView = !invitationId;
  console.log('Admin view:', isAdminView, 'ID:', invitationId);

  if (isAdminView) {
    renderAdminView().catch(err => {
      console.error('Error en admin view:', err);
      alert(getTexts().adminError);
    }).finally(() => hideLoadingSpinner());
  } else {
    renderGuestView(invitationId).catch(err => {
      console.error('Error en guest view:', err);
      alert(getTexts().guestError);
    }).finally(() => hideLoadingSpinner());
  }
});

// VISTA DE ADMINISTRADOR
async function renderAdminView() {
  console.log('renderAdminView called');
  const storedData = localStorage.getItem('boyFormData');
  console.log('Stored data:', storedData);
  
  if (!storedData) {
    console.log('No stored data found');
    const lang = getLang();
    const errorHTML = `
      <div class="container" style="padding: 40px; text-align: center;">
        <h2 style="color: #e74c3c; margin-bottom: 20px;">No hay datos para mostrar</h2>
        <p style="color: #666; font-size: 16px; margin-bottom: 20px;">
          Parece que el formulario no se completó correctamente.
        </p>
        <p style="color: #999; font-size: 14px; margin-bottom: 20px;">
          <strong>Datos en localStorage:</strong> <br>
          Color: ${localStorage.getItem('boySelectedColor') ? '✓' : '✗'} <br>
          Efectos: ${localStorage.getItem('boySelectedEffects') ? '✓' : '✗'} <br>
          Tema: ${localStorage.getItem('boySelectedTheme') ? '✓' : '✗'} <br>
          Formulario: ${storedData ? '✓' : '✗'}
        </p>
        <button class="floating-action-btn" onclick="window.location.href='../../index.html'" style="display: inline-block; margin-top: 20px;">
          Volver al Inicio
        </button>
      </div>
    `;
    document.getElementById('appContainer').innerHTML = translateHtml(errorHTML, lang);
    return;
  }
  
  const data = JSON.parse(storedData);
  console.log('Parsed data:', data);
  
  if (!data.babyName) {
    console.log('No baby name found');
    const lang = getLang();
    const template = `
      <div class="container" style="padding: 40px; text-align: center;">
        <h2 style="color: #e74c3c;">Datos incompletos</h2>
        <p>El formulario parece estar vacío.</p>
        <button class="floating-action-btn" onclick="window.location.href='form.html'">
          Volver al Formulario
        </button>
      </div>
    `;
    document.getElementById('appContainer').innerHTML = translateHtml(template, lang);
    return;
  }

  const color = applySelectedColor(data.color);
  const fontFamily = getFontFamily(data.theme);
  const effectsOverlay = buildEffectsOverlay(data.effects || [], color);
  
  // Generar URL única de invitación
  const invitationId = generateInvitationId();
  // Crear/obtener token corto
  const token = (typeof window.generateShortToken === 'function') ? window.generateShortToken(8) : Math.random().toString(36).slice(2, 10);
  // Caducidad del token: fin del día del evento (si existe), si no 30 días desde hoy
  let tokenExpiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000;
  if (data.eventDate) {
    const d = new Date(data.eventDate);
    d.setHours(23, 59, 59, 999);
    tokenExpiresAt = d.getTime();
  }
  const invitationURL = `${window.location.origin}${window.location.pathname}?id=${invitationId}&t=${token}&lang=${lang}`;
  
  // Guardar invitación en Firebase con ID, token, categoría y caducidad
  await saveInvitation({ ...data, invitationId, token, category: 'boy', tokenExpiresAt });

  const lang = getLang();
  const moreLabel = lang === 'en' ? 'more...' : 'más...';
  const adminTemplate = `
    <button class="back-btn" onclick="window.location.href='form.html'">←</button>
    
    <div class="admin-view" style="font-family:${fontFamily};">
      <div class="admin-preview-header" style="background: linear-gradient(135deg, ${color} 0%, ${adjustColorBrightness(color, -20)} 100%);">
        ${effectsOverlay}
        
        <div class="invitation-card-header">
          <svg class="baby-silhouette" viewBox="0 0 15.14 17.15" fill="white">
            <path d="M1.81 9.97c-0.54,0.6 -0.96,1.42 -0.76,2.23 0.09,0.36 0.27,0.68 0.44,0.99 -0.13,-0.02 -0.3,0.05 -0.42,-0.02 -0.11,-0.07 -0.22,-0.14 -0.35,-0.16 -0.13,-0.01 -0.27,0.03 -0.38,0.11 -0.25,0.16 -0.48,0.66 -0.16,0.88 -0.36,0.44 -0.15,1.35 0.33,1.66 0.18,0.12 0.42,0.14 0.64,0.16 0.59,0.03 1.18,0.01 1.77,0.07 0.8,0.08 1.58,0.32 2.38,0.34 0.31,0 0.63,-0.03 0.9,-0.17 0.5,-0.26 0.76,-0.82 0.9,-1.37 0.47,-0.13 0.91,-0.37 1.27,-0.69 0.2,0.48 0.68,0.83 0.78,1.34 0.05,0.23 0.01,0.48 0.11,0.7 0.14,0.31 0.57,0.43 0.85,0.24 -0.02,0.24 0.26,0.46 0.49,0.37 0.03,-0.02 0.06,-0.03 0.09,-0.03 0.05,0 0.08,0.03 0.12,0.06 0.3,0.27 0.75,0.29 1.14,0.2 0.13,-0.03 0.26,-0.01 0.38,-0.09 0.14,-0.09 0.34,-0.06 0.45,0.07 0.04,0.05 0.07,0.11 0.11,0.17 0.06,0.08 0.16,0.13 0.25,0.12 0.1,-0.02 0.19,-0.11 0.18,-0.21 -0.02,-0.07 -0.07,-0.13 -0.11,-0.18 -0.05,-0.06 -0.08,-0.15 -0.04,-0.21 0.18,0.11 0.43,0.11 0.56,0.27 0.03,0.04 0.05,0.09 0.09,0.13 0.07,0.06 0.17,0.07 0.26,0.05 0.04,-0.01 0.08,-0.03 0.11,-0.06 0.03,-0.03 0.04,-0.08 0.01,-0.11 0.06,0.01 0.13,0.02 0.19,0 0.06,-0.02 0.12,-0.07 0.12,-0.13 0,-0.05 -0.03,-0.08 -0.05,-0.12 -0.08,-0.11 -0.16,-0.23 -0.23,-0.34 -0.05,-0.07 -0.06,-0.14 -0.1,-0.22 -0.14,-0.28 -0.45,-0.47 -0.76,-0.48 -0.23,-0.01 -0.45,0.06 -0.67,0.04 0.02,-0.09 -0.05,-0.18 -0.12,-0.24 -0.07,-0.06 -0.15,-0.11 -0.2,-0.19 -0.07,-0.1 -0.07,-0.23 -0.06,-0.36 0.1,0.12 0.24,0.2 0.38,0.27 0.19,0.09 0.43,0.15 0.6,0.02 0.06,-0.05 0.12,-0.15 0.05,-0.18 0.25,0 0.49,-0.01 0.74,-0.04 0.03,0 0.06,-0.01 0.09,0.01 0.02,0.02 0.03,0.04 0.03,0.07 0.04,0.1 0.11,0.2 0.22,0.23 0.1,0.03 0.24,-0.06 0.21,-0.16 0.03,0.09 0.13,0.15 0.23,0.13 0.09,-0.02 0.16,-0.11 0.16,-0.21 -0.01,-0.02 -0.01,-0.05 -0.01,-0.08 0,-0.07 0.05,-0.13 0.09,-0.19 0.07,-0.14 0.03,-0.32 -0.08,-0.44 -0.1,-0.12 -0.26,-0.18 -0.41,-0.19 -0.2,-0.02 -0.42,0.03 -0.59,-0.06 -0.06,-0.04 -0.08,-0.06 -0.13,-0.1 0.07,-0.25 0.13,-0.49 0.2,-0.73 0.04,-0.13 0.07,-0.26 0.02,-0.39 -0.03,-0.08 -0.1,-0.14 -0.14,-0.21 -0.12,-0.2 -0.08,-0.45 -0.07,-0.68 0.05,-0.66 -0.16,-1.33 -0.56,-1.85 -0.1,-0.13 -0.21,-0.25 -0.27,-0.41 -0.14,-0.36 0.08,-0.77 0.1,-1.16 0.01,-0.5 -0.31,-0.94 -0.61,-1.34 -0.25,-0.33 0.51,-0.45 0.72,-0.48 0.14,-0.03 0.29,-0.04 0.42,-0.09 0.37,-0.14 0.73,-0.54 0.89,-0.9 0.13,-0.31 0.17,-0.67 0.12,-1.01 -0.05,-0.33 -0.29,-0.6 -0.33,-0.91 -0.06,-0.43 0.07,-0.86 0.01,-1.29 -0.08,-0.65 -0.53,-1.36 -1.05,-1.75 -0.64,-0.48 -1.46,-0.68 -2.26,-0.67 -1.01,0.01 -2.07,0.38 -2.66,1.24 -0.37,0.56 -0.54,1.25 -0.48,1.92 0.04,0.51 0.19,1.01 0.38,1.49 0.11,0.29 0.23,0.59 0.27,0.9 -0.18,0.02 -0.3,0.15 -0.4,0.31 -0.09,0.15 -0.15,0.32 -0.26,0.46 -0.14,0.22 -0.37,0.37 -0.59,0.5 -1.01,0.59 -2.14,0.83 -3.17,1.36 -0.82,0.42 -1.57,0.97 -2.22,1.62 -0.05,0.05 -0.1,0.11 -0.15,0.17z"/>
          </svg>
          
          <div class="main-announcement">¡ES UN NIÑO!</div>
          
          <div class="parents-names">LOS FUTUROS PAPÁS</div>
          <div class="celebration-text">${data.fatherName} & ${data.motherName}</div>
          
          <div class="celebration-text">Te invitan a celebrar la llegada de</div>
          
          <div class="baby-name-highlight" style="font-size: 2.8rem; margin: 24px 0; text-shadow: 0 2px 8px rgba(0,0,0,0.2); color: #ffffff;">${data.babyName}</div>
          
          <div class="event-details" style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
            <div class="event-detail-item" style="display: flex; align-items: center; gap: 12px; justify-content: center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style="flex-shrink: 0;">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
              </svg>
              <span style="font-size: 1.1rem;">${formatDateTime(data.eventDate, data.eventTime)}</span>
            </div>
            <div class="event-detail-item" style="display: flex; align-items: center; gap: 12px; justify-content: center; margin-top: 8px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style="flex-shrink: 0;">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span style="font-size: 1rem; max-width: 400px; text-align: center;">${data.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="summary-section">
        <h2 class="summary-title">Personalización</h2>
        
        <div class="summary-item">
          <span class="summary-label">Tema:</span>
          <span class="summary-value">${getThemeLabel(data.theme)}</span>
        </div>
        
        <div class="summary-item">
          <span class="summary-label">Color:</span>
          <div class="color-preview" style="background-color: ${color};"></div>
        </div>
        
        <div class="summary-item">
          <span class="summary-label">Efectos:</span>
          <span class="summary-value">${data.effects.length} seleccionados</span>
        </div>
        
        <div class="summary-item">
          <span class="summary-label">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Mensaje:
          </span>
          <span class="summary-value" style="font-size: 14px; font-style: italic;">${data.invitationMessage}</span>
        </div>
        
        <div class="summary-item" style="flex-direction: column; align-items: flex-start; margin-top: 16px;">
          <span class="summary-label" style="margin-bottom: 12px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
            </svg>
            Lista de Regalos:
          </span>
          <ul style="margin: 0; padding-left: 20px; width: 100%;">
            ${(data.gifts || []).slice(0, 5).map(gift => `<li style="margin-bottom: 6px; color: #555;">${gift}</li>`).join('')}
            ${(data.gifts || []).length > 5 ? `<li style="color: #999; font-style: italic;">+ ${(data.gifts || []).length - 5} ${moreLabel}</li>` : ''}
          </ul>
        </div>
      </div>

      <div class="share-section">
        <h2 class="summary-title">Compartir Invitación</h2>
        <div class="invitation-url" id="invitationURL">${invitationURL}</div>
        
        <div class="icon-button-group">
          <button class="icon-btn" onclick="copyToClipboard(event)" title="Copiar enlace">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
          </button>
          <button class="icon-btn" onclick="shareWhatsApp()" title="Compartir por WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
          <button class="icon-btn" onclick="window.location.href='../../index.html'" title="Nueva invitación">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('appContainer').innerHTML = translateHtml(adminTemplate, lang);
}
// VISTA DE INVITADO
async function renderGuestView(invitationId) {
  const urlParams = new URLSearchParams(window.location.search);
  const t = urlParams.get('t');
  const invitation = await getInvitation(invitationId);
  
  if (!invitation) {
    const lang = getLang();
    const template = `
      <div class="container" style="text-align: center; padding: 40px;">
        <h2>Invitación no encontrada</h2>
        <p>Esta invitación no existe o ha sido eliminada.</p>
      </div>
    `;
    document.getElementById('appContainer').innerHTML = translateHtml(template, lang);
    return;
  }

  // Validar token si existe en la invitación
  if (invitation.token && t !== invitation.token) {
    const lang = getLang();
    const template = `
      <div class="container" style="text-align: center; padding: 40px;">
        <h2>Enlace inválido</h2>
        <p>Este enlace de invitación no es válido. Pide al organizador el enlace correcto.</p>
      </div>
    `;
    document.getElementById('appContainer').innerHTML = translateHtml(template, lang);
    return;
  }

  // Validar caducidad si está configurada
  if (invitation.tokenExpiresAt && Date.now() > invitation.tokenExpiresAt) {
    const lang = getLang();
    const template = `
      <div class="container" style="text-align: center; padding: 40px;">
        <h2>Enlace vencido</h2>
        <p>La invitación ha caducado. Solicita un nuevo enlace al organizador.</p>
      </div>
    `;
    document.getElementById('appContainer').innerHTML = translateHtml(template, lang);
    return;
  }

  const data = invitation;
  const color = applySelectedColor(data.color);
  const fontFamily = getFontFamily(data.theme);
  const effectsOverlay = buildEffectsOverlay(data.effects || [], color);
  // Los invitados no pueden leer confirmaciones (reglas de Firebase requieren auth)
  // Solo el admin puede ver el total; invitados solo pueden escribir su confirmación
  const confirmedTotal = 0;

  const heroBackground = `linear-gradient(135deg, ${color} 0%, ${adjustColorBrightness(color, -20)} 100%)`;

  const lang = getLang();
  const guestTemplate = `
    <div class="guest-view" style="font-family:${fontFamily}; background:#ffffff;">
      <div class="hero-banner" style="background:${heroBackground};">
        ${effectsOverlay}
        <div class="invitation-card-header">
        <svg class="baby-silhouette" viewBox="0 0 15.14 17.15" fill="white">
          <path d="M1.81 9.97c-0.54,0.6 -0.96,1.42 -0.76,2.23 0.09,0.36 0.27,0.68 0.44,0.99 -0.13,-0.02 -0.3,0.05 -0.42,-0.02 -0.11,-0.07 -0.22,-0.14 -0.35,-0.16 -0.13,-0.01 -0.27,0.03 -0.38,0.11 -0.25,0.16 -0.48,0.66 -0.16,0.88 -0.36,0.44 -0.15,1.35 0.33,1.66 0.18,0.12 0.42,0.14 0.64,0.16 0.59,0.03 1.18,0.01 1.77,0.07 0.8,0.08 1.58,0.32 2.38,0.34 0.31,0 0.63,-0.03 0.9,-0.17 0.5,-0.26 0.76,-0.82 0.9,-1.37 0.47,-0.13 0.91,-0.37 1.27,-0.69 0.2,0.48 0.68,0.83 0.78,1.34 0.05,0.23 0.01,0.48 0.11,0.7 0.14,0.31 0.57,0.43 0.85,0.24 -0.02,0.24 0.26,0.46 0.49,0.37 0.03,-0.02 0.06,-0.03 0.09,-0.03 0.05,0 0.08,0.03 0.12,0.06 0.3,0.27 0.75,0.29 1.14,0.2 0.13,-0.03 0.26,-0.01 0.38,-0.09 0.14,-0.09 0.34,-0.06 0.45,0.07 0.04,0.05 0.07,0.11 0.11,0.17 0.06,0.08 0.16,0.13 0.25,0.12 0.1,-0.02 0.19,-0.11 0.18,-0.21 -0.02,-0.07 -0.07,-0.13 -0.11,-0.18 -0.05,-0.06 -0.08,-0.15 -0.04,-0.21 0.18,0.11 0.43,0.11 0.56,0.27 0.03,0.04 0.05,0.09 0.09,0.13 0.07,0.06 0.17,0.07 0.26,0.05 0.04,-0.01 0.08,-0.03 0.11,-0.06 0.03,-0.03 0.04,-0.08 0.01,-0.11 0.06,0.01 0.13,0.02 0.19,0 0.06,-0.02 0.12,-0.07 0.12,-0.13 0,-0.05 -0.03,-0.08 -0.05,-0.12 -0.08,-0.11 -0.16,-0.23 -0.23,-0.34 -0.05,-0.07 -0.06,-0.14 -0.1,-0.22 -0.14,-0.28 -0.45,-0.47 -0.76,-0.48 -0.23,-0.01 -0.45,0.06 -0.67,0.04 0.02,-0.09 -0.05,-0.18 -0.12,-0.24 -0.07,-0.06 -0.15,-0.11 -0.2,-0.19 -0.07,-0.1 -0.07,-0.23 -0.06,-0.36 0.1,0.12 0.24,0.2 0.38,0.27 0.19,0.09 0.43,0.15 0.6,0.02 0.06,-0.05 0.12,-0.15 0.05,-0.18 0.25,0 0.49,-0.01 0.74,-0.04 0.03,0 0.06,-0.01 0.09,0.01 0.02,0.02 0.03,0.04 0.03,0.07 0.04,0.1 0.11,0.2 0.22,0.23 0.1,0.03 0.24,-0.06 0.21,-0.16 0.03,0.09 0.13,0.15 0.23,0.13 0.09,-0.02 0.16,-0.11 0.16,-0.21 -0.01,-0.02 -0.01,-0.05 -0.01,-0.08 0,-0.07 0.05,-0.13 0.09,-0.19 0.07,-0.14 0.03,-0.32 -0.08,-0.44 -0.1,-0.12 -0.26,-0.18 -0.41,-0.19 -0.2,-0.02 -0.42,0.03 -0.59,-0.06 -0.06,-0.04 -0.08,-0.06 -0.13,-0.1 0.07,-0.25 0.13,-0.49 0.2,-0.73 0.04,-0.13 0.07,-0.26 0.02,-0.39 -0.03,-0.08 -0.1,-0.14 -0.14,-0.21 -0.12,-0.2 -0.08,-0.45 -0.07,-0.68 0.05,-0.66 -0.16,-1.33 -0.56,-1.85 -0.1,-0.13 -0.21,-0.25 -0.27,-0.41 -0.14,-0.36 0.08,-0.77 0.1,-1.16 0.01,-0.5 -0.31,-0.94 -0.61,-1.34 -0.25,-0.33 0.51,-0.45 0.72,-0.48 0.14,-0.03 0.29,-0.04 0.42,-0.09 0.37,-0.14 0.73,-0.54 0.89,-0.9 0.13,-0.31 0.17,-0.67 0.12,-1.01 -0.05,-0.33 -0.29,-0.6 -0.33,-0.91 -0.06,-0.43 0.07,-0.86 0.01,-1.29 -0.08,-0.65 -0.53,-1.36 -1.05,-1.75 -0.64,-0.48 -1.46,-0.68 -2.26,-0.67 -1.01,0.01 -2.07,0.38 -2.66,1.24 -0.37,0.56 -0.54,1.25 -0.48,1.92 0.04,0.51 0.19,1.01 0.38,1.49 0.11,0.29 0.23,0.59 0.27,0.9 -0.18,0.02 -0.3,0.15 -0.4,0.31 -0.09,0.15 -0.15,0.32 -0.26,0.46 -0.14,0.22 -0.37,0.37 -0.59,0.5 -1.01,0.59 -2.14,0.83 -3.17,1.36 -0.82,0.42 -1.57,0.97 -2.22,1.62 -0.05,0.05 -0.1,0.11 -0.15,0.17z"/>
        </svg>
        
        <div class="main-announcement">¡ES UN NIÑO!</div>
        
        <div class="parents-names">LOS FUTUROS PAPÁS</div>
        <div class="celebration-text">${data.fatherName} & ${data.motherName}</div>
        
        <div class="celebration-text">Te invitan a celebrar la llegada de</div>
        
        <div class="baby-name-highlight">${data.babyName}</div>
        
        <div class="event-details">
          <div class="event-detail-item">
            <span class="detail-icon">${iconSVG('calendar', 'white')}</span>
            <span>${formatDateTime(data.eventDate, data.eventTime)}</span>
          </div>
          <div class="event-detail-item">
            <span class="detail-icon">${iconSVG('clock', 'white')}</span>
            <span>${data.eventTime}</span>
          </div>
          ${data.address ? `<div class="event-detail-item">
            <span class="detail-icon">${iconSVG('pin', 'white')}</span>
            <span>${data.address}</span>
          </div>` : ''}
        </div>
      </div>
      </div>
      
      <div class="tabs-navigation">
        <button class="tab-button active" onclick="switchTab('message')" data-tab="message">
          ${iconSVG('message', 'var(--primary-color, #3498DB)')}
          MENSAJE
        </button>
        <button class="tab-button" onclick="switchTab('location')" data-tab="location">
          ${iconSVG('pin', 'var(--primary-color, #3498DB)')}
          UBICACIÓN
        </button>
        <button class="tab-button" onclick="switchTab('gifts')" data-tab="gifts">
          ${iconSVG('gift', 'var(--primary-color, #3498DB)')}
          REGALOS
        </button>
        <button class="tab-button" onclick="switchTab('confirm')" data-tab="confirm">
          ${iconSVG('check', 'var(--primary-color, #3498DB)')}
          CONFIRMAR
        </button>
      </div>
      
      <div id="messageTab" class="tab-content active">
        <div class="tab-content-card">
          <h3 class="section-title">${iconSVG('message', '#333')} Mensaje</h3>
          <div class="message-content" style="background:#f8fafc; padding:16px 18px; border-radius:10px;">${data.invitationMessage || 'Será un placer contar con tu presencia en este día tan especial. ¡Tu compañía hará este momento inolvidable!'}</div>
        </div>
      </div>
      
      <div id="locationTab" class="tab-content">
        <div class="tab-content-card">
          <h3 class="section-title">${iconSVG('pin', '#333')} Ubicación</h3>
          <div class="location-info">
            ${data.address ? `<div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-color, #3498DB)" style="flex-shrink: 0; margin-top: 2px;">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
              <div>
                <p style="margin: 0; font-size: 15px; color: #1f2937; font-weight: 500;">${data.address}</p>
              </div>
            </div>` : ''}
            ${data.address ? `<div style="border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1); margin-bottom:16px;">
              <iframe title="Mapa" width="100%" height="260" style="border:0;" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=${encodeURIComponent(data.googleMapsLink || data.address)}&output=embed"></iframe>
            </div>` : ''}
            <div class="map-buttons">
              ${data.googleMapsLink || data.address ? `<button class="btn btn-primary" onclick="window.open('${data.googleMapsLink || 'https://www.google.com/maps?q=' + encodeURIComponent(data.address)}', '_blank')">${iconSVG('map', 'white')} Abrir en Google Maps</button>` : ''}
              ${data.wazeLink ? `<button class="btn btn-secondary" onclick="window.open('${data.wazeLink}', '_blank')">${iconSVG('car', 'white')} Abrir en Waze</button>` : ''}
            </div>
          </div>
        </div>
      </div>
      
      <div id="giftsTab" class="tab-content">
        <div class="tab-content-card">
          <h3 class="section-title">${iconSVG('gift', '#333')} Lista de Regalos</h3>
          <ul class="gift-list">
            ${(data.gifts || []).map(gift => `<li class="gift-item" style="display:flex; align-items:center; gap:10px;">${iconSVG('gift', 'var(--primary-color, #3498DB)')} <span>${gift}</span></li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div id="confirmTab" class="tab-content">
        <div class="tab-content-card">
          <h3 class="section-title">${iconSVG('check', '#333')} Confirmar Asistencia</h3>
          <div class="confirm-status">
            <p><strong class="confirmed-count">${confirmedTotal}</strong> personas confirmadas</p>
          </div>
          <form class="confirm-form" onsubmit="submitConfirmation(event, '${invitationId}')">
            <div class="form-group">
              <label class="form-label">NOMBRE COMPLETO</label>
              <input type="text" class="form-input" placeholder="Tu nombre" required>
            </div>
            <div class="form-group">
              <label class="form-label">TELÉFONO</label>
              <input type="tel" class="form-input" placeholder="Tu número de teléfono" required>
            </div>
            <div class="form-group">
              <label class="form-label">¿CUÁNTAS PERSONAS ASISTIRÁN?</label>
              <input type="number" class="form-input" min="1" value="1" required>
            </div>
            <div class="form-group">
              <label class="form-label">MENSAJE PARA LOS PAPITOS</label>
              <textarea class="form-input" name="message" rows="3" placeholder="Escribe un mensaje para los futuros papás (opcional)" style="resize: vertical; font-family: inherit;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; display:flex; align-items:center; gap:8px; justify-content:center;">
              ${iconSVG('check', 'white')} CONFIRMAR ASISTENCIA
            </button>
          </form>
        </div>
      </div>
      
      <footer style="background: linear-gradient(135deg, ${color} 0%, ${adjustColorBrightness(color, -20)} 100%); color: white; padding: 48px 20px 32px; text-align: center; margin-top: 40px; position: relative; overflow: hidden;">
        <svg style="position: absolute; top: 20px; left: 20px; width: 32px; height: 32px; opacity: 0.12; fill: white;" viewBox="0 0 24 24"><path d="M12 2C9.24 2 7 4.24 7 7c0 3.53 5 13 5 13s5-9.47 5-13c0-2.76-2.24-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
        <svg style="position: absolute; top: 40px; right: 30px; width: 28px; height: 28px; opacity: 0.12; fill: white;" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"/></svg>
        <svg style="position: absolute; bottom: 30px; left: 40px; width: 26px; height: 26px; opacity: 0.12; fill: white;" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><circle cx="12" cy="12" r="3"/></svg>
        <svg style="position: absolute; bottom: 20px; right: 20px; width: 30px; height: 30px; opacity: 0.12; fill: white;" viewBox="0 0 24 24"><circle cx="9" cy="8" r="2"/><circle cx="15" cy="8" r="2"/><path d="M12 14c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
        <div style="position: relative; z-index: 1;">
          <p style="font-size: 20px; margin-bottom: 12px; font-weight: 600; letter-spacing: 0.5px; display: flex; align-items: center; justify-content: center; gap: 12px;">
            <svg style="width: 24px; height: 24px; fill: white;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ¡Gracias por acompañarnos en este momento tan especial!
            <svg style="width: 24px; height: 24px; fill: white;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </p>
          <p style="font-size: 15px; opacity: 0.95; line-height: 1.6;">Tu presencia hará este día aún más memorable</p>
        </div>
      </footer>
    </div>
  `;
  document.getElementById('appContainer').innerHTML = translateHtml(guestTemplate, lang);
}

// Función para cambiar entre pestañas
function switchTab(tabName) {
  // Remover active de todos los tabs
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  // Activar el tab seleccionado
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`${tabName}Tab`).classList.add('active');
}

// Función para verificar y aplicar rate limiting
function checkRateLimit(invitationId) {
  const RATE_LIMIT_MINUTES = 5; // Limitar a 1 confirmación cada 5 minutos
  const RATE_LIMIT_MS = RATE_LIMIT_MINUTES * 60 * 1000;
  
  const rateLimitKey = `confirmation_limit_${invitationId}`;
  const lastConfirmationTime = localStorage.getItem(rateLimitKey);
  
  if (lastConfirmationTime) {
    const timeSinceLastConfirmation = Date.now() - parseInt(lastConfirmationTime, 10);
    
    if (timeSinceLastConfirmation < RATE_LIMIT_MS) {
      const remainingSeconds = Math.ceil((RATE_LIMIT_MS - timeSinceLastConfirmation) / 1000);
      const minutes = Math.ceil(remainingSeconds / 60);
      const t = getTexts();
      const msg = (t.rateLimit || '').replace('{{minutes}}', minutes);
      alert(msg);
      return false;
    }
  }
  
  return true;
}

// Función para registrar confirmación en rate limiting
function recordConfirmationTime(invitationId) {
  const rateLimitKey = `confirmation_limit_${invitationId}`;
  localStorage.setItem(rateLimitKey, Date.now().toString());
}

// Función para enviar confirmación
async function submitConfirmation(event, invitationId) {
  event.preventDefault();
  
  // Verificar rate limit antes de procesar
  if (!checkRateLimit(invitationId)) {
    return;
  }
  
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const count = parseInt(form.querySelector('input[type="number"]').value, 10) || 1;
  const userMessage = form.querySelector('textarea[name="message"]').value;

  // Registrar tiempo de confirmación para rate limiting
  recordConfirmationTime(invitationId);

  // Guardar en Firebase
  saveConfirmation(invitationId, { name, phone, count, message: userMessage, ts: Date.now() }).then(() => {
    refreshConfirmationCount(invitationId);
  });
  
  // Obtener datos de la invitación para el teléfono del administrador
  const invitation = await getInvitation(invitationId);
  if (invitation && invitation.phone) {
    // Crear mensaje de WhatsApp
    const adminPhone = invitation.phone.replace(/\D/g, ''); // Limpiar el teléfono
    const babyName = invitation.babyName || (getLang() === 'en' ? 'your baby' : 'tu bebé');
    const lang = getLang();
    const locale = lang === 'en' ? 'en-US' : 'es-PE';
    const eventDate = invitation.eventDate ? new Date(invitation.eventDate).toLocaleDateString(locale) : '';
    const t = getTexts();

    let message = `${(t.confirmWhatsGreeting || 'Hola, soy {{name}}.').replace('{{name}}', name)}\n\n`;
    message += `${(t.confirmWhatsBody || 'Confirmo mi asistencia al Baby Shower de {{baby}}').replace('{{baby}}', babyName)}`;
    if (eventDate) message += ` (${eventDate})`;
    message += `.\n\n`;
    const countLabel = count === 1 ? (t.confirmWhatsCountSingular || 'persona') : (t.confirmWhatsCountPlural || 'personas');
    message += `${count} ${countLabel}\n`;
    message += (t.confirmWhatsContact || 'Contacto: {{phone}}').replace('{{phone}}', phone);
    
    if (userMessage) {
      message += `\n\n${userMessage}`;
    }
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`, '_blank');
  }
  
  showSuccessMessage(name, count);
  form.reset();
}

// Función para mostrar mensaje de confirmación minimalista
function showSuccessMessage(name, count) {
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#3498DB';
  const form = document.querySelector('.confirm-form');
  const t = getTexts();
  const line1 = (t.successLine1 || '').replace('{{name}}', name);
  const line2 = (t.successLine2 || '').replace('{{count}}', count);
  const successHTML = `
    <div style="text-align: center; padding: 40px 20px; animation: fadeIn 0.4s ease;">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style="margin: 0 auto 20px;">
        <circle cx="12" cy="12" r="10" fill="${primaryColor}" opacity="0.15"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="${primaryColor}"/>
      </svg>
      <h3 style="color: ${primaryColor}; font-size: 22px; font-weight: 700; margin: 0 0 8px 0;">${t.successTitle}</h3>
      <p style="color: #6b7280; font-size: 15px; margin: 0; line-height: 1.6;">
        ${line1 || `Gracias <strong style="color: #1f2937;">${name}</strong>`}<br>
        ${line2 || `Se confirmó la asistencia para <strong style="color: #1f2937;">${count} persona(s)</strong>`}
      </p>
    </div>
  `;
  
  form.innerHTML = successHTML;
  
  // Deshabilitar el formulario para evitar confirmaciones duplicadas
  const confirmTab = document.getElementById('confirmTab');
  if (confirmTab) {
    confirmTab.style.pointerEvents = 'none';
    confirmTab.style.opacity = '0.7';
  }
}

// Funciones auxiliares
function generateInvitationId() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  return 'inv_' + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}

function refreshConfirmationCount(invitationId) {
  const el = document.querySelector('.confirmed-count');
  if (el) {
    getConfirmationTotal(invitationId).then(total => {
      el.textContent = total;
    });
  }
}


function copyToClipboard(evt) {
  const urlText = document.getElementById('invitationURL').textContent;
  navigator.clipboard.writeText(urlText).then(() => {
    showCopyMessage(evt);
  });
}

function showCopyMessage(evt) {
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#3498DB';
  const btn = evt.target.closest('.icon-btn');
  const tooltip = document.createElement('div');
  tooltip.textContent = getTexts().copyLink;
  tooltip.style.cssText = `
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    background: ${primaryColor};
    color: white;
    padding: 10px 16px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    margin-bottom: 8px;
  `;
  
  btn.style.position = 'relative';
  btn.appendChild(tooltip);
  
  // Forzar reflow para activar la transición
  tooltip.offsetHeight;
  tooltip.style.opacity = '1';
  tooltip.style.transform = 'translateX(-50%) translateY(0)';
  
  setTimeout(() => {
    tooltip.style.opacity = '0';
    tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
    setTimeout(() => tooltip.remove(), 300);
  }, 2000);
}

function shareWhatsApp() {
  // Obtener la URL del input si existe, o construirla desde la ubicación actual
  let inviteUrl = '';
  
  const urlElement = document.getElementById('invitationURL');
  if (urlElement) {
    inviteUrl = urlElement.textContent || urlElement.value || '';
  }
  
  // Si no hay URL en el elemento, usar la URL actual de la página
  if (!inviteUrl) {
    inviteUrl = window.location.href;
  }
  
  if (!inviteUrl) {
    console.error('URL de invitación no disponible');
    return;
  }
  
  const t = getTexts();
  const base = t.shareMessage || '¡Estás invitado a mi Baby Shower! 👶\n\nMira los detalles aquí:';
  const message = `${base}\n${inviteUrl}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  
  console.log('Compartiendo por WhatsApp:', whatsappUrl);
  window.open(whatsappUrl, '_blank');
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.getAttribute('data-loaded') === 'true') return resolve();
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error(`No se pudo cargar ${src}`)));
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => { script.setAttribute('data-loaded', 'true'); resolve(); };
    script.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
    document.head.appendChild(script);
  });
}

async function ensureExportLibs() {
  const html2CanvasSources = [
    '../../export/html2canvas.min.js',
    'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
    'https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js'
  ];
  const jsPdfSources = [
    '../../export/jspdf.umd.min.js',
    'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    'https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js'
  ];

  if (!getHtml2Canvas()) {
    for (const src of html2CanvasSources) {
      try {
        await loadScript(src);
        if (getHtml2Canvas()) break;
      } catch (e) {
        console.warn('Intento html2canvas fallido:', src, e);
      }
    }
  }

  if (!getJsPDF()) {
    for (const src of jsPdfSources) {
      try {
        await loadScript(src);
        if (getJsPDF()) break;
      } catch (e) {
        console.warn('Intento jsPDF fallido:', src, e);
      }
    }
  }
}

function getHtml2Canvas() {
  // Algunos builds exponen html2canvas como default o como propiedad anidada
  return window.html2canvas?.html2canvas || window.html2canvas?.default || window.html2canvas;
}

function getJsPDF() {
  return window.jspdf?.jsPDF || window.jspdf?.default?.jsPDF;
}

async function exportAsPNG() {
  await ensureExportLibs();
  
  // PNG: Solo el visual del header con efectos
  const exportContainer = createPNGContainer();
  if (!exportContainer) {
    alert('No se pudo preparar la invitación para exportar.');
    return;
  }
  
  document.body.appendChild(exportContainer);
  
  const h2c = getHtml2Canvas();
  if (typeof h2c !== 'function') {
    alert('No se pudo cargar html2canvas.');
    document.body.removeChild(exportContainer);
    return;
  }
  
  try {
    const canvas = await h2c(exportContainer, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
      windowWidth: 800,
      windowHeight: 600
    });
    
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'invitacion.png';
    link.click();
  } catch (error) {
    console.error('Error al exportar:', error);
    alert('Error al generar la imagen.');
  } finally {
    document.body.removeChild(exportContainer);
  }
}

async function exportAsPDF() {
  await ensureExportLibs();
  
  // PDF: Contenido completo con información
  const exportContainer = createPDFContainer();
  if (!exportContainer) {
    alert('No se pudo preparar la invitación para exportar.');
    return;
  }
  
  document.body.appendChild(exportContainer);
  
  const h2c = getHtml2Canvas();
  const PDF = getJsPDF();
  if (typeof h2c !== 'function' || typeof PDF !== 'function') {
    alert('No se pudieron cargar las librerías de exportación.');
    document.body.removeChild(exportContainer);
    return;
  }
  
  try {
    const canvas = await h2c(exportContainer, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: 800
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new PDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Agregar imagen sin duplicación
    if (imgHeight <= pdfHeight) {
      // Cabe en una página
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      // Necesita múltiples páginas
      let position = 0;
      let heightLeft = imgHeight;
      
      while (heightLeft > 0) {
        if (position > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
        position += pdfHeight;
      }
    }

    pdf.save('invitacion.pdf');
  } catch (error) {
    console.error('Error al exportar PDF:', error);
    alert('Error al generar el PDF.');
  } finally {
    document.body.removeChild(exportContainer);
  }
}

function createPNGContainer() {
  const storedData = localStorage.getItem('boyFormData');
  if (!storedData) return null;
  
  const data = JSON.parse(storedData);
  const color = data.color || localStorage.getItem('boySelectedColor') || '#3498DB';
  const fontFamily = getFontFamily(data.theme);
  
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    left: -9999px;
    top: 0;
    width: 800px;
    height: 600px;
    font-family: ${fontFamily};
  `;
  
  const headerBg = `linear-gradient(135deg, ${color} 0%, ${adjustColorBrightness(color, -20)} 100%)`;
  
  container.innerHTML = `
    <div style="position: relative; background: ${headerBg}; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: white; overflow: hidden;">
      ${buildEffectsOverlayForExport(data.effects || [], color)}
      
      <div style="position: relative; z-index: 10; padding: 40px;">
        <svg width="100" height="100" viewBox="0 0 15.14 17.15" fill="white" style="margin: 0 auto 24px; display: block; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.2));">
          <path d="M1.81 9.97c-0.54,0.6 -0.96,1.42 -0.76,2.23 0.09,0.36 0.27,0.68 0.44,0.99 -0.13,-0.02 -0.3,0.05 -0.42,-0.02 -0.11,-0.07 -0.22,-0.14 -0.35,-0.16 -0.13,-0.01 -0.27,0.03 -0.38,0.11 -0.25,0.16 -0.48,0.66 -0.16,0.88 -0.36,0.44 -0.15,1.35 0.33,1.66 0.18,0.12 0.42,0.14 0.64,0.16 0.59,0.03 1.18,0.01 1.77,0.07 0.8,0.08 1.58,0.32 2.38,0.34 0.31,0 0.63,-0.03 0.9,-0.17 0.5,-0.26 0.76,-0.82 0.9,-1.37 0.47,-0.13 0.91,-0.37 1.27,-0.69 0.2,0.48 0.68,0.83 0.78,1.34 0.05,0.23 0.01,0.48 0.11,0.7 0.14,0.31 0.57,0.43 0.85,0.24 -0.02,0.24 0.26,0.46 0.49,0.37 0.03,-0.02 0.06,-0.03 0.09,-0.03 0.05,0 0.08,0.03 0.12,0.06 0.3,0.27 0.75,0.29 1.14,0.2 0.13,-0.03 0.26,-0.01 0.38,-0.09 0.14,-0.09 0.34,-0.06 0.45,0.07 0.04,0.05 0.07,0.11 0.11,0.17 0.06,0.08 0.16,0.13 0.25,0.12 0.1,-0.02 0.19,-0.11 0.18,-0.21 -0.02,-0.07 -0.07,-0.13 -0.11,-0.18 -0.05,-0.06 -0.08,-0.15 -0.04,-0.21 0.18,0.11 0.43,0.11 0.56,0.27 0.03,0.04 0.05,0.09 0.09,0.13 0.07,0.06 0.17,0.07 0.26,0.05 0.04,-0.01 0.08,-0.03 0.11,-0.06 0.03,-0.03 0.04,-0.08 0.01,-0.11 0.06,0.01 0.13,0.02 0.19,0 0.06,-0.02 0.12,-0.07 0.12,-0.13 0,-0.05 -0.03,-0.08 -0.05,-0.12 -0.08,-0.11 -0.16,-0.23 -0.23,-0.34 -0.05,-0.07 -0.06,-0.14 -0.1,-0.22 -0.14,-0.28 -0.45,-0.47 -0.76,-0.48 -0.23,-0.01 -0.45,0.06 -0.67,0.04 0.02,-0.09 -0.05,-0.18 -0.12,-0.24 -0.07,-0.06 -0.15,-0.11 -0.2,-0.19 -0.07,-0.1 -0.07,-0.23 -0.06,-0.36 0.1,0.12 0.24,0.2 0.38,0.27 0.19,0.09 0.43,0.15 0.6,0.02 0.06,-0.05 0.12,-0.15 0.05,-0.18 0.25,0 0.49,-0.01 0.74,-0.04 0.03,0 0.06,-0.01 0.09,0.01 0.02,0.02 0.03,0.04 0.03,0.07 0.04,0.1 0.11,0.2 0.22,0.23 0.1,0.03 0.24,-0.06 0.21,-0.16 0.03,0.09 0.13,0.15 0.23,0.13 0.09,-0.02 0.16,-0.11 0.16,-0.21 -0.01,-0.02 -0.01,-0.05 -0.01,-0.08 0,-0.07 0.05,-0.13 0.09,-0.19 0.07,-0.14 0.03,-0.32 -0.08,-0.44 -0.1,-0.12 -0.26,-0.18 -0.41,-0.19 -0.2,-0.02 -0.42,0.03 -0.59,-0.06 -0.06,-0.04 -0.08,-0.06 -0.13,-0.1 0.07,-0.25 0.13,-0.49 0.2,-0.73 0.04,-0.13 0.07,-0.26 0.02,-0.39 -0.03,-0.08 -0.1,-0.14 -0.14,-0.21 -0.12,-0.2 -0.08,-0.45 -0.07,-0.68 0.05,-0.66 -0.16,-1.33 -0.56,-1.85 -0.1,-0.13 -0.21,-0.25 -0.27,-0.41 -0.14,-0.36 0.08,-0.77 0.1,-1.16 0.01,-0.5 -0.31,-0.94 -0.61,-1.34 -0.25,-0.33 0.51,-0.45 0.72,-0.48 0.14,-0.03 0.29,-0.04 0.42,-0.09 0.37,-0.14 0.73,-0.54 0.89,-0.9 0.13,-0.31 0.17,-0.67 0.12,-1.01 -0.05,-0.33 -0.29,-0.6 -0.33,-0.91 -0.06,-0.43 0.07,-0.86 0.01,-1.29 -0.08,-0.65 -0.53,-1.36 -1.05,-1.75 -0.64,-0.48 -1.46,-0.68 -2.26,-0.67 -1.01,0.01 -2.07,0.38 -2.66,1.24 -0.37,0.56 -0.54,1.25 -0.48,1.92 0.04,0.51 0.19,1.01 0.38,1.49 0.11,0.29 0.23,0.59 0.27,0.9 -0.18,0.02 -0.3,0.15 -0.4,0.31 -0.09,0.15 -0.15,0.32 -0.26,0.46 -0.14,0.22 -0.37,0.37 -0.59,0.5 -1.01,0.59 -2.14,0.83 -3.17,1.36 -0.82,0.42 -1.57,0.97 -2.22,1.62 -0.05,0.05 -0.1,0.11 -0.15,0.17z"/>
        </svg>
        
        <div style="font-size: 2.5rem; font-weight: 900; margin-bottom: 20px; letter-spacing: 2px; text-shadow: 0 4px 16px rgba(0,0,0,0.3);">¡ES UN NIÑO!</div>
        <div style="font-size: 1rem; letter-spacing: 3px; opacity: 0.9; margin-bottom: 12px; font-weight: 300;">LOS FUTUROS PAPÁS</div>
        <div style="font-size: 1.5rem; font-weight: 600; margin-bottom: 32px;">${data.fatherName} & ${data.motherName}</div>
        <div style="font-size: 1.1rem; margin-bottom: 16px; opacity: 0.95; font-weight: 300;">Te invitan a celebrar la llegada de</div>
        <div style="font-size: 3.5rem; font-weight: 900; margin: 28px 0; text-shadow: 0 4px 20px rgba(0,0,0,0.4); line-height: 1.1;">${data.babyName}</div>
        
        <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid rgba(255,255,255,0.3);">
          <div style="font-size: 1.1rem; margin-bottom: 8px; font-weight: 500;">${formatDateTime(data.eventDate, data.eventTime)}</div>
          <div style="font-size: 1rem; opacity: 0.95; font-weight: 300;">${data.address}</div>
        </div>
      </div>
    </div>
  `;
  
  return container;
}

function createPDFContainer() {
  const storedData = localStorage.getItem('boyFormData');
  if (!storedData) return null;
  
  const data = JSON.parse(storedData);
  const color = data.color || localStorage.getItem('boySelectedColor') || '#3498DB';
  const fontFamily = getFontFamily(data.theme);
  
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    left: -9999px;
    top: 0;
    width: 800px;
    background: white;
    font-family: ${fontFamily};
    padding: 0;
    margin: 0;
  `;
  
  const headerBg = `linear-gradient(135deg, ${color} 0%, ${adjustColorBrightness(color, -20)} 100%)`;
  
  container.innerHTML = `
    <div style="position: relative; background: ${headerBg}; padding: 50px 30px; text-align: center; color: white; overflow: hidden;">
      ${buildEffectsOverlayForExport(data.effects || [], color)}
      
      <div style="position: relative; z-index: 10;">
        <svg width="90" height="90" viewBox="0 0 15.14 17.15" fill="white" style="margin: 0 auto 24px; display: block; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.2));">
          <path d="M1.81 9.97c-0.54,0.6 -0.96,1.42 -0.76,2.23 0.09,0.36 0.27,0.68 0.44,0.99 -0.13,-0.02 -0.3,0.05 -0.42,-0.02 -0.11,-0.07 -0.22,-0.14 -0.35,-0.16 -0.13,-0.01 -0.27,0.03 -0.38,0.11 -0.25,0.16 -0.48,0.66 -0.16,0.88 -0.36,0.44 -0.15,1.35 0.33,1.66 0.18,0.12 0.42,0.14 0.64,0.16 0.59,0.03 1.18,0.01 1.77,0.07 0.8,0.08 1.58,0.32 2.38,0.34 0.31,0 0.63,-0.03 0.9,-0.17 0.5,-0.26 0.76,-0.82 0.9,-1.37 0.47,-0.13 0.91,-0.37 1.27,-0.69 0.2,0.48 0.68,0.83 0.78,1.34 0.05,0.23 0.01,0.48 0.11,0.7 0.14,0.31 0.57,0.43 0.85,0.24 -0.02,0.24 0.26,0.46 0.49,0.37 0.03,-0.02 0.06,-0.03 0.09,-0.03 0.05,0 0.08,0.03 0.12,0.06 0.3,0.27 0.75,0.29 1.14,0.2 0.13,-0.03 0.26,-0.01 0.38,-0.09 0.14,-0.09 0.34,-0.06 0.45,0.07 0.04,0.05 0.07,0.11 0.11,0.17 0.06,0.08 0.16,0.13 0.25,0.12 0.1,-0.02 0.19,-0.11 0.18,-0.21 -0.02,-0.07 -0.07,-0.13 -0.11,-0.18 -0.05,-0.06 -0.08,-0.15 -0.04,-0.21 0.18,0.11 0.43,0.11 0.56,0.27 0.03,0.04 0.05,0.09 0.09,0.13 0.07,0.06 0.17,0.07 0.26,0.05 0.04,-0.01 0.08,-0.03 0.11,-0.06 0.03,-0.03 0.04,-0.08 0.01,-0.11 0.06,0.01 0.13,0.02 0.19,0 0.06,-0.02 0.12,-0.07 0.12,-0.13 0,-0.05 -0.03,-0.08 -0.05,-0.12 -0.08,-0.11 -0.16,-0.23 -0.23,-0.34 -0.05,-0.07 -0.06,-0.14 -0.1,-0.22 -0.14,-0.28 -0.45,-0.47 -0.76,-0.48 -0.23,-0.01 -0.45,0.06 -0.67,0.04 0.02,-0.09 -0.05,-0.18 -0.12,-0.24 -0.07,-0.06 -0.15,-0.11 -0.2,-0.19 -0.07,-0.1 -0.07,-0.23 -0.06,-0.36 0.1,0.12 0.24,0.2 0.38,0.27 0.19,0.09 0.43,0.15 0.6,0.02 0.06,-0.05 0.12,-0.15 0.05,-0.18 0.25,0 0.49,-0.01 0.74,-0.04 0.03,0 0.06,-0.01 0.09,0.01 0.02,0.02 0.03,0.04 0.03,0.07 0.04,0.1 0.11,0.2 0.22,0.23 0.1,0.03 0.24,-0.06 0.21,-0.16 0.03,0.09 0.13,0.15 0.23,0.13 0.09,-0.02 0.16,-0.11 0.16,-0.21 -0.01,-0.02 -0.01,-0.05 -0.01,-0.08 0,-0.07 0.05,-0.13 0.09,-0.19 0.07,-0.14 0.03,-0.32 -0.08,-0.44 -0.1,-0.12 -0.26,-0.18 -0.41,-0.19 -0.2,-0.02 -0.42,0.03 -0.59,-0.06 -0.06,-0.04 -0.08,-0.06 -0.13,-0.1 0.07,-0.25 0.13,-0.49 0.2,-0.73 0.04,-0.13 0.07,-0.26 0.02,-0.39 -0.03,-0.08 -0.1,-0.14 -0.14,-0.21 -0.12,-0.2 -0.08,-0.45 -0.07,-0.68 0.05,-0.66 -0.16,-1.33 -0.56,-1.85 -0.1,-0.13 -0.21,-0.25 -0.27,-0.41 -0.14,-0.36 0.08,-0.77 0.1,-1.16 0.01,-0.5 -0.31,-0.94 -0.61,-1.34 -0.25,-0.33 0.51,-0.45 0.72,-0.48 0.14,-0.03 0.29,-0.04 0.42,-0.09 0.37,-0.14 0.73,-0.54 0.89,-0.9 0.13,-0.31 0.17,-0.67 0.12,-1.01 -0.05,-0.33 -0.29,-0.6 -0.33,-0.91 -0.06,-0.43 0.07,-0.86 0.01,-1.29 -0.08,-0.65 -0.53,-1.36 -1.05,-1.75 -0.64,-0.48 -1.46,-0.68 -2.26,-0.67 -1.01,0.01 -2.07,0.38 -2.66,1.24 -0.37,0.56 -0.54,1.25 -0.48,1.92 0.04,0.51 0.19,1.01 0.38,1.49 0.11,0.29 0.23,0.59 0.27,0.9 -0.18,0.02 -0.3,0.15 -0.4,0.31 -0.09,0.15 -0.15,0.32 -0.26,0.46 -0.14,0.22 -0.37,0.37 -0.59,0.5 -1.01,0.59 -2.14,0.83 -3.17,1.36 -0.82,0.42 -1.57,0.97 -2.22,1.62 -0.05,0.05 -0.1,0.11 -0.15,0.17z"/>
        </svg>
        
        <div style="font-size: 2.2rem; font-weight: 800; margin-bottom: 20px; letter-spacing: 2px; text-shadow: 0 4px 12px rgba(0,0,0,0.25);">¡ES UN NIÑO!</div>
        <div style="font-size: 0.85rem; letter-spacing: 3px; opacity: 0.9; margin-bottom: 10px; font-weight: 300;">LOS FUTUROS PAPÁS</div>
        <div style="font-size: 1.4rem; font-weight: 600; margin-bottom: 28px;">${data.fatherName} & ${data.motherName}</div>
        <div style="font-size: 1rem; margin-bottom: 14px; opacity: 0.95; font-weight: 300;">Te invitan a celebrar la llegada de</div>
        <div style="font-size: 3.2rem; font-weight: 900; margin: 30px 0; text-shadow: 0 4px 16px rgba(0,0,0,0.3); line-height: 1.1;">${data.babyName}</div>
        
        <div style="margin-top: 28px; padding-top: 20px; border-top: 2px solid rgba(255,255,255,0.25);">
          <div style="font-size: 1.05rem; margin-bottom: 10px; font-weight: 500;">${formatDateTime(data.eventDate, data.eventTime)}</div>
          <div style="font-size: 0.95rem; opacity: 0.95; font-weight: 300;">${data.address}</div>
        </div>
      </div>
    </div>
    
    <div style="padding: 40px 30px; background: white;">
      <div style="margin-bottom: 30px; padding: 0 0 20px 0; border-bottom: 1px solid #e5e7eb;">
        <h3 style="color: ${color}; margin: 0 0 12px 0; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">💌 Mensaje</h3>
        <p style="color: #4b5563; line-height: 1.7; margin: 0; font-size: 0.95rem;">${data.invitationMessage || 'Será un placer contar con tu presencia en este día tan especial.'}</p>
      </div>
      
      <div style="margin-bottom: 30px; padding: 0 0 20px 0; border-bottom: 1px solid #e5e7eb;">
        <h3 style="color: ${color}; margin: 0 0 12px 0; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">📍 Ubicación</h3>
        <p style="color: #4b5563; margin: 0 0 10px 0; font-size: 0.95rem;">${data.address}</p>
        ${data.address ? `<div style="font-size: 0.85rem; color: #6b7280;">
          <a href="https://www.google.com/maps?q=${encodeURIComponent(data.address)}" style="color: ${color}; text-decoration: none; font-weight: 500;">→ Ver en Google Maps</a>
        </div>` : ''}
        ${data.wazeLink ? `<div style="font-size: 0.85rem; color: #6b7280; margin-top: 6px;">
          <a href="${data.wazeLink}" style="color: ${color}; text-decoration: none; font-weight: 500;">→ Abrir en Waze</a>
        </div>` : ''}
      </div>
      
      ${(data.gifts && data.gifts.length > 0) ? `
      <div>
        <h3 style="color: ${color}; margin: 0 0 12px 0; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">🎁 Lista de Regalos</h3>
        <ul style="color: #4b5563; margin: 0; padding-left: 20px; line-height: 1.8; font-size: 0.95rem;">
          ${data.gifts.map(gift => `<li style="margin-bottom: 4px;">${gift}</li>`).join('')}
        </ul>
      </div>
      ` : ''}
    </div>
  `;
  
  return container;
}

function buildEffectsOverlayForExport(effects, color) {
  if (!effects || effects.length === 0) return '';
  
  // Crear SVGs estáticos en posiciones fijas bien distribuidas
  const positions = [
    {top: '8%', left: '12%', rotation: 25},
    {top: '15%', left: '78%', rotation: -15},
    {top: '25%', left: '88%', rotation: 45},
    {top: '42%', left: '8%', rotation: -30},
    {top: '55%', left: '85%', rotation: 60},
    {top: '68%', left: '18%', rotation: 15},
    {top: '78%', left: '72%', rotation: -45},
    {top: '88%', left: '45%', rotation: 30},
    {top: '12%', left: '48%', rotation: -20},
    {top: '35%', left: '25%', rotation: 50},
    {top: '62%', left: '55%', rotation: -35},
    {top: '82%', left: '28%', rotation: 40}
  ];
  
  let svgElements = '';
  let posIndex = 0;
  
  effects.forEach(eff => {
    // Crear 4 instancias por efecto con mejor distribución
    for (let i = 0; i < 4 && posIndex < positions.length; i++) {
      const pos = positions[posIndex++];
      const size = 45 + Math.random() * 15; // Tamaños variados
      const opacity = 0.35 + Math.random() * 0.15; // Opacidad variada
      const svg = getEffectSVG(eff, color, Math.round(size))
        .replace('<svg', `<svg style="position: absolute; top: ${pos.top}; left: ${pos.left}; width: ${size}px; height: ${size}px; opacity: ${opacity}; transform: rotate(${pos.rotation}deg); filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));"`);
      svgElements += svg;
    }
  });
  
  return `<div style="position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 5;">${svgElements}</div>`;
}

function getThemeLabel(themeId) {
  const labels = {
    classic: 'Clásico',
    modern: 'Moderno',
    playful: 'Juguetón',
    elegant: 'Elegante',
    bold: 'Audaz'
  };
  return labels[themeId] || themeId;
}

function adjustColorBrightness(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
}

function applySelectedColor(storedColor) {
  const color = storedColor || localStorage.getItem('boySelectedColor') || '#3498DB';
  document.documentElement.style.setProperty('--primary-color', color);
  return color;
}

function buildEffectsOverlay(effects, color) {
  if (!effects.length) return '';
  const minis = effects.map((eff) => {
    const size = 50;
    return Array.from({ length: 5 }).map(() => {
      const svg = getEffectSVG(eff, color, size);
      const startX = (-10 + Math.random() * 120).toFixed(1);
      const startY = (-10 + Math.random() * 120).toFixed(1);
      const endX = (-10 + Math.random() * 120).toFixed(1);
      const endY = (-10 + Math.random() * 120).toFixed(1);
      const duration = (20 + Math.random() * 10).toFixed(1);
      const delay = -(6 + Math.random() * 16).toFixed(1); // negative para iniciar en distintos momentos
      const zoomMin = (0.9 + Math.random() * 0.05).toFixed(2);
      const zoomMax = (1.03 + Math.random() * 0.07).toFixed(2);
      const style = `style="--start-x:${startX}%; --start-y:${startY}%; --end-x:${endX}%; --end-y:${endY}%; --move-dur:${duration}s; --zoom-min:${zoomMin}; --zoom-max:${zoomMax}; animation-delay:${delay}s;"`;
      return svg.replace('<svg', `<svg class=\"mini-ball\" ${style}`);
    }).join('');
  }).join('');
  return `<div class="ball-field">${minis}</div>`;
}

function getFontFamily(themeId) {
  switch(themeId) {
    case 'classic': return 'Georgia, serif';
    case 'modern': return '-apple-system, BlinkMacSystemFont, sans-serif';
    case 'playful': return 'Comic Sans MS, cursive';
    case 'elegant': return 'Garamond, serif';
    case 'bold': return 'Arial Black, sans-serif';
    default: return 'inherit';
  }
}

function formatDateTime(date, time) {
  if (!date && !time) return '';
  const lang = getLang();
  const locale = lang === 'en' ? 'en-US' : 'es-ES';
  const dateStr = date ? new Date(date).toLocaleDateString(locale, { day: '2-digit', month: 'long', year: 'numeric' }) : '';
  return `${dateStr}${time ? ' - ' + time : ''}`;
}

function linksBlock(gmaps, waze) {
  if (!gmaps && !waze) return '';
  return `<div class="links-preview">${gmaps ? `<a href="${gmaps}" target="_blank">Google Maps</a>` : ''}${waze ? `<a href="${waze}" target="_blank">Waze</a>` : ''}</div>`;
}

// SVG principal para el balón de fútbol
function getFootballSVG(selectedColor) {
  const ballPath = "M0.08 0.13c0,0 0,0 0,0 0.03,0.02 0.04,0.07 0.05,0.09 0.01,0.01 0.01,0.03 0.02,0.04 0.01,0.02 0.02,0.03 0.05,0.04 0.01,0 0.02,0 0.02,0 0.02,-0.01 0.04,-0.02 0.05,-0.03 0,0 0,0 0,0 0.01,-0.01 0.02,-0.02 0.02,-0.03 0,0 0,0 0,0 0,-0.01 0,-0.01 0,-0.01 -0.01,-0.01 -0.01,-0.01 -0.01,-0.02 -0.01,-0.01 -0.02,-0.02 -0.03,-0.02l-0.01 -0.01c-0.02,-0.02 -0.05,-0.04 -0.07,-0.05 -0.02,-0.01 -0.06,-0.02 -0.08,-0.03 0,0.01 -0.01,0.02 -0.01,0.03zm0 -0.03c-0.01,0 -0.01,0 -0.02,0.01 -0.01,0 -0.01,0 -0.01,0 -0.01,0.01 -0.01,0.03 -0.01,0.04 0,-0.01 0,-0.01 0,-0.01 0.01,-0.01 0.02,-0.01 0.03,-0.01l0.01 -0.03zm-0.03 0c0.03,0 0.02,0 0.04,0 0,-0.01 0.01,-0.02 0.01,-0.02 0,0 -0.01,-0.01 -0.01,-0.02 -0.01,0.01 -0.03,0.03 -0.04,0.04zm0.06 -0.02c0.01,-0.02 0.04,-0.04 0.06,-0.04 0,0 0,0 0,0l0 -0.01c-0.02,0 -0.05,0.01 -0.07,0.02 0,0 -0.01,0.01 -0.01,0.01 0,0 0,0.01 0.01,0.01 0,0 0,0.01 0.01,0.01zm-0.05 0.17c0,-0.01 0,-0.01 -0.01,-0.02 0,-0.01 0,-0.03 0,-0.05 0.01,-0.01 0.01,-0.02 0.01,-0.04 0.01,0 0.01,-0.01 0.01,-0.01 -0.02,0 -0.03,0.03 -0.04,0.03 0,0.02 0.01,0.04 0.01,0.06 0.01,0.01 0.01,0.02 0.02,0.03zm0.05 -0.17c0.05,0 0.09,-0.03 0.14,-0.01 0.01,0 0.01,0 0.02,0.01 0,0 0.01,0 0.01,0.01 0,-0.01 -0.01,-0.01 -0.01,-0.02 0,0 0,0 -0.01,0 -0.02,-0.02 -0.03,-0.03 -0.06,-0.03 -0.02,-0.01 -0.02,-0.01 -0.03,0 -0.01,0.01 -0.03,0.01 -0.04,0.02 0,0.01 -0.01,0.02 -0.02,0.02zm-0.04 0.05c0,0.01 -0.01,0.03 -0.01,0.03 0,0.03 0,0.06 0,0.08 0,0.02 0,0.02 0.01,0.03 0,0 0.01,0 0.01,0l0 0.01c0.01,0 0.01,0 0.01,0 0.02,0.02 0.05,0.03 0.08,0.03 0.01,0 0.03,0 0.04,0 -0.02,-0.01 -0.04,-0.02 -0.05,-0.03 -0.02,-0.01 -0.02,-0.03 -0.03,-0.05 -0.01,-0.02 -0.01,-0.04 -0.02,-0.06 -0.01,-0.01 -0.02,-0.04 -0.04,-0.04zm0.02 -0.03c0.01,0 0.02,0 0.02,0 0.03,0.01 0.08,0.03 0.1,0.05 0.01,0.01 0.02,0.01 0.03,0.02l0.01 0.01c0.01,0.01 0.03,0.03 0.04,0.04 0,0 0.01,0.01 0.01,0.01 0,0 0,-0.01 0,-0.02 0.01,-0.02 0.01,-0.05 0.01,-0.07 -0.01,-0.01 -0.01,-0.02 -0.02,-0.04 -0.01,0 -0.02,-0.01 -0.03,-0.02 -0.05,-0.03 -0.09,0.01 -0.14,0 0,0 -0.01,0 -0.01,0 0,0 0,0 0,0.01 -0.01,0 -0.01,0.01 -0.02,0.01z";
  return `<svg width="32" height="32" viewBox="0 0 0.34 0.34" xmlns="http://www.w3.org/2000/svg"><g><path fill="${selectedColor}" d="${ballPath}"/></g></svg>`;
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

function getEffectLabel(effectId) {
  const labels = {
    football: 'Balón',
    footprints: 'Huellas',
    animals: 'Animales',
    waves: 'Olas',
    cars: 'Carros',
    tools: 'Herramientas'
  };
  return labels[effectId] || effectId;
}
