import corsLib from 'cors';
import type { RequestHandler } from 'express';
import { env } from '../../config/env';

const origins = env.CORS_ORIGINS.split(',').map((s) => s.trim());

export const cors: RequestHandler = corsLib({
  origin: function(origin, cb) {
    if (!origin) return cb(null, true);
    if (origins.includes('*') || origins.includes(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
});
