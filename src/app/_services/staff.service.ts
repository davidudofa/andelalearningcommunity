import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StaffService {
  staff : any = [];

  constructor(private http: Http) { }
  // Get all posts from the API
  getAllStaff() {
    //return this.http.get('http://apps.artsinscience.com/nodeapi/students')
    return this.http.get('/api/staff')
      .map(res => res.json());
  }

  getStaff(cid) {
    let params = new URLSearchParams();
    params.set('id', cid);
    return this.http.get('/api/staff/'+cid)
      .map(res => res.json());
  }

  saveStaff(staff) {
    if (staff.id){
      return this.http.put('/api/updatestaff/'+staff.id, staff)
              .map(res => res.json());
    }else{
      return this.http.post('/api/addstaff/', staff)
        .map(res => res.json());
    }
  }


    deleteStaff(cid) {
      return this.http.delete('/api/deletestaff/'+cid)
        .map(res => res.json());
    }



}
