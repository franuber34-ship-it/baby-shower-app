// Estado de la aplicación
const appState = {
    gender: null,
    selectedColor: null,
    selectedEffects: [],
    selectedTheme: null,
    invitationData: null,
    invitationId: null,
    selectedGifts: [],
    guestInvitationData: null
};

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
        { id: 'football', name: 'Fútbol', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.05v2.02c-1.99-.33-3.67-1.27-4.99-2.56C9.14 3.56 10.54 3 12 3c.35 0 .69.03 1 .05zm-5.8 1.88c1.46 1.34 3.35 2.23 5.47 2.56v2.76l-5.2 1.73-2.25-5.39c.67-.98 1.5-1.82 2.48-2.48l-.5-1.18zm-2.27 6.21l1.98 4.74-4.03 1.34c-.56-1.09-.9-2.28-.9-3.54 0-1.25.34-2.42.89-3.44l2.06-.1zm1.24 6.93l4.03-1.34v2.74c-2.12.33-4.01 1.22-5.47 2.56-.98-.66-1.81-1.5-2.48-2.48l2.25-5.39 1.67 3.91zm11.56 2.05c-1.32 1.29-3 2.23-4.99 2.56v-2.02c.31.02.65.05 1 .05 1.46 0 2.86-.56 3.99-1.51l-.5-1.18c-.67.98-1.5 1.82-2.48 2.48l-2.01-4.82 2.06.1c.55 1.02.89 2.19.89 3.44 0 1.26-.34 2.45-.9 3.54l-1.06-.64zm.44-6.99l-2.25-5.39-5.2-1.73v-2.76c2.12-.33 4.01-1.22 5.47-2.56.98.66 1.81 1.5 2.48 2.48l-1.98 4.74 1.48 5.22z"/></svg>' },
        { id: 'footprints', name: 'Huellas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 15c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm1-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm15.5 8c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm1-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>' },
        { id: 'animals', name: 'Animales', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 12c1.93 0 3.5-1.57 3.5-3.5S6.43 5 4.5 5 1 6.57 1 8.5 2.57 12 4.5 12zm15 0c1.93 0 3.5-1.57 3.5-3.5S21.43 5 19.5 5 16 6.57 16 8.5s1.57 3.5 3.5 3.5zm-5 1.5c-3.04 0-5.5 2.46-5.5 5.5h11c0-3.04-2.46-5.5-5.5-5.5z"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/></svg>' },
        { id: 'waves', name: 'Ondas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.6.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.6-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.6.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.6.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58z"/></svg>' },
        { id: 'cars', name: 'Carros', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>' },
        { id: 'tools', name: 'Herramientas', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>' }
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
        name: 'Clásico Elegante',
        description: 'Tipografía serif con diseño tradicional',
        fontFamily: 'Georgia, serif',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm0 10h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-2.55V12z"/></svg>'
    },
    {
        id: 'modern',
        name: 'Moderno Minimalista',
        description: 'Líneas limpias y tipografía sans-serif',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2z"/></svg>'
    },
    {
        id: 'playful',
        name: 'Divertido',
        description: 'Tipografía redondeada y amigable',
        fontFamily: 'Comic Sans MS, cursive',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-5 6c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>'
    },
    {
        id: 'elegant',
        name: 'Elegancia Suave',
        description: 'Diseño sofisticado con toques delicados',
        fontFamily: 'Garamond, serif',
        icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
    },
    {
        id: 'bold',
        name: 'Audaz y Fuerte',
        description: 'Tipografía bold para destacar',
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
    // Verificar si hay parámetros en la URL (modo invitado)
    const urlParams = new URLSearchParams(window.location.search);
    const invitationId = urlParams.get('id');
    const encodedData = urlParams.get('data');
    
    if (encodedData) {
        // Nuevo método: datos en la URL
        try {
            const decodedData = JSON.parse(decodeURIComponent(atob(encodedData)));
            loadGuestViewWithData(decodedData);
        } catch (error) {
            console.error('Error al decodificar datos:', error);
            showInvitationNotFound();
        }
    } else if (invitationId) {
        // Método antiguo: localStorage
        loadGuestView(invitationId);
    } else {
        initAdminView();
    }
});

// Vista de administrador
function initAdminView() {
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
            <div class="effect-name">${effect.name}</div>
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
            alert('Solo puedes seleccionar hasta 3 efectos');
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
            ${effect.name}
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
                    <div class="theme-name" style="font-family: ${theme.fontFamily}">${theme.name}</div>
                    <div class="theme-description">${theme.description}</div>
                </div>
            </div>
            <div class="theme-preview" style="font-family: ${theme.fontFamily}; border-left-color: ${userColor};">
                Ejemplo: ¡Estás invitado a nuestro Baby Shower!
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
        alert('Por favor selecciona un color');
        return;
    }
    
    if (screenId === 'themeScreen' && appState.selectedEffects.length === 0) {
        alert('Por favor selecciona al menos un efecto');
        return;
    }
    
    if (screenId === 'adminScreen' && !appState.selectedTheme) {
        alert('Por favor selecciona un tema');
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
    
    // Recopilar datos
    const formData = {
        gender: appState.gender,
        color: appState.selectedColor,
        effects: appState.selectedEffects,
        theme: appState.selectedTheme,
        countryCode: document.getElementById('countryCode').value,
        phoneNumber: document.getElementById('phoneNumber').value,
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
function showPreview() {
    const data = appState.invitationData;
    const previewCard = document.getElementById('previewCard');
    
    previewCard.innerHTML = generateAdminPreviewHTML(data);
    
    // Generar enlace con datos codificados en base64
    const encodedData = btoa(encodeURIComponent(JSON.stringify(data)));
    let baseUrl = window.location.href.split('?')[0];
    if (baseUrl.endsWith('/')) {
        baseUrl = baseUrl.slice(0, -1);
    }
    const shareLink = `${baseUrl}?data=${encodedData}`;
    document.getElementById('shareLink').value = shareLink;
    
    nextScreen('previewScreen');
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
    
    // Crear enlace temporal y hacer clic
    const tempLink = document.createElement('a');
    tempLink.href = whatsappUrl;
    tempLink.target = '_blank';
    tempLink.rel = 'noopener noreferrer';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
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
        `<svg viewBox="0 0 100 100" width="120" height="120" fill="currentColor">
            <circle cx="50" cy="22" r="12"/>
            <rect x="35" y="36" width="30" height="22" rx="4"/>
            <rect x="36" y="58" width="12" height="24" rx="3"/>
            <rect x="52" y="58" width="12" height="24" rx="3"/>
            <rect x="28" y="38" width="6" height="18" rx="3"/>
            <rect x="66" y="38" width="6" height="18" rx="3"/>
        </svg>` :
        `<svg viewBox="0 0 100 100" width="120" height="120" fill="currentColor">
            <circle cx="50" cy="22" r="12"/>
            <ellipse cx="38" cy="18" rx="6" ry="4" opacity="0.8"/>
            <ellipse cx="62" cy="18" rx="6" ry="4" opacity="0.8"/>
            <rect x="35" y="36" width="30" height="16" rx="4"/>
            <path d="M32 52 L35 52 L38 78 Q38 82 42 82 L58 82 Q62 82 62 78 L65 52 L68 52 L64 78 Q64 84 58 84 L42 84 Q36 84 36 78 Z" />
            <rect x="26" y="38" width="8" height="16" rx="4"/>
            <rect x="66" y="38" width="8" height="16" rx="4"/>
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
        
        <div class="guest-card-body">
            <div id="messageSection" class="invitation-message-section section-content active">
                <h3>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    ¡Estás Invitado!
                </h3>
                <p>${data.invitationMessage}</p>
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
                ${data.googleMapsLink ? `
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
                ` : ''}
                <div class="location-buttons">
                    ${data.googleMapsLink ? `
                        <a href="${data.googleMapsLink}" target="_blank" class="location-btn maps">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            Abrir en Google Maps
                        </a>
                    ` : `
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}" target="_blank" class="location-btn maps">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            Abrir en Google Maps
                        </a>
                    `}
                    ${data.wazeLink ? `
                        <a href="${data.wazeLink}" target="_blank" class="location-btn waze">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            Abrir en Waze
                        </a>
                    ` : `
                        <a href="https://waze.com/ul?q=${encodeURIComponent(data.address)}" target="_blank" class="location-btn waze">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            Abrir en Waze
                        </a>
                    `}
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
    const whatsappNumber = data.countryCode + data.phoneNumber;
    
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
    window.open(whatsappUrl, '_blank');
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por confirmar! Serás redirigido a WhatsApp para enviar tu confirmación.');
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
