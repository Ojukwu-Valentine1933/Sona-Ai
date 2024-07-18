const http = require("http");
const app = require("./app");
const httpServer = http.createServer(app);
const mongooseConnection = require("./mongoose");
const { Server } = require("socket.io");
const { PORT } = require("./config/dotEnv");
const socketServer = require("./SocketServer");

const io = new Server(httpServer, {
  cors: {
    origin: ["https://sona-ai.vercel.app", "http://localhost:3000"],
  },
});

const startServer = async () => {
  await mongooseConnection();
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  socketServer.listen(io);
};

startServer();
