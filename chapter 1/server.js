const express = require('express')

const app = express()

const students = [
      {

        id:1,
        age: 17,
        Name: "Shivendra "
 
      },
   {

      id:2,
        age: 20,
        Name: "Aditya Banji baaz" 

   },


    {
      id:3,
        age: 16,
        Name: "Akash " 

    }


]

app.get("/", (req, res) => {
    res.send("Student Backend");
});

app.get("/students", (req, res) => {
    res.send(students);
});

app.get("/students/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const student = students.find((s) => s.id === studentId);

    res.send(student);

});




app.listen(3000,()=>{
  console.log(`server is running on  Port 3000`)
})