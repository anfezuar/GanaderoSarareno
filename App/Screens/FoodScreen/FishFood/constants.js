export const titleProtein = '% Proteína';
export const titleAliment = 'Alimento diario';
export const titleObservations = 'Observaciones';
export const observations =
  'Este consumo de alimento esta basado en biomasa en un sistema semiintensivo (hasta 5 peces m2).\nLa cantidad de alimento y su consumo  puede variar según la marca de concentrado, temperatura del agua y densidad.';

export const getProtein = (weight) => {
  if (weight > 180) {
    return '24% - 20%';
  }
  if (weight > 100) {
    return '30% - 25%';
  }
  if (weight > 10) {
    return '36% - 30%';
  }
  if (weight > 0) {
    return '40% - 38%';
  }
};

export const getBiomasa = (weight) => {
  if (weight > 400) {
    return 430 * (1.5 / 100);
  }
  if (weight > 380) {
    return 400 * (1.5 / 100);
  }
  if (weight > 360) {
    return 380 * (1.6 / 100);
  }
  if (weight > 340) {
    return 360 * (1.6 / 100);
  }
  if (weight > 320) {
    return 340 * (1.6 / 100);
  }
  if (weight > 300) {
    return 320 * (1.6 / 100);
  }
  if (weight > 280) {
    return 300 * (1.6 / 100);
  }
  if (weight > 260) {
    return 280 * (1.7 / 100);
  }
  if (weight > 240) {
    return 260 * (1.9 / 100);
  }
  if (weight > 220) {
    return 240 * (2.0 / 100);
  }
  if (weight > 200) {
    return 220 * (2.0 / 100);
  }
  if (weight > 180) {
    return 200 * (2.5 / 100);
  }
  if (weight > 160) {
    return 180 * (2.5 / 100);
  }
  if (weight > 140) {
    return 160 * (2.5 / 100);
  }
  if (weight > 120) {
    return 140 * (3.0 / 100);
  }
  if (weight > 100) {
    return 120 * (3.0 / 100);
  }
  if (weight > 80) {
    return 100 * (3.5 / 100);
  }
  if (weight > 60) {
    return 80 * (4.0 / 100);
  }
  if (weight > 40) {
    return 60 * (4.5 / 100);
  }
  if (weight > 20) {
    return 40 * (5.0 / 100);
  }
  if (weight > 15) {
    return 20 * (6.0 / 100);
  }
  if (weight > 10) {
    return 15 * (7.8 / 100);
  }
  if (weight > 5) {
    return 10 * (7.5 / 100);
  }
  if (weight > 3) {
    return 5 * (8.0 / 100);
  }
  if (weight > 0) {
    return 3 * (9.0 / 100);
  }
};
