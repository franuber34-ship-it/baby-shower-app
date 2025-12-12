// Firebase utility functions
// Import and initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSBvbnd1u3xJ0C0uWieRI_Yqc3zzPO_kk",
    authDomain: "baby-shower-app-1c029.firebaseapp.com",
    databaseURL: "https://baby-shower-app-1c029-default-rtdb.firebaseio.com",
    projectId: "baby-shower-app-1c029",
    storageBucket: "baby-shower-app-1c029.appspot.com",
    messagingSenderId: "475479297496",
    appId: "1:475479297496:web:e09c0c7f28a2ec857576ad"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database ? firebase.database() : null;
const auth = firebase.auth ? firebase.auth() : null;

// Save invitation data (adds short token if missing)
function saveInvitation(invitationData) {
    const id = invitationData.invitationId;
    if (!id) {
        throw new Error('invitationId is required in invitationData');
    }
    // Ensure a short token exists for privacy-protected links
    if (!invitationData.token) {
        invitationData.token = generateShortToken(8);
    }
    return db.ref('invitations/' + id).set(invitationData).then(() => id);
}

// Generate a short, URL-safe token
function generateShortToken(length) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
    let out = '';
    for (let i = 0; i < length; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
}

// Get invitation by ID
function getInvitation(id) {
    return db.ref('invitations/' + id).once('value').then(snap => snap.val());
}

// Save confirmation entry
function saveConfirmation(invitationId, entry) {
    const confirmationRef = db.ref('confirmations/' + invitationId).push();
    return confirmationRef.set({
        ...entry,
        savedAt: firebase.database.ServerValue.TIMESTAMP
    });
}

// Load all confirmations for an invitation
function loadConfirmations(invitationId) {
    return db.ref('confirmations/' + invitationId).once('value').then(snap => {
        const data = snap.val();
        if (!data) return [];
        return Object.values(data);
    });
}

// Get confirmation total (sum of all attendees) - with error handling
function getConfirmationTotal(invitationId) {
    return loadConfirmations(invitationId).then(confirmations => {
        return confirmations.reduce((sum, item) => sum + (parseInt(item.count, 10) || 1), 0);
    }).catch(err => {
        console.warn('No se pudieron cargar confirmaciones (permisos):', err);
        return 0; // Retornar 0 si no hay permisos
    });
}

// Export functions
window.saveInvitation = saveInvitation;
window.getInvitation = getInvitation;
window.saveConfirmation = saveConfirmation;
window.loadConfirmations = loadConfirmations;
window.getConfirmationTotal = getConfirmationTotal;
window.auth = auth;
window.db = db;
window.generateShortToken = generateShortToken;
