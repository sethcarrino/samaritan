import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  children: ReactNode;
}
const PaddedContainer: React.FC<Props> = ({ children }) => (
  <View style={styles.container}>{children}</View>
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
