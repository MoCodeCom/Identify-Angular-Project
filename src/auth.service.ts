

export class AuthService{
  loggedIn = false;
isAuthenticated(){
  return this.loggedIn;
}

isAuthenticateds(){
  /*const promis = new Promise((rej,res)=>{
    setTimeout(()=>{
      res(this.loggedIn)
    },800);
  });*/
  const p = new Promise((reject, resolve)=>{
    setTimeout(()=>{
      resolve(true);
    },1000);
  });
  //return promis;
  return p;
}

login(){
  this.loggedIn = true;
  }

logout(){
  this.loggedIn = false;
  }

}
