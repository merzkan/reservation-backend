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

// 1️⃣ CORS en başta olmalı
app.use(corsMiddleware);

// 2️⃣ JSON ve URL encoded body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3️⃣ Security middleware
app.use(securityHeaders);
app.use(limiter);

// 4️⃣ Router’ları path ile bağla
app.use("/", routerHome);
app.use("/login", routerLogin);
app.use("/register", routerRegister);
app.use("/users", routerUsers);
app.use("/reservation", routerReservation);

const PORT = process.env.PORT || 5000;

// DB bağlantısı
db();

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
