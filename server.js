// import { createServer } from "node:http";

// const server = createServer((request,response)=> {
//   response.write('hello ')
//   return response.end()
// })
// server.listen(3333)

import { fastify } from "fastify";

const server = fastify();

server.post('/videos',()=> {
  return 'Hello World'
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
