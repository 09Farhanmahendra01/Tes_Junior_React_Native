import {View} from 'react-native';
import React from 'react';

// style
import {styles} from '../../styles/Register';

// components
import Header from '../../components/Register/header';
import Form from '../../components/Register/form';
import Button_Register from '../../components/Register/buttonRegister';
import Loading_register from '../../components/Register/loading_register';

const Register = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      {/* Form */}
      <Form />
      {/* Button Register */}
      <Button_Register />
      {/* loading register */}
      <Loading_register />
    </View>
  );
};

export default Register;
