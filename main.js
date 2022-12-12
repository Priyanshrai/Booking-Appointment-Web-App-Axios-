function saveToLocalStorage(event){
  event.preventDefault();
  var myObj={
  name:event.target.name.value,
  email:event.target.email.value
  }

  localStorage.setItem('Obj' , JSON.stringify(myObj));

}
