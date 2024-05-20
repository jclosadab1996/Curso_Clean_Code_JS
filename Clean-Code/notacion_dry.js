// Código que se repite

const juanAverage = (90 + 50 + 70) / 3;
const sofiaAverage = (80 + 90 + 70 + 80) / 4;
const anaAverage = (60 + 90 + 70 + 100 + 95) / 5;

// Sin repetir código
function average(grades) {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

const juanAverage1 = average([90, 50, 70]);
const sofiaAverage1 = average([80, 90, 70, 80]);
const anaAverage1 = average([60, 90, 70, 100, 95]);
