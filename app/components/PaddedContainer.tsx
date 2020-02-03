import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  children: ReactNode;
  top?: number;
}
const PaddedContainer: React.FC<Props> = ({ children, top }) => (
  <View style={[styles.container, { paddingTop: top ? top : 0 }]}>
    {children}
  </View>
);

type PaddedContainerStyleSheet = {
  container: ViewStyle;
};

const styles = StyleSheet.create<PaddedContainerStyleSheet>({
  container: {
    paddingHorizontal: 20
  }
});

export default PaddedContainer;
