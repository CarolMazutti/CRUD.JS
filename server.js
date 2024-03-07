// import { createServer } from 'node:http' 

// const server = createServer((request, response) => {    
//     response.write('Oii')

//     return response.end()
// })

// server.listen(3333)

import { fastify } from "fastify"
import { DatabaseMemory } from "./database-memory.js"

const server = fastify()

const database = new DatabaseMemory()


server.post('/videos', (request, reply) => {
    const body= request.body

    console.log(body)
    database.create({
        title: 'Vídeo 01',
        description: 'Esse é o vídeo 01',
        duration: 180
    })

    console.log(database,list())

    return reply.status(201).send()
})

server.get('/videos', () => {
    return 'Hello World'
})

server.put('/videos/:id', () => {
    return 'Hello World'
})
server.delete('/videos/:id', () => {
    return 'Hello World'
})

server.listen({
    port:3333,
})
