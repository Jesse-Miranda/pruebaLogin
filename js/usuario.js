const user = JSON.parse(localStorage.getItem('user_login')) || false
if (!user){
    window.location.href = 'index.html'
}

const Logout = document.querySelector('.Logout')

Logout.addEventListener('click', ()=> {
    alert('Hasta Pronto')
    localStorage.removeItem('user_login')
    window.location.href = 'index.html'
})