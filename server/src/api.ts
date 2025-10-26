import { Router } from 'express';
import authRoutes from './modules/auth/routes';
import { auth } from './core/middleware/auth';

const api = Router();

api.get('/healthz', (_req, res) => res.json({ ok: true }));
api.get('/readyz', (_req, res) => res.json({ ready: true }));

api.use('/auth', authRoutes);
api.get('/me', auth(), (req, res) => {
  res.json({ user: (req as any).user });
});

export default api;
