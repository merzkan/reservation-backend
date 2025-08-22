const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db = require("./config/db");
const { securityHeaders, limiter } = require("./middleware/security");
const cors = require("./middleware/cors")


dotenv.config();

const routerUsers = require("./router/users")
const routerHome = require("./router/home")
const routerLogin = require("./router/login")
const routerRegister = require("./router/register")
const routerReservation = require("./router/reservation")

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(securityHeaders);
app.use(limiter);
app.use(cors)

app.use(routerHome);
app.use(routerLogin);
app.use(routerRegister);
app.use(routerUsers);
app.use(routerReservation);


const PORT = process.env.PORT

db();
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})