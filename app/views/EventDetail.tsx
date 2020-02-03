import React, { useEffect, useContext, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ViewStyle,
  TextStyle
} from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../styles/globals';
import BackButton from '../components/BackButton';

// Context
import AppContext, { AppConsumer } from '../contexts/AppContext';

interface Props {
  navigation: any;
  navigationOptions?: Object;
}

const EventDetail: React.FC<Props> = ({ navigation }) => {
  const ctxt = useContext(AppContext);

  useEffect(() => {
    let eventId = JSON.stringify(navigation.getParam('eventId'));
    ctxt.getEvent(eventId);
    console.log(ctxt.event);
  }, []);

  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri:
              'https://s.yimg.com/ny/api/res/1.2/4oV8mzRrAaZUIevTkiG0Jw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/quartz.com/4092ddc2a4070863314e8577d82a15c2'
          }}
        >
          <BackButton onPress={() => navigation.goBack()} />
        </ImageBackground>
        <View style={styles.roundedContainer}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.title}>{ctxt.event.name}</Text>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

EventDetail.navigationOptions = {
  headerShown: false
};

type EventDetailStyleSheet = {
  container: ViewStyle;
  imageBackground: ViewStyle;
  roundedContainer: ViewStyle;
  scrollView: ViewStyle;
  title: TextStyle;
};

const styles = StyleSheet.create<EventDetailStyleSheet>({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageBackground: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 2.5,
    resizeMode: 'cover',
    paddingTop: 50,
    paddingLeft: 20
  },
  roundedContainer: {
    height: '100%',
    marginTop: -50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5
  },
  scrollView: { padding: 20 },
  title: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center'
  }
});

export default EventDetail;
