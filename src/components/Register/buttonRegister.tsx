import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {appColors} from '../../theme/appColors';

const Button_Register = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  button: {
    height: hp('8%'),
    backgroundColor: appColors.warna_biru,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: hp('2%'),
    color: appColors.warna_putih,
  },
});
export default Button_Register;
