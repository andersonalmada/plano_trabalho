const express = require("express");
const cors = require("cors");
require("dotenv/config");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static
app.use(express.static("public"));

// Routes
const categories = require("./routes/category-route");
const subcategories = require("./routes/subcategory-route");
const plans = require("./routes/plan-route");
const users = require("./routes/user-route");
const upload = require("./routes/upload-route");

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided." });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res.status(500).json({ message: "Failed to authenticate token." });

    req.userId = decoded.id;
    next();
  });
}

app.use("/categories", verifyJWT, categories);
app.use("/subcategories", verifyJWT, subcategories);
app.use("/plans", verifyJWT, plans);
app.use("/users", users);
app.use("/upload", upload);
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
