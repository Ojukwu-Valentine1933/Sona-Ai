const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_API_KEY } = require("../../../config/dotEnv");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const runGeminiConversation = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    return "Sorry i am currently having issues processing your questions. You can perhaps check back later...";
  
  }
};

module.exports = runGeminiConversation;
