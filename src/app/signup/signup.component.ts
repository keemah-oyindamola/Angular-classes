import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public router:Router){}

  public userInfo: Array<{ username: string, email: string, course: string, password: string }> = JSON.parse(localStorage.getItem('userInfo')!) || []
  public ind:number = 0
  public displayForm:boolean = false;


  
public newUser = {
  username: "",
  email: "",
  course: "",
  password: ""
};

public newUserEdit = {
  username: "",
  email: "",
  course: "",
  password: ""
};

addUser() {
  // const newuser = ({
  //   username: "",
  //   email: "",
  //   course: "",
  //   password: ""
  // })
  // this.userInfo.push(newuser)
  // console.log(this.userInfo);

  if (this.newUser.username && this.newUser.email && this.newUser.course && this.newUser.password) {
    this.userInfo.push(this.newUser ); // Add new user to the array
    // Clear the input fields after adding
    this.newUser = {
      username: "",
      email: "",
      course: "",
      password: ""
    };
    console.log(this.userInfo);
    localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
    this.router.navigate(['login'])
  } else {
    console.log("Please fill in all fields.");
  }

}
editUser(i:number){
  console.log(i);
  this.ind = i
  console.log(i);
  this.displayForm = true;
  console.log(this.userInfo[i]);
  this.newUserEdit = this.userInfo[i]
}

editUserInfo(){
  this.userInfo[this.ind] = this.newUserEdit
  console.log(this.userInfo);
  this.displayForm = false;
  this.newUserEdit = {
    username:"",
    email:"",
    course:"",
    password:"",
  }
  localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
  
}

delUser(i:number){
  console.log(i);
  this.ind = i;
  // console.log(this.userInfo[i]);
  // const del =this.userInfo[i] 
  this.userInfo.splice(i, 1);
  localStorage.setItem("userInfo", JSON.stringify(this.userInfo))

}
}
