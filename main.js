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

 axios.post("https://crudcrud.com/api/5b5e3be3e52b4361b93faf04d28266e7/appointmentData",obj)
  
  .then((res=>{
    console.log(res);
  }))
  .catch((err=>{
    console.log(err)
  }))

  // localStorage.setItem(obj.email, JSON.stringify(obj))
  showNewUserOnScreen(obj)

}

window.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/5b5e3be3e52b4361b93faf04d28266e7/appointmentData")
  .then((response)=>{
    
    for(i=0;i<response.data.length;i++){
      showNewUserOnScreen(response.data[i])
    }
  })
  .catch((err)=>{
    console.log(err)
  })
  
 
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
  const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}    
                          <button onclick=deleteUser('${user._id}')> Delete User </button>
                          <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user._id}')>Edit User </button>
                       </li>` //esa likha aayga

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
// edit User

function editUserDetails(emailId, name, phonenumber, userId){

  document.getElementById('email').value = emailId;
  document.getElementById('username').value = name;
  document.getElementById('phonenumber').value =phonenumber;
  

  deleteUser(userId)
}

// deleteUser('abc@gmail.com')

function deleteUser(userId){
 
  axios.delete(`https://crudcrud.com/api/5b5e3be3e52b4361b93faf04d28266e7/appointmentData/${userId}`)
  .then((res)=>{
    removeUserFromScreen(userId);
  })
  .catch((err)=>{
    console.log(err)
  })

  // localStorage.removeItem(emailId);
  // removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
  const parentNode = document.getElementById('listOfUsers');
  const childNodeToBeDeleted = document.getElementById(emailId);

  parentNode.removeChild(childNodeToBeDeleted)
}
