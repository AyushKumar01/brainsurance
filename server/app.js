const express = require("express");
const routes = require("./src/routes");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);
app.use((req, res, next) => {
  var err = new Error("API Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ message: err.message });
});

app.listen(8000, () => {
  console.log("Insurance app listening on port 8000!");
});
