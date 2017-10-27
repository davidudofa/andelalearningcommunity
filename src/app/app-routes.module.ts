import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { StudentListComponent, StudentDetailsComponent } from './students/index';
import { StaffListComponent, StaffDetailsComponent } from './staff/index';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'students',
        component: StudentListComponent,
        children: [
            { path: 'add', component: StudentDetailsComponent },
            { path: 'edit/:id', component: StudentDetailsComponent }
        ]
    },
    {
        path: 'staff',
        component: StaffListComponent,
        children: [
            { path: 'add', component: StaffDetailsComponent },
            { path: 'edit/:id', component: StaffDetailsComponent }
        ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, StudentListComponent, StudentDetailsComponent, StaffListComponent, StaffDetailsComponent];
