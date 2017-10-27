const express = require('express');
const router = express.Router();
const Student = require('./server/models/Students');
const Staff = require('./server/models/Staffs');
// declare axios for making http requests
const axios = require('axios');
//const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/students/:id?',function(req,res,next){

if(req.params.id){
    Student.getStudentById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
}
else{

 Student.getAllStudents(function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }

    });
}
});
router.get('/staff/:id?',function(req,res,next){

if(req.params.id){
    Staff.getStaffById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
}
else{

 Staff.getAllStaff(function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }

    });
}
});
router.post('/addstudent/',function(req,res,next){

        Student.addStudent(req.body,function(err,count){
          //console.log(req.body);
            if(err){
                res.json(err);
            }else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});
router.post('/addstaff/',function(req,res,next){

        Staff.addStaff(req.body,function(err,count){
          //console.log(req.body);
            if(err){
                res.json(err);
            }else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});

 router.post('/deletestudent/:id',function(req,res,next){
  Student.deleteAll(req.body,function(err,count){
    if(err){
      res.json(err);
    }else{
      res.json(count);
    }
  });
});
router.post('/deletestaff/:id',function(req,res,next){
 Staff.deleteAll(req.body,function(err,count){
   if(err){
     res.json(err);
   }else{
     res.json(count);
   }
 });
});

router.delete('/deletestudent/:id/:image',function(req,res,next){

        Student.deleteStudent(req.params.id, req.params.image,function(err,count){
          if(err){
                res.json(err);
            }else{
                res.json(count);
            }

        });
});
router.delete('/deletestaff/:id',function(req,res,next){

        Staff.deleteStaff(req.params.id,function(err,count){
          if(err){
                res.json(err);
            }else{
                res.json(count);
            }

        });
});

router.put('/updatestudent/:id',function(req,res,next){

    Student.updateStudent(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
});
router.put('/updatestaff/:id',function(req,res,next){

    Staff.updateStaff(req.params.id,req.body,function(err,rows){

        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
});
module.exports=router;
