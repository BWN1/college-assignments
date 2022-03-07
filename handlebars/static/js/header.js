window.onload = function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerMenuClose = document.querySelector('.hamburger-menu-close');
    const mobileMenuNav = document.querySelector('.mobile-menu-nav');
    const mobileMenuNavShade = document.querySelector('.mobile-menu-nav-shade');
    
    hamburgerMenu.addEventListener('click', () => {
        mobileMenuNav.style.left = "0px";
        mobileMenuNavShade.style.width = "100vw"
        mobileMenuNavShade.style.opacity = "0.5";
        document.body.style.overflow = "hidden";
    });
    
    hamburgerMenuClose.addEventListener('click', closeMenu)
    mobileMenuNavShade.addEventListener('click', closeMenu);
    
    function closeMenu() {
        mobileMenuNav.style.left = "-250px";
        mobileMenuNavShade.style.opacity = "0";
        setTimeout(() => {
            mobileMenuNavShade.style.width = "0"
        }, 200)
        document.body.style.overflow = "auto";
    }
}