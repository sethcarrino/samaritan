import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle
} from 'react-native';
import moment from 'moment';

interface Props {
  title: string;
  date: string;
  imageUrl: string;
  onPress: () => void;
  index: number;
}

const Event: React.FC<Props> = ({ title, date, imageUrl, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
    <Image style={styles.image} source={{ uri: imageUrl }} />
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>
        {moment(date).format('ddd, MMM Do, YYYY')}
      </Text>
    </View>
  </TouchableOpacity>
);

type EventStyleSheet = {
  touchableContainer: ViewStyle;
  image: ImageStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  date: TextStyle;
};

const styles = StyleSheet.create<EventStyleSheet>({
  touchableContainer: {
    flexDirection: 'row',
    height: 125,
    width: '100%',
    marginVertical: 12,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 5
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: 'hidden'
  },
  titleContainer: {
    padding: 10,
    flex: 1
  },
  title: {
    fontWeight: '600',
    fontSize: 16
  },
  date: {
    color: 'grey',
    fontSize: 14,
    marginTop: 4
  }
});

export default Event;
