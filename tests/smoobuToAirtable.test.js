import bookingPayload from './sample-payloads/smoobu-booking-update.json' assert { type: 'json' };
import { getNights } from '../src/utils/dateUtils.js';

const nights = getNights(bookingPayload.arrival, bookingPayload.departure);

const mappedRecord = {
  'Booking ID': bookingPayload.id,
  'Guest Name': `${bookingPayload.firstname} ${bookingPayload.lastname}`,
  'Apartment ID': bookingPayload.apartmentId,
  'Channel Name': bookingPayload.channelName,
  'Arrival Date': bookingPayload.arrival,
  'Departure Date': bookingPayload.departure,
  Adults: bookingPayload.adults,
  Children: bookingPayload.children
};

console.log(`Nights: ${nights}`);
console.log('Mapped Airtable record:', mappedRecord);
