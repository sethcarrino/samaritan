import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle
} from 'react-native';

const Events: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
        <Text>Event Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

type EventsStyleSheet = {
  container: ViewStyle;
};

const styles = StyleSheet.create<EventsStyleSheet>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Events;
