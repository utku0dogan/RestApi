const Fastify = require("fastify");

const fastify = Fastify({
    logger: false,
})

const middleware = (_req, _res, next) => {
    console.log('Yeni istek geldi.');
    next()
}

const middlewarePost = (_req, _res, next) => {
    console.log('Merhaba, post isteği attınız');
    next()
  }
  
fastify.get("/hello", { preHandler: [middleware] }, (req, reply) => {
    reply.send("Merhaba, get isteği attınız")
});

fastify.post("/hello",  { preHandler: [middleware,middlewarePost] }, (req, reply) => {
    reply.send("Merhaba, post isteği attınız")
})

fastify.put("/hello",  { preHandler: [middleware] }, (req, reply) => {
    reply.send("Merhaba, put isteği attınız")
})

fastify.delete("/hello", { preHandler: [middleware] } ,  (req, reply) => {
    reply.send("Merhaba, delete isteği attınız")
})

fastify.listen({port:3000}, (err, address) => {
    console.log("running")
    if(err) throw err;
})