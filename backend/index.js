const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes.js"); // Make sure the path is correct
const cookieParser = require("cookie-parser");
require("./database/connectDatabase.js"); // Make sure the path is correct
const http = require("http"); // Import http module for type definitions
const ws = require("ws");
const jwt = require("jsonwebtoken");

const app = express();

// Middleware Set Up
app.use(bodyParser.json({ limit: "1024mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "1024mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api", router);

const port = process.env.PORT || 8000; // Change the order to prioritize environment variable

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

const jwtt = "your_secret_here"; // Replace with your actual JWT secret

const wss = new ws.WebSocketServer({ noServer: true });

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

wss.on("connection", (connection, request) => {
  console.log("✴️ [web socket] Web Socket Connected!");
  const cookiesHeader = request.headers.cookie;
  const cookies = cookiesHeader?.split("; ").reduce((acc, cookie) => {
    const [name, value] = cookie.split("=");
    if (value) {
      acc[name] = value;
    }
    return acc;
  }, {});

  const cookieValues = Object.values(cookies);

  if (cookieValues.length > 0) {
    const token = cookieValues[0];
    console.log(token);
    // jwt.verify(token, jwtt, (err, user) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     if (
    //       user &&
    //       typeof user === "object" &&
    //       "id" in user &&
    //       "phone" in user
    //     ) {
    //       const userId = user.id;
    //       const phone = user.phone;
    //       console.log("Id - " + userId + " Phone - " + phone);
    //     }
    //   }
    // });
  }
});
