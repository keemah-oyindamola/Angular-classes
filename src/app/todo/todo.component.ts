import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  public counter?:number;
  // public counter:number = 0;
  constructor(public router:Router, public counterService: CounterService){
    this.counterService.counter.subscribe(val=>{
      this.counter = val
    })
  }

//this .router.navigate(['login])

  public todo: string = "Sleep at 10pm"
  public newTodo: string = ""
  public allTodo: Array<string> = []
  public userInfo: Array<{ username: string, email: string, course: string, location: string }> = JSON.parse(localStorage.getItem('userInfo')!) || []
  public ind:number = 0
  public displayForm:boolean = false;

// public newUser = {
//   username: "",
//   email: "",
//   course: "",
//   location: ""
// };

// public newUserEdit = {
//   username: "",
//   email: "",
//   course: "",
//   location: ""
// };

  writeSomething() {
    console.log(this.newTodo);

  }

  addTodo() {
    this.allTodo.push(this.newTodo)
    console.log(this.allTodo);

  }

  addUp(){
    this.counterService.increase()
  }

  remove(){
    this.counterService.decrease()
  }
  // addUser() {
  //   // const newuser = ({
  //   //   username: "",
  //   //   email: "",
  //   //   course: "",
  //   //   location: ""
  //   // })
  //   // this.userInfo.push(newuser)
  //   // console.log(this.userInfo);

  //   if (this.newUser.username && this.newUser.email && this.newUser.course && this.newUser.location) {
  //     this.userInfo.push(this.newUser ); // Add new user to the array
  //     // Clear the input fields after adding
  //     this.newUser = {
  //       username: "",
  //       email: "",
  //       course: "",
  //       location: ""
  //     };
  //     console.log(this.userInfo);
  //     localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
  //   } else {
  //     console.log("Please fill in all fields.");
  //   }

  // }
  // editUser(i:number){
  //   console.log(i);
  //   this.ind = i
  //   console.log(i);

  //   this.displayForm = true;
  //   console.log(this.userInfo[i]);
  //   this.newUserEdit = this.userInfo[i]
  // }

  // editUserInfo(){
  //   this.userInfo[this.ind] = this.newUserEdit
  //   console.log(this.userInfo);
  //   this.displayForm = false;
  //   this.newUserEdit = {
  //     username:"",
  //     email:"",
  //     course:"",
  //     location:"",
  //   }
  //   localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
    
  // }

  // delUser(i:number){
  //   console.log(i);
  //   this.ind = i;
  //   // console.log(this.userInfo[i]);
  //   // const del =this.userInfo[i] 
  //   this.userInfo.splice(i, 1);
  //   localStorage.setItem("userInfo", JSON.stringify(this.userInfo))

  // }
}
