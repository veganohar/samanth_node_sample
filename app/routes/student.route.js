
const controller = require("../controllers/student.controller");

module.exports = function(app){
    app.get("/api/students/getAllStudents",controller.getAllStudents)
    app.post("/api/students/saveNewStudent",controller.saveNewStudent);
    app.put("/api/students/updateStudent",controller.updateStudent);
    app.delete("/api/students/deleteStudent/:sid",controller.deleteStudent);
}