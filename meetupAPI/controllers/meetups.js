const express = require("express");

const app = express.Router();

let meetups = [
  {
    id: 1,
    name: "meetup 1"
  },
  {
    id: 2,
    name: "meetup 2"
  }
];

app.get("/", (req, res) => {
  res.send(meetups);
});

app.post("/", (req, res) => {
  meetups.push(req.body);
  res.status(201).send("card added successfully");
});

app.get("/:id", (req, res) => {
  let meetup = meetups.find(meetup => {
    return parseInt(req.params.id) === meetup.id;
  });
  if (meetup) {
    res.send(meetup);
  }
  res.status(404).send("Not found");
});

app.put("/:id", (req, res) => {
  let meetup = meetups.find(meetup => {
    return parseInt(req.params.id) === meetup.id;
  });
  if (meetup) {
    meetup.name = req.body.name;
    res.status(201).send("card updated successfully");
    return;
  }
  res.status(404).send("Not found");
});

app.delete("/:id", (req, res) => {
  let meetup = meetups.find(meetup => {
    return parseInt(req.params.id) === meetup.id;
  });
  if (meetup) {
    let index = meetups.indexOf(meetup);
    meetups.splice(index, 1);
    res.status(201).send("card removed successfully");

    return;
  }
  res.status(404).send("Not found");
});
module.exports = app;