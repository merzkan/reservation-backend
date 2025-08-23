const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "https://reservationapp-beta.vercel.app",
  "https://reservationapp-git-main-merzkans-projects.vercel.app"
];

const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS: Bu origin'e izin verilmiyor! ${origin}`));
  },
  methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"],
  credentials: true
});

module.exports = corsMiddleware;
