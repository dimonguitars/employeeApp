import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyle} >
      {props.children}
    </View>
  );
const styles = {
  containerStyle: {
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 0.5,
    borderRadius: 1
  }
};
export { CardSection };
