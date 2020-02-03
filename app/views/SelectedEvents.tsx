import React, { useContext } from 'react';
import {
  Platform,
  View,
  Text,
  ScrollView,
  StyleSheet,
  ViewStyle,
  TextStyle
} from 'react-native';
import Event from '../components/events/Event';
import PaddedContainer from '../components/PaddedContainer';
import { Ionicons } from '@expo/vector-icons';

// Context Imports
import AppContext, { AppContextInterface } from '../contexts/AppContext';

interface Props {
  navigation: any;
}

const SelectedEvents: React.FC<Props> = ({ navigation }) => {
  const renderEvents = () => {
    // This function uses context to fetch selected events
    const ctxt: AppContextInterface = useContext(AppContext);
    if (ctxt.selectedEvents.length > 0) {
      // Sort selectedEvents from newest to oldest
      // Render Event component
      return ctxt.selectedEvents
        .sort((a: any, b: any) => {
          return (
            Math.abs(new Date(a.date).getTime()) -
            Math.abs(new Date(b.date).getTime())
          );
        })
        .map((event, index) => (
          <Event
            title={event.name}
            date={event.date}
            imageUrl={event.imageUrl}
            onPress={() =>
              navigation.navigate('EventDetail', {
                eventId: event.id
              })
            }
            index={index}
            key={event.id}
          />
        ));
    }
    return (
      <View style={styles.placeholderContainer}>
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'}
          size={80}
          color='lightgrey'
        />
        <Text style={styles.placeholderText}>
          You currently do not have any selected events
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <PaddedContainer>{renderEvents()}</PaddedContainer>
      </ScrollView>
    </View>
  );
};

SelectedEvents.navigationOptions = () => ({
  headerTitle: 'Selected Events'
});

type SelectedEventsStyleSheet = {
  container: ViewStyle;
  placeholderContainer: ViewStyle;
  placeholderText: TextStyle;
};

const styles = StyleSheet.create<SelectedEventsStyleSheet>({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100
  },
  placeholderText: {
    color: 'lightgrey'
  }
});

export default SelectedEvents;
