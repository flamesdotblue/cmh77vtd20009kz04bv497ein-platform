import express from 'express';
import helmet from 'helmet';
import { env } from './config/env';
import { cors } from './core/middleware/cors';
import api from './api';
import { logger } from './core/logger';

const app = express();
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(cors);

app.get('/', (_req, res) => res.send('SMS API running'));
app.use('/api', api);

app.use((err: any, _req: any, res: any, _next: any) => {
  logger.error({ err }, 'Unhandled error');
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(Number(env.PORT), () => {
  logger.info({ port: env.PORT, env: env.NODE_ENV }, 'API listening');
});
