function getNights(arrivalIso, departureIso) {
  const arrival = new Date(arrivalIso);
  const departure = new Date(departureIso);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const diff = departure.getTime() - arrival.getTime();
  return Math.round(diff / millisecondsPerDay);
}

export { getNights };
