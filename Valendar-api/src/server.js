const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const bcrypt = require("bcrypt");
const sanitizer = require("sanitize")();
const passport = require("passport");
const mongoose = require("mongoose");
var LocalStrategy = require("passport-local").Strategy;

require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

app.use(cors());
app.use(bp());
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("Connected to DB"));

const Users = require("./models/Users");
const Events = require("./models/Events");

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

app.get("/api/getEvents", async (req, res) => {
  let events = await Events.find({});
  res.json(events);
});

app.post("/api/createEvent", (req, res) => {
  if (
    req.body.workers &&
    req.body.workers.length > 0 &&
    req.body.description &&
    req.body.description.length > 0 &&
    req.body.title &&
    req.body.title.length > 0 &&
    req.body.whento &&
    req.body.whento.length > 0
  ) {
    let workers = req.body.workers;
    let description = sanitizer.value(req.body.description, "string");
    let title = sanitizer.value(req.body.title, "string");
    let whento = Date.parse(req.body.whento);

    let newEvent = new Events({
      workers,
      description,
      title,
      whento,
    });

    newEvent.save((err, data) => {
      if (err) throw console.log(err);
    });
  }

  res.end();
});

app.get("/api/getUsers", async (req, res) => {
  console.log("A");
  let users = await Users.find({});
  res.json(users);
});

app.post("/api/createUser", async (req, res) => {
  if (
    req.body.username &&
    req.body.username.length > 0 &&
    req.body.password &&
    req.body.password.length > 0
  ) {
    let username = sanitizer.value(req.body.username, "string");
    let password = await bcrypt.hash(req.body.password, 10);

    let newUser = new Users({
      username,
      password,
    });

    newUser.save((err, data) => {
      if (err) return console.log(err);
    });
  }

  res.end();
});

///
///
///

app.post("/api/authenticate", async (req, res) => {
  if (
    req.body.username &&
    req.body.username.length > 0 &&
    req.body.password &&
    req.body.password.length > 0
  ) {
    let user = Users.findOne({ username: req.body.username });
    let match = await bcrypt.compare(req.body.password, user.password);
    let token = makeid(16);

    if (match) {
      Users.findOneAndUpdate(
        { username: req.body.username },
        { $set: { token: token } },
        { upsert: true },
        (err) => {
          if (err) return console.log(err);
        }
      );
    }

    res.json({ token });
  }

  res.end();
});

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});
