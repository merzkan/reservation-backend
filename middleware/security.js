import rateLimit, { ipKeyGenerator } from 'express-rate-limit';
import helmet from 'helmet';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  keyGenerator: ipKeyGenerator, // direkt ipKeyGenerator kullan
});

// Helmet security headers
export const securityHeaders = helmet();
