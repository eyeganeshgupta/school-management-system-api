const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = 9717;

// ! === Middleware ===
app.use(morgan("dev"));

// ! creating server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
