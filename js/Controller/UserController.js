class UserController{
   static currentUser(){
      let model = new Model();
      model.searchUSer();

      let view = new UserView(model);
      view.userDiv();
   }
}