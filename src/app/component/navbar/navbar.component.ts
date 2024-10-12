import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public counter?:number;
  // public counter:number = 0;
  public currentUser:any = localStorage.getItem('currentUser')
  constructor(public router:Router, public counterService:CounterService){
    this.counterService.counter.subscribe(val=>{
      this.counter = val
    })
  }

  logout(){
    localStorage.removeItem('currentUser')
    this.router.navigate(['login'])
  }
}
