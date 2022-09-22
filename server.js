const express = require("express");
const app = express();
const exprHbs = require("express-handlebars").engine;

app.engine(
  ".hbs",
  exprHbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(express.static("public"));
app.use(express.static("img"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.render("index", { title: "Interior Design", headerClass: "alt" }));
app.get("/gallery", (req, res) => res.render("gallery", { title: "Gallery", galleryScriptSrc: "/js/gallery.js" }));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
