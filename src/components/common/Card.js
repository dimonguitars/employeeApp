import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 1,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#f000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20
  }
};

export { Card };
