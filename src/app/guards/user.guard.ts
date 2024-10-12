import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {

  const user = localStorage.getItem('currentUser')
  const routes = inject(Router)
  if (user) {
    return true;
  }
  else{
    alert("Please log in")
    routes.navigate(['login'])
    return false;
  }
 
};
