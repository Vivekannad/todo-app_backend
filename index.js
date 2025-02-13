const express = require("express");
const app = express();
const routes = require("./router/todos.js");
const connection  = require("./db/connect.js");

const PORT = 5000;

connection();

app.use(express.json());

app.use("/todos", routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});