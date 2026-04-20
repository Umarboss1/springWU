const elements = {
    hamburger: document.getElementById("hamburger"),
    mobileMenu: document.getElementById("mobileMenu"),
    fadeLayer: document.getElementById("fadeLayer"),
    authPopup: document.getElementById("authPopup"),
    closeAuth: document.getElementById("closeAuth"),
    btnSignIn: document.querySelectorAll(".btn-signin"),
    btnSignUp: document.querySelectorAll(".btn-signup"),
    signUpBox: document.getElementById("signUpBox"),
    signInBox: document.getElementById("signInBox"),
    toSignIn: document.getElementById("toSignIn"),
    toSignUp: document.getElementById("toSignUp")
};

function showSignIn() {
    if (elements.signInBox) elements.signInBox.classList.remove("hidden");
    if (elements.signUpBox) elements.signUpBox.classList.add("hidden");
}

function showSignUp() {
    if (elements.signUpBox) elements.signUpBox.classList.remove("hidden");
    if (elements.signInBox) elements.signInBox.classList.add("hidden");
}

function closeEverything() {
    if (elements.authPopup) elements.authPopup.classList.remove("active");
    if (elements.mobileMenu) elements.mobileMenu.classList.remove("active");
    if (elements.fadeLayer) elements.fadeLayer.classList.remove("visible");
    
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.remove('active');
}

if (elements.hamburger) {
    elements.hamburger.addEventListener("click", () => {
        elements.mobileMenu.classList.toggle("active");
        elements.fadeLayer.classList.toggle("visible");
    });
}

const openAuth = (mode) => {
    if (elements.mobileMenu) elements.mobileMenu.classList.remove("active");
    
    if (elements.authPopup) elements.authPopup.classList.add("active");
    if (elements.fadeLayer) elements.fadeLayer.classList.add("visible");
    
    if (mode === 'signin') showSignIn();
    else showSignUp();
};

elements.btnSignIn.forEach(btn => btn.addEventListener("click", () => openAuth('signin')));
elements.btnSignUp.forEach(btn => btn.addEventListener("click", () => openAuth('signup')));

if (elements.fadeLayer) {
    elements.fadeLayer.addEventListener("click", closeEverything);
}

if (elements.closeAuth) {
    elements.closeAuth.addEventListener("click", closeEverything);
}

if (elements.toSignIn) {
    elements.toSignIn.onclick = (e) => { e.preventDefault(); showSignIn(); };
}
if (elements.toSignUp) {
    elements.toSignUp.onclick = (e) => { e.preventDefault(); showSignUp(); };
}

window.toggleSidebar = function() {
    const sidebar = document.querySelector('.sidebar');
    const icon = document.querySelector('.menu-toggle span');
    if (sidebar) {
        sidebar.classList.toggle('active');
        elements.fadeLayer.classList.toggle("visible");
        if (icon) {
            icon.textContent = sidebar.classList.contains('active') ? 'chevron_left' : 'chevron_right';
        }
    }
};