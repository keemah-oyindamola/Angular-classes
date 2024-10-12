import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  public name: string = ""
  public description: string = ""
  public todoArray: any = JSON.parse(localStorage.getItem('todolist')!) || []
  public todoObj: any = {}
  public displayEdit: any = null;
  public edit_todo = { name: "", description: "" }

  ngOnInit(){
    console.log(this.todoArray);
    
  }
  add_todo() {
    this.todoObj = {
      name: this.name,
      description: this.description,
      timestamp: new Date().toLocaleString()
    }
    // const timeStamp = new Date().toLocaleString;
    this.todoArray.push(this.todoObj,);
    localStorage.setItem("todolist", JSON.stringify(this.todoArray));
    console.log(this.todoArray);

    this.name = ""
    this.description = ""
  }

  editTodo(i: number) {
    this.displayEdit = i
    console.log(this.todoArray[i]);
    this.edit_todo = this.todoArray[i]

  }

  update_todo() {
    if (this.displayEdit !== null) {
      this.todoArray[this.displayEdit] = this.edit_todo
      console.log(this.todoArray);
    }
    this.edit_todo = { name: "", description: "" }
    this.displayEdit == null

    localStorage.setItem("todolist", JSON.stringify(this.todoArray));

  }

  delTodo(i: number) {
    this.todoArray.splice(i, 1);
    localStorage.setItem("todolist", JSON.stringify(this.todoArray));
  }

  cancel_todo() {
    this.displayEdit = null
    this.edit_todo = { name: "", description: "" };
  }
}

