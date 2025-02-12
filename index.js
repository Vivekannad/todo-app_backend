const express = require("express");
const app = express();
const routes = require("./router/routes.js");

const PORT = 5000;

app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});