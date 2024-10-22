import { CanActivateFn, Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const token= localStorage.getItem('tgt');
  //console.log("TOKEN:",token);
  // console.log("TOKEN:",token);
  console.log(route)     // tells/shows which component you are in
  console.log(state)     // tells/shows which route(link) is  used
  if(token){
    //console.log(token);
    return true;
  }
  else{
    router.navigate(['UserLogin']);
    return false;
  }

  // IF THE USER HAS TOKEN ONLY I WILL ACCEPT AND ALLOW INSIDE ELSE REDIRECT TO USERLOGIN 
  
};
