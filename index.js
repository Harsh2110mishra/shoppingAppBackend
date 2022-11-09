require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const { urlencoded } = require("express");

const contact = require("./routes/index.routes");

// INITIALIZING CONNECTION TO MONGODB FROM MONGOOSE
mongoose.connect(
  process.env.MONGO_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (error) => {
    if (!error) {
      console.log("MongoDB Connected!");
    } else {
      console.log("Database not working!!!", "error:", error);
    }
  }
);

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use("/", contact);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`, "info");
});

server.setTimeout(10 * 60 * 1000);
