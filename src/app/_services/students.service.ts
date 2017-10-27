import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StudentsService {
  students : any = [];

  constructor(private http: Http) { }
  // Get all posts from the API
  getAllStudents() {
    //return this.http.get('http://apps.artsinscience.com/nodeapi/students')
    return this.http.get('/api/students')
      .map(res => res.json());
  }

  getStudent(cid) {
    let params = new URLSearchParams();
    params.set('id', cid);
    return this.http.get('/api/students/'+cid)
      .map(res => res.json());
  }

  saveStudent(student) {
    if (student.id){
      return this.http.put('/api/updatestudent/'+student.id, student)
              .map(res => res.json());
    }else{
      return this.http.post('/api/addstudent/', student)
        .map(res => res.json());
    }
  }


    deleteStudent(student) {
      return this.http.delete('/api/deletestudent/'+student.id+'/'+student.s_img)
        .map(res => res.json());
    }



}
