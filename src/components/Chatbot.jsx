import React, { useState, useRef, useEffect } from 'react';
import './styling-comp/chatbot.css'; // You'll style it here
import avatar from '../assets/sleeping-cat.png';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I’m MoBot. Ask me anything about Mo 👋" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      setMessages([
        ...newMessages,
        { sender: 'bot', text: `You asked: "${input}". I'm still learning about Mo.` },
      ]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <img src={avatar} alt="MoBot" className="chatbot-avatar" />
        <div>
          <div className="chatbot-name">MoBot</div>
          <div className="chatbot-subtitle">Ask me anything about Mo</div>
        </div>
        <span className="chatbot-icon">💬</span>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message-row ${msg.sender}`}>
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        {loading && (
          <div className="message-row bot">
            <div className="message-bubble typing">MoBot is typing...</div>
          </div>
        )}
        <div ref={scrollRef}></div>
      </div>

      <div className="chatbot-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="chatbot-input"
        />
        <button onClick={sendMessage} className="chatbot-send">Send</button>
      </div>
    </div>
  );
}
