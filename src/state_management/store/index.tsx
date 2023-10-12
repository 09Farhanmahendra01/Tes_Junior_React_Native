import {configureStore} from '@reduxjs/toolkit';

// context
import Data_register from '../context/data_register';
import Loading_register from '../context/loading_register';
import Data_daerah from '../context/data_daerah';
export const store = configureStore({
  reducer: {
    Data_register,
    Loading_register,
    Data_daerah,
  },
});
