const Chat = () => {
    const retriveAudio = async() => {
  try {
    const response = await fetch("http://localhost:3001/audio/audio-files", {
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