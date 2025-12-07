import express from 'express';
import { handleSmoobuWebhook } from './webhooks/smoobu.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook/smoobu', handleSmoobuWebhook);

app.listen(PORT, () => {
  console.log(`[Software-Grank] Server listening on port ${PORT}`);
});

export { app };
