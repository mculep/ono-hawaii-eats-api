
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);


// Mahalo https://github.com/kubowania/ for teaching me how to make my own api!
//https://youtu.be/FLnxgSZ0DG4










