// Sistema de Internacionalización (i18n)
const translations = {
    es: {
        // Pantalla de género
        mainTitle: 'Baby Shower',
        mainSubtitle: 'Crea tu invitación digital',
        boy: 'Niño',
        girl: 'Niña',
        
        // Pantalla de colores
        chooseColor: 'Elige el color',
        back: 'Atrás',
        continue: 'Continuar',
        
        // Pantalla de efectos
        floatingEffects: 'Efectos Flotantes',
        effectsDescription: 'Personaliza tu invitación seleccionando hasta 3 efectos decorativos',
        effectsSelected: 'Efectos seleccionados',
        selectAtLeastOne: 'Por favor selecciona al menos un efecto',
        maxEffectsReached: 'Solo puedes seleccionar hasta 3 efectos',
        
        // Pantalla de temas
        invitationStyle: 'Estilo de Invitación',
        themeDescription: 'Elige el estilo tipográfico que mejor represente tu celebración',
        selectTheme: 'Por favor selecciona un tema',
        
        // Formulario
        completeInfo: 'Completa la información',
        whatsappContact: 'WhatsApp de Contacto',
        whatsappDescription: 'Número donde recibirás las confirmaciones de asistencia',
        searchCountry: 'Buscar país...',
        babyInfo: 'Información del Bebé',
        babyNamePlaceholder: 'Nombre del bebé',
        parentsInfo: 'Padres',
        fatherNamePlaceholder: 'Nombre del papá',
        motherNamePlaceholder: 'Nombre de la mamá',
        eventDateTime: 'Fecha y Hora del Evento',
        date: 'Fecha',
        time: 'Hora',
        location: 'Ubicación',
        addressPlaceholder: 'Dirección completa del evento',
        googleMapsPlaceholder: 'Enlace de Google Maps (opcional)',
        wazePlaceholder: 'Enlace de Waze (opcional)',
        invitationMessage: 'Mensaje de Invitación',
        messagePlaceholder: 'Escribe un mensaje especial para tus invitados...',
        giftList: 'Lista de Regalos',
        useDefaultList: 'Usar lista por defecto (10 regalos aleatorios)',
        addCustomList: 'Agregar mi propia lista',
        customGiftsPlaceholder: 'Escribe cada regalo en una línea nueva\nEjemplo:\nPañales\nBiberón\nRopa de bebé',
        generateInvitation: 'Generar Invitación',
        
        // Vista previa
        invitationReady: '¡Tu invitación está lista!',
        copyLink: 'Copiar Enlace',
        linkCopied: '✓ Copiado!',
        shareWhatsApp: 'Compartir por WhatsApp',
        createNew: 'Crear Nueva Invitación',
        
        // Vista de invitado
        itsABoy: '¡Es un niño!',
        itsAGirl: '¡Es una niña!',
        futurePparents: 'Los futuros papás',
        inviteYouToCelebrate: 'Te invitan a celebrar la llegada de',
        message: 'Mensaje',
        gifts: 'Regalos',
        confirm: 'Confirmar',
        youreInvited: '¡Estás Invitado!',
        seeYouOn: '¡Esperamos verte el',
        toCelebrate: 'para celebrar juntos este hermoso comienzo!',
        suggestedGifts: 'Lista de Regalos Sugeridos',
        selectGiftsToGive: 'Selecciona los regalos que deseas obsequiar',
        giftsSelected: 'Regalos seleccionados',
        confirmAttendance: 'Confirmar Asistencia',
        fullName: 'Nombre completo',
        phone: 'Teléfono',
        howManyPeople: '¿Cuántas personas asistirán?',
        messageForParents: 'Mensaje para los papás (opcional)',
        confirmButton: 'Confirmar Asistencia',
        thanksForConfirming: '¡Gracias por confirmar! Se abrió WhatsApp para enviar tu confirmación.',
        peopleConfirmed: 'personas confirmadas',
        
        // Mensajes
        selectColor: 'Por favor selecciona un color',
        errorGenerating: 'Error al guardar la invitación. Por favor, intenta de nuevo.',
        savingInvitation: 'Guardando invitación...',
        phoneValidation: 'El número debe tener',
        digitsFor: 'dígitos para',
        invitationNotFound: 'Invitación no encontrada',
        invitationNotFoundDesc: 'Lo sentimos, no pudimos encontrar esta invitación.',
        linkIncomplete: 'El enlace puede estar incompleto o haber expirado.',
        
        // Efectos flotantes
        effectBalloons: 'Balón',
        effectFootprints: 'Huellitas',
        effectAnimals: 'Animales',
        effectWaves: 'Ondas',
        effectCars: 'Carros',
        effectTools: 'Herramientas',
        
        // Temas
        themeClassic: 'Clásico Elegante',
        themeClassicDesc: 'Tipografía serif con diseño tradicional',
        themeModern: 'Moderno Minimalista',
        themeModernDesc: 'Líneas limpias y tipografía sans-serif',
        themePlayful: 'Divertido',
        themePlayfulDesc: 'Tipografía redondeada y amigable',
        themeElegant: 'Elegancia Suave',
        themeElegantDesc: 'Diseño sofisticado con toques delicados',
        themeBold: 'Audaz y Fuerte',
        themeBoldDesc: 'Tipografía bold para destacar',
        themeExample: 'Ejemplo: ¡Estás invitado a nuestro Baby Shower!',
        
        // Nombres de meses (para fechas)
        months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
    },
    en: {
        // Gender screen
        mainTitle: 'Baby Shower',
        mainSubtitle: 'Create your digital invitation',
        boy: 'Boy',
        girl: 'Girl',
        
        // Color screen
        chooseColor: 'Choose the color',
        back: 'Back',
        continue: 'Continue',
        
        // Effects screen
        floatingEffects: 'Floating Effects',
        effectsDescription: 'Customize your invitation by selecting up to 3 decorative effects',
        effectsSelected: 'Selected effects',
        selectAtLeastOne: 'Please select at least one effect',
        maxEffectsReached: 'You can only select up to 3 effects',
        
        // Theme screen
        invitationStyle: 'Invitation Style',
        themeDescription: 'Choose the typography style that best represents your celebration',
        selectTheme: 'Please select a theme',
        
        // Form
        completeInfo: 'Complete the information',
        whatsappContact: 'WhatsApp Contact',
        whatsappDescription: 'Number where you will receive attendance confirmations',
        searchCountry: 'Search country...',
        babyInfo: 'Baby Information',
        babyNamePlaceholder: "Baby's name",
        parentsInfo: 'Parents',
        fatherNamePlaceholder: "Father's name",
        motherNamePlaceholder: "Mother's name",
        eventDateTime: 'Event Date and Time',
        date: 'Date',
        time: 'Time',
        location: 'Location',
        addressPlaceholder: 'Full event address',
        googleMapsPlaceholder: 'Google Maps link (optional)',
        wazePlaceholder: 'Waze link (optional)',
        invitationMessage: 'Invitation Message',
        messagePlaceholder: 'Write a special message for your guests...',
        giftList: 'Gift List',
        useDefaultList: 'Use default list (10 random gifts)',
        addCustomList: 'Add my own list',
        customGiftsPlaceholder: 'Write each gift on a new line\nExample:\nDiapers\nBaby bottle\nBaby clothes',
        generateInvitation: 'Generate Invitation',
        
        // Preview
        invitationReady: 'Your invitation is ready!',
        copyLink: 'Copy Link',
        linkCopied: '✓ Copied!',
        shareWhatsApp: 'Share on WhatsApp',
        createNew: 'Create New Invitation',
        
        // Guest view
        itsABoy: "It's a Boy!",
        itsAGirl: "It's a Girl!",
        futurePparents: 'The future parents',
        inviteYouToCelebrate: 'invite you to celebrate the arrival of',
        message: 'Message',
        gifts: 'Gifts',
        confirm: 'Confirm',
        youreInvited: "You're Invited!",
        seeYouOn: 'We hope to see you on',
        toCelebrate: 'to celebrate together this beautiful beginning!',
        suggestedGifts: 'Suggested Gift List',
        selectGiftsToGive: 'Select the gifts you wish to give',
        giftsSelected: 'Selected gifts',
        confirmAttendance: 'Confirm Attendance',
        fullName: 'Full name',
        phone: 'Phone',
        howManyPeople: 'How many people will attend?',
        messageForParents: 'Message for the parents (optional)',
        confirmButton: 'Confirm Attendance',
        thanksForConfirming: 'Thanks for confirming! WhatsApp has been opened to send your confirmation.',
        peopleConfirmed: 'people confirmed',
        
        // Messages
        selectColor: 'Please select a color',
        errorGenerating: 'Error saving invitation. Please try again.',
        savingInvitation: 'Saving invitation...',
        phoneValidation: 'The number must have',
        digitsFor: 'digits for',
        invitationNotFound: 'Invitation not found',
        invitationNotFoundDesc: "We're sorry, we couldn't find this invitation.",
        linkIncomplete: 'The link may be incomplete or expired.',
        
        // Floating effects
        effectBalloons: 'Balloons',
        effectFootprints: 'Footprints',
        effectAnimals: 'Animals',
        effectWaves: 'Waves',
        effectCars: 'Cars',
        effectTools: 'Tools',
        
        // Themes
        themeClassic: 'Classic Elegant',
        themeClassicDesc: 'Serif typography with traditional design',
        themeModern: 'Modern Minimalist',
        themeModernDesc: 'Clean lines and sans-serif typography',
        themePlayful: 'Playful',
        themePlayfulDesc: 'Rounded and friendly typography',
        themeElegant: 'Soft Elegance',
        themeElegantDesc: 'Sophisticated design with delicate touches',
        themeBold: 'Bold & Strong',
        themeBoldDesc: 'Bold typography to stand out',
        themeExample: "Example: You're invited to our Baby Shower!",
        
        // Month names (for dates)
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
};

// Estado del idioma actual
let currentLanguage = 'es';

// Función para obtener traducción
function t(key) {
    return translations[currentLanguage][key] || translations['es'][key] || key;
}

// Detectar idioma del navegador
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
        return 'en';
    } else if (browserLang.startsWith('es')) {
        return 'es';
    }
    return 'es'; // Español por defecto
}

// Cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('babyShowerLanguage', lang);
    updateUILanguage();
}

// Actualizar UI con el idioma actual
function updateUILanguage() {
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.placeholder !== undefined) {
                element.placeholder = t(key);
            }
        } else {
            element.textContent = t(key);
        }
    });
    
    // Actualizar placeholders con data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    // Actualizar botón de idioma
    const langBtn = document.getElementById('currentLanguage');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'es' ? '🇪🇸 ES' : '🇺🇸 EN';
    }
}

