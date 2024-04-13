import { fastify } from "fastify";
import { DataBaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DataBaseMemory();

// Request Body

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    //short sintaxe ex: title: title para a ser title to omitindo no nome
    title,
    description,
    duration,
  });
  // console.log(database.list());
  return reply.status(201).send();
});

server.get("/videos", (request) => {
  const search = request.query.search
  // console.log(search)
  const videos = database.list(search);
  // return reply.send()
  return videos;
});
// /router parameter
server.put("/videos/:id", (request,reply) => {
  const videoId = request.params.id
  const { title, description, duration } = request.body;

  const video = database.update(videoId,{
    title,
    description,
    duration,
  })
  return reply.status(204)
});
server.delete("/videos/:id", (request,reply) => {
  const videosId = request.params.id

  database.delete(videosId)

  return reply.status(204).send()
});
server.listen({ port: 3333 });
