import Fastify from "fastify"
import "reflect-metadata"

const server = Fastify({ logger: true })


server.get("/", async (request, reply) => {
  return { "Message": "Hello World" }
})


server.listen({ port: 3000, host: "0.0.0.0" }, (err, adderss) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`Server listening at ${adderss}`)
})
