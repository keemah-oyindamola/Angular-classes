import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(public http:HttpClient, public route:Router){}

  user = {
    email: '',
    password: ''
  };
  message: string = '';

  onSubmit(){
    this.http.post('http://localhost/phpclass/admin/adminlogin.php', this.user,{
      headers :{
        "Content-Type" :"application/json"
      }
    })
    .subscribe(
      (response: any)=>{
        console.log(response);
        if (response && response.success) {  // Check if login was successful
          this.message = response.message;
          this.route.navigate(['admindashbd']);
          // this.token = response.token
          // localStorage.setItem("token", this.token)
        } else {
          this.message = 'Invalid email or password';
        }
        // this.message = response.message;
    },
    (error) => {
      console.log(error);
      
      this.message = 'Error occurred during login.';
    }
    )
    // (error) => {
    //   this.message = 'An error occurred during login.';
    // })
  }
}
