import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {useSelector} from 'react-redux';

const Loading_register = () => {
  const isLoading = useSelector(
    (value: any) => value.Loading_register.isLoading,
  );
  return (
    <ReactNativeModal isVisible={isLoading}>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loading_register;
