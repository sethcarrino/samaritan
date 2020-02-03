import React, { useEffect, useContext, useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ViewStyle,
  TextStyle
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../styles/globals';
import BackButton from '../components/BackButton';

// Context
import AppContext from '../contexts/AppContext';
import Button from '../components/Button';
import FixedContainer from '../components/FixedContainer';

interface Props {
  navigation: any;
  navigationOptions?: Object;
}

const EventDetail: React.FC<Props> = ({ navigation }) => {
  const ctxt = useContext(AppContext);

  useEffect(() => {
    let eventId = JSON.stringify(navigation.getParam('eventId'));
    ctxt.getEvent(eventId);
  }, []);

  return (
    <>
      {!_.isEmpty(ctxt.event) && (
        <>
          <StatusBar barStyle='light-content' />
          <View style={styles.container}>
            <ImageBackground
              style={styles.imageBackground}
              source={{
                uri: ctxt.event.imageUrl
              }}
            >
              <BackButton onPress={() => navigation.goBack()} />
            </ImageBackground>
            <View style={styles.roundedContainer}>
              <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>{ctxt.event.name}</Text>
                <View style={styles.sectionContainer}>
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name={
                        Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'
                      }
                      size={30}
                      color='lightgrey'
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.sectionText}>
                      {moment(ctxt.event.date).format('ddd, MMM Do, YYYY')}
                    </Text>
                  </View>
                </View>
                <View style={styles.sectionContainer}>
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}
                      size={30}
                      color='lightgrey'
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.sectionText}>
                      {ctxt.event.address.road}
                    </Text>
                    <Text style={styles.sectionText}>
                      {`${ctxt.event.address.city}, ${ctxt.event.address.state}`}
                    </Text>
                    <Text style={styles.sectionText}>
                      {ctxt.event.address.zip}
                    </Text>
                  </View>
                </View>
                <View style={styles.sectionContainer}>
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name={
                        Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'
                      }
                      size={30}
                      color='lightgrey'
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.sectionText}>
                      20 of 60 seats available
                    </Text>
                  </View>
                </View>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.description}>{ctxt.event.description}</Text>
              </ScrollView>
            </View>
            <FixedContainer>
              <Button text={'Attend Event'} onPress={e => e.preventDefault()} />
            </FixedContainer>
          </View>
        </>
      )}
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
  sectionContainer: ViewStyle;
  iconContainer: ViewStyle;
  textContainer: ViewStyle;
  sectionTitle: TextStyle;
  sectionText: TextStyle;
  description: TextStyle;
};

const styles = StyleSheet.create<EventDetailStyleSheet>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
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
  scrollView: { padding: 20, paddingBottom: 500 },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  sectionContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  iconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginLeft: 8
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 12
  },
  sectionText: {
    marginTop: 8
  },
  description: {
    color: 'grey'
  }
});

export default EventDetail;
