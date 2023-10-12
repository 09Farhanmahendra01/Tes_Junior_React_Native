import axios from 'axios';
import {handler_loading_register} from '../../state_management/context/loading_register';
import {URL_SEND_MESSAGE} from '../../config/baseURL';
import {Alert} from 'react-native';

// data spesifik
import {
  handler_input_namaKecamatan,
  handler_input_namaKota,
  handler_input_namaProvinsi,
  handler_input_namaUser,
} from '../../state_management/context/data_register';

// data daerah
import {
  handler_ubah_data_kecamatan,
  handler_ubah_data_kota,
} from '../../state_management/context/data_daerah';

export const register = async (
  nama_user: string,
  nama_provinsi: string,
  nama_kota: string,
  nama_kecamatan: string,
  dispatch: any,
) => {
  dispatch(handler_loading_register(true));
  const multipart = new FormData();
  const data: any = {
    target: '085711197024',
    message: `Nama saya ${nama_user} berasal dari provinsi ${nama_provinsi}, kota ${nama_kota}, kecamatan ${nama_kecamatan}`,
  };
  for (const val in data) multipart.append(val, data[val]);
  // proses send message
  try {
    const result = await axios.post(`${URL_SEND_MESSAGE}`, multipart, {
      headers: {
        Authorization: 'iA+BkdZMI_uMvXI_1!T5',
        'Content-Type': 'multipart/form-data',
      },
    });
    if (result.data.detail == 'success! message in queue') {
      dispatch(handler_loading_register(false));
      Alert.alert('Status', 'Data anda Berhasil terdaftar', [
        {
          text: 'Oke',
          // reset
          onPress: () => {
            dispatch(handler_input_namaUser(''));
            dispatch(handler_input_namaProvinsi(''));
            dispatch(handler_input_namaKota(''));
            dispatch(handler_input_namaKecamatan(''));
            dispatch(handler_ubah_data_kota([]));
            dispatch(handler_ubah_data_kecamatan([]));
          },
        },
      ]);
    } else {
      Alert.alert('Status', 'Data Tidak Berhasil terdaftar', [
        {
          text: 'Oke',
          // reset
          onPress: () => {
            dispatch(handler_input_namaUser(''));
            dispatch(handler_input_namaProvinsi(''));
            dispatch(handler_input_namaKota(''));
            dispatch(handler_input_namaKecamatan(''));
            dispatch(handler_ubah_data_kota([]));
            dispatch(handler_ubah_data_kecamatan([]));
          },
        },
      ]);
    }
  } catch (e) {
    console.log('error pada saat register: ', e);
  }
};
