import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatExpansionModule,CommonModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  private _snackbar = inject(MatSnackBar)
    readonly panelOpenState = signal(false)
    public action:string = "close"
    public date = new Date();
    public amount:number = 200

    public mess:string = "Congratulations, you made it here";
    openSnackBar(){
      this._snackbar.open(this.mess, this.action)
    }
}
