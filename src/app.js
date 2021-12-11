import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
import { SECRET, BASEURL, CLIENTID, ISSUER } from "./config";
import "./controllers/helpers";

const { auth, requiresAuth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: BASEURL,
  clientID: CLIENTID,
  issuerBaseURL: ISSUER,
};

const app = express();

app.set("views", path.join(__dirname, "views"));




const exphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs",
});



app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(auth(config));

//Routes
app.use(indexRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render("index", {
    title: "Express Demo",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user.email));
});

app.get("/sign-up", (req, res) => {
  res.oidc.login({
    authorizationParams: {
      screen_hint: "signup",
    },
  });
});

export default app;
