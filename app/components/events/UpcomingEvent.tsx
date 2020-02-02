import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ViewStyle
} from 'react-native';
import { DEVICE_HEIGHT } from '../../styles/globals';

interface Props {
  title: string;
  date: string;
  imageUrl: string;
  onPress: () => void;
  index: number;
}

const UpcomingEvent: React.FC<Props> = ({
  title,
  date,
  imageUrl,
  onPress,
  index
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.touchableContainer, { marginLeft: index > 0 ? 12 : 0 }]}
  >
    <ImageBackground style={styles.imageBackground} source={{ uri: imageUrl }}>
      <View>
        <Text>{title}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

type UpcomingEventStyleSheet = {
  touchableContainer: ViewStyle;
  imageBackground: ViewStyle;
};

const styles = StyleSheet.create<UpcomingEventStyleSheet>({
  touchableContainer: {
    height: DEVICE_HEIGHT / 3,
    width: DEVICE_HEIGHT / 3,
    marginVertical: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.25,

    elevation: 5
  },
  imageBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 8,
    overflow: 'hidden'
  }
});

export default UpcomingEvent;
