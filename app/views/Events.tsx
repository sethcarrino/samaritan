import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SectionTitle from '../components/SectionTitle';
import PaddedContainer from '../components/PaddedContainer';
import UpcomingEvent from '../components/events/UpcomingEvent';
import Event from '../components/events/Event';

// Events Context
import EventsContext from '../contexts/EventsContext';

interface Props {
  navigation: any;
}

const Events: React.FC<Props> = ({ navigation }) => {
  const renderUpcomingEvents = () => {
    // This function uses context to fetch events
    const events = useContext(EventsContext) || [];
    // Conditional for checking if any events exist
    if (events.length > 0) {
      // Sort events from newest to oldest
      // Grab first 3 events for latest upcoming events
      // Render UpcomingEvent component
      return events
        .sort((a: any, b: any) => {
          return (
            Math.abs(new Date(b.date).getTime()) -
            Math.abs(new Date(a.date).getTime())
          );
        })
        .slice(0, 3)
        .map((event, index) => (
          <UpcomingEvent
            title={event.name}
            date={event.date}
            imageUrl={event.imageUrl}
            onPress={() => navigation.navigate('EventDetail')}
            index={index}
            key={event.id}
          />
        ));
    }
    return null;
  };

  const renderEvents = () => {
    // This function uses context to fetch events
    const events = useContext(EventsContext) || [];
    if (events.length > 0) {
      // Sort events from newest to oldest
      // Grab first 3 events for latest upcoming events
      // Render UpcomingEvent component
      return events
        .sort((a: any, b: any) => {
          return (
            Math.abs(new Date(b.date).getTime()) -
            Math.abs(new Date(a.date).getTime())
          );
        })
        .slice(Math.max(events.length - 5, 1))
        .map((event, index) => (
          <Event
            title={event.name}
            date={event.date}
            imageUrl={event.imageUrl}
            onPress={() => navigation.navigate('EventDetail')}
            index={index}
            key={event.id}
          />
        ));
    }
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <PaddedContainer>
          <SectionTitle title='Upcoming Events' />
        </PaddedContainer>
        <ScrollView
          contentContainerStyle={styles.horizontalScrollView}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {renderUpcomingEvents()}
        </ScrollView>
        <PaddedContainer top={25}>
          <SectionTitle title='Event Listing' />
          {renderEvents()}
        </PaddedContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

type EventsStyleSheet = {
  container: ViewStyle;
  scrollView: ViewStyle;
  horizontalScrollView: ViewStyle;
};

const styles = StyleSheet.create<EventsStyleSheet>({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    paddingVertical: 20
  },
  horizontalScrollView: {
    marginLeft: 20
  }
});

export default Events;
