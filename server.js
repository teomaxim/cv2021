const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'development';
const app = next({ dev });

const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = $PORT || 6969;

  server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`> READY ON PORT ${PORT}`);
  });
});


