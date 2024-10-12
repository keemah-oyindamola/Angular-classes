import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './component/button/button.component';
import { userGuard } from './guards/user.guard';
import { TodolistComponent } from './todolist/todolist.component';
import { SwitchComponent } from './switch/switch.component';
import { OneuserComponent } from './oneuser/oneuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashbdComponent } from './admin/admindashbd/admindashbd.component';
import { TestingComponent } from './materials/testing/testing.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo:"app"},
    {path:"todo", component:TodoComponent},
    {path:"navbar", component:NavbarComponent},
    {path:"home", component:HomeComponent},
    {path:"signup", component:SignupComponent},
    {path:"login", component:LoginComponent},
    {path:"button", component:ButtonComponent, canActivate:[userGuard]},
    {path:"todolist", component:TodolistComponent},
    {path:"switch", component:SwitchComponent},
    {path:"oneuser/:id", component:OneuserComponent },
    {path:"dashboard", component:DashboardComponent},
    {path:"adminlogin", component:AdminloginComponent},
    {path:"admindashbd", component:AdmindashbdComponent},
    {path:"testing", component:TestingComponent}
];
