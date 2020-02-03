import React from 'react';
import {
  Platform,
  TouchableHighlight,
  StyleSheet,
  ViewStyle
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onPress: () => void;
}

const BackButton: React.FC<Props> = ({ onPress }) => (
  <TouchableHighlight onPress={onPress} style={styles.container}>
    <Ionicons
      name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-back'}
      size={25}
      color='#000'
    />
  </TouchableHighlight>
);

type BackButtonStyleSheet = {
  container: ViewStyle;
};

const styles = StyleSheet.create<BackButtonStyleSheet>({
  container: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45 / 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.25,
    elevation: 5
  }
});

export default BackButton;
