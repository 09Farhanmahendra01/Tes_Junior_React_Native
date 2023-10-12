import {ItemType} from 'react-native-dropdown-picker';
import {DATA_KECAMATAN_URL} from '../../config/baseURL';
import axios from 'axios';

type new_result = {
  id: number;
  regency_id: number;
  label: string;
  value: string;
};
export const get_dataKecamatan = async (value: ItemType<string> | any) => {
  try {
    const URL_KECAMATAN = await DATA_KECAMATAN_URL(value.id);
    const result = await axios.get(`${URL_KECAMATAN}`);
    const new_result: new_result[] = [];
    // ubah struktur objek
    for (const value of result.data) {
      new_result.push({
        id: value.id,
        regency_id: value.regency_id,
        label: value.name,
        value: value.name,
      });
    }
    return new_result;
  } catch (e) {
    console.log('error pada saat get data kecamatan: ', e);
  }
};
