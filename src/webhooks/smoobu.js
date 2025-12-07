import { createBookingFromSmoobuPayload } from '../services/airtableService.js';
import { log } from '../utils/logger.js';

/**
 * Handler for Smoobu Webhook
 * Receives JSON payload from Smoobu and forwards it to Airtable
 */
export async function handleSmoobuWebhook(req, res) {
  try {
    const payload = req.body;

    log('Received Smoobu Webhook', payload);

    // Validación básica
    if (!payload || !payload.id) {
      log('Invalid Smoobu Webhook Payload', payload);
      return res
        .status(400)
        .json({ success: false, error: 'Invalid payload: missing id' });
    }

    // Map Smoobu → Airtable
    const mappedPayload = {
      id: payload.id,
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      apartmentId: payload.apartmentId,
      channelName: payload.channelName,
      arrival: payload.arrival,
      departure: payload.departure,
      adults: payload.adults,
      children: payload.children,
    };

    const result = await createBookingFromSmoobuPayload(mappedPayload);

    return res.status(200).json({
      success: true,
      airtableRecord: result,
    });
  } catch (error) {
    log('Smoobu Webhook Handler Error', error);
    return res
      .status(500)
      .json({ success: false, error: error.message || 'Internal error' });
  }
}
