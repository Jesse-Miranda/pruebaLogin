const loginform = document.querySelector('.loginform');

loginform.addEventListener ('submit', (e) =>{
  const email = document.querySelector('.email').value
  const password = document.querySelector('.password').value

  const Users = JSON.parse(localStorage.getItem('users')) || [];
  const userAccept = Users.find(user => user.email === email && user.password === password);
  if(!userAccept){
    return alert('Usuario y/o contraseña incorrectas');
  }
  alert('Welcome');
  localStorage.setItem('user_login', JSON.stringify(userAccept));
  window.location.href = '../usuario.html';
  
})