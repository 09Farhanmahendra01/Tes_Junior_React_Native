import axios from 'axios';

// URL
import {DATA_PROVINSI_URL} from '../../config/baseURL';

type Item = {
  id: number;
  label: string;
  value: string;
};
export const get_dataProvinsi = async () => {
  try {
    const result = await axios.get(DATA_PROVINSI_URL);
    const new_result: Item[] = [];
    // ubah struktur objek
    for (const value of result.data) {
      new_result.push({
        id: value.id,
        label: value.name,
        value: value.name,
      });
    }
    return new_result;
  } catch (e) {
    console.log('error pada saat get data provinsi: ', e);
  }
};
