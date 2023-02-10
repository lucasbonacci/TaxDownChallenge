/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    display: {
      fontSize: FontSize.huge,
      color: Colors.darker,
    },
    headline: {
      fontSize: FontSize.large,
      color: Colors.darker,
    },
    body: {
      fontSize: FontSize.regular,
      color: Colors.darker,
    },
    bodyAlt: {
      fontSize: FontSize.small,
      color: Colors.darker,
    },

    button: {
      fontSize: FontSize.regular,
      color: Colors.darker,
    },

    buttonAlt: {
      fontSize: FontSize.regular,
      color: Colors.darker,
    },

    buttonLink: {
      fontSize: FontSize.small,
      color: Colors.darker,
    },

    small: {
      fontSize: FontSize.tiny,
      color: Colors.darker,
    },

    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textBold: {
      fontWeight: 'bold',
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLink: {
      color: Colors.green1,
    },
    textError: {
      color: Colors.error,
    },
  })
}
