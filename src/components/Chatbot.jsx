import React, { useState, useRef, useEffect } from 'react';
import './styling-comp/chatbot.css';
import avatar from '../assets/sleeping-cat.png';

// Use Vite environment variable for API URL
const API_BASE = import.meta.env.VITE_API_URL;

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I’m MoBot. Ask me anything about Mo 👋" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessages = [...messages, { sender: 'user', text: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch("https://mo-api-url.up.railway.app/api/chat", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      setMessages([...newMessages, { sender: 'bot', text: data.reply || 'No reply received.' }]);
    } catch (err) {
      console.error('Error fetching chatbot response:', err);
      setMessages([...newMessages, { sender: 'bot', text: 'Something went wrong. Please try again later.' }]);
    }

    setLoading(false);
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
        {messages.map((msg, index) => (
          <div key={index} className={`message-row ${msg.sender}`}>
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
