const URLX = 'http://127.0.0.1:5500/votala/frontend/index.html'

const URL = 'index.html'
const chamar = document.querySelector('#newhome')

function openNewHome(URL){
    const win = window.open(URL)
    win.focus()
}

chamar.addEventListener('click', () => {
    openNewHome(URL)
})
