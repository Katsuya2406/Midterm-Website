const themeToggleBtn = document.getElementById('theme-toggle');
    
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch back to default Dark styling
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        // Apply the inverted Light styling
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Dark Mode';
    }
});