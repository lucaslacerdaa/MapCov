const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  sessions({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
  })
);

app.use(express.static("public"));

const index = require("./routes/index.js");
const pacientes = require("./routes/product-route");
const upload = require("./routes/upload-route");
const users = require("./routes/user-route");

app.use("/", index);
app.use("/pacientes", pacientes);
app.use("/upload", upload);
app.use("/users", users);
app.use("/ok", (req, res, next) => {
  session = req.session;

  if (session.user == 1) {
    res.send("ok");
  } else {
    res.send("Not login");
  }
});
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
