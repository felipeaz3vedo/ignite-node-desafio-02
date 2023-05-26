import fastify from "fastify";
import "dotenv/config";

const app = fastify();

app.get("/", async (request, reply) => {
  return "teste";
});

app.listen({ port: 3333 });
