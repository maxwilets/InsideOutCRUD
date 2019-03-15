const router = require("express").Router();
const Employee= require("../models/employee")
router.get("/employees", (req, res)=>{
    Employee.findAll({}).then(data=>{res.json(data)})
})

router.post("/employees", (req,res)=>{
    Employee.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        salary: req.body.salary
    }).then(data=>{console.log(data)})
})