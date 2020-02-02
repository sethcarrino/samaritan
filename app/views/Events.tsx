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

// Events Context
import EventsContext from '../contexts/EventsContext';

interface Props {
  navigation: any;
}

const Events: React.FC<Props> = ({ navigation }) => {
  const renderUpcomingEvents = () => {
    const events = useContext(EventsContext) || [];

    if (events.length > 0) {
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
        <PaddedContainer>
          <SectionTitle title='Event Listing' />
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
    flex: 1
  },
  scrollView: {
    paddingVertical: 20
  },
  horizontalScrollView: {
    marginLeft: 20
  }
});

export default Events;
