import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;
    console.log(this.props);
    return (
      <Modal
        animationType='slide'
        onRequestClose={() => {}}
        transparent
        visible={visible}
      >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>
             Are you sure you want to delete this?
            </Text>
          </CardSection>
          <CardSection style={cardSectionStyle}>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </View>
      </Modal>
    );
};
const styles = {
  cardSectionStyle: {
   justifyContent: 'center',
   flex: 1,
   flexDirection: 'row'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
