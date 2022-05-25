const doc = document;
const body = doc.body;

//////////////////////////////////////////////////

const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')

function lightMode() {
    body.classList.remove('m-dark')
    body.classList.add('m-light')
    localStorage.setItem('mode', 'light')
moon.style.display = 'block'
sun.style.display = 'none'
}

function darkMode() {
body.classList.add('m-dark')
body.classList.remove('m-light')
localStorage.setItem('mode', 'dark')
moon.style.display = 'none'
sun.style.display = 'block'
}

const mode = localStorage.getItem('mode')

    console.log(mode)
    if (mode == 'dark') darkMode()
    else lightMode()

//////////////////////////////////////////////////

