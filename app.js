const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");
const { securityHeaders, limiter } = require("./middleware/security");
const corsMiddleware = require('./middleware/cors');

const routerUsers = require("./router/users");
const routerHome = require("./router/home");
const routerLogin = require("./router/login");
const routerRegister = require("./router/register");
const routerReservation = require("./router/reservation");

dotenv.config();

const app = express();

// CORS en başta
app.use(corsMiddleware);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(securityHeaders);
app.use(limiter);

// Routers
app.use(routerHome);
app.use(routerLogin);
app.use(routerRegister);
app.use(routerUsers);
app.use(routerReservation);

const PORT = process.env.PORT || 5000;

// DB bağlantısı
db();

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
