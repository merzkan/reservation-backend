import helmet from 'helmet';
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 100,
  keyGenerator: ipKeyGenerator, // direkt ipKeyGenerator kullan
});

export const securityHeaders = helmet();
