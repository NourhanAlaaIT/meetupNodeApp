const express = require("express");

const cors = require("cors");

const meetupsRouter = require("./controllers/meetups");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/meetups", meetupsRouter);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
