import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CutomerrorComponent } from './cutomerror/cutomerror.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


const routes: Routes = [
  {
    path:'', redirectTo:'Login',pathMatch:'full'
  },
  {
    path:'studentLink', component:StudentComponent
  },
  {
    path:'studentdetailsLink', component: StudentdetailsComponent
  },
  {
    path:'Login', component:LoginComponent
  },
  {
    path:'**', component:CutomerrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
