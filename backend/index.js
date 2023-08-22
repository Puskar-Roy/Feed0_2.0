const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes.js");
const cookieParser = require("cookie-parser");
require("./database/connectDatabase.js"); 
const ws = require("ws");
const jwt = require("jsonwebtoken");
const User = require('./models/User.js')
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
    if(token){
      jwt.verify(token,process.env.JWT,{},(err,user)=>{
        if(err) throw err;
        const {id,phone} = user;
        connection.id = id;
        connection.phone = phone;
        
      })
    }
  }


  [...wss.clients].forEach(client =>{
    client.send(JSON.stringify(
     {online:[...wss.clients].map(c=>({userId:c.id,userPhone:c.phone}))}
      ))
  } );
});
