import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100000,
  message: 'Çok fazla istek yaptınız, lütfen 15 dakika sonra tekrar deneyin.'
});

export const securityHeaders = helmet();
