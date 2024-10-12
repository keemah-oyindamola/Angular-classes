import { Component } from '@angular/core';
import { ButtonComponent } from '../component/button/button.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { SwitchComponent } from '../switch/switch.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, NavbarComponent, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public http: HttpClient, public route: Router) { }

  public name = "Keemah"
  public course = "Angular"

  // data types with variable,
  public first_name: String = '45'
  public age: number = 12;
  public has_paid: boolean = true;
  public info: Array<String> = ["Dan", "Sam", "Liam"];
  public arrObj: Array<object> = [{ name: "Sami" }, { name: "Rmi" }]
  public obj: object = { paid: true };
  public arrNumber: Array<number> = [2, 4, 6]
  public idk: any = null

  user = {
    email: '',
    password: ''
  };
  message: string = '';
  token: any = ""

  onSubmit() {
    this.http.post('http://localhost/phpclass/anglogin.php', this.user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .subscribe(
        (response: any) => {
          console.log(response);
          if (response && response.success) {  // Check if login was successful
            this.message = response.message;
            this.token = response.token
            localStorage.setItem("token", this.token)
            this.route.navigate(['dashboard'])
          } else {
            this.message = 'Unexpected response from server.';
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
