import type { FastifyInstance } from 'fastify';

export async function screensRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    const mockedScreen = {
      id: 'home-screen',
      title: 'Welcome to Dynamis!',
      components: [
        {
          type: 'text',
          props: {
            value: 'Hello, this is server-driven!',
            fontSize: 24,
            color: '#333333'
          }
        },
        {
          type: 'button',
          props: {
            title: 'Click Me',
            action: {
              type: 'navigate',
              screenId: 'next-screen'
            }
          }
        }
      ]
    };

    return mockedScreen;
  });
}
