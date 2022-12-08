const express =  require("express");
const fs = require("fs");

app = express()


app.get("/", (req, res) => {
    res.sendFile("view.html")
})

app.listen(8080, () => {
    console.log("App listening on localhost:8080");
})