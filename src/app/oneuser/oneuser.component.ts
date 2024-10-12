import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oneuser',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './oneuser.component.html',
  styleUrl: './oneuser.component.css'
})
export class OneuserComponent {
  constructor(public act:ActivatedRoute, public http:HttpClient){}
  public id:number = 0
  public oneuser:any;

  ngOnInit(){
 this.id = this.act.snapshot.params['id']
 console.log(this.id);
 this.http.get(`https://dummyjson.com/users/${this.id}`).subscribe((oneinfo:any)=>{
  console.log(oneinfo);
  this.oneuser = oneinfo
  
 })
    
  }
}
