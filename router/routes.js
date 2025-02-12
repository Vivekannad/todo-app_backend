const express = require("express");
const fs = require('fs');
const router = express.Router();

router.get("/", (req,res) => {
    fs.readFile("data.json", "utf-8", (error , data) => {
        let todos = [];
        if(!error && data){
            todos = JSON.parse(data);
            return res.status(200).json({status : 200 , message : "Accessed successfully" , todos});
        }
        res.status(404).json({status : 404 , message : "File not found!"});
    })
});


router.post("/", (req,res) => {
    const body = req.body;
    let todo = [];
     fs.readFile("data.json", "utf-8", (err  ,data) => { // this function is asynchronous
        if(!err && data){
            todo = JSON.parse(data);
        }

        const newTodo = {id : todo.length, todo : body.todo };
        todo.push(newTodo);

        fs.writeFile("data.json", JSON.stringify(todo , null , 2) , (err) => {
           if(err) {
           return res.status(500).json({status : 500 , message : "Internal Server Error"});
           }
           return res.status(201).json({status : 201 , message : "Created Successfully"});
       })
    });
})


router.patch("/:index", (req,res) => {
    
    const index = req.params.index;
    const {todo} = req.body;

    fs.readFile("data.json", "utf-8", (error,data) => {
        let todos = [];
        if(error){
            res.status(500).json({status : 500 , message : "Error!"});
        }
        if(!error && data){
            todos = JSON.parse(data);
        }
        if(index > todos.length){
            return res.status(400).json({status: 400 , message : "Not Avalaible!"});
        }
        console.log(todos);
        todos[index].todo = todo; 

        fs.writeFile("data.json", JSON.stringify(todos , null , 2 ), (err) => {
            if(err){
                return res.status(401).json({status: 401 , message: "Error!"});
            }
            res.status(201).json({status : 201 , message : "Editted Successfully"});
        })
    });
})


router.delete("/:id", (req,res) => {
    const id = req.params.id;
    fs.readFile("data.json", "utf-8", (err , data) => {
        let todos = [];
        if(!err && data){
            todos = JSON.parse(data);
        }else {
            todos = [];
            return res.status(500).json({status : 500 , message  : "File not found"});
        }
        if(id >= todos.length ){
            return res.status(400).json({status : 400 , message : "index not available"})
        }

         todos.splice(id , 1 );

         fs.writeFile("data.json", JSON.stringify(todos , null , 2), (err) => {
            if(err) {
               return res.status(400).json({status : 400 , message : "Bad request"});
            }
            return res.status(202).json({status : 202 , message : "Deleted successfully"});
         })
    })
})

// export default router
module.exports = router