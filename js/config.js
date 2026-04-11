const CONFIG = {
    SUPABASE_URL: "https://gmrytacdqydzdwhwcgqo.supabase.co",
    SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtcnl0YWNkcXlkemR3aHdjZ3FvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTEwNTAzNSwiZXhwIjoyMDkwNjgxMDM1fQ._LkZWnz5tC8ldDoLw6f3gqWTiIC8vOUQQO24SQAHf7E",
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
