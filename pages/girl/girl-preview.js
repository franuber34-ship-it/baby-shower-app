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
    '¡ES UNA NIÑA!': "IT'S A GIRL!",
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
  const lang = getLang();
  const storedData = localStorage.getItem('girlFormData');
  console.log('Stored data:', storedData);
  
  if (!storedData) {
    console.log('No stored data found');
    const errorHTML = `
      <div class="container" style="padding: 40px; text-align: center;">
        <h2 style="color: #e74c3c; margin-bottom: 20px;">No hay datos para mostrar</h2>
        <p style="color: #666; font-size: 16px; margin-bottom: 20px;">
          Parece que el formulario no se completó correctamente.
        </p>
        <p style="color: #999; font-size: 14px; margin-bottom: 20px;">
          <strong>Datos en localStorage:</strong> <br>
          Color: ${localStorage.getItem('girlSelectedColor') ? '✓' : '✗'} <br>
          Efectos: ${localStorage.getItem('girlSelectedEffects') ? '✓' : '✗'} <br>
          Tema: ${localStorage.getItem('girlSelectedTheme') ? '✓' : '✗'} <br>
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
  
  // Generar URL única de invitación con token corto
  const invitationId = generateInvitationId();
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
  await saveInvitation({ ...data, invitationId, token, category: 'girl', tokenExpiresAt });

  const lang = getLang();
  const moreLabel = lang === 'en' ? 'more...' : 'más...';
  const adminTemplate = `
    <button class="back-btn" onclick="window.location.href='form.html'">←</button>
    
    <div class="admin-view" style="font-family:${fontFamily};">
      <div class="admin-preview-header" style="background: linear-gradient(135deg, ${color} 0%, ${adjustColorBrightness(color, -20)} 100%);">
        ${effectsOverlay}
        
        <div class="invitation-card-header">
          <svg class="baby-silhouette" viewBox="0 0 34.41 16.66" fill="white">
            <path d="M21.21 8.71c-0.01,0.01 -0.02,0.01 -0.03,0 -0.17,-0.05 -0.33,-0.09 -0.51,-0.12 -0.05,-0.01 -0.65,-0.06 -0.65,-0.05 -0.04,-0.64 -0.09,-1.28 -0.13,-1.91 -0.01,-0.07 -0.01,-0.13 -0.02,-0.2 -0.04,-0.65 -0.09,-1.29 -0.14,-1.94 0.29,0 0.47,0.04 0.69,0.21 0.08,0.05 0.15,0.12 0.21,0.2 0.21,0.26 0.26,0.63 0.33,0.95 0.2,0.93 0.26,1.88 0.26,2.84 0,0.01 0,0.02 -0.01,0.02zm13.08 1.19c-0.12,-0.71 -0.34,-1.41 -0.75,-2 -0.4,-0.59 -1.01,-1.06 -1.72,-1.2 0.42,-0.34 0.85,-0.79 0.83,-1.35 -0.01,-0.61 -0.26,-1.16 -0.61,-1.66 -0.46,-0.64 -1.04,-1.2 -1.35,-1.93 -0.08,-0.21 -0.15,-0.42 -0.21,-0.64 -0.06,0.03 -0.12,0.06 -0.18,0.1 0.03,-0.12 -0.03,-0.26 -0.14,-0.31 -0.1,-0.06 -0.25,-0.03 -0.33,0.06 -0.06,-0.13 -0.12,-0.28 -0.24,-0.37 -0.12,-0.1 -0.28,-0.12 -0.41,-0.03 -0.17,-0.22 -0.62,-0.62 -0.88,-0.26 -0.06,0.08 -0.06,0.19 -0.08,0.29 -0.05,0.31 -0.22,0.62 -0.14,0.92 0.05,0.2 0.19,0.36 0.27,0.55 0.07,0.17 0.1,0.34 0.12,0.52 0.08,0.58 0.15,1.15 0.23,1.73 0.01,0.11 0.02,0.23 -0.05,0.32 -0.08,0.11 -0.23,0.11 -0.37,0.1 -1.01,-0.06 -1.89,-0.01 -2.89,0.18 -0.16,0.03 -0.33,0.07 -0.41,0.22 -0.08,-0.11 0.01,-0.04 -0.06,-0.15 -0.32,-0.58 -0.68,-1.15 -1.17,-1.6 -0.26,-0.23 -0.54,-0.43 -0.82,-0.63 -0.83,-0.62 -1.96,-0.97 -2.29,-1.96 -0.12,-0.38 -0.46,-0.69 -0.85,-0.78 -0.14,-0.04 -0.32,-0.02 -0.36,0.11 -0.09,-0.08 -0.23,-0.11 -0.34,-0.07 -0.11,0.04 -0.2,0.15 -0.21,0.27 -0.14,-0.12 -0.36,-0.13 -0.49,-0.01 -0.04,0.03 -0.07,0.07 -0.11,0.09 -0.04,0.02 -0.09,0.03 -0.13,0.04 -0.28,0.05 -0.47,0.15 -0.67,0.35 -0.04,0.04 -0.49,0.59 -0.43,0.63 -0.23,-0.11 -0.52,-0.01 -0.69,0.18 -0.17,0.19 -0.25,0.44 -0.29,0.7 -0.11,-0.25 -0.52,-0.2 -0.68,0.02 -0.15,0.22 -0.13,0.52 -0.11,0.79 -0.27,0.04 -0.44,0.39 -0.31,0.63 0.08,0.14 0.24,0.25 0.26,0.41 0.01,0.07 -0.01,0.14 -0.03,0.21 -0.07,0.21 -0.12,0.42 -0.1,0.63 0.03,0.22 0.16,0.43 0.37,0.49 0.08,0.03 0.17,0.03 0.25,0.05 0.09,0.03 0.17,0.08 0.24,0.14 0.14,0.1 0.38,0.1 0.52,0.2 -0.18,0.23 -0.02,0.59 -0.17,0.84 -0.05,0.08 -0.13,0.14 -0.21,0.2 -0.41,0.32 -0.83,0.63 -1.27,0.92 -0.57,0.36 -1.17,0.67 -1.72,1.06 -0.13,0.09 -1.42,1.23 -1.31,1.35 -0.18,-0.19 -0.28,-0.44 -0.39,-0.67 -0.45,-0.84 -1.26,-1.61 -2.14,-1.98 -0.51,-0.21 -0.96,-0.2 -1.49,-0.25 -0.73,-0.08 -1.44,-0.32 -2.14,-0.54 -0.33,-0.1 -0.67,-0.2 -1.02,-0.18 -0.34,0.01 -0.67,0.13 -0.99,0.25 -1.09,0.44 -2.18,1.03 -2.84,2 -0.5,0.75 -0.71,1.65 -0.77,2.55 -0.05,0.69 -0.01,1.4 0.21,2.06 0.59,1.88 2.37,2.28 4.14,2.39 1.54,0.1 3.09,0.02 4.61,-0.22 0.45,-0.08 0.9,-0.16 1.35,-0.1 0.39,0.05 0.75,0.2 1.12,0.32 0.88,0.29 1.8,0.38 2.72,0.46 2.51,0.21 5.03,0.32 7.55,0.32 1.68,0.01 3.36,-0.04 5.03,-0.17 0.67,-0.04 1.36,-0.07 2.05,-0.14 0.94,-0.1 1.87,-0.26 2.71,-0.63 0.37,-0.17 0.73,-0.34 1.06,-0.57 0.79,-0.56 1.35,-1.43 1.62,-2.36 0.27,-0.93 0.27,-1.93 0.1,-2.89z"/>
          </svg>
          
          <div class="main-announcement">¡ES UNA NIÑA!</div>
          
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
        <h2 class="summary-title">Compartir</h2>
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
        <svg class="baby-silhouette" viewBox="0 0 34.41 16.66" fill="white">
          <path d="M21.21 8.71c-0.01,0.01 -0.02,0.01 -0.03,0 -0.17,-0.05 -0.33,-0.09 -0.51,-0.12 -0.05,-0.01 -0.65,-0.06 -0.65,-0.05 -0.04,-0.64 -0.09,-1.28 -0.13,-1.91 -0.01,-0.07 -0.01,-0.13 -0.02,-0.2 -0.04,-0.65 -0.09,-1.29 -0.14,-1.94 0.29,0 0.47,0.04 0.69,0.21 0.08,0.05 0.15,0.12 0.21,0.2 0.21,0.26 0.26,0.63 0.33,0.95 0.2,0.93 0.26,1.88 0.26,2.84 0,0.01 0,0.02 -0.01,0.02zm13.08 1.19c-0.12,-0.71 -0.34,-1.41 -0.75,-2 -0.4,-0.59 -1.01,-1.06 -1.72,-1.2 0.42,-0.34 0.85,-0.79 0.83,-1.35 -0.01,-0.61 -0.26,-1.16 -0.61,-1.66 -0.46,-0.64 -1.04,-1.2 -1.35,-1.93 -0.08,-0.21 -0.15,-0.42 -0.21,-0.64 -0.06,0.03 -0.12,0.06 -0.18,0.1 0.03,-0.12 -0.03,-0.26 -0.14,-0.31 -0.1,-0.06 -0.25,-0.03 -0.33,0.06 -0.06,-0.13 -0.12,-0.28 -0.24,-0.37 -0.12,-0.1 -0.28,-0.12 -0.41,-0.03 -0.17,-0.22 -0.62,-0.62 -0.88,-0.26 -0.06,0.08 -0.06,0.19 -0.08,0.29 -0.05,0.31 -0.22,0.62 -0.14,0.92 0.05,0.2 0.19,0.36 0.27,0.55 0.07,0.17 0.1,0.34 0.12,0.52 0.08,0.58 0.15,1.15 0.23,1.73 0.01,0.11 0.02,0.23 -0.05,0.32 -0.08,0.11 -0.23,0.11 -0.37,0.1 -1.01,-0.06 -1.89,-0.01 -2.89,0.18 -0.16,0.03 -0.33,0.07 -0.41,0.22 -0.08,-0.11 0.01,-0.04 -0.06,-0.15 -0.32,-0.58 -0.68,-1.15 -1.17,-1.6 -0.26,-0.23 -0.54,-0.43 -0.82,-0.63 -0.83,-0.62 -1.96,-0.97 -2.29,-1.96 -0.12,-0.38 -0.46,-0.69 -0.85,-0.78 -0.14,-0.04 -0.32,-0.02 -0.36,0.11 -0.09,-0.08 -0.23,-0.11 -0.34,-0.07 -0.11,0.04 -0.2,0.15 -0.21,0.27 -0.14,-0.12 -0.36,-0.13 -0.49,-0.01 -0.04,0.03 -0.07,0.07 -0.11,0.09 -0.04,0.02 -0.09,0.03 -0.13,0.04 -0.28,0.05 -0.47,0.15 -0.67,0.35 -0.04,0.04 -0.49,0.59 -0.43,0.63 -0.23,-0.11 -0.52,-0.01 -0.69,0.18 -0.17,0.19 -0.25,0.44 -0.29,0.7 -0.11,-0.25 -0.52,-0.2 -0.68,0.02 -0.15,0.22 -0.13,0.52 -0.11,0.79 -0.27,0.04 -0.44,0.39 -0.31,0.63 0.08,0.14 0.24,0.25 0.26,0.41 0.01,0.07 -0.01,0.14 -0.03,0.21 -0.07,0.21 -0.12,0.42 -0.1,0.63 0.03,0.22 0.16,0.43 0.37,0.49 0.08,0.03 0.17,0.03 0.25,0.05 0.09,0.03 0.17,0.08 0.24,0.14 0.14,0.1 0.38,0.1 0.52,0.2 -0.18,0.23 -0.02,0.59 -0.17,0.84 -0.05,0.08 -0.13,0.14 -0.21,0.2 -0.41,0.32 -0.83,0.63 -1.27,0.92 -0.57,0.36 -1.17,0.67 -1.72,1.06 -0.13,0.09 -1.42,1.23 -1.31,1.35 -0.18,-0.19 -0.28,-0.44 -0.39,-0.67 -0.45,-0.84 -1.26,-1.61 -2.14,-1.98 -0.51,-0.21 -0.96,-0.2 -1.49,-0.25 -0.73,-0.08 -1.44,-0.32 -2.14,-0.54 -0.33,-0.1 -0.67,-0.2 -1.02,-0.18 -0.34,0.01 -0.67,0.13 -0.99,0.25 -1.09,0.44 -2.18,1.03 -2.84,2 -0.5,0.75 -0.71,1.65 -0.77,2.55 -0.05,0.69 -0.01,1.4 0.21,2.06 0.59,1.88 2.37,2.28 4.14,2.39 1.54,0.1 3.09,0.02 4.61,-0.22 0.45,-0.08 0.9,-0.16 1.35,-0.1 0.39,0.05 0.75,0.2 1.12,0.32 0.88,0.29 1.8,0.38 2.72,0.46 2.51,0.21 5.03,0.32 7.55,0.32 1.68,0.01 3.36,-0.04 5.03,-0.17 0.67,-0.04 1.36,-0.07 2.05,-0.14 0.94,-0.1 1.87,-0.26 2.71,-0.63 0.37,-0.17 0.73,-0.34 1.06,-0.57 0.79,-0.56 1.35,-1.43 1.62,-2.36 0.27,-0.93 0.27,-1.93 0.1,-2.89z"/>
        </svg>
        
        <div class="main-announcement">¡ES UNA NIÑA!</div>
        
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
          ${iconSVG('message', 'var(--primary-color, #E91E63)')}
          MENSAJE
        </button>
        <button class="tab-button" onclick="switchTab('location')" data-tab="location">
          ${iconSVG('pin', 'var(--primary-color, #E91E63)')}
          UBICACIÓN
        </button>
        <button class="tab-button" onclick="switchTab('gifts')" data-tab="gifts">
          ${iconSVG('gift', 'var(--primary-color, #E91E63)')}
          REGALOS
        </button>
        <button class="tab-button" onclick="switchTab('confirm')" data-tab="confirm">
          ${iconSVG('check', 'var(--primary-color, #E91E63)')}
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-color, #E91E63)" style="flex-shrink: 0; margin-top: 2px;">
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
            ${(data.gifts || []).map(gift => `<li class="gift-item" style="display:flex; align-items:center; gap:10px;">${iconSVG('gift', 'var(--primary-color, #E91E63)')} <span>${gift}</span></li>`).join('')}
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
        <svg style="position: absolute; top: 40px; right: 30px; width: 28px; height: 28px; opacity: 0.12; fill: white;" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <svg style="position: absolute; bottom: 30px; left: 40px; width: 26px; height: 26px; opacity: 0.12; fill: white;" viewBox="0 0 24 24"><path d="M12 22c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
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
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
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
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#E91E63';
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
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#E91E63';
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
  const base = t.shareMessage || '¡Estás invitada a mi Baby Shower! 👶\n\nMira los detalles aquí:';
  const message = `${base}\n${inviteUrl}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  
  console.log('Compartiendo por WhatsApp:', whatsappUrl);
  window.open(whatsappUrl, '_blank');
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

function applySelectedColor(storedColor) {
  const color = storedColor || localStorage.getItem('girlSelectedColor') || '#E91E63';
  document.documentElement.style.setProperty('--primary-color', color);
  return color;
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
      const delay = -(6 + Math.random() * 16).toFixed(1);
      const zoomMin = (0.9 + Math.random() * 0.05).toFixed(2);
      const zoomMax = (1.03 + Math.random() * 0.07).toFixed(2);
      const style = `style="--start-x:${startX}%; --start-y:${startY}%; --end-x:${endX}%; --end-y:${endY}%; --move-dur:${duration}s; --zoom-min:${zoomMin}; --zoom-max:${zoomMax}; animation-delay:${delay}s;"`;
      return svg.replace('<svg', `<svg class=\"mini-ball\" ${style}`);
    }).join('');
  }).join('');
  return `<div class="ball-field">${minis}</div>`;
}

