const toggleContainer = document.getElementById('theme-toggle-container');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

toggleContainer.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
