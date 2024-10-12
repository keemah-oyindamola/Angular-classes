import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {

  constructor() { }

  public allUser(){
    return["Dan", "Sam", "Vic"]
  }
}
