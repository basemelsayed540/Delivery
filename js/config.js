const CONFIG = {
    SUPABASE_URL: "https://gmrytacdqydzdwhwcgqo.supabase.co",
    SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtcnl0YWNkcXlkemR3aHdjZ3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMDUwMzUsImV4cCI6MjA5MDY4MTAzNX0.ZRBBWAKYQeOJDxapaeffu7CWMbFxVUSP7fAGbCVn4B4",
    TABLES: {
        SHIPMENTS: 'shipments1',
        USERS: 'users',
        SETTLEMENTS: 'settlements'
    }
};

CONFIG.DATE_FILTER_STORAGE_KEY = 'global-selected-abydet';
CONFIG.PASSWORD_HASH_PREFIX = 'sha256$';

function getSavedDateFilter() {
    return localStorage.getItem(CONFIG.DATE_FILTER_STORAGE_KEY) || '';
}

function saveDateFilter(value) {
    const normalizedValue = String(value || '').trim();
    if (normalizedValue) {
        localStorage.setItem(CONFIG.DATE_FILTER_STORAGE_KEY, normalizedValue);
    } else {
        localStorage.removeItem(CONFIG.DATE_FILTER_STORAGE_KEY);
    }
}

async function hashPassword(password) {
    const normalizedPassword = String(password || '');
    const data = new TextEncoder().encode(normalizedPassword);
    const digest = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(digest));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    return `${CONFIG.PASSWORD_HASH_PREFIX}${hashHex}`;
}

function isHashedPassword(password) {
    return String(password || '').startsWith(CONFIG.PASSWORD_HASH_PREFIX);
}

async function verifyPassword(storedPassword, candidatePassword) {
    const normalizedStored = String(storedPassword || '');
    const normalizedCandidate = String(candidatePassword || '');
    if (!normalizedStored) return false;
    if (isHashedPassword(normalizedStored)) {
        const candidateHash = await hashPassword(normalizedCandidate);
        return normalizedStored === candidateHash;
    }
    return normalizedStored === normalizedCandidate;
}

async function hashPasswordIfNeeded(password) {
    const normalizedPassword = String(password || '');
    if (!normalizedPassword) return '';
    if (isHashedPassword(normalizedPassword)) return normalizedPassword;
    return hashPassword(normalizedPassword);
}
