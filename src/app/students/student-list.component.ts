import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// import fade in animation
import { fadeInAnimation } from '../_animations/index';

import { StudentsService, StudentSubService } from '../_services/index';


@Component({
  moduleId: module.id.toString(),
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})

export class StudentListComponent implements OnInit, OnDestroy {
  saveSuccess: boolean;
  students: any = [];
  subscription: Subscription;
  placements: string = 'top';
  title: string = 'Are you sure?';
  message: string = 'Are you really <b>sure</b> you want to do this?';
  confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
  cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;
  stuClass: string;

  constructor(private studentService: StudentsService, private studentSubService: StudentSubService) { }

  deleteStudent(student){
    this.studentService.deleteStudent(student).subscribe(result => {
      this.loadStudents();
    });
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.loadStudents();
    // reload products when updated
        this.subscription = this.studentSubService.on('students-updated').subscribe(() => this.loadStudents());
  }

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    private loadStudents() {
      this.studentService.getAllStudents().subscribe(students => {
       this.students = students;
      });
    }

}
