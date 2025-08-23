import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import { securityHeaders, limiter } from "./middleware/security.js";
import { corsMiddleware } from './middleware/cors.js';

import routerUsers from "./router/users.js";
import routerHome from "./router/home.js";
import routerLogin from "./router/login.js";
import routerRegister from "./router/register.js";
import routerReservation from "./router/reservation.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(securityHeaders);
app.use(limiter);
app.use(corsMiddleware);

app.use(routerHome);
app.use(routerLogin);
app.use(routerRegister);
app.use(routerUsers);
app.use(routerReservation);

const PORT = process.env.PORT || 5000;

db();
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
