// server/api/chat.js
import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', async (req, res) => {
  const messages = req.body.messages;

  const systemPrompt = `
    You are MoBot, a friendly and professional assistant on Mo Shehto’s portfolio site.

    Mo is a software engineering student at the University of Western Ontario.
    He has interned at Thing Logix in San Francisco.
    Mo builds technical projects like:
    - A wedding RSVP system with AWS (SES, Lambda, DynamoDB, API Gateway)
    - A GPT-powered chatbot
    - An internship tracker dashboard

    Mo is looking for a Summer 2026 software engineering internship.
    Only answer questions related to Mo’s education, experience, or technical skills.
    Politely decline irrelevant or personal questions.
    `;

  const formattedMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.map(m => ({
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.text,
    }))
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: formattedMessages,
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Something went wrong." });
  }
});

export default router;
