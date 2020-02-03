import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import { DEVICE_HEIGHT } from '../../styles/globals';

interface Props {
  title: string;
  date: any;
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
    style={[styles.touchableContainer, { marginLeft: index > 0 ? 16 : 0 }]}
  >
    <ImageBackground style={styles.imageBackground} source={{ uri: imageUrl }}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.titleContainer}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {moment(date).format('ddd, MMM Do, YYYY')}
        </Text>
      </LinearGradient>
    </ImageBackground>
  </TouchableOpacity>
);

type UpcomingEventStyleSheet = {
  touchableContainer: ViewStyle;
  imageBackground: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  date: TextStyle;
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
    overflow: 'hidden',
    position: 'relative'
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },
  date: {
    color: '#fff',
    fontSize: 12
  }
});

export default UpcomingEvent;
