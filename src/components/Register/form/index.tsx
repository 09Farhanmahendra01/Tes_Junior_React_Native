import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ItemType} from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';

// components
import Component_TextInput from './textInput';
import Component_dropDown from './dropDown';

// utils
import {get_dataProvinsi} from '../../../utils/get_dataProvinsi';
import {get_dataKota} from '../../../utils/get_dataKota';
import {get_dataKecamatan} from '../../../utils/get_dataKecamatan';

// reducer
import {
  handler_input_namaKecamatan,
  handler_input_namaKota,
  handler_input_namaProvinsi,
  handler_input_namaUser,
} from '../../../state_management/context/data_register';
import {
  handler_ubah_data_kecamatan,
  handler_ubah_data_kota,
  handler_ubah_data_provinsi,
} from '../../../state_management/context/data_daerah';

// type provinsi
type type_provinsi = {
  id: number;
  label: string;
  value: string;
};
// type kota
type type_kota = {
  id: number;
  province_id: number;
  label: string;
  value: string;
};
// type kecamatan
type type_kecamatan = {
  id: number;
  regency_id: number;
  label: string;
  value: string;
};

const Form = () => {
  // redux
  const dispatch = useDispatch();

  // render
  const [render, setRender] = useState(false);

  // nama user,provinsi,kota,kecamatan yang di pilih
  const nama_user = useSelector((value: any) => value.Data_register.nama_user);

  // data
  let data_provinsi = useSelector((value: any) => value.Data_daerah.provinsi);
  let data_kota = useSelector((value: any) => value.Data_daerah.kota);
  let data_kecamatan = useSelector((value: any) => value.Data_daerah.kecamatan);

  // handler get data provinsi
  const handler_get_dataProvinsi = async () => {
    const result: type_provinsi[] = (await get_dataProvinsi()) || [];
    dispatch(handler_ubah_data_provinsi(result));
    setRender(!render);
  };

  // handler get data kota
  const handler_get_dataKota = async (value: ItemType<string>) => {
    const result: type_kota[] = (await get_dataKota(value)) || [];
    dispatch(handler_ubah_data_kota(result));
    setRender(!render);
  };

  // handler get data kecamatan
  const handler_get_dataKecamatan = async (value: ItemType<string>) => {
    const result: type_kecamatan[] = (await get_dataKecamatan(value)) || [];
    dispatch(handler_ubah_data_kecamatan(result));
    setRender(!render);
  };

  // lifecycle
  useEffect(() => {
    handler_get_dataProvinsi();
  }, []);

  return (
    <View style={styles.container}>
      {/* Nama lengkap */}
      <Component_TextInput
        onChangeText={(value: string) => {
          dispatch(handler_input_namaUser(value));
        }}
        value={nama_user}
      />
      {/* Provinsi */}
      <Component_dropDown
        placeHolder="Provinsi"
        zIndex={5000}
        items={data_provinsi}
        onSelectItem={(value: any) => {
          dispatch(handler_input_namaProvinsi(value.label));
          handler_get_dataKota(value);
          // reset
          dispatch(handler_ubah_data_kecamatan([]));
          dispatch(handler_input_namaKota(''));
          dispatch(handler_input_namaKecamatan(''));
        }}
      />
      {/* Kota */}
      <Component_dropDown
        placeHolder="Kota"
        zIndex={4000}
        items={data_kota}
        onSelectItem={(value: any) => {
          dispatch(handler_input_namaKota(value.label));
          handler_get_dataKecamatan(value);
          // reset
          dispatch(handler_input_namaKecamatan(''));
        }}
      />
      {/* Kecamatan */}
      <Component_dropDown
        placeHolder="Kecamatan"
        zIndex={3000}
        items={data_kecamatan}
        onSelectItem={(value: any) => {
          dispatch(handler_input_namaKecamatan(value.label));
        }}
      />
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
