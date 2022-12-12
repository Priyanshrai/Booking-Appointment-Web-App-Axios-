function saveToLocalStorage(event){
  event.preventDefault();
  var myObj={
  name:event.target.name.value,
  email:event.target.email.value
  }

  localStorage.setItem(myObj.email , JSON.stringify(myObj));
  obj1=JSON.parse(localStorage.getItem(myObj.email));
  //Add new li
var ul = document.getElementById("users");
var li = document.createElement("li");
// create new li element
var li=document.createElement('li');
//Add Class
li.className='item';
li.appendChild(document.createTextNode("Name = " + obj1.name + " Email = " + obj1.email));
console.log(li)
ul.appendChild(li);
}

 