// middleware/security.js
import helmet from 'helmet';
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';

// Rate limiter
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 100,
  keyGenerator: (req) => ipKeyGenerator(req) || req.ip, // IPv6 desteği
});

// Helmet security headers
export const securityHeaders = helmet();
