const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// IPv6 uyumlu rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  keyGenerator: rateLimit.ipKeyGenerator,
});

const securityHeaders = helmet();

module.exports = { limiter, securityHeaders };
