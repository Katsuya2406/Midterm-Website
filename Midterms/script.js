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

// 1. Store your basic text content
const contentData = {
    'abt-btn': '<p>My name is Reige C. Payad. I am a 1st year college student studying IT.</p>',
    'skl-btn': '<p>My Skills include: HTML5, CSS3, C++, 3D Modelling, Digital Art.</p>',
    'prj-btn': '<p>Projects coming soon! Currently building an interactive portfolio and exploring creative frontend layout designs.</p>'
};

// 2. Select the parent info container box (not just the paragraph)
const infoBoxContainer = document.getElementById('info');

// 3. Select all your section navigation buttons
const navButtons = document.querySelectorAll('.btn-style');

// 4. Handle clicks for all navigation buttons
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        
        // If the contact button is clicked, generate the validation form
        if (buttonId === 'cnt-btn') {
            generateContactForm();
        } else {
            // Otherwise, load regular HTML text snippet
            infoBoxContainer.innerHTML = contentData[buttonId];
        }
    });
});

// 5. Function to inject and handle the form
function generateContactForm() {
    infoBoxContainer.innerHTML = `
        <div class="form-wrapper">
            <h3 style="margin-top: 0; margin-bottom: 10px; font-size: 1.3rem;">Contact Me</h3>
            <form id="contact-form">
                <div class="input-group">
                    <input type="text" id="form-name" placeholder="Your Name">
                    <span class="error-text" id="name-error"></span>
                </div>
                
                <div class="input-group">
                    <input type="text" id="form-email" placeholder="Your Email">
                    <span class="error-text" id="email-error"></span>
                </div>
                
                <div class="input-group">
                    <textarea id="form-message" placeholder="Your Message" rows="3"></textarea>
                    <span class="error-text" id="message-error"></span>
                </div>
                
                <button type="submit" class="form-submit-btn">Send Message</button>
            </form>
        </div>
    `;

    // Immediately attach submission event logic to the newly built form
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page refresh
        
        // Target inputs and errors
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const messageInput = document.getElementById('form-message');
        
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        
        // Reset old errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        let isValid = true;
        
        // Name Field Validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name field is required.';
            isValid = false;
        }
        
        // Email Field Validation (Regex rule matches standard email setups)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email field is required.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please provide a valid email structure.';
            isValid = false;
        }
        
        // Message Field Validation
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message field cannot be empty.';
            isValid = false;
        }
        
        // Clear box on successful compilation
        if (isValid) {
            infoBoxContainer.innerHTML = `
                <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
                    <h3 style="color: #00ff66;">Message Dispatched!</h3>
                    <p>Thank you, ${nameInput.value.trim()}. Your submission validation processed successfully.</p>
                </div>
            `;
        }
    });
}
