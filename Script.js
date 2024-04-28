const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/", require("./Routes/index"));
app.use("/users", require("./Routes/users"));

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
