// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
    
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Dark Mode';
    }
});

// --- Dynamic Content Box Logic ---

// 1. Store your text content in an object using the button IDs as keys
const contentData = {
    'abt-btn': 'Hello! I am a passionate developer who loves creating interactive web experiences. Welcome to my portfolio!',
    'skl-btn': 'My Skills include: HTML5, CSS3, JavaScript, Responsive Web Design, UI Layouts, and Frontend Optimization.',
    'prj-btn': 'Projects coming soon! Currently building an interactive portfolio and exploring creative frontend layout designs.',
    'cnt-btn': 'Let\'s connect! You can reach me via email at yourname@example.com or find me on GitHub and LinkedIn.'
};

// 2. Select the info box element
const infoBox = document.querySelector('#info p');

// 3. Select all your section navigation buttons
const navButtons = document.querySelectorAll('.btn-style');

// 4. Loop through each button and attach a click event listener
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the ID of the clicked button
        const buttonId = button.id;
        
        // Update the text content of the paragraph inside #info using the object map
        infoBox.textContent = contentData[buttonId];
    });
});
