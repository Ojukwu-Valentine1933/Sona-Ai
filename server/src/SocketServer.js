const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./helpers/sockets/chatHelpers");
const messageFormat = require("./helpers/sockets/messageFormat");
const runGeminiConversation = require("./helpers/sockets/gemini/gemini")

const listen = async (io) => {
  const bot = { name: "SonaAI" };

  io.on("connection", (socket) => {
  

    socket.on("joinRoom", ({ userData, room }) => {
      const user = userJoin(socket.id, userData, room);
      socket.join(user.room);

      if (user.room === userData.username) {
        socket.emit(
          "message",
          messageFormat(
            bot.name,
            `Hello ${userData.username}, welcome to Sona AI, the best voice interactive AI. How can I help you today?`,
            undefined,
            "new-msg"
          )
        );
      }
    });

    socket.on("chatMessage", async (msg) => {
      const user = getCurrentUser(socket.id);
      if (user) {

        io.to(user.room).emit(
          "message",
          messageFormat(
            user.userData.username,
            msg.message,
            user.userData.profileImage
          )
        );

        const response = await runGeminiConversation(msg.message)
       

        if (response) {
          io.to(user.room).emit(
            "message",
            messageFormat(bot.name, response.replace(/\*/g, ""), undefined)
          );
        }
      } 
    });

  });
};

module.exports = { listen };