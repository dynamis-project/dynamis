import Fastify from 'fastify';
import { healthRoutes } from './routes/health';
import { screensRoutes } from './routes/screens';

const app = Fastify({
  logger: true
});

app.register(healthRoutes, { prefix: '/health' });
app.register(screensRoutes, { prefix: '/screens' });

// Start the server
const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Dynamis API is running at http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
