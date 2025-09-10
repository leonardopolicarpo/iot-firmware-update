import type { FastifyInstance } from 'fastify';

import mainRoutes from '../routes/mainRoutes';

export const setupRoutes = (app: FastifyInstance): void => {
  app.register(mainRoutes);
};