document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');

    // Load theme preference on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }

    // Add click listener only if the button exists
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark');

            if (document.body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});
