
let busca = document.getElementById("user");
// let controller = new Controller;
let button = document.getElementById('button');
button.addEventListener("click", (e)=>{
  e.preventDefault();
  UserController.currentUser();
})

