function log(message, data) {
  if (typeof data !== 'undefined') {
    console.log(`[Software-Grank] ${message}`, data);
  } else {
    console.log(`[Software-Grank] ${message}`);
  }
}

export { log };
