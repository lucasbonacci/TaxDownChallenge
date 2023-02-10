/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.white,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      backgroundDark: {
        backgroundColor: Colors.transparentBlack,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.lcWhite,
        color: Colors.darker,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: Colors.lcWhite,
        borderRadius: 10,
      },
      button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
        backgroundColor: Colors.primary,
        width: '100%',
      },
      buttonWhite: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 12,
        backgroundColor: Colors.white,
        width: '100%',
      },
      buttonText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: Colors.white,
        width: '100%',
      },
      defaultButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
        borderRadius: 12,
        backgroundColor: Colors.transparent,
        borderWidth: 1,
        borderColor: Colors.primary,
      },
      defaultButtonText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: Colors.primary,
        width: '100%',
      },
      tabContainer: {
        backgroundColor: 'rgba(118, 118, 128, 0.05)',
        borderRadius: 9,
      },
      disabled: {
        opacity: 0.6,
      },
      label: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 16,
        backgroundColor: Colors.lcGray,
      },
      bottomDivider: {
        borderBottomColor: Colors.separatorGray,
        borderBottomWidth: 1,
      },
    }),
  }
}
