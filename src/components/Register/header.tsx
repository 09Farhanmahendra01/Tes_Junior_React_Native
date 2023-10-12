import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {appColors} from '../../theme/appColors';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        source={require('../../assets/Icons/Register/register.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.title}>User Registration Form</Text>
      </View>
      <View>
        <Text style={styles.deskripsi}>GoAPI / Emsifa Location API</Text>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  image: {
    width: wp('11%'),
    height: hp('3.1%'),
  },
  title: {
    fontSize: hp('2.3%'),
    color: appColors.warna_putih,
  },
  deskripsi: {
    color: appColors.warna_abu,
    fontSize: hp('1.3%'),
  },
});
export default Header;
