#!/usr/bin/env node
const { McpServer } = require('@modelcontextprotocol/sdk');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio');

const server = new McpServer({
  description: "Simple MCP server to greet by name",
  tools: {
    hello: {
      description: "Return greeting to a given name",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Name to greet" }
        },
        required: ["name"]
      },
      handler: async ({ name }) => {
        return `Hello, ${name}!`;
      }
    }
  }
});

const transport = new StdioServerTransport(server);
transport.start();
