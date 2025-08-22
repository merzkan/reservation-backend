const cors = require("cors");

// İzin verilen origin listesi
const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "https://reservationapp-beta.vercel.app" // prod frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    // Eğer origin yoksa (Postman gibi) izin ver
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: Bu origin'e izin verilmiyor! ${origin}`));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Cookie vs. izin verir
};

module.exports = cors(corsOptions);
