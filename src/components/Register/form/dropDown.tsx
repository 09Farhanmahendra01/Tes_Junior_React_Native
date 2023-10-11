import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import {appColors} from '../../../theme/appColors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

interface props {
  placeHolder: string;
  zIndex: number;
}
const Component_dropDown: React.FC<props> = ({placeHolder, zIndex}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.dropDown}
      textStyle={styles.text}
      labelStyle={styles.label}
      placeholder={placeHolder}
      placeholderStyle={styles.placeHolder}
      zIndex={zIndex}
      ArrowDownIconComponent={() => (
        <Icon name="angle-down" color={appColors.warna_putih} size={hp('3%')} />
      )}
      ArrowUpIconComponent={() => (
        <Icon name="angle-up" color={appColors.warna_putih} size={hp('3%')} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  dropDown: {
    height: hp('8.5%'),
    backgroundColor: appColors.warna_hitam,
    borderColor: appColors.warna_putih,
    borderWidth: 2,
    marginBottom: 15,
  },
  text: {color: appColors.warna_hitam},
  label: {
    color: appColors.warna_putih,
    fontWeight: 'bold',
    fontSize: hp('2.1%'),
  },
  placeHolder: {color: appColors.warna_putih, fontWeight: '400'},
});
export default Component_dropDown;
