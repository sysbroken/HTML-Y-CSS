const siderbar = document.querySelector('.siderbar');
const navItems = document.querySelectorAll('nav .nav-items');
const toggle = document.querySelector('.siderbar .toggle');

toggle.addEventListener('click', () =>{
    if(siderbar.className === 'siderbar')
        siderbar.classList.add('open');
    else
    siderbar.classList.remove('open');
});

navItems.forEach(navItem =>{
    navItem.addEventListener('click', () => {
        navItems.forEach(navItem =>{
            navItem.classList.remove('active');
        });
        navItem.classList.add('active');
    });
});