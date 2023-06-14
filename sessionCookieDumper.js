prompt("Copy the following session data:", JSON.stringify({
    cookies: document.cookie.split(';').map(item => {
        const parts = item.trim().split('=');
        if (parts.length > 2) {
            const key = parts[0];
            parts.splice(0, 1);
            const value = parts.join();
            return [key, value];
        }
        else {
            return parts;
        }
    }),
    storage: Object.keys(localStorage).map((key) => [key, localStorage[key]]),
    platform: window.location.hostname
}));
