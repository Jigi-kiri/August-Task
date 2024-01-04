import React, { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import "./ChatApp.css";

const ChatApp = () => {
  const [message, setMessage] = useState([]);
  const [socketUrl, setSocketUrl] = useState("wss://echo.websocket.org");
  const [inputMessage, setInputMessage] = useState("");
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const handleMessageSend = () => {
    sendMessage(inputMessage);
    setInputMessage("");
  };

  useEffect(() => {
    if (lastMessage !== null) {
      setMessage((prev) => [...prev, lastMessage.data]);
    }
  }, [lastMessage]);

  return (
    <div className="chat-wrapper">
      <div className="message-wrapper">
        {message.length > 0 &&
          message.map((el, index) => (
            <div className="message-list" key={index}>
              {el}
            </div>
          ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your message.."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
      </div>
      <button onClick={handleMessageSend}>Send Message</button>
    </div>
  );
};

export default ChatApp;
