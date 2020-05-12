const ftoc = function(temperature) {
  let convertedTemperature = ((temperature - 32) * (5 / 9));
  let roundedTemperature = Math.round(convertedTemperature * 10) / 10;

  return roundedTemperature;
}

const ctof = function(temperature) {
  let convertedTemperature = ((temperature * (9 / 5)) + 32);
  let roundedTemperature = Math.round(convertedTemperature * 10) / 10;

  return roundedTemperature;
}

module.exports = {
  ftoc,
  ctof
}
