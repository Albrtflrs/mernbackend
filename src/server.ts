import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello11World!");
});

app.listen(port, () => {    
  console.log("Server is running at " + port); 
});