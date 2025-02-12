
const express = require("express");
const app = express();
const data = require("./data.json")
const fs = require("fs");


app.set("view engine", "ejs");
app.use(express.json());    //body parser as body will always be in json format.

// app.get("/api", (request , response) => {
//     // response.status(200).json({
//     //     status : 200,
//     //     error : "No"
//     // })
//     // response.download("index.js");
//     // response.render("index");   // renders index.html in views folder 
//     response.render("index", {textcds : "world"}); // sending text to the html page
//     // response.send("<h1>Successful</h1>")
//     // response.end();
//     // response.json()
// })


    // app.post("/api", (req, res) => {
    //     const { todo } = req.body;
    
    //     // Read existing data.json
    //     fs.readFile("data.json", "utf8", (err, data) => {
    //         let todos = [];
    
    //         if (!err && data) {
    //             try {
    //                 todos = JSON.parse(data); // Parse existing data
    //                 if (!Array.isArray(todos)) {
    //                     todos = []; // Ensure it's an array
    //                 }
    //             } catch (error) {
    //                 todos = []; // Reset to empty array on JSON parsing error
    //             }
    //         }
    
    //         // Add new todo with unique ID
    //         const newTodo = { id: todos.length + 1, todo };
    //         todos.push(newTodo);
    
    //         // Write updated todos back to file
    //         fs.writeFile("data.json", JSON.stringify(todos, null, 2), (writeErr) => {
    //             if (writeErr) {
    //                 return res.status(500).json({ status: 500, message: "Server error" });
    //             }
    //             res.status(201).json({ status: 201, message: "Created successfully", newTodo });
    //         });
    //     });
    // });


app.listen(5000 , () => {
    console.log("Server is running");
})