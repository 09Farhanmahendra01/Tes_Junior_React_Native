import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

import {appColors} from '../../../theme/appColors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Component_TextInput = () => {
  return (
    <TextInput
      placeholder="Nama Lengkap"
      placeholderTextColor={appColors.warna_putih}
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: appColors.warna_putih,
    backgroundColor: appColors.warna_hitam,
    height: hp('7.5%'),
    borderWidth: 2,
    borderColor: appColors.warna_putih,
    borderRadius: 5,
    paddingLeft: 12,
    marginBottom: 15,
  },
});
export default Component_TextInput;
