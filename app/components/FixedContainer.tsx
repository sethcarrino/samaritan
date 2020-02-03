import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { DEVICE_WIDTH } from '../styles/globals';

interface Props {
  children: ReactNode;
}

const FixedContainer: React.FC<Props> = ({ children }) => (
  <View style={styles.fixedContainer}>{children}</View>
);

type FixedContainerStyleSheet = {
  fixedContainer: ViewStyle;
};

const styles = StyleSheet.create<FixedContainerStyleSheet>({
  fixedContainer: {
    position: 'absolute',
    bottom: 0,
    height: 120,
    width: DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopColor: 'lightgrey',
    borderTopWidth: 1
  }
});

export default FixedContainer;
