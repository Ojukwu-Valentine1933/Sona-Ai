const http = require("http");
const app = require("./app")
const httpServer = http.createServer(app);
const mongooseConnection = require("./mongoose")
const {Server} = require("socket.io")
const {PORT} = require("./config/dotEnv")
const socketServer  = require("./SocketServer")




const io = new Server(httpServer, {
    cors: {
      origin: "https://sona-acm6xns2w-ojukwu-valentine-chibuzor-s-projects.vercel.app",
    },
  });




const startServer = async()=>{
    httpServer.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    mongooseConnection();
    socketServer.listen(io);
}

startServer();