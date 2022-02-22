// ##############################       CHANGE BACKGROUND       ##############################
const arrowLeft = document.querySelectorAll('.left-arrow');
const arrowRight = document.querySelectorAll('.right-arrow');
let imgCount = 1;


for (let i = 0; i < arrowLeft.length; i++) {
    arrowLeft[i].addEventListener('click', () => {
        changeBackground('left');
    });
}

for (let i = 0; i < arrowRight.length; i++) {
    arrowRight[i].addEventListener('click', () => {
        changeBackground('right');
    });
}


function changeBackground(direction) {
    if (direction == 'left') {
        imgCount--;

        if (imgCount < 1)
            imgCount = 3;
        else if (imgCount > 3)
            imgCount = 1;

        document.getElementById('header').style.background = `url("/images/desktop-image-hero-${imgCount}.jpg") no-repeat center center/cover`;
    }

    else if (direction == 'right') {
        imgCount++;

        if (imgCount < 1)
            imgCount = 3;
        else if (imgCount > 3)
            imgCount = 1;

        document.getElementById('header').style.background = `url("/images/desktop-image-hero-${imgCount}.jpg") no-repeat center center/cover`;
    }
}


// ##############################       HAMBURGER MENU       ##############################
const hamburgerMenu = document.querySelector('.functional-hanburger');
const navbar = document.querySelector('.navbar');
const navbarButtons = document.querySelectorAll('.nav-bar-btn');

hamburgerMenu.addEventListener('click', openMenu);

function openMenu() {
    if (!(hamburgerMenu.classList.contains('can-be-closed'))) {  // if the menu can not be closed, then open it
        hamburgerMenu.classList.add('can-be-closed');  // make the menu closeable - if this class is not added the close menu function doesn't activate
        hamburgerMenu.src = "/images/icon-close.svg";
    
        navbar.style.background = 'white';
        navbar.style.padding  = '50px 0px';
        document.querySelector('.logo').style.display = 'none';
    
        for (let i = 0; i < navbarButtons.length; i++) {
            navbarButtons[i].style.display = 'block';
            navbarButtons[i].style.fontWeight  = '600';
        }
    }
    else if (hamburgerMenu.classList.contains('can-be-closed')) {
        console.log('close');
        if (hamburgerMenu.classList.contains('can-be-closed')) {
            hamburgerMenu.src = "/images/icon-hamburger.svg";
    
            navbar.style.background = 'transparent';
            navbar.style.padding  = '50px 20px';
            document.querySelector('.logo').style.display = 'block';
        
            for (let i = 0; i < navbarButtons.length; i++) {
                navbarButtons[i].style.display = 'none';
                navbarButtons[i].style.fontWeight  = '600';
            }
        } 

        hamburgerMenu.classList.remove('can-be-closed'); // can not be closed
    }
}