const http = require("http");
const app = require("./app/app");

const PORT = 9717;

// ! creating server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
