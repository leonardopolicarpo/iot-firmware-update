import { fastify } from 'fastify';
import { setupCors } from './cors';
import { setupSwagger } from './swagger';
import { setupRoutes } from './routes';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider
} from 'fastify-type-provider-zod';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

setupCors(app);
setupSwagger(app);
setupRoutes(app);

export { app };
