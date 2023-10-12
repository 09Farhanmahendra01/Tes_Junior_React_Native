import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

import {appColors} from '../../../theme/appColors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

type props = {
  onChangeText: (value: string) => void;
  value: string;
};
const Component_TextInput: React.FC<props> = ({onChangeText, value}) => {
  return (
    <TextInput
      value={value}
      placeholder="Nama Lengkap"
      placeholderTextColor={appColors.warna_putih}
      style={styles.textInput}
      onChangeText={onChangeText}
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
    fontSize: hp('1.4%'),
  },
});
export default Component_TextInput;
