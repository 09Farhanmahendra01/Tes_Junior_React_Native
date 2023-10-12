import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import {appColors} from '../../../theme/appColors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {get_dataProvinsi} from '../../../utils/get_dataProvinsi';

// type
type Item = {
  id: number;
  label: string;
  value: string;
};
interface props {
  placeHolder: string;
  zIndex: number;
  items: Item[];
  onSelectItem: (value: ItemType<string>) => void;
}
const Component_dropDown: React.FC<props> = ({
  placeHolder,
  zIndex,
  items,
  onSelectItem,
}) => {
  // state
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onSelectItem={onSelectItem}
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
  text: {color: appColors.warna_hitam, fontSize: hp('1.4%')},
  label: {
    color: appColors.warna_putih,
    fontWeight: 'bold',
    fontSize: hp('1.4%'),
  },
  placeHolder: {color: appColors.warna_putih, fontWeight: '400'},
});
export default Component_dropDown;
