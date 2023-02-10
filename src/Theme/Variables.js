/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  red: '#FF3B30',
  blue: '#007AFF',
  yellow: '#D7C317',
  green: '#008000',
  // Grays
  gray: '#f4f4f4',
  gray1: '#f2f2f2',
  gray3: '#929192',

  //blues
  blue1: '#2f2e46',
  blue2: '#3d3a62',
  blue3: '#848395',
  blue4: '#c2c2ca',
  blue5: '#e1e1e8',

  transparentBlack: 'rgba(0, 0, 0, 0.5)',
  // Primarys
  success: '#00B574',
  error: '#B50B00',
  white: '#FEFEFF',
  warning: '#F7CE46',
  primaryFixed: '#00A99E',
  darker: '#222222',
  // Primary variant
  primary: '#00dc5a',
  green0: '#00b94b',
  green1: '#397451',
  green2: '#99f1bd',
  green3: '#e0f7e9',
  green4: '#397451',
  green5: '#f5f9f6',
  green6: '#569A72',

  secundary: '#003A70',
  light: '#A1DEE5',
}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  huge: 24,
  large: 20,
  regular: 16,
  small: 14,
  tiny: 12,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
