// import { fastify } from "fastify";
// import { DatabasePostgres } from "./database-postgres.js";
// // import { DataBaseMemory } from "./database-memory.js";

// const server = fastify();

// // const database = new DataBaseMemory();
// const database = new DatabasePostgres();

// // Request Body

// server.post("/videos", async (request, reply) => {
//   const { title, description, duration } = request.body;

//   await database.create({
//     //short sintaxe ex: title: title para a ser title to omitindo no nome
//     title,
//     description,
//     duration,
//   });
//   // console.log(database.list());
//   return reply.status(201).send();
// });

// server.get("/videos", async (request) => {
//   const search = request.query.search;
//   // console.log(search)
//   const videos = await database.list(search);
//   // return reply.send()
//   return videos;
// });

// // router parameter
// server.put("/videos/:id", async (request, reply) => {
//   const videoId = request.params.id;
//   const { title, description, duration } = request.body;

//   await database.update(videoId, {
//     title,
//     description,
//     duration,
//   });
//   return reply.status(204);
// });

// server.delete("/videos/:id", async (request, reply) => {
//   const videosId = request.params.id;

//   await database.delete(videosId);

//   return reply.status(204).send();
// });
// server.listen({
//   host: '0.0.0.0',
//   port: process.env.PORT ?? 3333,
// });
import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres.js";
// import { DataBaseMemory } from "./database-memory.js";

const server = fastify();
await fastify.register(cors, { 
  origin: 'http://127.0.0.1:5502/'
})
// const database = new DataBaseMemory();
const database = new DatabasePostgres();

// Request Body

server.post("/videos", async (request, reply) => {
  const { title, description, duration, event_type, date_time, video_link } =
    request.body;

  await database.create({
    title,
    description,
    duration,
    event_type,
    date_time,
    video_link,
  });

  return reply.status(201).send();
});

// server.get("/videos", async (request) => {
//   const search = request.query.search;

//   const videos = await database.list(search);

//   return videos;
// });
server.get("/videos", async (request) => {
  const search = request.query.search;

  const videos = await database.list(search);

  return videos;
});




// router parameter
server.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration, event_type, date_time, video_link } = request.body;

  await database.update(videoId, {
    title,
    description,
    duration,
    event_type,
    date_time,
    video_link
  });

  return reply.status(204);
});


server.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
