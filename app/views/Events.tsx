import React, { useState, useContext } from 'react';
import {
  Platform,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import IconButton from '../components/IconButton';
import SectionTitle from '../components/SectionTitle';
import PaddedContainer from '../components/PaddedContainer';
import UpcomingEvent from '../components/events/UpcomingEvent';
import Event from '../components/events/Event';

// Events Context
import AppContext, { AppContextInterface } from '../contexts/AppContext';
import FilterModal from '../components/FilterModal';

interface Props {
  navigation: any;
}

const Events: React.FC<Props> = ({ navigation }) => {
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [filter, setFilter] = useState('');

  const renderUpcomingEvents = () => {
    // This function uses context to fetch events
    const ctxt = useContext(AppContext);
    // Conditional for checking if any events exist
    if (ctxt.events.length > 0) {
      // Sort events from newest to oldest
      // Grab first 3 events for latest upcoming events
      // Render UpcomingEvent component
      return ctxt.events
        .sort((a: any, b: any) => {
          return (
            Math.abs(new Date(a.date).getTime()) -
            Math.abs(new Date(b.date).getTime())
          );
        })
        .slice(0, 3)
        .map((event, index) => (
          <UpcomingEvent
            title={event.name}
            date={event.date}
            imageUrl={event.imageUrl}
            attending={event.attending}
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
    return null;
  };

  const renderEvents = () => {
    // This function uses context to fetch events
    const ctxt: AppContextInterface = useContext(AppContext);
    if (ctxt.events.length > 0) {
      // Sort events from newest to oldest
      // Grab first 3 events for latest upcoming events
      // Render UpcomingEvent component
      if (filter === 'asc') {
        ctxt.events.sort((a: any, b: any) => {
          return (
            Math.abs(new Date(b.date).getTime()) -
            Math.abs(new Date(a.date).getTime())
          );
        });
      } else {
        ctxt.events.sort((a: any, b: any) => {
          return (
            Math.abs(new Date(a.date).getTime()) -
            Math.abs(new Date(b.date).getTime())
          );
        });
      }
      return ctxt.events
        .slice(Math.max(ctxt.events.length - 5, 1))
        .map((event, index) => (
          <Event
            title={event.name}
            date={event.date}
            imageUrl={event.imageUrl}
            attending={event.attending}
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
          <View style={styles.sectionContainer}>
            <SectionTitle title='Event Listing' />
            <IconButton
              icon={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
              size={25}
              color='#000'
              noGutter
              onPress={() => setFilterVisibility(!filterVisibility)}
            />
          </View>
          {filterVisibility && (
            <View style={styles.filterContainer}>
              <TouchableOpacity
                style={styles.filterIconContainer}
                onPress={() => setFilter('desc')}
              >
                <IconButton
                  icon={
                    Platform.OS === 'ios' ? 'ios-arrow-down' : 'md-arrow-down'
                  }
                  size={25}
                  color='#000'
                  noGutter
                />
                <Text style={styles.filterText}>DESC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterIconContainer}
                onPress={() => setFilter('asc')}
              >
                <IconButton
                  icon={Platform.OS === 'ios' ? 'ios-arrow-up' : 'md-arrow-up'}
                  size={25}
                  color='#000'
                  noGutter
                />
                <Text style={styles.filterText}>ASC</Text>
              </TouchableOpacity>
            </View>
          )}
          {renderEvents()}
        </PaddedContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

Events.navigationOptions = navigation => ({
  headerRight: () => (
    <IconButton
      icon={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
      size={25}
      color='#000'
      onPress={() => navigation.navigation.navigate('Search')}
    />
  ),
  headerLeft: () => (
    <IconButton
      icon={Platform.OS === 'ios' ? 'ios-heart-empty' : 'md-heart-empty'}
      size={25}
      color='#000'
      onPress={() => navigation.navigation.navigate('SelectedEvents')}
    />
  )
});

type EventsStyleSheet = {
  container: ViewStyle;
  sectionContainer: ViewStyle;
  filterContainer: ViewStyle;
  filterIconContainer: ViewStyle;
  filterText: TextStyle;
  scrollView: ViewStyle;
  horizontalScrollView: ViewStyle;
};

const styles = StyleSheet.create<EventsStyleSheet>({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  sectionContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 12
  },
  filterIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16
  },
  filterText: {
    fontSize: 12
  },
  scrollView: {
    paddingVertical: 20
  },
  horizontalScrollView: {
    marginLeft: 20
  }
});

export default Events;
