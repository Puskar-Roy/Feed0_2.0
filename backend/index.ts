import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes";
import cookieParser from "cookie-parser";
import "./database/connectDatabase";
import ws from 'ws';
import jwt , {Secret}  from "jsonwebtoken";
import http from 'http'

interface WebSocketUser {
  userId: string;
  phone: string;
}

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

const port = 8000 || process.env.PORT;

const server  = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


const jwtt: Secret =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const wss = new ws.WebSocketServer({ noServer: true }); 

server.on("upgrade", (request: http.IncomingMessage, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});
wss.on("connection", (connection: ws, request: http.IncomingMessage) => {
  console.log("✴️ [web socket] Web Socket Connected!");
  const cookiesHeader = request.headers.cookie;
  const cookies = cookiesHeader?.split("; ").reduce((acc, cookie) => {
    const [name, value] = cookie.split("=");
    if (value) {
      acc[name] = value;
    }
    return acc;
  }, {} as Record<string, string>);

  const cookieValues = Object.values(cookies as Record<string, string>); // Cast to the correct type
  if (cookieValues) {
    jwt.verify(cookieValues[0], jwtt, (err, user) => {
      if (err) {
        throw err;
      } else {
        if (
          user &&
          typeof user === "object" &&
          "id" in user &&
          "phone" in user
        ) {
          const userId = user.id;
          const phone = user.phone;
          console.log("Id - " + userId + " Phone - " + phone);
        }
      }
    });
  }
})  




