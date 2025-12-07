import { log } from '../services/logger.js';
import { createBookingFromSmoobuPayload } from '../services/airtableService.js';

async function handleSmoobuWebhook(req, res) {
  const payload = req.body;
  log('Received Smoobu webhook payload', payload);

  await createBookingFromSmoobuPayload(payload);

  return res.status(200).json({ ok: true });
}

export { handleSmoobuWebhook };
