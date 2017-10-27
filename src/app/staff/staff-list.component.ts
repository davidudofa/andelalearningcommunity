import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// import fade in animation
import { fadeInAnimation } from '../_animations/index';

import { StaffService, StudentSubService } from '../_services/index';


@Component({
  moduleId: module.id.toString(),
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css'],
  // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})

export class StaffListComponent implements OnInit, OnDestroy {
  saveSuccess: boolean;
  staffs: any = [];
  subscription: Subscription;
  placements: string = 'top';
  title: string = 'Are you sure?';
  message: string = 'Are you really <b>sure</b> you want to do this?';
  confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
  cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;

  constructor(private staffService: StaffService, private studentSubService: StudentSubService) { }

  deleteStaff(cid){
    this.staffService.deleteStaff(cid).subscribe(result => {
      this.loadStaff();
    });
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.loadStaff();
    // reload products when updated
        this.subscription = this.studentSubService.on('staff-updated').subscribe(() => this.loadStaff());
  }

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    private loadStaff() {
      this.staffService.getAllStaff().subscribe(staff => {
       this.staffs = staff;
      });
    }

}
