export const titleAliment = 'Alimento diario';
export const titleObservations = 'Observaciones';
export const observations =
  '\u2022 Se debe brindar un fuente de calor los primeros 12 dias de vida del pollito y agua con vitaminas los primeros 5 dias.\n\u2022 La cantidad de comederos, bebederos y la altura de los mismos es indispensable en un adecuado pograma de alimentación de pollos.\n\u2022 La cantidad de alimento y su consumo puede variar según el sexo del ave (hembra o macho) la marca de concentrado, temperatura ambiental y densidad.';

export const getConsumption = (weight) => {
  if (weight > 3264) {
    return 227;
  }
  if (weight > 3179) {
    return 226;
  }
  if (weight > 3093) {
    return 225;
  }
  if (weight > 3007) {
    return 224;
  }
  if (weight > 2918) {
    return 222;
  }
  if (weight > 2830) {
    return 218;
  }
  if (weight > 2741) {
    return 216;
  }
  if (weight > 2652) {
    return 213;
  }
  if (weight > 2562) {
    return 209;
  }
  if (weight > 2472) {
    return 206;
  }
  if (weight > 2293) {
    return 200;
  }
  if (weight > 2203) {
    return 197;
  }
  if (weight > 2120) {
    return 193;
  }
  if (weight > 2022) {
    return 188;
  }
  if (weight > 1932) {
    return 184;
  }
  if (weight > 1843) {
    return 179;
  }
  if (weight > 1758) {
    return 175;
  }
  if (weight > 1670) {
    return 170;
  }
  if (weight > 1581) {
    return 165;
  }
  if (weight > 1497) {
    return 159;
  }
  if (weight > 1415) {
    return 154;
  }
  if (weight > 1332) {
    return 149;
  }
  if (weight > 1250) {
    return 143;
  }
  if (weight > 1173) {
    return 136;
  }
  if (weight > 1094) {
    return 131;
  }
  if (weight > 1017) {
    return 125;
  }
  if (weight > 944) {
    return 119;
  }
  if (weight > 880) {
    return 114;
  }
  if (weight > 809) {
    return 107;
  }
  if (weight > 742) {
    return 101;
  }
  if (weight > 680) {
    return 95;
  }
  if (weight > 618) {
    return 89;
  }
  if (weight > 561) {
    return 84;
  }
  if (weight > 520) {
    return 78;
  }
  if (weight > 450) {
    return 71;
  }
  if (weight > 390) {
    return 66;
  }
  if (weight > 325) {
    return 58;
  }
  if (weight > 283) {
    return 51;
  }
  if (weight > 248) {
    return 47;
  }
  if (weight > 212) {
    return 42;
  }
  if (weight > 195) {
    return 38;
  }
  if (weight > 165) {
    return 36;
  }
  if (weight > 140) {
    return 33;
  }
  if (weight > 110) {
    return 22;
  }
  if (weight > 90) {
    return 18;
  }
  if (weight > 73) {
    return 18;
  }
  if (weight > 60) {
    return 15;
  }
  if (weight > 0) {
    return 12;
  }
};
