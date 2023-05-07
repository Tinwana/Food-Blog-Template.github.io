document.addEventListener('DOMContentLoaded',()=> {
    const btnTabs = [...document.querySelectorAll('.footer__item .btn')];
    btnTabs.forEach(btnTab =>{
        btnTab.onclick = ()=>{
            btnTab.classList.toggle('text-bg-dark')
        }
    })
    const navBtn = document.querySelector('.nav__btn');
    const navMenu = document.querySelector('.navbar__menu');
    const closeNav = document.querySelector('.navbar__menu .close__nav')
    console.log(closeNav);
    navBtn.onclick = ()=>{
        navMenu.classList.add('navEf');
        navMenu.classList.remove('navEfBack');
    }
    closeNav.onclick = ()=>{
        navMenu.classList.remove('navEf');
        navMenu.classList.add('navEfBack');
    }
})