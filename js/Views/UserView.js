class UserView{
   constructor(model)
   {
      this.user = model.user;
      this.repos = model.ModelRepos.repositorios;
   }

   get userDiv (){
      let div = document.createElement('div');

      div.setAttribute('id','userDiv');
      let encontrado = document.createElement('h2');
      encontrado.textContent = `Aqui está ${this.user}`;
      div.append(encontrado);
      console.log(encontrado)
      return div;
   }
   static showRepositorio(nome, linguagem) {
      let table = document.getElementById("tableReults");
      
      let linha = document.createElement("tr"); 
      linha.classList.add("linhaClasse");

      linha.appendChild(UsuarioView.createTd(nome));
      linha.appendChild(UsuarioView.createTd(linguagem));


      table.appendChild(linha);

  }

  static criaTd(dado){
      var td = document.createElement("td");
      if(dado == null ){
          td.textContent = `Não informado`;
      }else{
          td.textContent = dado;
      }
      return td;
  }

}