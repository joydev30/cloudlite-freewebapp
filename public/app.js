document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    root.innerHTML = `
        <div class="container">
            <h1>Welcome to CloudLite!</h1>
            <p>Your Free-Tier Friendly Web App is Live.</p>
            <div id="status">Loading server status...</div>
        </div>
    `;

    // Fetch status from the backend API
    fetch('/api/status')
        .then(response => response.json())
        .then(data => {
            const statusDiv = document.getElementById('status');
            statusDiv.textContent = `API Status: ${data.message}`;
        })
        .catch(error => {
            const statusDiv = document.getElementById('status');
            statusDiv.textContent = 'Failed to load API status.';
            console.error('Error fetching API status:', error);
        });
});
