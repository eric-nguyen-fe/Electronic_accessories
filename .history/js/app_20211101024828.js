document.querySelectorAll('.dropdown > a').forEach(e =>{
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e =>{
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector
('#header-wrapper').classList.remove('active'))