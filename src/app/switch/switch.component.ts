import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AllUserService } from '../service/all-user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  constructor(public allUser: AllUserService, public http: HttpClient, public route: Router) { }
  public date = new Date().getDay();
  public alluser = this.allUser.allUser()
  public userinfo: any;
  public productss: any;
  public productItems: any = []

  user = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };
  message: string = '';


  ngOnInit() {
    console.log(this.date);
    console.log(this.allUser.allUser());
    this.http.get('https://dummyjson.com/users').subscribe((info: any) => {
      console.log(info);
      this.userinfo = info
    })

    this.http.get('https://dummyjson.com/products').subscribe((productInfo: any) => {
      console.log(productInfo);
      this.productss = productInfo.products
      this.productss.forEach((item: any) => {
        this.productItems.push(item)
      })
    })
  }

  onSubmit() {
    this.http.post('http://localhost/phpclass/angsignup.php', this.user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .subscribe(
        (response: any) => {
          console.log(response);
          if (response && response.success) {  // Check if login was successful
            this.message = response.message;
            this.route.navigate(['home'])
          } else {
            this.message = 'Unexpected response from server.';
          }

          // this.message = response.message;
        },
        (error) => {
          console.log(error);
          this.message = 'Error occurred during registration.';
        }
      );
  }

}
