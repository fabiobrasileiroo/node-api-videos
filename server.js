// import { createServer } from "node:http";

// const server = createServer((request,response)=> {
//   response.write('hello ')
//   return response.end()
// })
// server.listen(3333)

import { fastify } from "fastify";
import { DataBaseMemory } from './database-memory.js'

const server = fastify();

const database = new DataBaseMemory()

server.post('/videos',()=> {
  database.create({
    title: 'Video 01',
    description: 'Esse é o video 01',
    duration: 180,
  })
  console.log(database.list())
})

server.get('/videos',()=> {
  return 'Hello Fabio'
})
// /router parameter 
server.put('/videos/:id',()=> {
  return 'Hello node.js'
})
server.delete('/videos/:id',()=> {
  return 'Hello node.js'
})
server.listen({ port: 3333 });
