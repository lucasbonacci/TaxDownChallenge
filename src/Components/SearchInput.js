import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from 'react-native-elements'

import { useTheme } from '@/Hooks'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Platform } from 'react-native'

const SearchInput = ({ placeholder, value, setValue }) => {
  const { Layout, Fonts, Common, Colors, Gutters } = useTheme()

  return (
    <SearchBar
      placeholder={placeholder}
      onChangeText={setValue}
      value={value}
      platform={Platform.OS}
      searchIcon={
        <FontAwesomeIcon
          size={20}
          icon={faMagnifyingGlass}
          color={Colors.gray3}
          style={{ marginLeft: 5 }}
        />
      }
      cancelIcon={
        <FontAwesomeIcon
          size={20}
          icon={faXmark}
          color={Colors.gray3}
          style={{ marginLeft: 5 }}
        />
      }
      clearIcon={false}
      containerStyle={Platform.OS === 'ios' && { padding: 0, margin: -10 }}
      inputContainerStyle={{
        backgroundColor: Colors.gray,
        borderRadius: 10,
      }}
      inputStyle={Fonts.textRegular}
    />
  )
}

SearchInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
  value: '',
  setValue: () => {},
  placeholder: 'Search',
}

export default SearchInput
