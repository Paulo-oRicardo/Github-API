class Model{

   constructor(){
      this.user = "";
      this.userName = {};
      this.repos = {};
   }

   searchUSer()
   {
     this.user = busca.value;

     let request = new XMLHttpRequest();
     request.open("GET",`https://api.github.com/users/${this.user}`,false);
     request.addEventListener('load',() =>{
        let response = JSON.parse(requestText);
         this.userName = response;
     })
     this.repos = new ModelRepos(this.user);
   }
}

class ModelRepos{
   constructor(user){
   this.repositorios = [];
   this.addRepos(user);
}

addRepos(user){
   let request = new XMLHttpRequest();
   request.open("GET", `https://api.github.com/users/${user}/repos`,false);
   request.addEventListener('load', ()=>{
      let response = JSON.parse(request.responseText);
      this.repositorios = response;
   });
   request.send();
}
}