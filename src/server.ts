import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  return "teste";
});

app.listen({ port: 3333 });
