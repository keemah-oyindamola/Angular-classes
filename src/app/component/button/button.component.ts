import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  public loggedInUser: any = null;
  constructor(private router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')!);
    if (!this.loggedInUser) {
      this.router.navigate(['/login']);
    }
  }
}
