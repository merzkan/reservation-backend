// middleware/cors.js
import cors from 'cors';

const allowedOrigins = [
  "http://localhost:5173",
  "https://reservationapp-beta.vercel.app"
];

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS: Bu origin'e izin verilmiyor! ${origin}`));
  },
  methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"],
  credentials: true
});
