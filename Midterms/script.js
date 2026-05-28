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


const contentData = {
    'abt-btn': '<p>My name is Reige C. Payad. I am a 1st year college student studying IT. I graduated from University of the East Caloocan, in the course of ICT. My hobies include drawing, watching movies and series, building model kits, online games, 3d modelling, and music.</p>',
    
    'skl-btn': `
        <div class="skills-wrapper">
            <h3>My Skills</h3>
            
            <div class="skill-item">
                <div class="skill-info"><span>HTML5 / CSS3</span><span>90%</span></div>
                <div class="progress-track"><div class="progress-bar" data-width="90%"></div></div>
            </div>

            <div class="skill-item">
                <div class="skill-info"><span>C++</span><span>73%</span></div>
                <div class="progress-track"><div class="progress-bar" data-width="73%"></div></div>
            </div>

            <div class="skill-item">
                <div class="skill-info"><span>3D Modelling</span><span>60%</span></div>
                <div class="progress-track"><div class="progress-bar" data-width="60%"></div></div>
            </div>

            <div class="skill-item">
                <div class="skill-info"><span>Digital Art</span><span>71%</span></div>
                <div class="progress-track"><div class="progress-bar" data-width="71%"></div></div>
            </div>
        </div>
    `,
    
   
   'prj-btn': `
        <div class="plain-projects">
            <h3>My Projects</h3>
            <img src="C:\\Users\\Reige Payad\\Pictures\\Screenshots\\Screenshot 2026-03-07 001034.png" alt="Project 1" class="raw-project-img">
            <img src="C:\\Users\\Reige Payad\\Pictures\\Screenshots\\Screenshot 2026-05-28 183709.png" alt="Screenshot 2" class="raw-project-img">
            <img src="C:\\Users\\Reige Payad\\Pictures\\Screenshots\\Screenshot 2026-05-05 193438.png" alt="Screenshot 3" class="raw-project-img">
            <img src="C:\\Users\\Reige Payad\\Pictures\\Screenshots\\Screenshot 2026-05-19 114115.png" alt="Screenshot 4" class="raw-project-img">
            <img src="C:\\Users\\Reige Payad\\Pictures\\Screenshots\\Screenshot 2026-02-24 111519.png" alt="Screenshot 5" class="raw-project-img">
        </div>
    `
};


const infoBoxContainer = document.getElementById('info');


const navButtons = document.querySelectorAll('.btn-style');


navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        
        
        if (buttonId === 'cnt-btn') {
            if (typeof generateContactForm === 'function') {
                generateContactForm();
            }
        } else if (contentData[buttonId]) {
           
            infoBoxContainer.innerHTML = contentData[buttonId];
            
        
            if (buttonId === 'skl-btn') {
                setTimeout(() => {
                    const progressBars = infoBoxContainer.querySelectorAll('.progress-bar');
                    progressBars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-width');
                        bar.style.width = targetWidth;
                    });
                }, 10);
            }
        }
    });
});


function generateContactForm() {
    infoBoxContainer.innerHTML = `
        <div class="form-wrapper">
            <h3>Contact Me</h3>
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

    
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
       
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const messageInput = document.getElementById('form-message');
        
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        
        // Reset old error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        let isValid = true;
        
        // Name Field Validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name field is required.';
            isValid = false;
        }
        
        // Email Field Validation (Regex matches standard email formats)
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
        
        // Display Success Screen if validation checks pass
        if (isValid) {
            infoBoxContainer.innerHTML = `
                <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
                    <h3 style="color: #00ff66; margin-bottom: 10px;">Message Dispatched!</h3>
                    <p>Thank you, ${nameInput.value.trim()}. Your validation processed successfully.</p>
                </div>
            `;
        }
    });
}
