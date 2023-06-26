const signupform = document.querySelector('.signupform')

signupform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('.name').value
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const userregistrado = Users.find(user => user.email === email)
    if (userregistrado){
        return alert('Email ya en uso')
    }
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert ('registro exitoso')
})