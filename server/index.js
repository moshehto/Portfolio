import express from 'express';
import cors from 'cors';
import chatRoute from './api/chat.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/chat', chatRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
