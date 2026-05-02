<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
=======
>>>>>>> 5861c3f605769a9ee1642a7c3bf7d1adfa88972b

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
