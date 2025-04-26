import type { FastifyInstance, FastifyPluginOptions } from 'fastify';

export async function healthRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async (request, reply) => {
    return { status: 'ok', message: 'Dynamis API is alive! 🚀' };
  });
}