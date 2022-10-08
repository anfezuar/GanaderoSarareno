import { Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

const [shortDimension] =
  WINDOW_WIDTH < WINDOW_HEIGHT ? [WINDOW_WIDTH, WINDOW_HEIGHT] : [WINDOW_HEIGHT, WINDOW_WIDTH];

const guidelineBaseWidth = 350;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

export { scale };
