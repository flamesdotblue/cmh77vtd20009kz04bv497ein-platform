import { Router } from 'express';
import { signToken } from '../../core/middleware/auth';

const router = Router();

// NOTE: Placeholder auth. In production, validate via DB (Prisma) and Argon2 password hashes.
router.post('/login', async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });
  // Demo acceptance; replace with real lookup
  const user = { id: 'u_demo', roles: ['ADMIN'] };
  const token = signToken(user);
  return res.json({ accessToken: token, user });
});

export default router;
