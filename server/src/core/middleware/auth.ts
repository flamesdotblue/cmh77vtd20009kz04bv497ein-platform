import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env';

export interface AuthUser { id: string; roles: string[] }

export function auth(required = true) {
  return (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization'];
    if (!header) {
      if (required) return res.status(401).json({ error: 'Missing Authorization header' });
      return next();
    }
    const token = header.replace('Bearer ', '');
    try {
      const payload = jwt.verify(token, env.JWT_SECRET) as AuthUser & { iat: number; exp: number };
      (req as any).user = { id: payload.id, roles: payload.roles };
      next();
    } catch (e) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}

export function signToken(user: AuthUser) {
  return jwt.sign(user, env.JWT_SECRET, { expiresIn: '15m' });
}
