const express = require("express");
const app= express();
const mysql= require("mysql2");
const path = require("path");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const methodOverride=require('method-override');
const fs = require('fs');
const port = 8080;
let private= "";

//db connection

const connection = mysql.createConnection({
    host: "localhost",
    database: "urjafied",
    user: "root",
    password: "0044"
});

const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB file limit
  });

app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/asset")));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());



app.get('/',(req,res)=>{
    let exdata={
        pagehead:'Urafied Home',
        page:'home'
    }
    res.render('struct.ejs',{exdata});
  });

app.post('/start-test',(req,res)=>{
    let uuid=uuidv4();
    const {
        prefix,
        firstName,
        middleName,
        lastName,
        gender,
        dob,
        countryCode,
        contact,
        email,
        jobid
      } = req.body;
      console.log(req.body)
    let qc='SELECT * FROM applicant_resp WHERE (contact = ? OR email = ?) AND jobid = ?';
    let qi=`INSERT INTO applicant_resp (prefix, firstName, middleName, lastName, gender, dob, countryCode, contact, email, jobid,uuid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
    connection.query(qc,[contact,email,jobid],(err,result)=>{
        console.log("helo qx")
        if (err) {
            console.error('Error checking existing data:', err);
            return res.status(500).send('Error checking existing data');
          }
        else if(result.length>0){
            console.log("user already exists");
        }
        else{
            console.log("helo x")
            connection.query(qi,[prefix, firstName, middleName, lastName, gender, dob, countryCode, contact, email, jobid,uuid],(err,result)=>{
                if (err) {
                    console.error('Error updating data:', err);
                    return res.status(500).send('Error updating data');
                  }
                console.log("data saved sucessfully");
                res.redirect(`/assesment/${uuid}`)
            })
        }
    })
    
})

app.get('/assesment/:uuid',(req,res)=>{
    const {uuid}=req.params;
    let q='select firstName, middleName, lastName,jobid,uuid from applicant_resp where uuid=?';
    connection.query(q,[uuid],(err,result)=>{
        if(err){
            console.error('error while fetching data');
        }
        else{
            let mis_data=result
            let q = `select * from test_questions where jobid=?`;
            console.log(mis_data[0].jobid)
            connection.query(q, [mis_data[0].jobid], (err, qs_result) => {
            if (err) {
            console.error(err);
            } else {
            let qsList = qs_result;
            res.render("test-app.ejs", { qsList,mis_data});
            }
            });
        }
    })
})

app.post('/submit',(req,res)=>{
    let exdata={
        pagehead:'Complete Application',
        page:'final'
    }
    let {percentage,uuid}=req.body;
    console.log(percentage,uuid);
    let q='select * from applicant_resp where uuid=?';
    connection.query(q,[uuid],(err,result)=>{
        let data=result[0];
        data['marks']=percentage;
        data.dob = data.dob.toISOString().slice(0, 10);
        private=data;
        res.render('struct.ejs',{data,exdata})
    })
})

//final submition of data
app.post('/final', upload.single('resume'), (req, res) => {
    let exdata={
        pagehead:'Application Confirmation',
        page:'thanks'
    }
    const {
      prefix,
      firstName,
      middleName,
      lastName,
      gender,
      dob,
      countryCode,
      contact,
      email,
      jobid,
      uuid,
      marks,
    }=private

    const {
        qualification,
        specialization,
        experience,
        jobTitle,
        remote
      } = req.body;
    
  
    let resumeData = null;
  
    if (req.file) {
        try {
            resumeData = fs.readFileSync(req.file.path);
            fs.unlinkSync(req.file.path);
            console.log("file uploaded sucessfuly")
        } catch (err) {
            console.error('File read error:', err);
            return res.status(500).send('Error reading uploaded file');
        }
    }
    
    const fq = `
      INSERT INTO job_applications (
        prefix, firstName, middleName, lastName, gender, dob, countryCode, contact, 
        email, jobid, uuid, marks, qualification, specialization, experience, jobTitle, resume, remote
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    const values = [
      prefix || null,
      firstName,
      middleName || null,
      lastName,
      gender,
      dob,
      countryCode || null,
      contact,
      email,
      jobid,
      uuid,
      marks,
      qualification,
      specialization || null,
      experience || null,
      jobTitle || null,
      resumeData,
      remote
    ];
  
    connection.query(fq, values, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).send('Error saving data');
      }
      res.render('struct.ejs',{exdata});
    });

  });
app.listen(port,()=>{
    console.log("App is listening to the port 8080")
})