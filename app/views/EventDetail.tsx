import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle
} from 'react-native';

interface Props {
  navigation: any;
}

const EventDetail: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Events</Text>
      </TouchableOpacity>
    </View>
  );
};

type EventDetailStyleSheet = {
  container: ViewStyle;
};

const styles = StyleSheet.create<EventDetailStyleSheet>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default EventDetail;
