import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from './components/login/login.component';
import { DataTableComponent } from './components/data-table/data-table.component';



const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  
  { path: "login",component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: 'datatable', component: DataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
