import { app } from './configs/app';
import { env } from './configs/env';

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log(`HTTP server running on port ${env.PORT}`)
})