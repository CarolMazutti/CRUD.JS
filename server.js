import { createServer } from 'node:http' 

async function HttpHandler(request, response){} 

const app = createServer(HttpHandler) 
.listen(3333) 
.on('listening', () => console.log('http server ready'))