// Lista completa de códigos de país (los más utilizados)
const countryCodes = [
    { code: '+1', country: 'Estados Unidos / Canadá', flag: '🇺🇸', digits: 10 },
    { code: '+52', country: 'México', flag: '🇲🇽', digits: 10 },
    { code: '+51', country: 'Perú', flag: '🇵🇪', digits: 9 },
    { code: '+54', country: 'Argentina', flag: '🇦🇷', digits: 10 },
    { code: '+55', country: 'Brasil', flag: '🇧🇷', digits: 11 },
    { code: '+56', country: 'Chile', flag: '🇨🇱', digits: 9 },
    { code: '+57', country: 'Colombia', flag: '🇨🇴', digits: 10 },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪', digits: 10 },
    { code: '+591', country: 'Bolivia', flag: '🇧🇴', digits: 8 },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨', digits: 9 },
    { code: '+595', country: 'Paraguay', flag: '🇵🇾', digits: 9 },
    { code: '+598', country: 'Uruguay', flag: '🇺🇾', digits: 8 },
    { code: '+34', country: 'España', flag: '🇪🇸', digits: 9 },
    { code: '+351', country: 'Portugal', flag: '🇵🇹', digits: 9 },
    { code: '+33', country: 'Francia', flag: '🇫🇷', digits: 9 },
    { code: '+39', country: 'Italia', flag: '🇮🇹', digits: 10 },
    { code: '+44', country: 'Reino Unido', flag: '🇬🇧', digits: 10 },
    { code: '+49', country: 'Alemania', flag: '🇩🇪', digits: 10 },
    { code: '+81', country: 'Japón', flag: '🇯🇵', digits: 10 },
    { code: '+82', country: 'Corea del Sur', flag: '🇰🇷', digits: 10 },
    { code: '+86', country: 'China', flag: '🇨🇳', digits: 11 },
    { code: '+91', country: 'India', flag: '🇮🇳', digits: 10 },
    { code: '+61', country: 'Australia', flag: '🇦🇺', digits: 9 },
    { code: '+64', country: 'Nueva Zelanda', flag: '🇳🇿', digits: 9 },
    { code: '+27', country: 'Sudáfrica', flag: '🇿🇦', digits: 9 },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬', digits: 10 },
    { code: '+20', country: 'Egipto', flag: '🇪🇬', digits: 10 },
    { code: '+212', country: 'Marruecos', flag: '🇲🇦', digits: 9 },
    { code: '+971', country: 'Emiratos Árabes', flag: '🇦🇪', digits: 9 },
    { code: '+966', country: 'Arabia Saudita', flag: '🇸🇦', digits: 9 },
    { code: '+90', country: 'Turquía', flag: '🇹🇷', digits: 10 },
    { code: '+7', country: 'Rusia', flag: '🇷🇺', digits: 10 },
    { code: '+380', country: 'Ucrania', flag: '🇺🇦', digits: 9 },
    { code: '+48', country: 'Polonia', flag: '🇵🇱', digits: 9 },
    { code: '+31', country: 'Países Bajos', flag: '🇳🇱', digits: 9 },
    { code: '+32', country: 'Bélgica', flag: '🇧🇪', digits: 9 },
    { code: '+41', country: 'Suiza', flag: '🇨🇭', digits: 9 },
    { code: '+43', country: 'Austria', flag: '🇦🇹', digits: 10 },
    { code: '+45', country: 'Dinamarca', flag: '🇩🇰', digits: 8 },
    { code: '+46', country: 'Suecia', flag: '🇸🇪', digits: 9 },
    { code: '+47', country: 'Noruega', flag: '🇳🇴', digits: 8 },
    { code: '+358', country: 'Finlandia', flag: '🇫🇮', digits: 9 },
    { code: '+353', country: 'Irlanda', flag: '🇮🇪', digits: 9 },
    { code: '+30', country: 'Grecia', flag: '🇬🇷', digits: 10 },
    { code: '+420', country: 'República Checa', flag: '🇨🇿', digits: 9 },
    { code: '+36', country: 'Hungría', flag: '🇭🇺', digits: 9 },
    { code: '+40', country: 'Rumania', flag: '🇷🇴', digits: 10 },
    { code: '+506', country: 'Costa Rica', flag: '🇨🇷', digits: 8 },
    { code: '+507', country: 'Panamá', flag: '🇵🇦', digits: 8 },
    { code: '+503', country: 'El Salvador', flag: '🇸🇻', digits: 8 },
    { code: '+502', country: 'Guatemala', flag: '🇬🇹', digits: 8 },
    { code: '+504', country: 'Honduras', flag: '🇭🇳', digits: 8 },
    { code: '+505', country: 'Nicaragua', flag: '🇳🇮', digits: 8 },
    { code: '+509', country: 'Haití', flag: '🇭🇹', digits: 8 },
    { code: '+53', country: 'Cuba', flag: '🇨🇺', digits: 8 },
    { code: '+1-809', country: 'Rep. Dominicana', flag: '🇩🇴', digits: 10 },
    { code: '+1-787', country: 'Puerto Rico', flag: '🇵🇷', digits: 10 },
    { code: '+65', country: 'Singapur', flag: '🇸🇬', digits: 8 },
    { code: '+60', country: 'Malasia', flag: '🇲🇾', digits: 10 },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩', digits: 10 },
    { code: '+63', country: 'Filipinas', flag: '🇵🇭', digits: 10 },
    { code: '+66', country: 'Tailandia', flag: '🇹🇭', digits: 9 },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳', digits: 9 },
    { code: '+92', country: 'Pakistán', flag: '🇵🇰', digits: 10 },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩', digits: 10 },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰', digits: 9 },
    { code: '+977', country: 'Nepal', flag: '🇳🇵', digits: 10 },
    { code: '+98', country: 'Irán', flag: '🇮🇷', digits: 10 },
    { code: '+972', country: 'Israel', flag: '🇮🇱', digits: 9 },
    { code: '+213', country: 'Argelia', flag: '🇩🇿', digits: 9 },
    { code: '+216', country: 'Túnez', flag: '🇹🇳', digits: 8 },
    { code: '+218', country: 'Libia', flag: '🇱🇾', digits: 9 },
    { code: '+254', country: 'Kenia', flag: '🇰🇪', digits: 10 },
    { code: '+255', country: 'Tanzania', flag: '🇹🇿', digits: 9 },
    { code: '+256', country: 'Uganda', flag: '🇺🇬', digits: 9 },
    { code: '+263', country: 'Zimbabue', flag: '🇿🇼', digits: 9 },
    { code: '+233', country: 'Ghana', flag: '🇬🇭', digits: 9 },
    { code: '+225', country: 'Costa de Marfil', flag: '🇨🇮', digits: 10 },
    { code: '+221', country: 'Senegal', flag: '🇸🇳', digits: 9 }
];

// Estado de la aplicación
const appState = {
    gender: null,
    selectedColor: null,
    selectedEffects: [],
    selectedTheme: null,
    invitationData: null,
    invitationId: null,
    selectedGifts: [],
    guestInvitationData: null,
    selectedCountry: null
};

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSBvbnd1u3xJ0C0uWieRI_Yqc3zzPO_kk",
    authDomain: "baby-shower-app-1c029.firebaseapp.com",
    databaseURL: "https://baby-shower-app-1c029-default-rtdb.firebaseio.com",
    projectId: "baby-shower-app-1c029",
    storageBucket: "baby-shower-app-1c029.firebasestorage.app",
    messagingSenderId: "475479297496",
    appId: "1:475479297496:web:e09c0c7f28a2ec857576ad"
};

// Inicializar Firebase
let database;
try {
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    console.log('✅ Firebase inicializado correctamente');
} catch (error) {
    console.error('❌ Error al inicializar Firebase:', error);
}

// Paletas de colores según género
const colorPalettes = {
    M: [
        { name: 'Azul Cielo', value: '#87CEEB' },
        { name: 'Azul Royal', value: '#4169E1' },
        { name: 'Azul Marino', value: '#1E3A8A' },
        { name: 'Turquesa', value: '#40E0D0' },
        { name: 'Menta', value: '#98D8C8' },
        { name: 'Verde Agua', value: '#7DD4C0' }
    ],
    F: [
        { name: 'Rosa Suave', value: '#FFB6C1' },
        { name: 'Rosa Fuerte', value: '#EC4899' },
        { name: 'Rosa Coral', value: '#FF7F9E' },
        { name: 'Lavanda', value: '#E6E6FA' },
        { name: 'Lila', value: '#C8A2C8' },
        { name: 'Fucsia', value: '#FF1493' }
    ]
};

