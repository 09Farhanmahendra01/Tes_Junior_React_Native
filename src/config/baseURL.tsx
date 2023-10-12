export const DATA_PROVINSI_URL =
  'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json';
export const DATA_KOTA_URL = (id: number) => {
  return `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`;
};
