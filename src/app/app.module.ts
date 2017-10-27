import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routes.module';

import { StudentsService, StudentSubService, StaffService } from './_services/index';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    MenuComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
    AppRoutingModule
  ],
  providers: [StudentsService, StudentSubService, StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
