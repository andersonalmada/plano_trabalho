const express = require("express");
const cors = require("cors");
require("dotenv/config");
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
const upload = require("./routes/upload-route");

app.use("/categories", categories);
app.use("/subcategories", subcategories);
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
