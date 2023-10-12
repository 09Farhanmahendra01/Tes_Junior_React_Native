import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  nama_user: '',
  nama_provinsi_yangDipilih: '',
  nama_kota_yangDipilih: '',
  nama_kecamatan_yangDipilih: '',
};

export const Data_register = createSlice({
  name: 'data register',
  initialState,
  reducers: {
    handler_input_namaUser: (state, action) => {
      state.nama_user = action.payload;
    },
    handler_input_namaProvinsi: (state, action) => {
      state.nama_provinsi_yangDipilih = action.payload;
    },
    handler_input_namaKota: (state, action) => {
      state.nama_kota_yangDipilih = action.payload;
    },
    handler_input_namaKecamatan: (state, action) => {
      state.nama_kecamatan_yangDipilih = action.payload;
    },
  },
});

export const {
  handler_input_namaUser,
  handler_input_namaProvinsi,
  handler_input_namaKota,
  handler_input_namaKecamatan,
} = Data_register.actions;

export default Data_register.reducer;
