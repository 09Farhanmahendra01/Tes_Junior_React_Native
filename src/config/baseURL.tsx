// URl Provinsi
export const DATA_PROVINSI_URL =
  'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json';
// URL Kota
export const DATA_KOTA_URL = (id_provinsi: number) => {
  return `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id_provinsi}.json`;
};
// URL Kecamatan
export const DATA_KECAMATAN_URL = (id_kota: number) => {
  return `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id_kota}.json`;
};
// URL send message to whatsapp
export const URL_SEND_MESSAGE = 'https://api.fonnte.com/send';
