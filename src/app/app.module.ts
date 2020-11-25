import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingExComponent } from './comppnent/data-binding-ex/data-binding-ex.component';
import { CounterTestComponent } from './counter/counter-test/counter-test.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { LoginComponent } from './login/login.component';
import { CutomerrorComponent } from './cutomerror/cutomerror.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingExComponent,
    CounterTestComponent,
    StudentComponent,
    StudentdetailsComponent,
    LoginComponent,
    CutomerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
