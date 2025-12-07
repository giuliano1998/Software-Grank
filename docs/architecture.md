# Arquitectura

Este proyecto recibe webhooks enviados por Smoobu, transforma los datos relevantes de la reserva y los persiste en Airtable. La capa de webhooks expone un endpoint HTTP que captura los eventos de Smoobu.

El servicio procesa el payload, mapea los campos a la tabla "Bookings" de Airtable y crea el registro correspondiente. A futuro, este flujo puede reemplazar o complementar automatizaciones existentes en Zapier, centralizando la lógica en este servicio Node.js.
