const path = require("path");
const express = require("express");

const app = express();
app.use("/research", (req, res) => {
    res.sendFile(path.join(__dirname, "/research.html"));
});
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3000);
