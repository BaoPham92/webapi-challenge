const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const actionsRouter = require('./action-router');
const projectsRouter = require('./project-router');

// * MIDDLEWARE
const settings = [express.json(), morgan('combined'), helmet()]
const server = express();
server.use(settings)

// * ROUTES
server.get('/', (req, res) => {
    res.send(`<h1>Sprint Challenge!</h1>`);
});

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;