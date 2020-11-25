import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService]
})
export class AppComponent {
  counter = 0;
  classToApply = 'positive';
  students: any[];

  constructor(private _studentService: StudentService) {
    this.students = this._studentService.getStudents();
}
  updateCounter(operation) {
    operation === 'INC' ? this.counter++ : this.counter--;
    this.classToApply = this.counter >= 0 ? 'positive' : 'negative';
  }


  //  constructor(private router : Router){}
  //   GetStudent()
  //   {
  //       this.router.navigate(['/studentLink']);
  //   }
  //   GetStudentDetails()
  //   {
  //       this.router.navigate(['/studentdetailsLink']);
  //   }
}