// SVG embebidos (mismos que effects niña) para respetar color y forma
const svgTemplates = {
  corazon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.51 4.51" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><path class="fil0" d="M2.25 1.25c-0.03,-0.04 -0.11,-0.17 -0.2,-0.27 -0.67,-0.76 -1.79,-0.05 -1.57,0.96 0.14,0.7 0.8,1.05 1.3,1.46 0.15,0.12 0.3,0.24 0.42,0.38l0.05 0.07 0.23 -0.25c0.08,-0.07 0.17,-0.13 0.25,-0.21 0.44,-0.39 1.15,-0.7 1.3,-1.45 0.1,-0.49 -0.1,-1.01 -0.59,-1.21 -0.28,-0.11 -0.51,-0.09 -0.74,0.05 -0.27,0.16 -0.32,0.32 -0.45,0.47z"/></g></svg>`,
  estrella: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.66 8.66" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><polygon class="fil0" points="4.33,1.03 5.14,3.56 7.8,3.55 5.65,5.11 6.47,7.63 4.33,6.06 2.19,7.63 3.01,5.11 0.86,3.55 3.52,3.56 "/></g></svg>`,
  hojas: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.93 5.93" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><g><path class="fil0" d="M3.62 2.7l-0.06 0.06c-0.14,0.14 -0.25,0.31 -0.35,0.5 -0.07,0.13 -0.22,0.47 -0.24,0.61l0 0.05 0.04 0.04c0.15,0.05 0.27,0.13 0.48,0.13 0.78,0 1.14,-1.13 1.36,-1.65 0.21,-0.5 0.45,-0.59 0.49,-0.69 -0.69,-0.03 -1.61,0.07 -2.1,0.34 -0.28,0.16 -0.47,0.35 -0.58,0.65 -0.05,0.16 -0.07,0.36 -0.05,0.56 0.02,0.15 0.06,0.38 0.12,0.48 0.04,-0.03 0.21,-0.36 0.24,-0.41 0.09,-0.15 0.15,-0.25 0.25,-0.38 0.14,-0.18 0.44,-0.5 0.73,-0.53 -0.09,0.08 -0.24,0.13 -0.33,0.24z"/><path class="fil0" d="M2.41 3.78l-0.05 -0.04c-0.1,-0.1 -0.2,-0.19 -0.33,-0.27 -0.24,-0.15 -0.32,-0.11 -0.45,-0.16 0.29,-0.15 0.98,0.45 1.03,0.46 0,-0.1 -0.03,-0.23 -0.06,-0.34 -0.21,-0.63 -0.87,-0.56 -1.39,-0.4 -0.06,0.02 -0.54,0.18 -0.57,0.23 0.1,0.05 0.17,0.07 0.27,0.13 0.22,0.14 0.35,0.35 0.62,0.55 0.73,0.55 1.03,0 1.03,-0.03 -0.03,-0.06 -0.06,-0.08 -0.1,-0.13z"/></g></g></svg>`,
  huella: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.04 7.04" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><path class="fil0" d="M2.88 2.98c-0.09,-0.05 -0.08,-0.12 -0.09,-0.24l-0.1 -0.94c-0.02,-0.18 -0.02,-0.46 -0.11,-0.57 -0.23,-0.28 -0.6,-0.11 -0.67,0.08 -0.04,0.1 -0.02,0.21 -0.01,0.31 0.05,0.38 0.11,0.87 0.14,1.25 0,0.08 0.04,0.23 0,0.29 -0.05,0.09 -0.18,0.07 -0.22,-0.02 -0.08,-0.2 -0.25,-0.9 -0.33,-1.05 -0.2,-0.38 -0.8,-0.18 -0.71,0.26l0.16 0.53c0.05,0.18 0.1,0.35 0.16,0.53 0.06,0.19 0.08,0.37 0.11,0.59 0.16,0.96 0.27,1.75 1.26,2.2 0.83,0.37 1.63,-0.08 2.24,-0.6 0.19,-0.16 0.36,-0.33 0.55,-0.49 0.23,-0.2 0.54,-0.42 0.78,-0.62 0.07,-0.06 0.31,-0.25 0.2,-0.42 -0.16,-0.27 -0.72,-0.31 -1.02,-0.08 -0.06,0.05 -0.34,0.29 -0.39,0.3 -0.09,-0.05 -0.12,-0.15 -0.13,-0.27 -0.01,-0.17 0.02,-0.21 0.07,-0.35l0.69 -1.81c0.1,-0.27 -0.02,-0.45 -0.23,-0.53 -0.26,-0.1 -0.45,0.04 -0.52,0.24 -0.15,0.41 -0.31,0.81 -0.46,1.21 -0.03,0.08 -0.08,0.25 -0.13,0.29 -0.09,0.08 -0.24,0.01 -0.24,-0.12l0.17 -1.5c0.01,-0.11 0.04,-0.27 0.02,-0.37 -0.06,-0.37 -0.51,-0.51 -0.73,-0.23 -0.07,0.09 -0.07,0.18 -0.09,0.32l-0.19 1.7c-0.02,0.11 -0.08,0.11 -0.18,0.11z"/></g></svg>`,
  ondas: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.12 5.12" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><path class="fil0" d="M1.76 4.45c-0.1,-0.27 -0.27,-0.55 -0.03,-0.86l0.05 -0.05c-0.02,0.32 0.03,0.64 0.31,0.7 0.15,0.03 0.29,-0.06 0.3,-0.2 0,-0.16 -0.1,-0.24 -0.16,-0.35 -0.21,-0.39 -0.19,-0.91 0.08,-1.27l0.12 -0.13c0.04,-0.04 0.02,-0.04 0.07,-0.06 -0.1,0.24 -0.17,0.37 -0.08,0.67 0.05,0.2 0.19,0.4 0.29,0.54 0.1,0.14 0.25,0.34 0.29,0.55 0.05,0.23 -0.05,0.41 -0.18,0.58 -0.02,0.02 -0.01,0 -0.02,0.04 0.35,-0.08 0.57,-0.2 0.79,-0.46 0.04,-0.05 0.06,-0.09 0.1,-0.15 0.31,-0.52 0.2,-1.16 -0.17,-1.63 -0.02,-0.02 -0.04,-0.04 -0.06,-0.06 -0.03,-0.04 -0.11,-0.11 -0.14,-0.13 0.05,0.16 0.13,0.32 0.12,0.51 -0.03,0.5 -0.6,0.4 -0.53,-0.05 0.01,-0.09 0.04,-0.18 0.05,-0.26 0.08,-0.5 -0.02,-1.02 -0.32,-1.38l-0.16 -0.16c-0.03,-0.03 -0.04,-0.05 -0.08,-0.08 -0.1,-0.08 -0.24,-0.2 -0.38,-0.25 0.02,0.04 0.04,0.06 0.06,0.1 0.08,0.11 0.14,0.24 0.16,0.38 0.04,0.31 -0.08,0.58 -0.21,0.82l-0.14 0.23c-0.04,0.06 -0.09,0.14 -0.14,0.21 -0.04,0.07 -0.09,0.15 -0.14,0.22 -0.08,0.14 -0.18,0.28 -0.25,0.45 -0.07,0.18 -0.12,0.39 -0.11,0.6 0.02,0.32 0.09,0.49 0.26,0.71 0.02,0.02 0.02,0.03 0.04,0.05l0.17 0.15c0.04,0.02 0,0 0.04,0.02z"/></g></svg>`,
  animales: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.02 4.02" width="32" height="32"><defs><style>.fil0 {fill:COLOR}</style></defs><g style="clip-path:url(#id0)"><path class="fil0" d="M1.96 1.22c0.38,-0.08 0.49,0.51 0.11,0.58 -0.39,0.07 -0.5,-0.5 -0.11,-0.58zm0.04 0.3l0 0.16c-0.12,-0.01 -0.09,-0.06 -0.15,-0.07 0.03,0.15 0.29,0.14 0.33,-0.01 -0.07,0.02 -0.03,0.08 -0.15,0.08l0 -0.15c0.16,-0.08 0.07,-0.16 -0.02,-0.16 -0.13,0 -0.14,0.12 -0.01,0.15zm1.09 1.57c0.08,-0.44 -0.51,-0.64 -0.72,-0.28 -0.05,0.09 -0.08,0.23 -0.1,0.35 -0.07,0.36 0.21,0.51 0.43,0.45 0.13,-0.04 0.18,-0.12 0.24,-0.22 0.05,-0.09 0.12,-0.19 0.15,-0.3zm-2.15 0.01c0.02,0.1 0.1,0.22 0.15,0.3 0.06,0.1 0.12,0.18 0.24,0.21 0.15,0.04 0.28,-0.03 0.35,-0.1 0.08,-0.09 0.1,-0.21 0.07,-0.36 -0.05,-0.27 -0.1,-0.49 -0.38,-0.53 -0.26,-0.03 -0.49,0.21 -0.43,0.48zm1.96 -0.73c0.18,-0.08 0.35,-0.1 0.37,-0.31 0.03,-0.2 -0.12,-0.36 -0.31,-0.35 -0.06,0 -0.22,0.05 -0.26,0.08 -0.07,0.03 -0.24,0.32 -0.69,0.32 -0.44,0 -0.61,-0.29 -0.7,-0.33 -0.06,-0.03 -0.19,-0.08 -0.26,-0.07 -0.18,0 -0.33,0.16 -0.3,0.36 0.03,0.19 0.2,0.23 0.37,0.3l0.01 0.14c0.03,0.01 0.05,0 0.09,-0.01 0.2,-0.04 0.41,0.04 0.53,0.21 0.07,0.1 0.13,0.35 0.14,0.49 0.03,0.19 -0.07,0.22 0.24,0.18 -0.02,-0.21 0.05,-0.54 0.15,-0.68 0.06,-0.08 0.14,-0.15 0.25,-0.18 0.06,-0.02 0.12,-0.03 0.19,-0.03 0.06,0 0.13,0.02 0.17,0.02l0.01 -0.14zm-0.63 -1.32c0.12,-0.05 0.17,0.13 0.06,0.16 -0.12,0.04 -0.17,-0.12 -0.06,-0.16zm-0.58 0c0.11,-0.05 0.17,0.13 0.07,0.16 -0.12,0.04 -0.18,-0.12 -0.07,-0.16zm-0.01 -0.5c-0.06,-0.04 -0.12,-0.15 -0.31,-0.15 -0.27,0 -0.43,0.28 -0.34,0.51 0.07,0.15 0.16,0.16 0.24,0.21 -0.01,0.27 0.04,0.46 0.19,0.61 0.02,0.02 0.03,0.04 0.05,0.06 0.13,0.11 0.33,0.19 0.51,0.18 0.27,0 0.43,-0.12 0.55,-0.25 0.15,-0.16 0.19,-0.33 0.19,-0.6 0.12,-0.08 0.17,-0.06 0.23,-0.21 0.1,-0.24 -0.07,-0.51 -0.34,-0.51 -0.16,0 -0.23,0.08 -0.3,0.15 -0.22,-0.05 -0.34,-0.15 -0.67,0z"/></g></svg>`
};


function getEffectSVG(effectId, selectedColor, size = 32) {
  const tpl = svgTemplates[effectId];
  if (!tpl) return '';
  return tpl
    .replace(/COLOR/g, selectedColor)
    .replace(/width="[^"]*"/, `width="${size}"`)
    .replace(/height="[^"]*"/, `height="${size}"`);
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
