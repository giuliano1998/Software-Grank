import Airtable from 'airtable';
import { log } from './logger.js';

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

const base = apiKey && baseId ? new Airtable({ apiKey }).base(baseId) : null;

async function createBookingFromSmoobuPayload(payload) {
  if (!base) {
    log('Airtable credentials are not configured. Skipping record creation.');
    return null;
  }

  const record = {
    'Booking ID': payload.id,
    'Guest Name': `${payload.firstname ?? ''} ${payload.lastname ?? ''}`.trim(),
    'Apartment ID': payload.apartmentId,
    'Channel Name': payload.channelName,
    'Arrival Date': payload.arrival,
    'Departure Date': payload.departure,
    Adults: payload.adults,
    Children: payload.children
  };

  try {
    const createdRecord = await base('Bookings').create(record);
    log('Created Airtable booking record', createdRecord);
    return createdRecord;
  } catch (error) {
    log('Failed to create Airtable booking record', error);
    throw error;
  }
}

export { createBookingFromSmoobuPayload };
