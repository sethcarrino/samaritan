import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  icon: string;
  size: number;
  color: string;
  onPress: () => void;
}

const IconButton: React.FC<Props> = ({ icon, size, color, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Ionicons name={icon} size={size} color={color} />
  </TouchableOpacity>
);

type IconButtonStyleSheet = {
  container: ViewStyle;
};

const styles = StyleSheet.create<IconButtonStyleSheet>({
  container: {
    marginHorizontal: 20
  }
});

export default IconButton;
