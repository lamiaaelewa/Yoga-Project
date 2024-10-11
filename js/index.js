// nav scrolled
window.addEventListener('scroll',function(){
    let navbar = document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})
//toggle navbar
const menuBtn = document.getElementById('menu-btn')
const navLinks = document.getElementById('nav-links')
const menuIcon = document.querySelector('i')

menuBtn.addEventListener('click', (e)=>{
    navLinks.classList.toggle('open')
    const isOpen = navLinks.classList.contains('open')
    menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})



//animation
const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration:1000
}
ScrollReveal().reveal('.left h1',{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.left p',{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal('.main-btn',{
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal('.right img',{
    ...scrollRevealOption,
    origin:'right'
});
ScrollReveal().reveal('.top-heading',{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.heading',{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.para',{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.box',{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal('.right-box li',{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.box1 .boxes',{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.footer-col',{
    ...scrollRevealOption,
    delay:500,
});


