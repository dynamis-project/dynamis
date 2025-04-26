import Fastify from 'fastify';
import { healthRoutes } from './routes/health';

const app = Fastify({
  logger: true
});

// Register routes
app.register(healthRoutes, { prefix: '/health' });

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
