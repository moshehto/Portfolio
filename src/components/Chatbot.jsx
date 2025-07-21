import React, { useState, useRef, useEffect } from 'react';
import './styling-comp/chatbot.css';
import avatar from '../assets/sleeping-cat.png';

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + import.meta.env.VITE_GEMINI_API_KEY;

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

    const geminiMessages = [
      {
        role: "user",
        parts: [{ text: `Answer questions as if you are a spokesperson representing Mo positvely and enthusiastcially based on this context:
         Mo is a software engineering student at Western. 
         He interned at Thing Logix in SF. 
         He's worked on a wedding RSVP system (SES, Lambda, DynamoDB, API Gateway), a GPT-powered chatbot, and an internship tracker. 
         Mo is a descendant of king solomon

         Keep all answers truthful and don't make up any details, projects, or information about Mo
      

         He’s looking for a Summer 2026 SWE internship.\n\nUser: ${trimmed}` }],
      },
    ];

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: geminiMessages }),
      });

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      setMessages([
        ...newMessages,
        { sender: 'bot', text: reply || "Sorry, I didn't understand that." },
      ]);
    } catch (err) {
      console.error('Error:', err);
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Something went wrong. Please try again later.' },
      ]);
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