// Efectos flotantes según género
const floatingEffects = {
    M: [
        { id: 'football', nameKey: 'effectBalloons', icon: '<svg viewBox="0 0 22.39 22.39" fill="currentColor"><path d="M2.01 8.63c-0.14,0.72 -0.54,3.12 -0.08,5.35l-0.25 0.25c-0.31,-0.97 -0.47,-1.99 -0.47,-3.03 0,-1.23 0.22,-2.41 0.63,-3.52l0.17 0.95zm3.01 -1.21c0.01,0.02 0.02,0.04 0.04,0.06l3.18 2.64 -0.3 4.15c-0.03,0 -0.07,0.01 -0.1,0.02l-2.64 1.35c-0.04,0.02 -0.06,0.04 -0.08,0.07l-2.8 -1.69c-0.44,-2.02 -0.13,-4.27 0.02,-5.15l2.68 -1.45zm0.26 8.57l0 0c0.03,0 0.06,-0.01 0.09,-0.02l2.64 -1.35c0.04,-0.02 0.07,-0.06 0.09,-0.1l3.75 1.39 1.03 2.73 -2.79 2.48c-1.75,-0.19 -3.4,-0.83 -4.81,-1.87l0 -3.26zm11.02 -11.65c0.4,0.35 2.44,2.17 2.94,3.94l0 0 -0.79 3.15c-0.79,0.22 -2.75,0.74 -3.38,0.91l-2.65 -3.18c0.03,-0.03 0.05,-0.06 0.06,-0.1l0.87 -3.82c0,-0.03 0,-0.06 -0.01,-0.09l2.96 -0.81zm-10.3 -0.13c0.37,-0.28 2.25,-1.58 4.75,-1.57l2.29 2.42c-0.03,0.03 -0.05,0.06 -0.06,0.1l-0.86 3.81c-0.01,0.03 -0.01,0.06 0,0.08l-3.64 0.8 0 -0.01 -3.18 -2.65c-0.02,-0.02 -0.05,-0.03 -0.07,-0.03l0.77 -2.95zm11.7 14.56l-4.47 -0.25 -1.02 -2.71 2.77 -3.07c0.23,-0.06 2.55,-0.66 3.51,-0.94l1.69 3.76c-0.48,0.99 -1.12,1.9 -1.92,2.7 -0.18,0.18 -0.37,0.35 -0.56,0.51zm0.56 -14.64c1.2,1.21 2.06,2.66 2.52,4.25l-1.24 -0.37c-0.26,-0.83 -0.85,-1.74 -1.73,-2.72 -0.63,-0.68 -1.19,-1.16 -1.32,-1.27l-0.15 -1.39c0.69,0.42 1.33,0.92 1.92,1.5zm-7.07 -2.92c0.15,0 0.3,0 0.45,0.01l-0.91 1.04c-2.39,0 -4.2,1.12 -4.81,1.55l-1.28 -0.15c1.82,-1.59 4.12,-2.45 6.55,-2.45zm0 21.18c1.43,0 2.81,-0.26 4.09,-0.77 0.23,-0.09 0.47,-0.19 0.69,-0.29 1.15,-0.55 2.21,-1.29 3.14,-2.22 1.87,-1.86 2.99,-4.27 3.23,-6.87 0.03,-0.34 0.05,-0.69 0.05,-1.04 0,-0.83 -0.09,-1.63 -0.26,-2.41 -0.45,-2.08 -1.48,-3.98 -3.02,-5.51 -2.11,-2.11 -4.92,-3.28 -7.92,-3.28 -2.99,0 -5.8,1.17 -7.91,3.28 -2.12,2.11 -3.28,4.92 -3.28,7.92 0,2.99 1.16,5.8 3.28,7.91 2.11,2.12 4.92,3.28 7.91,3.28z"/></svg>' },
        { id: 'footprints', nameKey: 'effectFootprints', icon: '<svg viewBox="0 0 25.51 28.55" fill="currentColor"><path d="M25.05 4.99c-0.55,0.54 -1.37,0.61 -1.82,0.15 -0.46,-0.46 -0.38,-1.27 0.17,-1.82 0.55,-0.54 1.36,-0.61 1.82,-0.15 0.45,0.46 0.38,1.28 -0.17,1.82zm-24.38 9.67c0.64,0.44 1.45,0.36 1.82,-0.17 0.36,-0.54 0.14,-1.32 -0.5,-1.76 -0.64,-0.43 -1.45,-0.35 -1.81,0.18 -0.37,0.53 -0.15,1.32 0.49,1.75zm9.46 6.27c0.23,-2.38 0.45,-2.7 1.06,-3.84 1.86,-3.48 -3.63,-6.08 -7.15,-3.56 -2.95,2.12 -2.46,4.82 -0.23,11.28 2.23,6.45 7.91,2.97 7.76,1.15 -0.12,-1.53 -1.69,-2.55 -1.44,-5.03zm0.42 -10.42c-0.69,0.9 -0.65,2.09 0.1,2.67 0.75,0.58 1.92,0.33 2.61,-0.57 0.69,-0.89 0.65,-2.09 -0.1,-2.67 -0.75,-0.58 -1.92,-0.32 -2.61,0.57zm-2.96 -0.57c-0.29,0.86 0.05,1.76 0.77,2 0.72,0.24 1.54,-0.26 1.83,-1.12 0.29,-0.86 -0.06,-1.75 -0.78,-2 -0.72,-0.24 -1.53,0.26 -1.82,1.12zm-3.18 0.52c0.08,0.9 0.76,1.58 1.51,1.51 0.76,-0.07 1.31,-0.85 1.23,-1.76 -0.09,-0.9 -0.77,-1.58 -1.52,-1.51 -0.76,0.07 -1.31,0.86 -1.22,1.76zm-2.53 1.74c0.47,0.78 1.37,1.1 2.02,0.71 0.66,-0.38 0.81,-1.33 0.35,-2.11 -0.47,-0.78 -1.37,-1.1 -2.02,-0.71 -0.66,0.38 -0.81,1.33 -0.35,2.11zm14.98 0.65c-0.66,-2.31 -0.93,-2.58 -1.73,-3.6 -2.45,-3.09 2.49,-6.63 6.39,-4.78 3.29,1.56 3.29,4.31 2.25,11.06 -1.05,6.75 -7.25,4.34 -7.43,2.52 -0.16,-1.53 1.2,-2.81 0.52,-5.2zm-2.28 -10.18c0.85,0.75 1.02,1.94 0.38,2.64 -0.63,0.71 -1.83,0.67 -2.67,-0.09 -0.84,-0.76 -1.01,-1.94 -0.38,-2.65 0.64,-0.7 1.83,-0.66 2.67,0.1zm2.82 -1.09c0.44,0.79 0.25,1.74 -0.41,2.1 -0.67,0.37 -1.56,0.02 -2,-0.77 -0.44,-0.8 -0.26,-1.74 0.41,-2.1 0.66,-0.37 1.56,-0.03 2,0.77zm3.22 -0.06c0.08,0.9 -0.47,1.69 -1.22,1.76 -0.76,0.07 -1.44,-0.61 -1.52,-1.52 -0.08,-0.9 0.47,-1.69 1.22,-1.76 0.76,-0.06 1.44,0.61 1.52,1.52zm2.79 1.26c-0.31,0.85 -1.15,1.33 -1.86,1.06 -0.71,-0.26 -1.03,-1.17 -0.72,-2.02 0.32,-0.85 1.15,-1.32 1.87,-1.06 0.71,0.27 1.03,1.17 0.71,2.02z"/></svg>' },
        { id: 'animals', nameKey: 'effectAnimals', icon: '<svg viewBox="0 0 66.25 76.19" fill="currentColor"><path d="M49.88 28.33c0,0 0.21,-13.08 -4.44,-18.92 -4.64,-5.83 -9.29,-9.62 -11.34,-9.4 -2.06,0.21 7.67,23.45 8.86,25.29 1.19,1.84 -14.7,-22.37 -17.62,-21.83 -2.92,0.54 -0.54,12.64 1.19,14.27 1.73,1.62 13.19,12.64 14.27,14.26 1.08,1.62 -0.22,2.92 -0.76,5.52 -0.54,2.59 -1.94,4.21 -5.08,3.56 -3.13,-0.65 -8.97,-3.24 -16.32,0.98 -7.35,4.21 -9.08,11.45 -9.73,14.91 -0.97,3.03 -2.59,-1.11 -1.84,-2.88 0.76,-1.77 0.87,-4.9 -3.35,-4.36 -4.21,0.54 -5.08,6.81 -1.4,10.27 3.67,3.46 3.35,4.65 6.37,5.94 3.03,1.3 3.79,5.84 6.06,6.81 2.27,0.98 4.86,2.49 7.89,2.27 3.02,-0.21 16.97,0.22 18.7,-0.43 1.73,-0.65 1.73,-2.81 -0.87,-2.81 0,0 -1.29,-1.95 -4.54,-1.51 0,0 -2.16,-0.33 -4.43,-0.44 -2.27,-0.1 2.6,-2.59 3.78,-3.45 1.19,-0.87 4,-1.95 5.73,-1.52 1.73,0.43 5.52,4.87 7.46,5.73 1.95,0.87 8.22,5.3 9.84,5.51 1.62,0.22 2.16,0.11 2.48,-0.97 0.33,-1.08 -1.29,-2.38 -2.59,-3.57 -1.3,-1.19 -3.35,-2.48 -3.24,-3.35 0.11,-0.86 6.7,4.43 8.21,4.97 1.52,0.55 2.49,-1.83 -0.97,-5.18 -3.46,-3.35 -7.68,-6.6 -8.22,-8 -0.54,-1.41 -2.7,-7.03 -1.83,-8.97 0.86,-1.95 5.94,-3.46 8.64,-4.22 2.71,-0.76 2.54,-0.86 3.76,-2.05 1.22,-1.19 2.08,-1.84 1.54,-4.11 -0.54,-2.27 -2.38,-6.59 -4.11,-7.57 -1.73,-0.97 -4.43,-5.29 -12.1,-4.75z"/></svg>' },
        { id: 'waves', nameKey: 'effectWaves', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.6.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.6.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58z"/></svg>' },
        { id: 'cars', nameKey: 'effectCars', icon: '<svg viewBox="0 0 1620.97 793.54" fill="currentColor"><path d="M1039.82 742.73c-47.37,-11.42 -64.95,-93.03 -65.59,-155.38 -0.54,-51.55 19.42,-156.14 60.7,-163.37 71.9,-12.59 105.43,272.82 4.89,318.75zm-974.33 -387.27c17.68,-19.54 40.71,-44.17 61.34,-51.87 43.67,6.21 20.56,78.71 4.55,106.44 -7.55,13.07 -19.81,23.76 -35.7,25.99 -26.85,3.76 -50.53,-6.69 -46.69,-37.86 2,-16.22 5.27,-30.28 16.5,-42.7zm9.37 -24.34c-2.48,2.17 -5.92,6.31 -7.81,8.79 -7.02,9.24 -8.82,13.99 -13.97,24.54 -15.35,62.7 -53.29,52.52 -53.08,150.13l11.08 185.73 48.43 3.87c21.57,62.56 42.22,74.35 120.46,74.42 119.57,0.12 95.53,-26.16 130.23,-71.65l543.35 5.67c60.26,76.34 14.01,79.77 147.21,80.9 90.61,0.78 96,-34.55 118.65,-110l268.36 -39.57c11.83,43.05 26.29,71.91 76.17,73.86 53.38,2.08 97.32,9.31 121.86,-31.14 37.01,-60.99 50.63,-300.77 12.06,-395.38 -18.05,-44.26 -38.15,-51.34 -88.39,-62.75 -21.73,-4.94 -65.62,-53.38 -81.7,-68.87 -27,-26 -48.63,-48.46 -75.49,-75.26 -98.42,-98.18 -348.03,-87.75 -513.18,-79.17 -184.18,9.57 -239.54,13.35 -354.72,132.54l-19.77 18.89c-14.68,13.93 -24.9,24.94 -38.97,38.94 -42.51,-8.01 -52.82,-4.71 -78.03,22.68l1.04 34.31c-52.7,2.21 -189.68,13.98 -219.94,44.02 -25.98,7.66 -32.47,15.86 -53.85,34.5zm1467.47 258.41c29.67,-16.99 28.65,-88.7 0,-103.09 -16.6,9.35 -19.16,23.22 -19.74,50.46 -1,47.41 9.43,46.19 19.74,52.63zm-507.73 52.34c26.78,-3.91 32.63,-26.4 32.87,-60.21 0.24,-33.83 -5.43,-58.18 -35.27,-61.33 -21.41,31.95 -21.63,91.73 2.4,121.54zm114.15 -405.47c64.19,-2.26 144.02,-1.01 206.87,-9.99 93.83,-13.42 52.89,-62.24 1.51,-102.19 -157.6,-122.54 -187.79,-45.48 -208.38,112.18zm393.58 165.8c102.43,39.81 23.78,408.79 -36.98,222.38 -9.09,-27.87 -12.91,-51.26 -12.73,-82.1 0.29,-50.83 10.11,-125.96 49.71,-140.28zm-1435.71 172.62c-28.26,3.15 -73.44,0.61 -93.04,-11.02 9.18,-23.08 36.65,-13.07 94.73,-5.95 52.25,6.39 52.23,19.88 78.27,50.6 27.16,32.02 55.1,24.09 105.08,25.10 41.14,0.83 81.29,2.05 122.81,2.74 215.27,3.56 106.6,-12.92 193.21,-62.42 33.39,-19.09 70.75,-14.24 113.19,-16.26 30.36,-1.45 95.82,-12.57 120.04,1.7 -19.62,23.57 -75.28,15.75 -107.8,17.6 -68.95,3.92 -109.99,-11.94 -136.59,60.24l167.26 1.22c-62.74,29.2 -629.86,24.18 -694.46,-1.26 23.38,-10.87 69.37,-2.74 99.3,-5.7 -23.71,-34.83 -21.66,-40.5 -62,-56.59zm593.17 -144.84c-1.36,-52 166.65,-169.35 210.91,-121.8 52.07,55.93 -110.82,165.13 -210.91,121.8zm642.9 -105.47c7.82,-10.99 12.99,-15.1 32.71,-15.87 32.36,-1.28 27.71,12.74 29.1,15.87 -17.45,10.09 -45.21,14.22 -61.81,0zm-213.03 -74.25c-0.79,-19.72 27.25,-173.55 55.04,-194.3 58.3,-43.52 146.09,30.67 174.39,55.1 47.09,40.65 116.77,117.22 10.25,130.3 -71.11,8.74 -166.12,7.98 -239.68,8.9z"/></svg>' },
        { id: 'tools', nameKey: 'effectTools', icon: '<svg viewBox="0 0 332.33 600.77" fill="currentColor"><path d="M0 73.49c33.69,0.49 70.27,-5.63 103.66,0.86 47.82,9.3 22.23,49.01 28.75,82.31 4.26,10.43 -1.07,2.93 10.27,7.27l0.83 111.17 -22.23 0.14 -0.11 276.89c0.18,15.82 3.49,23.89 12.36,33.61 27.2,29.83 75.1,13.09 76.49,-31.15 2.36,-75.31 0.55,-202.07 -0.07,-278.72l-21.22 -0.91 -0.99 -112.13 10.48 -0.53c9.14,-62.36 36.97,-69.91 89.79,-66.15l0.27 21.76 43.82 0.03 0.23 -88.4 -44.13 -0.12 -0.36 22c-63.44,0.4 -34.22,4.23 -63.25,-22.68 -85.1,-78.87 -216.32,27.76 -224.59,44.75z"/></svg>' }
    ],
    F: [
        { id: 'drawings', name: 'Dibujos', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>' },
        { id: 'princess', name: 'Princesas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>' },
        { id: 'animals-f', name: 'Animales', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>' },
        { id: 'footprints-f', name: 'Huellitas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 15c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm1-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm15.5 8c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm1-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>' },
        { id: 'lips', name: 'Labios', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' },
        { id: 'clothes', name: 'Ropita', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 4l-4-2-4 2-4 2v12l4 2 4 2 4-2 4-2V6l-4-2zm2 11.2l-2 1V7.5l2-1v8.7zm-4 2l-4-2v-8.7l4 2v8.7zm-4-8.7l-2-1v8.7l2 1V8.5z"/></svg>' }
    ]
};

// Temas disponibles
const themes = [
    {
        id: 'classic',
        nameKey: 'themeClassic',
        descKey: 'themeClassicDesc',
        fontFamily: 'Georgia, serif',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm0 10h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-2.55V12z"/></svg>'
    },
    {
        id: 'modern',
        nameKey: 'themeModern',
        descKey: 'themeModernDesc',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2z"/></svg>'
    },
    {
        id: 'playful',
        nameKey: 'themePlayful',
        descKey: 'themePlayfulDesc',
        fontFamily: 'Comic Sans MS, cursive',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-5 6c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>'
    },
    {
        id: 'elegant',
        nameKey: 'themeElegant',
        descKey: 'themeElegantDesc',
        fontFamily: 'Garamond, serif',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
    },
    {
        id: 'bold',
        nameKey: 'themeBold',
        descKey: 'themeBoldDesc',
        fontFamily: 'Arial Black, sans-serif',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'
    }
];

// Lista de 50 regalos con iconos SVG
const giftsList = [
    { name: 'Pañales', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-2V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zM9 6h6v3H9V6zm10 14H5v-9h14v9z"/></svg>' },
    { name: 'Biberones', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h10V2H7zm8 9H9V4h6v7zm-3 4c-1.1 0-2 .9-2 2v5h4v-5c0-1.1-.9-2-2-2z"/></svg>' },
    { name: 'Chupetes', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 2C9.24 2 7 4.24 7 7v5c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-2.76-2.24-5-5-5zm3 10c0 1.66-1.34 3-3 3s-3-1.34-3-3V7c0-1.66 1.34-3 3-3s3 1.34 3 3v5zm-3 5c-1.1 0-2 .9-2 2v3h4v-3c0-1.1-.9-2-2-2z"/></svg>' },
    { name: 'Ropa 0-3 meses', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 4l-4-2-4 2-4 2v12l4 2 4 2 4-2 4-2V6l-4-2zm2 11.2l-2 1V7.5l2-1v8.7zm-4 2l-4-2v-8.7l4 2v8.7zm-4-8.7l-2-1v8.7l2 1V8.5z"/></svg>' },
    { name: 'Ropa 3-6 meses', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-5l6-2.25 6 2.25v5z"/></svg>' },
    { name: 'Ropa 6-12 meses', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8v8l-10 4L2 16V8l10-4 10 4zM6 10.03v3.44l6 2.4 6-2.4v-3.44l-6-2.4-6 2.4z"/></svg>' },
    { name: 'Mantas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4v18h16V3zm-2 16H6V5h12v14z"/></svg>' },
    { name: 'Toallas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-2-8H7v2h10v-2zm0 4H7v2h10v-2z"/></svg>' },
    { name: 'Jabón bebé', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="8" width="16" height="12" rx="2"/><circle cx="8" cy="5" r="2"/><circle cx="16" cy="5" r="2"/></svg>' },
    { name: 'Shampoo bebé', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v5h10V2H7zm8 3H9V4h6v1zM7 9v11c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9H7zm8 11H9v-9h6v9z"/></svg>' },
    { name: 'Crema', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M19 6h-2V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm10 16H5V8h14v12z"/></svg>' },
    { name: 'Pañalera', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/></svg>' },
    { name: 'Cuna portátil', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5c0-1.1-.9-2-2-2zM6 7h12v3H6V7z"/></svg>' },
    { name: 'Móvil de cuna', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L6 8h4v8H8l6 6 6-6h-2V8h4z"/></svg>' },
    { name: 'Termómetro', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>' },
    { name: 'Monitor bebé', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/><circle cx="12" cy="11" r="3"/></svg>' },
    { name: 'Coche', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>' },
    { name: 'Silla para auto', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 19h16v2H4v-2zm12-2h-3V3h3v14zM7 10v7h3v-7H7zm10 0v7h3v-7h-3z"/></svg>' },
    { name: 'Corral', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zm8-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm-4-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"/></svg>' },
    { name: 'Andador', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="4" r="2"/><path d="M12 8c-1.11 0-2 .89-2 2v4h1v8h2v-8h1V10c0-1.11-.89-2-2-2zm-4 6H4v2h4v-2zm8 0v2h4v-2h-4z"/></svg>' },
    { name: 'Juguetes', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>' },
    { name: 'Sonajeros', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' },
    { name: 'Peluches', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06 1.19.1 2.07.97 2.07 1.92v.01c-1.09.27-1.69 1.42-1.69 2.51C5.5 14.06 7 15.5 9 15.5s3.5-1.44 3.5-3.12c0-1.09-.6-2.24-1.69-2.51v-.01c0-.95.88-1.82 2.07-1.92.71 1.2 1.12 2.58 1.12 4.06 0 4.41-3.59 8-8 8z"/></svg>' },
    { name: 'Libros de tela', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>' },
    { name: 'Baberos', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3H8C6.9 3 6 3.9 6 5v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H8V5h8v14z"/></svg>' },
    { name: 'Mordedores', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3.5"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>' },
    { name: 'Platos bebé', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>' },
    { name: 'Cucharas bebé', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3c-2.21 0-4 1.79-4 4 0 1.95 1.4 3.57 3.25 3.92V21h1.5v-10.08C9.6 10.57 11 8.95 11 7c0-2.21-1.79-4-4-4zm10 6v12h1.5V9H17z"/></svg>' },
    { name: 'Vasos', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2l-.5 7c-.08 1.1.68 2 1.78 2H9v11h6V11h1.72c1.1 0 1.86-.9 1.78-2L18 2H6zm10 7H8l.33-5h7.34l.33 5z"/></svg>' },
    { name: 'Esterilizador', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>' },
    { name: 'Calienta biberones', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.71 19c-.55 1.24-1.89 2-3.42 2-2 0-3.61-1.67-3.61-3.73 0-2.88 2.5-4.99 5.32-7.08V4c0-1.1.9-2 2-2s2 .9 2 2v15c0 .55-.45 1-1 1h-.29zM9 13.5c-1.48.92-2.5 1.94-2.5 3.27 0 1.06.84 1.73 1.79 1.73.74 0 1.37-.39 1.71-1z"/></svg>' },
    { name: 'Extractor de leche', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h10V2H7zm8 9H9V4h6v7zm-3 4c-1.1 0-2 .9-2 2v5h4v-5c0-1.1-.9-2-2-2z"/></svg>' },
    { name: 'Almohada lactancia', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v2h-1c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h1v2h-1zM8 9H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v2H7c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h1v2z"/></svg>' },
    { name: 'Cambiador', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7H2v10h20V7zm-2 8H4V9h16v6z"/></svg>' },
    { name: 'Bañera', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="7" r="2"/><path d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 10 5 11.01 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2z"/></svg>' },
    { name: 'Toallitas húmedas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>' },
    { name: 'Aspirador nasal', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>' },
    { name: 'Cortauñas bebé', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64z"/></svg>' },
    { name: 'Cepillo y peine', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.53 1.45L13.45.38l-1.06 1.06c-2.2 2.21-2.79 5.33-1.78 8.06L3.13 17c-.35.36-.35.93 0 1.28l2.59 2.59c.35.35.93.35 1.28 0l7.5-7.5c2.73 1.01 5.85.42 8.06-1.78l1.06-1.06-1.06-1.06-9.03-9.02z"/></svg>' },
    { name: 'Lámpara de noche', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 21h6v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>' },
    { name: 'Humidificador', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>' },
    { name: 'Mecedora', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 11v2h10v-2H7zm10-2V7H7v2h10zm-5 8l-2-2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-6l-2 2z"/></svg>' },
    { name: 'Organizador', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>' },
    { name: 'Protector cuna', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/></svg>' },
    { name: 'Sábanas cuna', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>' },
    { name: 'Pijamas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.24 2 7 4.24 7 7v7H6v8h12v-8h-1V7c0-2.76-2.24-5-5-5zm3 18H9v-4h6v4zm0-6H9V7c0-1.66 1.34-3 3-3s3 1.34 3 3v7z"/></svg>' },
    { name: 'Calcetines', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3v9c0 1.11.89 2 2 2 .55 0 1.05-.22 1.41-.59l5.18-5.18c.37-.37.59-.87.59-1.41 0-1.11-.89-2-2-2H7zm2 2h5v1H9V5z"/></svg>' },
    { name: 'Gorros', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.37 2 9.5c0 2.22 1.28 4.19 3.28 5.51V19c0 1.1.9 2 2 2h9.43c1.1 0 2-.9 2-2v-3.99c2.01-1.32 3.29-3.29 3.29-5.51C22 5.37 17.52 2 12 2zm0 2c4.42 0 8 2.69 8 6s-3.58 6-8 6-8-2.69-8-6 3.58-6 8-6z"/></svg>' },
    { name: 'Guantes', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 5c-.83 0-1.5.67-1.5 1.5v4c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5S13 4.67 13 5.5v5c0 .83-.67 1.5-1.5 1.5S10 11.33 10 10.5v-6C10 3.67 9.33 3 8.5 3S7 3.67 7 4.5v6.35l-1.83-1.83-1.42 1.42 5.61 5.61c1.17 1.17 3.06 1.17 4.24 0l4.24-4.24V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>' },
    { name: 'Zapatos bebé', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.01 14.99L18 15.5V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v8.5l-1.01-.5C5.9 14.56 5 15.38 5 16.39V19c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2.61c0-1.01-.9-1.83-1.99-1.4z"/></svg>' }
];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar idioma (prioridad: localStorage > idioma del navegador > español)
    const savedLanguage = localStorage.getItem('babyShowerLanguage');
    const browserLanguage = detectBrowserLanguage();
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        console.log('🌍 Idioma desde localStorage:', currentLanguage);
    } else {
        currentLanguage = browserLanguage;
        console.log('🌍 Idioma detectado del navegador:', currentLanguage);
    }
    
    // Aplicar idioma
    updateUILanguage();
    
    // Verificar si hay parámetros en la URL (modo invitado)
    const urlParams = new URLSearchParams(window.location.search);
    const invitationId = urlParams.get('id');
    
    console.log('URL completa:', window.location.href);
    console.log('Parámetros URL:', window.location.search);
    console.log('invitationId:', invitationId);
    
    if (invitationId) {
        // Cargar desde Firebase
        loadGuestViewFromFirebase(invitationId);
    } else {
        initAdminView();
    }
});

// Vista de administrador
function initAdminView() {
    // Aplicar traducciones iniciales
    updateUILanguage();
    
    // Inicializar selector de idioma
    initLanguageSelector();
    
    // Inicializar selector de país
    initCountrySelector();
    
    // Event listeners para selección de género
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remover selección visual previa
            document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
            
            appState.gender = e.currentTarget.dataset.gender;
            appState.selectedEffects = []; // Limpiar efectos al cambiar género
            document.body.className = appState.gender === 'M' ? 'boy-theme' : 'girl-theme';
            loadColors();
            nextScreen('colorScreen');
        });
    });

    // Event listeners para opciones de lista de regalos
    document.querySelectorAll('input[name="giftList"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const customList = document.getElementById('customGiftList');
            if (e.target.value === 'custom') {
                customList.classList.remove('hidden');
            } else {
                customList.classList.add('hidden');
            }
        });
    });

    // Event listener para el formulario
    document.getElementById('invitationForm').addEventListener('submit', handleFormSubmit);
}

// Inicializar selector de idioma
function initLanguageSelector() {
    const langButton = document.getElementById('currentLanguage');
    const langDropdown = document.getElementById('languageDropdown');
    
    if (!langButton || !langDropdown) return;
    
    // Actualizar display inicial
    langButton.textContent = currentLanguage === 'es' ? '🇪🇸 ES' : '🇺🇸 EN';
    
    // Toggle dropdown
    langButton.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
    });
    
    // Selección de idioma
    document.querySelectorAll('.language-option').forEach(option => {
        // Marcar idioma activo
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active');
        }
        
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            changeLanguage(lang);
            
            // Actualizar opciones activas
            document.querySelectorAll('.language-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Ocultar dropdown
            langDropdown.classList.add('hidden');
        });
    });
    
    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
        const langSelector = document.querySelector('.language-selector');
        if (langSelector && !langSelector.contains(e.target)) {
            langDropdown.classList.add('hidden');
        }
    });
}

// Inicializar selector de país con búsqueda
function initCountrySelector() {
    const countrySelect = document.getElementById('countryCode');
    const searchInput = document.getElementById('countrySearch');
    const dropdownList = document.getElementById('countryDropdown');
    const selectedDisplay = document.getElementById('selectedCountry');
    
    // Establecer Perú como país por defecto
    const defaultCountry = countryCodes.find(c => c.code === '+51');
    appState.selectedCountry = defaultCountry;
    selectedDisplay.innerHTML = `${defaultCountry.flag} ${defaultCountry.code}`;
    updatePhoneNumberPlaceholder(defaultCountry);
    
    // Llenar dropdown inicial
    renderCountryList(countryCodes);
    
    // Toggle dropdown
    selectedDisplay.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = selectedDisplay.closest('.country-selector-wrapper');
        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
            searchInput.focus();
        }
    });
    
    // Búsqueda de países
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = countryCodes.filter(country => 
            country.country.toLowerCase().includes(searchTerm) ||
            country.code.includes(searchTerm)
        );
        renderCountryList(filtered);
    });
    
    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.country-selector-wrapper');
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
            searchInput.value = '';
            renderCountryList(countryCodes);
        }
    });
}

function renderCountryList(countries) {
    const dropdownList = document.getElementById('countryDropdown');
    dropdownList.innerHTML = countries.map(country => `
        <div class="country-option" data-code="${country.code}" data-country='${JSON.stringify(country)}'>
            <span class="country-flag">${country.flag}</span>
            <span class="country-name">${country.country}</span>
            <span class="country-code-label">${country.code}</span>
        </div>
    `).join('');
    
    // Event listeners para selección
    dropdownList.querySelectorAll('.country-option').forEach(option => {
        option.addEventListener('click', () => {
            const country = JSON.parse(option.dataset.country);
            selectCountry(country);
        });
    });
}

function selectCountry(country) {
    appState.selectedCountry = country;
    const selectedDisplay = document.getElementById('selectedCountry');
    selectedDisplay.innerHTML = `${country.flag} ${country.code}`;
    
    // Cerrar dropdown
    document.querySelector('.country-selector-wrapper').classList.remove('active');
    document.getElementById('countrySearch').value = '';
    renderCountryList(countryCodes);
    
    // Actualizar placeholder del número
    updatePhoneNumberPlaceholder(country);
}

function updatePhoneNumberPlaceholder(country) {
    const phoneInput = document.getElementById('phoneNumber');
    const exampleNumber = '9'.repeat(country.digits);
    phoneInput.placeholder = exampleNumber;
    phoneInput.maxLength = country.digits;
}

// Validar número de teléfono según país
function validatePhoneNumber(phone, country) {
    // Remover espacios y caracteres especiales
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    
    // Validar longitud según el país
    if (cleanPhone.length !== country.digits) {
        return {
            valid: false,
            message: `${t('phoneValidation')} ${country.digits} ${t('digitsFor')} ${country.country}`
        };
    }
    
    return { valid: true, cleanPhone };
}

// Cargar colores según género
function loadColors() {
    const colorOptions = document.getElementById('colorOptions');
    const colors = colorPalettes[appState.gender];
    
    colorOptions.innerHTML = colors.map((color, index) => `
        <div class="color-option" 
             style="background-color: ${color.value}" 
             data-color="${color.value}"
             data-index="${index}"
             onclick="selectColor('${color.value}', ${index})"
             title="${color.name}">
        </div>
    `).join('');
}

// Seleccionar color
function selectColor(color, index) {
    appState.selectedColor = color;
    document.querySelectorAll('.color-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

// Cargar efectos según género
function loadEffects() {
    const effectsOptions = document.getElementById('effectsOptions');
    const effects = floatingEffects[appState.gender];
    
    // Limpiar efectos seleccionados previos
    appState.selectedEffects = [];
    
    effectsOptions.innerHTML = effects.map((effect, index) => `
        <div class="effect-option" data-effect="${effect.id}" onclick="toggleEffect('${effect.id}', ${index})">
            <div class="effect-icon">${effect.icon}</div>
            <div class="effect-name" data-i18n="${effect.nameKey}">${t(effect.nameKey)}</div>
        </div>
    `).join('');
    
    updateSelectedEffectsDisplay();
}

// Seleccionar/deseleccionar efecto
function toggleEffect(effectId, index) {
    const effectElement = document.querySelector(`.effect-option[data-effect="${effectId}"]`);
    
    if (appState.selectedEffects.includes(effectId)) {
        // Deseleccionar
        appState.selectedEffects = appState.selectedEffects.filter(id => id !== effectId);
        effectElement.classList.remove('selected');
    } else {
        // Seleccionar si no se han alcanzado los 3
        if (appState.selectedEffects.length < 3) {
            appState.selectedEffects.push(effectId);
            effectElement.classList.add('selected');
        } else {
            alert(t('maxEffectsReached'));
            return;
        }
    }
    
    updateSelectedEffectsDisplay();
    updateEffectsAvailability();
}

// Actualizar display de efectos seleccionados
function updateSelectedEffectsDisplay() {
    const countElement = document.getElementById('effectCount');
    const listElement = document.getElementById('selectedEffectsList');
    
    countElement.textContent = appState.selectedEffects.length;
    
    const effects = floatingEffects[appState.gender];
    const selectedEffectsData = appState.selectedEffects.map(id => 
        effects.find(e => e.id === id)
    );
    
    listElement.innerHTML = selectedEffectsData.map(effect => `
        <div class="selected-effect-tag">
            <span data-i18n="${effect.nameKey}">${t(effect.nameKey)}</span>
            <button onclick="toggleEffect('${effect.id}')">×</button>
        </div>
    `).join('');
}

// Actualizar disponibilidad de efectos
function updateEffectsAvailability() {
    const allEffects = document.querySelectorAll('.effect-option');
    const maxReached = appState.selectedEffects.length >= 3;
    
    allEffects.forEach(effect => {
        const isSelected = effect.classList.contains('selected');
        if (!isSelected && maxReached) {
            effect.classList.add('disabled');
        } else {
            effect.classList.remove('disabled');
        }
    });
}

// Cargar temas
function loadThemes() {
    const themeOptions = document.getElementById('themeOptions');
    const userColor = appState.selectedColor || '#3b82f6'; // Color por defecto si no hay selección
    
    themeOptions.innerHTML = themes.map((theme, index) => `
        <div class="theme-option" data-theme="${theme.id}" onclick="selectTheme('${theme.id}', ${index})">
            <div class="theme-header">
                <div class="theme-icon" style="background: linear-gradient(135deg, ${userColor}, ${adjustColorBrightness(userColor, -20)});">${theme.icon}</div>
                <div>
                    <div class="theme-name" data-i18n="${theme.nameKey}" style="font-family: ${theme.fontFamily}">${t(theme.nameKey)}</div>
                    <div class="theme-description" data-i18n="${theme.descKey}">${t(theme.descKey)}</div>
                </div>
            </div>
            <div class="theme-preview" data-i18n="themeExample" style="font-family: ${theme.fontFamily}; border-left-color: ${userColor};">
                ${t('themeExample')}
            </div>
        </div>
    `).join('');
}

// Ajustar brillo del color
function adjustColorBrightness(hex, percent) {
    // Convertir hex a RGB
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + percent));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + percent));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + percent));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

// Seleccionar tema
function selectTheme(themeId, index) {
    appState.selectedTheme = themes.find(t => t.id === themeId);
    document.querySelectorAll('.theme-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

// Navegar a siguiente pantalla
function nextScreen(screenId) {
    // Validaciones
    if (screenId === 'effectsScreen' && !appState.selectedColor) {
        alert(t('selectColor'));
        return;
    }
    
    if (screenId === 'themeScreen' && appState.selectedEffects.length === 0) {
        alert(t('selectAtLeastOne'));
        return;
    }
    
    if (screenId === 'adminScreen' && !appState.selectedTheme) {
        alert(t('selectTheme'));
        return;
    }

    // Cargar contenido si es necesario
    if (screenId === 'effectsScreen') {
        loadEffects(); // Siempre recargar efectos para asegurar el género correcto
    }
    
    if (screenId === 'themeScreen' && !document.querySelector('.theme-option')) {
        loadThemes();
    }
    
    // Limpiar selección visual y tema cuando se vuelve a la pantalla de género
    if (screenId === 'genderScreen') {
        document.querySelectorAll('.gender-btn').forEach(btn => btn.classList.remove('selected'));
        document.body.className = ''; // Limpiar tema
        appState.gender = null; // Limpiar selección
    }

    // Cambiar pantalla
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Volver atrás
function goBack(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Manejar envío del formulario
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Validar número de teléfono
    const phoneNumber = document.getElementById('phoneNumber').value;
    const validation = validatePhoneNumber(phoneNumber, appState.selectedCountry);
    
    if (!validation.valid) {
        alert(validation.message);
        document.getElementById('phoneNumber').focus();
        return;
    }
    
    // Recopilar datos
    const formData = {
        gender: appState.gender,
        color: appState.selectedColor,
        effects: appState.selectedEffects,
        theme: appState.selectedTheme,
        countryCode: appState.selectedCountry.code,
        countryName: appState.selectedCountry.country,
        countryFlag: appState.selectedCountry.flag,
        phoneNumber: validation.cleanPhone,
        babyName: document.getElementById('babyName').value,
        fatherName: document.getElementById('fatherName').value,
        motherName: document.getElementById('motherName').value,
        eventDate: document.getElementById('eventDate').value,
        eventTime: document.getElementById('eventTime').value,
        address: document.getElementById('address').value,
        googleMapsLink: document.getElementById('googleMapsLink').value,
        wazeLink: document.getElementById('wazeLink').value,
        invitationMessage: document.getElementById('invitationMessage').value,
        giftListType: document.querySelector('input[name="giftList"]:checked').value,
        customGifts: document.getElementById('customGifts').value
    };

    // Generar lista de regalos
    if (formData.giftListType === 'default') {
        formData.gifts = getRandomGifts(10);
    } else {
        const customGiftLines = formData.customGifts.split('\n').filter(line => line.trim());
        formData.gifts = customGiftLines.map(line => ({ name: line.trim(), icon: '🎁' }));
    }

    // Guardar en localStorage
    appState.invitationData = formData;
    appState.invitationId = generateId();
    localStorage.setItem(`invitation_${appState.invitationId}`, JSON.stringify(formData));

    // Mostrar vista previa
    showPreview();
}

// Obtener regalos aleatorios
function getRandomGifts(count) {
    const shuffled = [...giftsList].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Generar ID único
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Mostrar vista previa
async function showPreview() {
    const data = appState.invitationData;
    const previewCard = document.getElementById('previewCard');
    
    previewCard.innerHTML = '<div style="text-align: center; padding: 40px;"><p>Guardando invitación...</p></div>';
    
    try {
        // Generar ID único
        const invitationId = generateId();
        
        // Guardar en Firebase
        await database.ref('invitations/' + invitationId).set(data);
        console.log('✅ Invitación guardada en Firebase con ID:', invitationId);
        
        // También guardar en localStorage como backup
        localStorage.setItem(`invitation_${invitationId}`, JSON.stringify(data));
        
        // Generar enlace CORTO
        let baseUrl = window.location.href.split('?')[0];
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        const shareLink = `${baseUrl}?id=${invitationId}`;
        console.log('🔗 Enlace generado (tamaño):', shareLink.length, 'caracteres');
        
        document.getElementById('shareLink').value = shareLink;
        
        // Mostrar vista previa
        previewCard.innerHTML = generateAdminPreviewHTML(data);
        
        nextScreen('previewScreen');
    } catch (error) {
        console.error('❌ Error al guardar en Firebase:', error);
        alert('Error al guardar la invitación. Por favor, intenta de nuevo.');
    }
}

// Generar HTML de vista previa para el administrador
function generateAdminPreviewHTML(data) {
    const dateObj = new Date(data.eventDate);
    const formattedDate = dateObj.toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    const genderIcon = data.gender === 'M' ? 
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 9c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm0 8c0 1.65 1.35 3 3 3s3-1.35 3-3H9zm-4.5-8c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5S4.5 13.14 4.5 9z"/></svg>' :
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/></svg>';

    return `
        <div class="admin-preview-card" style="font-family: ${data.theme.fontFamily};">
            <div class="preview-header" style="background: linear-gradient(135deg, ${data.color}, ${adjustColorBrightness(data.color, -30)}); color: white;">
                <div class="preview-gender-icon">${genderIcon}</div>
                <h2 class="preview-title">${data.gender === 'M' ? '¡Es un Niño!' : '¡Es una Niña!'}</h2>
                <div class="preview-baby-name">${data.babyName}</div>
                <p class="preview-parents">${data.fatherName} & ${data.motherName}</p>
            </div>
            
            <div class="preview-body">
                <div class="preview-info-section">
                    <h3 class="preview-section-title">Información del Evento</h3>
                    <div class="preview-info-grid">
                        <div class="preview-info-item">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="${data.color}">
                                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                            </svg>
                            <div>
                                <span class="preview-label">Fecha:</span>
                                <span class="preview-value">${formattedDate}</span>
                            </div>
                        </div>
                        
                        <div class="preview-info-item">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="${data.color}">
                                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                            </svg>
                            <div>
                                <span class="preview-label">Hora:</span>
                                <span class="preview-value">${data.eventTime}</span>
                            </div>
                        </div>
                        
                        <div class="preview-info-item">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="${data.color}">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                            </svg>
                            <div>
                                <span class="preview-label">Lugar:</span>
                                <span class="preview-value">${data.address}</span>
                            </div>
                        </div>
                        
                        <div class="preview-info-item">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="${data.color}">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
                            </svg>
                            <div>
                                <span class="preview-label">WhatsApp:</span>
                                <span class="preview-value">${data.countryCode} ${data.phoneNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="preview-message-section">
                    <h3 class="preview-section-title">Mensaje de Invitación</h3>
                    <p class="preview-message">"${data.invitationMessage}"</p>
                </div>
                
                ${data.gifts.length > 0 ? `
                    <div class="preview-gifts-section">
                        <h3 class="preview-section-title">Sugerencias de Regalos (${data.gifts.length})</h3>
                        <div class="preview-gifts-grid">
                            ${data.gifts.slice(0, 6).map(gift => `
                                <div class="preview-gift-item">
                                    <span class="preview-gift-icon">${gift.icon}</span>
                                    <span class="preview-gift-name">${gift.name}</span>
                                </div>
                            `).join('')}
                            ${data.gifts.length > 6 ? `<div class="preview-gift-more">+${data.gifts.length - 6} más</div>` : ''}
                        </div>
                    </div>
                ` : ''}
                
                <div class="preview-theme-section">
                    <h3 class="preview-section-title">Personalización</h3>
                    <div class="preview-theme-info">
                        <div class="preview-theme-item">
                            <span class="preview-label">Tema:</span>
                            <span class="preview-value">${data.theme.name}</span>
                        </div>
                        <div class="preview-theme-item">
                            <span class="preview-label">Color:</span>
                            <span class="preview-color-box" style="background: ${data.color};"></span>
                        </div>
                        <div class="preview-theme-item">
                            <span class="preview-label">Efectos:</span>
                            <span class="preview-value">${data.effects.length} seleccionados</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generar HTML de invitación
function generateInvitationHTML(data) {
    const dateObj = new Date(data.eventDate);
    const formattedDate = dateObj.toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Generar efectos flotantes
    const effects = floatingEffects[data.gender];
    const selectedEffectsData = data.effects.map(id => effects.find(e => e.id === id));
    
    // Repetir efectos para llenar el fondo (mínimo 6 iconos)
    const floatingIcons = [];
    while (floatingIcons.length < 6) {
        floatingIcons.push(...selectedEffectsData);
    }
    const displayIcons = floatingIcons.slice(0, 6);

    return `
        <div class="floating-effects">
            ${displayIcons.map(effect => `
                <div class="floating-icon" style="color: ${data.color}">
                    ${effect.icon}
                </div>
            `).join('')}
        </div>
        <div class="invitation-card-content" style="font-family: ${data.theme.fontFamily}; color: ${data.color}">
            <h2>¡Estás invitado a nuestro Baby Shower!</h2>
            <div class="baby-name" style="color: ${data.color}">${data.babyName}</div>
            <div class="parents">
                ${data.fatherName} y ${data.motherName}
            </div>
            <div class="message">${data.invitationMessage}</div>
            
            <div class="event-details">
                <div class="detail-item">
                    <div class="detail-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                        </svg>
                    </div>
                    <div class="detail-content">
                        <div class="detail-label">Fecha</div>
                        <div class="detail-value">${formattedDate}</div>
                    </div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                        </svg>
                    </div>
                    <div class="detail-content">
                        <div class="detail-label">Hora</div>
                        <div class="detail-value">${data.eventTime}</div>
                    </div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                        </svg>
                    </div>
                    <div class="detail-content">
                        <div class="detail-label">Lugar</div>
                        <div class="detail-value">${data.address}</div>
                        ${(data.googleMapsLink || data.wazeLink) ? `
                            <div class="map-links">
                                ${data.googleMapsLink ? `<a href="${data.googleMapsLink}" target="_blank" class="map-link">Google Maps</a>` : ''}
                                ${data.wazeLink ? `<a href="${data.wazeLink}" target="_blank" class="map-link">Waze</a>` : ''}
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
            
            ${data.gifts.length > 0 ? `
                <div class="gift-list">
                    <h3>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="vertical-align: middle; margin-right: 8px;">
                            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                        </svg>
                        Sugerencias de Regalos
                    </h3>
                    <div class="gift-items">
                        ${data.gifts.map(gift => `
                            <div class="gift-item">
                                <div class="gift-icon">${gift.icon}</div>
                                <div class="gift-name">${gift.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// Copiar enlace
function copyLink() {
    const linkInput = document.getElementById('shareLink');
    linkInput.select();
    document.execCommand('copy');
    
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Copiado!';
    setTimeout(() => {
        btn.textContent = originalText;
    }, 2000);
}

// Compartir por WhatsApp
function shareWhatsApp() {
    const link = document.getElementById('shareLink').value;
    const data = appState.invitationData;
    
    if (!link || link.trim() === '') {
        alert('Error: No se ha generado el enlace de invitación');
        return;
    }
    
    const message = `🎉 ¡Estás invitado al Baby Shower de ${data.babyName}! 🍼\n\n` +
                   `👶 ${data.fatherName} y ${data.motherName}\n` +
                   `📅 ${data.eventDate}\n` +
                   `🕐 ${data.eventTime}\n\n` +
                   `Ver invitación completa: ${link}`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    console.log('🔗 Abriendo WhatsApp con URL:', whatsappUrl);
    
    // Método 1: Intentar abrir directamente (funciona en WebView)
    try {
        window.open(whatsappUrl, '_blank');
        console.log('✅ Método 1: window.open ejecutado');
    } catch (error) {
        console.error('❌ Método 1 falló:', error);
        
        // Método 2: Fallback con enlace temporal
        try {
            const tempLink = document.createElement('a');
            tempLink.href = whatsappUrl;
            tempLink.target = '_blank';
            tempLink.rel = 'noopener noreferrer';
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
            console.log('✅ Método 2: tempLink.click() ejecutado');
        } catch (error2) {
            console.error('❌ Método 2 falló:', error2);
            alert('No se pudo abrir WhatsApp. Por favor, copia el enlace manualmente.');
        }
    }
}

// Cambiar pestaña del invitado
function switchGuestTab(tabName) {
    // Actualizar botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.tab-btn').classList.add('active');

    // Actualizar paneles
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    const panels = {
        'invitation': 'invitationTab',
        'gifts': 'giftsTab',
        'location': 'locationTab',
        'confirm': 'confirmTab'
    };

    document.getElementById(panels[tabName]).classList.add('active');

    // Cargar contenido específico si es necesario
    if (tabName === 'gifts' && !document.getElementById('guestGiftsList').hasChildNodes()) {
        loadGuestGifts();
    }
    if (tabName === 'location' && !document.getElementById('guestLocationInfo').hasChildNodes()) {
        loadGuestLocation();
    }
}

// Cargar lista de regalos del invitado
function loadGuestGifts() {
    const data = appState.guestInvitationData;
    if (!data || !data.gifts) return;

    const giftsList = document.getElementById('guestGiftsList');
    giftsList.innerHTML = data.gifts.map(gift => `
        <div class="gift-item-card">
            ${gift.icon}
            <span>${gift.name}</span>
        </div>
    `).join('');
}

// Cargar ubicación del invitado
function loadGuestLocation() {
    const data = appState.guestInvitationData;
    if (!data) return;

    const dateObj = new Date(data.eventDate);
    const formattedDate = dateObj.toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    const locationInfo = document.getElementById('guestLocationInfo');
    locationInfo.innerHTML = `
        <div class="location-detail">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <div class="location-detail-content">
                <h3>Fecha y Hora</h3>
                <p><strong>${formattedDate}</strong></p>
                <p>${data.eventTime}</p>
            </div>
        </div>

        <div class="location-detail">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div class="location-detail-content">
                <h3>Dirección</h3>
                <p>${data.address}</p>
                <div class="location-buttons">
                    ${data.googleMapsLink ? `
                        <a href="${data.googleMapsLink}" target="_blank" class="location-btn maps">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            Abrir en Google Maps
                        </a>
                    ` : ''}
                    ${data.wazeLink ? `
                        <a href="${data.wazeLink}" target="_blank" class="location-btn waze">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            Abrir en Waze
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Vista de invitado
// Cargar invitación desde Firebase
async function loadGuestViewFromFirebase(invitationId) {
    console.log('🔥 Cargando invitación desde Firebase:', invitationId);
    
    try {
        const snapshot = await database.ref('invitations/' + invitationId).once('value');
        const data = snapshot.val();
        
        if (data) {
            console.log('✅ Invitación encontrada en Firebase');
            loadGuestViewWithData(data);
        } else {
            console.error('❌ Invitación no encontrada en Firebase');
            showInvitationNotFound();
        }
    } catch (error) {
        console.error('❌ Error al cargar desde Firebase:', error);
        showInvitationNotFound();
    }
}

// Cargar invitación del localStorage (método antiguo, mantener como backup)
function loadGuestView(invitationId) {
    const data = localStorage.getItem(`invitation_${invitationId}`);
    
    if (!data) {
        showInvitationNotFound();
        return;
    }

    const invitationData = JSON.parse(data);
    loadGuestViewWithData(invitationData);
}

// Función auxiliar para mostrar error
function showInvitationNotFound() {
    document.body.innerHTML = `
        <div style="text-align: center; padding: 40px; font-family: Arial, sans-serif;">
            <h1 style="font-size: 3rem;">😔</h1>
            <h2>Invitación no encontrada</h2>
            <p style="color: #666;">Lo sentimos, no pudimos encontrar esta invitación.</p>
            <p style="color: #999; font-size: 0.9rem; margin-top: 20px;">El enlace puede estar incompleto o haber expirado.</p>
        </div>
    `;
}

// Cargar vista de invitado con datos directos
function loadGuestViewWithData(invitationData) {
    // Guardar datos para acceso en pestañas
    appState.invitationData = invitationData;

    // Aplicar tema
    document.body.className = invitationData.gender === 'M' ? 'boy-theme' : 'girl-theme';
    
    // Aplicar tipografía del tema seleccionado
    if (invitationData.theme && invitationData.theme.fontFamily) {
        document.body.style.fontFamily = invitationData.theme.fontFamily;
    }

    // Generar invitación completa para invitado
    const invitationFull = document.getElementById('guestInvitationFull');
    invitationFull.innerHTML = generateGuestInvitationHTML(invitationData);
    
    // Configurar formulario de confirmación
    document.getElementById('confirmationForm').addEventListener('submit', handleConfirmation);
    
    // Mostrar pantalla de invitado
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('guestScreen').classList.add('active');
}

// Generar HTML completo para vista de invitado (estilo tarjeta continua)
function generateGuestInvitationHTML(data) {
    console.log('Datos de invitación:', data);
    console.log('Efectos:', data.effects);
    
    const dateObj = new Date(data.eventDate);
    const formattedDate = dateObj.toLocaleDateString('es-ES', { 
        day: 'numeric',
        month: 'long',
        year: 'numeric' 
    });

    const genderText = data.gender === 'M' ? '¡Es un niño!' : '¡Es una niña!';
    const genderIcon = data.gender === 'M' ? 
        `<svg viewBox="0 0 15.14 17.15" width="120" height="120" fill="currentColor">
            <path d="M1.81 9.97c-0.54,0.6 -0.96,1.42 -0.76,2.23 0.09,0.36 0.27,0.68 0.44,0.99 -0.13,-0.02 -0.3,0.05 -0.42,-0.02 -0.11,-0.07 -0.22,-0.14 -0.35,-0.16 -0.13,-0.01 -0.27,0.03 -0.38,0.11 -0.25,0.16 -0.48,0.66 -0.16,0.88 -0.36,0.44 -0.15,1.35 0.33,1.66 0.18,0.12 0.42,0.14 0.64,0.16 0.59,0.03 1.18,0.01 1.77,0.07 0.8,0.08 1.58,0.32 2.38,0.34 0.31,0 0.63,-0.03 0.9,-0.17 0.5,-0.26 0.76,-0.82 0.9,-1.37 0.47,-0.13 0.91,-0.37 1.27,-0.69 0.2,0.48 0.68,0.83 0.78,1.34 0.05,0.23 0.01,0.48 0.11,0.7 0.14,0.31 0.57,0.43 0.85,0.24 -0.02,0.24 0.26,0.46 0.49,0.37 0.03,-0.02 0.06,-0.03 0.09,-0.03 0.05,0 0.08,0.03 0.12,0.06 0.3,0.27 0.75,0.29 1.14,0.2 0.13,-0.03 0.26,-0.01 0.38,-0.09 0.14,-0.09 0.34,-0.06 0.45,0.07 0.04,0.05 0.07,0.11 0.11,0.17 0.06,0.08 0.16,0.13 0.25,0.12 0.1,-0.02 0.19,-0.11 0.18,-0.21 -0.02,-0.07 -0.07,-0.13 -0.11,-0.18 -0.05,-0.06 -0.08,-0.15 -0.04,-0.21 0.18,0.11 0.43,0.11 0.56,0.27 0.03,0.04 0.05,0.09 0.09,0.13 0.07,0.06 0.17,0.07 0.26,0.05 0.04,-0.01 0.08,-0.03 0.11,-0.06 0.03,-0.03 0.04,-0.08 0.01,-0.11 0.06,0.01 0.13,0.02 0.19,0 0.06,-0.02 0.12,-0.07 0.12,-0.13 0,-0.05 -0.03,-0.08 -0.05,-0.12 -0.08,-0.11 -0.16,-0.23 -0.23,-0.34 -0.05,-0.07 -0.06,-0.14 -0.1,-0.22 -0.14,-0.28 -0.45,-0.47 -0.76,-0.48 -0.23,-0.01 -0.45,0.06 -0.67,0.04 0.02,-0.09 -0.05,-0.18 -0.12,-0.24 -0.07,-0.06 -0.15,-0.11 -0.2,-0.19 -0.07,-0.1 -0.07,-0.23 -0.06,-0.36 0.1,0.12 0.24,0.2 0.38,0.27 0.19,0.09 0.43,0.15 0.6,0.02 0.06,-0.05 0.12,-0.15 0.05,-0.18 0.25,0 0.49,-0.01 0.74,-0.04 0.03,0 0.06,-0.01 0.09,0.01 0.02,0.02 0.03,0.04 0.03,0.07 0.04,0.1 0.11,0.2 0.22,0.23 0.1,0.03 0.24,-0.06 0.21,-0.16 0.03,0.09 0.13,0.15 0.23,0.13 0.09,-0.02 0.16,-0.11 0.16,-0.21 -0.01,-0.02 -0.01,-0.05 -0.01,-0.08 0,-0.07 0.05,-0.13 0.09,-0.19 0.07,-0.14 0.03,-0.32 -0.08,-0.44 -0.1,-0.12 -0.26,-0.18 -0.41,-0.19 -0.2,-0.02 -0.42,0.03 -0.59,-0.06 -0.06,-0.04 -0.08,-0.06 -0.13,-0.1 0.07,-0.25 0.13,-0.49 0.2,-0.73 0.04,-0.13 0.07,-0.26 0.02,-0.39 -0.03,-0.08 -0.1,-0.14 -0.14,-0.21 -0.12,-0.2 -0.08,-0.45 -0.07,-0.68 0.05,-0.66 -0.16,-1.33 -0.56,-1.85 -0.1,-0.13 -0.21,-0.25 -0.27,-0.41 -0.14,-0.36 0.08,-0.77 0.1,-1.16 0.01,-0.5 -0.31,-0.94 -0.61,-1.34 -0.25,-0.33 0.51,-0.45 0.72,-0.48 0.14,-0.03 0.29,-0.04 0.42,-0.09 0.37,-0.14 0.73,-0.54 0.89,-0.9 0.13,-0.31 0.17,-0.67 0.12,-1.01 -0.05,-0.33 -0.29,-0.6 -0.33,-0.91 -0.06,-0.43 0.07,-0.86 0.01,-1.29 -0.08,-0.65 -0.53,-1.36 -1.05,-1.75 -0.64,-0.48 -1.46,-0.68 -2.26,-0.67 -1.01,0.01 -2.07,0.38 -2.66,1.24 -0.37,0.56 -0.54,1.25 -0.48,1.92 0.04,0.51 0.19,1.01 0.38,1.49 0.11,0.29 0.23,0.59 0.27,0.9 -0.18,0.02 -0.3,0.15 -0.4,0.31 -0.09,0.15 -0.15,0.32 -0.26,0.46 -0.14,0.22 -0.37,0.37 -0.59,0.5 -1.01,0.59 -2.14,0.83 -3.17,1.36 -0.82,0.42 -1.57,0.97 -2.22,1.62 -0.05,0.05 -0.1,0.11 -0.15,0.17z"/>
        </svg>` :
        `<svg viewBox="0 0 34.41 16.66" width="120" height="120" fill="currentColor">
            <path d="M21.21 8.71c-0.01,0.01 -0.02,0.01 -0.03,0 -0.17,-0.05 -0.33,-0.09 -0.51,-0.12 -0.05,-0.01 -0.65,-0.06 -0.65,-0.05 -0.04,-0.64 -0.09,-1.28 -0.13,-1.91 -0.01,-0.07 -0.01,-0.13 -0.02,-0.2 -0.04,-0.65 -0.09,-1.29 -0.14,-1.94 0.29,0 0.47,0.04 0.69,0.21 0.08,0.05 0.15,0.12 0.21,0.2 0.21,0.26 0.26,0.63 0.33,0.95 0.2,0.93 0.26,1.88 0.26,2.84 0,0.01 0,0.02 -0.01,0.02zm13.08 1.19c-0.12,-0.71 -0.34,-1.41 -0.75,-2 -0.4,-0.59 -1.01,-1.06 -1.72,-1.2 0.42,-0.34 0.85,-0.79 0.83,-1.35 -0.01,-0.61 -0.26,-1.16 -0.61,-1.66 -0.46,-0.64 -1.04,-1.2 -1.35,-1.93 -0.08,-0.21 -0.15,-0.42 -0.21,-0.64 -0.06,0.03 -0.12,0.06 -0.18,0.1 0.03,-0.12 -0.03,-0.26 -0.14,-0.31 -0.1,-0.06 -0.25,-0.03 -0.33,0.06 -0.06,-0.13 -0.12,-0.28 -0.24,-0.37 -0.12,-0.1 -0.28,-0.12 -0.41,-0.03 -0.17,-0.22 -0.62,-0.62 -0.88,-0.26 -0.06,0.08 -0.06,0.19 -0.08,0.29 -0.05,0.31 -0.22,0.62 -0.14,0.92 0.05,0.2 0.19,0.36 0.27,0.55 0.07,0.17 0.1,0.34 0.12,0.52 0.08,0.58 0.15,1.15 0.23,1.73 0.01,0.11 0.02,0.23 -0.05,0.32 -0.08,0.11 -0.23,0.11 -0.37,0.1 -1.01,-0.06 -1.89,-0.01 -2.89,0.18 -0.16,0.03 -0.33,0.07 -0.41,0.22 -0.08,-0.11 0.01,-0.04 -0.06,-0.15 -0.32,-0.58 -0.68,-1.15 -1.17,-1.6 -0.26,-0.23 -0.54,-0.43 -0.82,-0.63 -0.83,-0.62 -1.96,-0.97 -2.29,-1.96 -0.12,-0.38 -0.46,-0.69 -0.85,-0.78 -0.14,-0.04 -0.32,-0.02 -0.36,0.11 -0.09,-0.08 -0.23,-0.11 -0.34,-0.07 -0.11,0.04 -0.2,0.15 -0.21,0.27 -0.14,-0.12 -0.36,-0.13 -0.49,-0.01 -0.04,0.03 -0.07,0.07 -0.11,0.09 -0.04,0.02 -0.09,0.03 -0.13,0.04 -0.28,0.05 -0.47,0.15 -0.67,0.35 -0.04,0.04 -0.49,0.59 -0.43,0.63 -0.23,-0.11 -0.52,-0.01 -0.69,0.18 -0.17,0.19 -0.25,0.44 -0.29,0.7 -0.11,-0.25 -0.52,-0.2 -0.68,0.02 -0.15,0.22 -0.13,0.52 -0.11,0.79 -0.27,0.04 -0.44,0.39 -0.31,0.63 0.08,0.14 0.24,0.25 0.26,0.41 0.01,0.07 -0.01,0.14 -0.03,0.21 -0.07,0.21 -0.12,0.42 -0.1,0.63 0.03,0.22 0.16,0.43 0.37,0.49 0.08,0.03 0.17,0.03 0.25,0.05 0.09,0.03 0.17,0.08 0.24,0.14 0.14,0.1 0.38,0.1 0.52,0.2 -0.18,0.23 -0.02,0.59 -0.17,0.84 -0.05,0.08 -0.13,0.14 -0.21,0.2 -0.41,0.32 -0.83,0.63 -1.27,0.92 -0.57,0.36 -1.17,0.67 -1.72,1.06 -0.13,0.09 -1.42,1.23 -1.31,1.35 -0.18,-0.19 -0.28,-0.44 -0.39,-0.67 -0.45,-0.84 -1.26,-1.61 -2.14,-1.98 -0.51,-0.21 -0.96,-0.2 -1.49,-0.25 -0.73,-0.08 -1.44,-0.32 -2.14,-0.54 -0.33,-0.1 -0.67,-0.2 -1.02,-0.18 -0.34,0.01 -0.67,0.13 -0.99,0.25 -1.09,0.44 -2.18,1.03 -2.84,2 -0.5,0.75 -0.71,1.65 -0.77,2.55 -0.05,0.69 -0.01,1.4 0.21,2.06 0.59,1.88 2.37,2.28 4.14,2.39 1.54,0.1 3.09,0.02 4.61,-0.22 0.45,-0.08 0.9,-0.16 1.35,-0.1 0.39,0.05 0.75,0.2 1.12,0.32 0.88,0.29 1.8,0.38 2.72,0.46 2.51,0.21 5.03,0.32 7.55,0.32 1.68,0.01 3.36,-0.04 5.03,-0.17 0.67,-0.04 1.36,-0.07 2.05,-0.14 0.94,-0.1 1.87,-0.26 2.71,-0.63 0.37,-0.17 0.73,-0.34 1.06,-0.57 0.79,-0.56 1.35,-1.43 1.62,-2.36 0.27,-0.93 0.27,-1.93 0.1,-2.89z"/>
        </svg>`;

    // Generar múltiples iconos decorativos del mismo efecto en diferentes posiciones aleatorias
    const decorativeIcons = data.effects && data.effects.length > 0 ? data.effects.map((effectId, effectIndex) => {
        const effectsArray = floatingEffects[data.gender];
        const effect = effectsArray.find(e => e.id === effectId);
        if (!effect) return '';
        
        // Crear 5-6 instancias del mismo icono distribuidas aleatoriamente
        const instances = [];
        
        // Posiciones más esparcidas y aleatorias para cada efecto
        const positionSets = [
            // Set 1 - disperso por toda el área
            [
                { left: '8%', top: '12%', size: 28, delay: 0, direction: 'left' },
                { left: '78%', top: '18%', size: 42, delay: 1.2, direction: 'right' },
                { left: '25%', top: '55%', size: 35, delay: 2.1, direction: 'up' },
                { left: '88%', top: '72%', size: 38, delay: 3.5, direction: 'diagonal' },
                { left: '42%', top: '8%', size: 32, delay: 4.8, direction: 'right' },
                { left: '15%', top: '82%', size: 45, delay: 1.8, direction: 'left' }
            ],
            // Set 2 - otra distribución aleatoria
            [
                { left: '65%', top: '22%', size: 40, delay: 0.5, direction: 'diagonal' },
                { left: '18%', top: '38%', size: 30, delay: 2.3, direction: 'up' },
                { left: '82%', top: '48%', size: 36, delay: 1.5, direction: 'left' },
                { left: '35%', top: '75%', size: 44, delay: 3.2, direction: 'right' },
                { left: '58%', top: '15%', size: 33, delay: 4.1, direction: 'diagonal' },
                { left: '5%', top: '68%', size: 38, delay: 0.9, direction: 'up' }
            ],
            // Set 3 - distribución diferente
            [
                { left: '72%', top: '8%', size: 35, delay: 1.1, direction: 'left' },
                { left: '12%', top: '25%', size: 41, delay: 2.8, direction: 'diagonal' },
                { left: '48%', top: '45%', size: 29, delay: 0.3, direction: 'right' },
                { left: '85%', top: '65%', size: 43, delay: 3.9, direction: 'up' },
                { left: '28%', top: '12%', size: 37, delay: 1.7, direction: 'left' },
                { left: '62%', top: '78%', size: 34, delay: 4.5, direction: 'diagonal' }
            ]
        ];
        
        const selectedSet = positionSets[effectIndex % positionSets.length];
        
        selectedSet.forEach((pos, idx) => {
            const uniqueDelay = effectIndex * 2 + pos.delay;
            instances.push(`
                <div class="floating-effect floating-${pos.direction}" style="
                    left: ${pos.left}; 
                    top: ${pos.top}; 
                    width: ${pos.size}px; 
                    height: ${pos.size}px;
                    animation-delay: ${uniqueDelay}s;
                ">
                    ${effect.icon}
                </div>
            `);
        });
        
        return instances.join('');
    }).join('') : '';

    return `
        <div class="guest-card-header" style="background: linear-gradient(135deg, ${data.color}, ${adjustColorBrightness(data.color, -30)});">
            ${decorativeIcons ? `
                <div class="floating-effects-guest">
                    ${decorativeIcons}
                </div>
            ` : ''}
            
            <div class="gender-icon-large">${genderIcon}</div>
            <h1>${genderText}</h1>
            
            <div class="header-event-info">
                <p class="parents-invitation">Los futuros papás</p>
                <div class="parents-names">
                    <span class="parent-name">${data.fatherName}</span>
                    <span class="parent-separator">&</span>
                    <span class="parent-name">${data.motherName}</span>
                </div>
                <p class="invitation-subtitle">Te invitan a celebrar la llegada de</p>
                <h2 class="baby-name-header">${data.babyName}</h2>
                
                <div class="event-details-header">
                    <div class="header-info-item">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                        </svg>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="header-info-item">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                        </svg>
                        <span>${data.eventTime}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <nav class="guest-navigation">
            <button class="nav-btn active" data-section="messageSection" onclick="showSection('messageSection')">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>Mensaje</span>
            </button>
            <button class="nav-btn" data-section="locationSection" onclick="showSection('locationSection')">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
                <span>Ubicación</span>
            </button>
            ${data.gifts && data.gifts.length > 0 ? `
                <button class="nav-btn" data-section="giftsSection" onclick="showSection('giftsSection')">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                    <span>Regalos</span>
                </button>
            ` : ''}
            <button class="nav-btn" data-section="confirmSection" onclick="showSection('confirmSection')">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Confirmar</span>
            </button>
        </nav>
        
        <div class="confirmation-counter">
            <span id="confirmationCount">${data.confirmations || 0}</span> personas confirmadas
        </div>
        
        <div class="guest-card-body">
            <div id="messageSection" class="invitation-message-section section-content active">
                <div class="heart-icon-large">
                    <svg viewBox="0 0 24 24" width="80" height="80" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
                
                <h2 class="invitation-welcome">¡Estás Invitado!</h2>
                
                <div class="invitation-message-text">
                    ${data.invitationMessage.split('\n\n').map(paragraph => 
                        `<p>${paragraph}</p>`
                    ).join('')}
                </div>
                
                <div class="event-date-highlight">
                    ¡Esperamos verte el ${formattedDate} para celebrar juntos este hermoso comienzo!
                </div>
            </div>

            <div id="locationSection" class="location-section section-content">
                <h3>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                    </svg>
                    Ubicación
                </h3>
                <div class="location-address">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p>${data.address}</p>
                </div>
                <div class="map-container">
                    <iframe 
                        src="https://maps.google.com/maps?q=${encodeURIComponent(data.address)}&output=embed"
                        width="100%" 
                        height="300" 
                        style="border:0; border-radius: 8px;" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
                <div class="location-buttons">
                    <a href="${data.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}`}" target="_blank" class="location-btn maps">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        Abrir en Google Maps
                    </a>
                    <a href="${data.wazeLink || `https://waze.com/ul?q=${encodeURIComponent(data.address)}&navigate=yes`}" target="_blank" class="location-btn waze">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        Abrir en Waze
                    </a>
                </div>
            </div>

            ${data.gifts && data.gifts.length > 0 ? `
                <div id="giftsSection" class="gifts-section section-content">
                    <h3>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                        </svg>
                        Lista de Regalos Sugeridos
                    </h3>
                    <p class="gifts-intro">Selecciona los regalos que deseas obsequiar</p>
                    <div class="gifts-grid-guest">
                        ${data.gifts.map((gift, index) => `
                            <div class="gift-item-guest ${appState.selectedGifts && appState.selectedGifts.includes(index) ? 'selected' : ''}" 
                                 data-gift-index="${index}"
                                 onclick="toggleGiftSelection(${index})">
                                ${gift.icon}
                                <span>${gift.name}</span>
                                <div class="gift-check">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="selected-gifts-summary" id="selectedGiftsSummary" style="display: none;">
                        <p><strong>Regalos seleccionados:</strong> <span id="selectedGiftsCount">0</span></p>
                    </div>
                </div>
            ` : ''}

            <div class="confirmation-section-guest section-content" id="confirmSection">
                <h3>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Confirmar Asistencia
                </h3>
                <form id="confirmationForm" class="confirmation-form">
                    <div class="form-group">
                        <label for="guestName">Nombre completo</label>
                        <input type="text" id="guestName" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="guestPhone">Teléfono</label>
                        <input type="tel" id="guestPhone" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="guestCount">¿Cuántas personas asistirán?</label>
                        <input type="number" id="guestCount" class="form-control" min="1" required>
                    </div>
                    <div class="form-group">
                        <label for="guestMessage">Mensaje para los papás (opcional)</label>
                        <textarea id="guestMessage" class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" class="submit-btn confirm-btn" style="background: linear-gradient(135deg, ${data.color}, ${adjustColorBrightness(data.color, -20)});">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Confirmar Asistencia
                    </button>
                </form>
            </div>
        </div>
    `;
}

// Manejar confirmación de asistencia
function handleConfirmation(e) {
    e.preventDefault();
    
    const guestName = document.getElementById('guestName').value;
    const guestPhone = document.getElementById('guestPhone').value;
    const guestCount = document.getElementById('guestCount').value;
    const guestMessage = document.getElementById('guestMessage').value;
    
    const data = appState.invitationData;
    // Limpiar el código de país (remover espacios, guiones y el símbolo +)
    const cleanCountryCode = data.countryCode.replace(/[^0-9]/g, '');
    const whatsappNumber = cleanCountryCode + data.phoneNumber;
    
    console.log('📱 Enviando a WhatsApp:', whatsappNumber);
    console.log('🌍 País:', data.countryName || 'No especificado');
    
    let message = `¡Hola! Confirmo mi asistencia al Baby Shower de ${data.babyName}\n\n`;
    message += `👤 Nombre: ${guestName}\n`;
    message += `📱 Teléfono: ${guestPhone}\n`;
    message += `👥 Personas: ${guestCount}\n`;
    
    // Agregar regalos seleccionados
    if (appState.selectedGifts && appState.selectedGifts.length > 0) {
        message += `\n🎁 Regalos que llevaré:\n`;
        appState.selectedGifts.forEach(index => {
            message += `   • ${data.gifts[index].name}\n`;
        });
    }
    
    if (guestMessage) {
        message += `\n💌 Mensaje: ${guestMessage}`;
    }
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    console.log('🔗 URL de WhatsApp:', whatsappUrl);
    
    try {
        window.open(whatsappUrl, '_blank');
        // Mostrar mensaje de éxito
        setTimeout(() => {
            alert('¡Gracias por confirmar! Se abrió WhatsApp para enviar tu confirmación.');
        }, 500);
    } catch (error) {
        console.error('Error al abrir WhatsApp:', error);
        alert('Error al abrir WhatsApp. Por favor, contacta directamente al número: ' + data.countryCode + ' ' + data.phoneNumber);
    }
}

// Alternar selección de regalo
function toggleGiftSelection(giftIndex) {
    if (!appState.selectedGifts) {
        appState.selectedGifts = [];
    }
    
    const index = appState.selectedGifts.indexOf(giftIndex);
    if (index > -1) {
        // Deseleccionar
        appState.selectedGifts.splice(index, 1);
    } else {
        // Seleccionar
        appState.selectedGifts.push(giftIndex);
    }
    
    // Actualizar UI
    const giftItem = document.querySelector(`[data-gift-index="${giftIndex}"]`);
    if (giftItem) {
        giftItem.classList.toggle('selected');
    }
    
    // Actualizar contador
    updateGiftsSummary();
}

// Actualizar resumen de regalos seleccionados
function updateGiftsSummary() {
    const summary = document.getElementById('selectedGiftsSummary');
    const count = document.getElementById('selectedGiftsCount');
    
    if (appState.selectedGifts && appState.selectedGifts.length > 0) {
        summary.style.display = 'block';
        count.textContent = appState.selectedGifts.length;
    } else {
        summary.style.display = 'none';
    }
}

// Mostrar sección seleccionada (estilo app Android)
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remover active de todos los botones
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    // Activar botón correspondiente
    const btn = document.querySelector(`[data-section="${sectionId}"]`);
    if (btn) {
        btn.classList.add('active');
    }
}

// El sistema de mapas ya no genera enlaces automáticamente
// Los usuarios ingresan manualmente los enlaces si los tienen
