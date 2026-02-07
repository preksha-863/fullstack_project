const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const facts = [
  { id: 1, fact: "The sun is a star." },
  { id: 2, fact: "Water boils at 100°C." },
  { id: 3, fact: "Earth has one moon." }
];

app.get("/api/facts", (req, res) => {
  res.json(facts);
});

app.listen(5000, () => console.log("Server running on port 5000"));
