function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const phonenumber = event.target.phonenumber.value;
  
  const obj = {
      name,
      email,
      phonenumber
  }
  axios.post("https://crudcrud.com/api/bcce28aa03fa4f01a6ef9cf071f6f590/appointmentData",obj)
  .then((res=>{
    console.log(res);
  }))
  .catch((err=>{
    console.log(err)
  }))

  //localStorage.setItem(obj.email, JSON.stringify(obj))
  //showNewUserOnScreen(obj)

}

window.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/bcce28aa03fa4f01a6ef9cf071f6f590/appointmentData")
  .then((response=>{
    console.log(response);
    for(i=0;i<response.data.length;i++){
      showNewUserOnScreen(response.data[i])
    }
  }))
  .catch((err=>{
    console.log(err)
  }))
  
 
  // const localStorageObj = localStorage;
  // const localstoragekeys  = Object.keys(localStorageObj)
  
  // for(var i =0; i< localstoragekeys.length; i++){  
  //     const key = localstoragekeys[i] ;
  //     const userDetailsString = localStorageObj[key];
  //     const userDetailsObj = JSON.parse(userDetailsString);
  //     showNewUserOnScreen(userDetailsObj)
  // }
})

function showNewUserOnScreen(user){
const parentNode = document.getElementById('listOfUsers');
  const childHTML = `<li id=${user.email}>  
                          ${user.name} - ${user.email}    
                          <button onclick=deleteUser('${user.email}')> Delete User </button>
                          <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                       </li>` //esa likha aayga

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
// edit User

function editUserDetails(emailId, name, phonenumber){

  document.getElementById('email').value = emailId;
  document.getElementById('username').value = name;
  document.getElementById('phonenumber').value =phonenumber;

  deleteUser(emailId)
}

// deleteUser('abc@gmail.com')

function deleteUser(emailId){
  
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
  const parentNode = document.getElementById('listOfUsers');
  const childNodeToBeDeleted = document.getElementById(emailId);

  parentNode.removeChild(childNodeToBeDeleted)
}
