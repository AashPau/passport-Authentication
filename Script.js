const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
//Port
const PORT = process.env.PORT || 5000;

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./Routes/index"));
app.use("/users", require("./Routes/users"));

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
