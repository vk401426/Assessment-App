const exp = require("constants");
const express = require("express");
const mysql = require("mysql2");
const app = express();
const path = require("path");
const port = 3000;

//db connecton
const connection = mysql.createConnection({
    host: "localhost",
    database: "urjafied",
    user: "root",
    password: "0044",
  });

  //set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true })); //post request
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('admin.ejs')
  })

app.post('/submit-tests', (req, res) => {
    const tests = req.body;
  
    const values = tests.map(test => [
        test.jobid,
        JSON.stringify(test.questions),
        test.jobname
    ]);
  
    const query = 'INSERT INTO test_questions ( jobid, questions, jobname) VALUES ?';
  
    connection.query(query, [values], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data');
        }
        res.status(200).json({ message: 'Tests data received successfully!' });
    });
  });


app.get('/app',(req,res)=>{
  let q='select * from job_applications';
  connection.query(q,(err,results)=>{
    let applications=results;
    applications.forEach(application => {
      application.dob = application.dob.toISOString().slice(0, 10);
    });
    res.render('struct.ejs',{applications})
  })
})
app.listen(port, () => {
    console.log("App is listening on port 3000");
  });