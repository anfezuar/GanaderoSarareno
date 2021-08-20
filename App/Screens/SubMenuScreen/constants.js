const Menu = {
  COW_SCREEN: 'Ganado',
  FISH_SCREEN: 'Peces',
  CHICKEN_SCREEN: 'Pollos',
};

export const getButtons = (screen) => {
  switch (screen) {
    case Menu.FISH_SCREEN:
      return {
        firstButtonTitle: 'Cantidad de alimento',
        secondButtonTitle: 'Densidad',
        firstOnPress: () => {},
        secondOnPress: () => {},
      };
    case Menu.CHICKEN_SCREEN:
      return {
        firstButtonTitle: 'Cantidad de alimento',
        secondButtonTitle: 'Densidad',
        firstOnPress: () => {},
        secondOnPress: () => {},
      };
    default:
      return {
        firstButtonTitle: 'Aprende a realizar el aforo',
        secondButtonTitle: 'Calcular carga animal',
        firstOnPress: () => {},
        secondOnPress: () => {},
      };
  }
};
