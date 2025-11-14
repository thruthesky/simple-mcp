#!/usr/bin/env node
import { McpServer, StdioServerTransport } from '@modelcontextprotocol/sdk';

async function main() {
  const server = new McpServer({
    tools: {
      hello: {
        description: 'Returns greeting message for the given name.',
        parameters: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Name to greet' }
          },
          required: ['name']
        },
        handler: async ({ name }) => {
          return `Hello, ${name}!`;
        }
      }
    }
  });

  const transport = new StdioServerTransport();
  server.addTransport(transport);
  await server.start();
}

main().catch((err) => {
  console.error(err);
});
