import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public route:Router){}

  // public email: string = '';
  // public password: string = '';

  public User:any = {}
  public users:any[]= JSON.parse(localStorage.getItem("userInfo")!)
  
  
  login(){
    console.log(this.users);
    let founduser = this.users.find(u => u.email== this.User.email && u.password == this.User.password)
    if (founduser) {
      console.log(founduser);
      localStorage.setItem('currentUser', JSON.stringify(founduser))
      this.route.navigate(['button'])
      alert('success') 
    }else{
      alert('not successful')
    }
    // const userInfo = JSON.parse(localStorage.getItem('userInfo')!);

    // if (userInfo && userInfo.length > 0) {
    //   const user = userInfo.find((user: any) => user.email === this.email && user.password === this.password);
    //   if (user) {
    //     // Save the login state
    //     localStorage.setItem('loggedInUser', JSON.stringify(user));
    //     console.log("Login successful");
    //     alert("Login successful")
        
    //     this.route.navigate(['button']); // Redirect to the home page or any other page
    //   } else {
    //     alert("Invalid email or password")
    //     console.log('Invalid email or password');
    //   }
    // }
  }
}
