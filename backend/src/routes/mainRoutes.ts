import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

const mainRoutes: FastifyPluginAsyncZod = async app => {
  app.get('/', async (request, reply) => {
    reply.status(200).send({ message: "Hello from IOT-Firmware-Update API"})
  });
  app.get('/health', async (request, reply) => {
    reply.status(200).send({ message: "Route to check api health"})
  })
};

export default mainRoutes;