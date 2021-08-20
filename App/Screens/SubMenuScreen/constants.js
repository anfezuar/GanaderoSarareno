const Menu = {
  COW_SCREEN: 'Ganado',
  FISH_SCREEN: 'Peces',
  CHICKEN_SCREEN: 'Pollos',
};

export const getButtons = (screen, navigation, params) => {
  switch (screen) {
    case Menu.FISH_SCREEN:
      return {
        firstButtonTitle: 'Cantidad de alimento',
        secondButtonTitle: 'Densidad',
        firstOnPress: () => navigation.navigate('FoodScreen', params),
        secondOnPress: () => navigation.navigate(''),
      };
    case Menu.CHICKEN_SCREEN:
      return {
        firstButtonTitle: 'Cantidad de alimento',
        secondButtonTitle: 'Densidad',
        firstOnPress: () => navigation.navigate('FoodScreen', params),
        secondOnPress: () => navigation.navigate(''),
      };
    default:
      return {
        firstButtonTitle: 'Aprende a realizar el aforo',
        secondButtonTitle: 'Calcular carga animal',
        firstOnPress: () => navigation.navigate('Video'),
        secondOnPress: () => navigation.navigate('CalcularCarga'),
      };
  }
};
