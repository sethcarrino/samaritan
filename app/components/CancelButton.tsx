import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle
} from 'react-native';
import { DEVICE_WIDTH } from '../styles/globals';

interface Props {
  text: string;
  onPress: () => void;
}

const CancelButton: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

type CancelButtonStyleSheet = {
  container: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<CancelButtonStyleSheet>({
  container: {
    backgroundColor: '#F25757',
    width: DEVICE_WIDTH - 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 500,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.25,
    elevation: 5
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default CancelButton;
