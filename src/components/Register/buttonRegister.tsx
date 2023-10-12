import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {appColors} from '../../theme/appColors';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../utils/register';

const Button_Register = () => {
  // redux
  const dispatch = useDispatch();
  // nama user,provinsi,kota,kecamatan yang di pilih
  const nama_user = useSelector((value: any) => value.Data_register.nama_user);
  const nama_provinsi = useSelector(
    (value: any) => value.Data_register.nama_provinsi_yangDipilih,
  );
  const nama_kota = useSelector(
    (value: any) => value.Data_register.nama_kota_yangDipilih,
  );
  const nama_kecamatan = useSelector(
    (value: any) => value.Data_register.nama_kecamatan_yangDipilih,
  );

  // handler register
  const handler_register = () => {
    register(nama_user, nama_provinsi, nama_kota, nama_kecamatan, dispatch);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handler_register()}>
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
