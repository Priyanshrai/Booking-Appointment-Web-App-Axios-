function saveToLocalStorage(event){
  event.preventDefault();
  var name=event.target.name.value;
  var email=event.target.email.value;
  localStorage.setItem('name' , name);
  localStorage.setItem('email', email);
}