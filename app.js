//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
var items = ["Buy Food", "Cook Food", "Eat Food"];
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
   var today = new Date();
   
   var options = {

     weekday:"long",
     day: "numeric",
     month: "long"
   };
   var day = today.toLocaleDateString("en-US", options);
    res.render("list", {KindOfDay: day, newListItems: items});
  });
  app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
   res.redirect("/");
  });

app.listen(3000, function(req, res){
    console.log("Server is up at port 3000");
});