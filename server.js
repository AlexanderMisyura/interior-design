const express = require("express");
const app = express();
const exprHbs = require("express-handlebars").engine;

const { activePageClass } = require("./helpers/hbs");
app.engine(
  ".hbs",
  exprHbs({
    defaultLayout: "main",
    extname: ".hbs",
    helpers: { activePageClass },
  })
);
app.set("view engine", ".hbs");

app.use(function (req, res, next) {
  res.locals.routePath = req.url;
  next();
});

app.use(express.static("public"));
app.use(express.static("img"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.render("index", { title: "iDesy - Interior Design", headerClass: "alt" }));
app.get("/about", (req, res) => res.render("about", { title: "About us | iDesy"}));
app.get("/contact", (req, res) => res.render("contact", { title: "Contact | iDesy" }));
app.get("/gallery", (req, res) => res.render("gallery", { title: "Gallery | iDesy", galleryScriptSrc: "/js/gallery.js" }));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
