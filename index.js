import "dotenv/config";
import session from "express-session";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModulesRoutes from "./Kambaz/Modules/routes.js";
import express from "express";
import cors from "cors";
import db from "./Kambaz/Database/index.js";
import Lab5 from "./Lab5/index.js";
import Hello from "./Hello.js";
const app = express();
Hello(app);
app.use(
  // Allow the client origin and reflect origins in development so
  // credentials (cookies) can be sent from various localhost hosts.
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (process.env.SERVER_ENV === "development") {
        callback(null, true);
      } else if (!origin || origin.includes("localhost") || origin.includes("vercel.app") || origin === process.env.CLIENT_URL) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
};
if (process.env.SERVER_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.SERVER_URL,
  };
}
app.use(session(sessionOptions));
app.use(express.json());   
UserRoutes(app, db);
CourseRoutes(app, db);                
ModulesRoutes(app, db);
Lab5(app);                          // express instance
app.listen(process.env.PORT || 4000)
