const Chat = () => {
    const retriveAudio = async() => {
  try {
    const response = await fetch("https://sona-ai-4.onrender.com/audio/audio-files", {
        method: "GET"
    })
  } catch (error) {
    
  }
    }
    return(
        <h1>Chat Page</h1>
    )
}
export default Chat