import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// components
import Component_TextInput from './textInput';
import Component_dropDown from './dropDown';

const Form = () => {
  return (
    <View style={styles.container}>
      {/* Nama lengkap */}
      <Component_TextInput />
      {/* Provinsi */}
      <Component_dropDown placeHolder="Provinsi" zIndex={5000} />
      {/* Kota */}
      <Component_dropDown placeHolder="Kota" zIndex={4000} />
      {/* Kecamatan */}
      <Component_dropDown placeHolder="Kecamatan" zIndex={3000} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingTop: 10,
    // backgroundColor: 'yellow',
  },
});
export default Form;
