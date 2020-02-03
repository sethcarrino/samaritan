import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  icon: string;
  size: number;
  color: string;
  noGutter?: boolean;
  onPress?: () => void;
}

const IconButton: React.FC<Props> = ({
  icon,
  size,
  color,
  noGutter,
  onPress
}) => (
  <TouchableOpacity
    onPress={onPress ? onPress : e => e.preventDefault()}
    style={{ marginHorizontal: noGutter ? 0 : 20 }}
  >
    <Ionicons name={icon} size={size} color={color} />
  </TouchableOpacity>
);

type IconButtonStyleSheet = {
  container: ViewStyle;
};

export default IconButton;
