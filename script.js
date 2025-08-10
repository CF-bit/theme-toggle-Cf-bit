document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');

    // Load theme preference on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }

    if (toggleButton) {
        // Toggle on click
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark');

            if (document.body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Also allow toggling via keyboard (Enter or Space)
        toggleButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleButton.click();
            }
        });
    }
});
