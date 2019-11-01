const server = require('./data/server');

// ? LISTENER
const port = 5000;
server.listen(port, () => console.log(`SERVER LISTENING ON PORT: ${port}`))