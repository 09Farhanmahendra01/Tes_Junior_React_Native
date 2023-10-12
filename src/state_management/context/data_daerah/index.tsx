import {createSlice} from '@reduxjs/toolkit';

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

interface props {
  provinsi: type_provinsi[];
  kota: type_kota[];
  kecamatan: type_kecamatan[];
}
const initialState: props = {
  provinsi: [],
  kota: [],
  kecamatan: [],
};
const Data_daerah = createSlice({
  name: 'data daerah',
  initialState,
  reducers: {
    handler_ubah_data_provinsi: (state, action) => {
      state.provinsi = action.payload;
    },
    handler_ubah_data_kota: (state, action) => {
      state.kota = action.payload;
    },
    handler_ubah_data_kecamatan: (state, action) => {
      state.kecamatan = action.payload;
    },
  },
});

export const {
  handler_ubah_data_provinsi,
  handler_ubah_data_kecamatan,
  handler_ubah_data_kota,
} = Data_daerah.actions;
export default Data_daerah.reducer;
