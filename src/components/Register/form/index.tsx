import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

// components
import Component_TextInput from './textInput';
import Component_dropDown from './dropDown';
import {get_dataProvinsi} from '../../../utils/get_dataProvinsi';
import {get_dataKota} from '../../../utils/get_dataKota';
import {ItemType} from 'react-native-dropdown-picker';

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

const Form = () => {
  // render
  const [render, setRender] = useState(false);

  // data
  const data_provinsi = useRef<type_provinsi[]>([]);
  const data_kota = useRef<type_kota[]>([]);

  // handler get data provinsi
  const handler_get_dataProvinsi = async () => {
    const result: type_provinsi[] = (await get_dataProvinsi()) || [];
    data_provinsi.current = result;
    setRender(!render);
  };

  // handler get data kota
  const handler_get_dataKota = async (value: ItemType<string>) => {
    const result: type_kota[] = (await get_dataKota(value)) || [];
    data_kota.current = result;
    setRender(!render);
  };

  // handler get data kecamatan
  const handler_get_dataKecamatan = async (value: ItemType<string>) => {};

  // lifecycle
  useEffect(() => {
    handler_get_dataProvinsi();
  }, []);

  return (
    <View style={styles.container}>
      {/* Nama lengkap */}
      <Component_TextInput />
      {/* Provinsi */}
      <Component_dropDown
        placeHolder="Provinsi"
        zIndex={5000}
        items={data_provinsi.current}
        onSelectItem={value => handler_get_dataKota(value)}
      />
      {/* Kota */}
      <Component_dropDown
        placeHolder="Kota"
        zIndex={4000}
        items={data_kota.current}
        onSelectItem={value => console.log('lala', value)}
      />
      {/* Kecamatan */}
      <Component_dropDown
        placeHolder="Kecamatan"
        zIndex={3000}
        items={data_provinsi.current}
        onSelectItem={value => console.log('gaga', value)}
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
