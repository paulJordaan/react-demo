// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: 'client/build',
  // noCors: true,
});

server.use('/api', router);
server.use(middlewares);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
