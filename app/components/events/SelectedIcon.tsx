import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  selected: boolean;
  light?: boolean;
}

const SelectedIcon: React.FC<Props> = ({ selected, light }) => {
  const renderIcon = () => {
    if (selected) {
      return (
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
          size={25}
          color={'#F25757'}
        />
      );
    } else {
      return (
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'}
          size={25}
          color={light ? '#fff' : '#000'}
        />
      );
    }
  };
  return renderIcon();
};

const styles;

export default SelectedIcon;
