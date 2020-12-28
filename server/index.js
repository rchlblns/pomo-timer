const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, "../client/build")));

// test route to backend
app.use("/test", (req, res) => {
    res.send("Hello from the backend of this app!");
});

// handle React routing, return all requests to React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
})

// port info
const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`🌎  ==> App listening on port ${port}.`);
});