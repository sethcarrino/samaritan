import React, { useState, useContext } from 'react';
import {
  Platform,
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PaddedContainer from '../components/PaddedContainer';
import Event from '../components/events/Event';

// Context Imports
import AppContext, { AppContextInterface } from '../contexts/AppContext';

interface Props {
  navigation: any;
}

const Search: React.FC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedEvents, setSearchedEvents] = useState([]);
  const ctxt: AppContextInterface = useContext(AppContext);

  const find = text => {
    text = text.split(' ');
    return setSearchedEvents(
      ctxt.events.filter(event => {
        return text.every(el => {
          return event.name.indexOf(el) > -1;
        });
      })
    );
  };

  const handleTextChange = text => {
    setSearchText(text);
    find(text);
  };

  const renderEvents = () => {
    if (searchedEvents.length > 0) {
      return searchedEvents
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
    } else {
      return (
        <View style={styles.placeholderContainer}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
            size={80}
            color='lightgrey'
          />
          <Text style={styles.placeholderText}>
            You currently do not have any selected events
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <PaddedContainer>
        <TextInput
          style={styles.textInput}
          onChangeText={handleTextChange}
          placeholder='Search Events'
          value={searchText}
        />
        <ScrollView>{renderEvents()}</ScrollView>
      </PaddedContainer>
    </View>
  );
};

type SearchStyleSheet = {
  container: ViewStyle;
  textInput: ViewStyle;
  placeholderContainer: ViewStyle;
  placeholderText: TextStyle;
};

const styles = StyleSheet.create<SearchStyleSheet>({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textInput: {
    height: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 1
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

export default Search;
