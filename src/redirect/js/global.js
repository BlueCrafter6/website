const doc = document;
const body = doc.body;

//////////////////////////////////////////////////

function lightMode() {
    body.classList.remove('m-dark')
    body.classList.add('m-light')
    localStorage.setItem('mode', 'light')
}

function darkMode() {
body.classList.add('m-dark')
body.classList.remove('m-light')
localStorage.setItem('mode', 'dark')
}

const mode = localStorage.getItem('mode')

    console.log(mode)
    if (mode == 'dark') darkMode()
    else lightMode()