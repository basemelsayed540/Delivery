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
