// EventsScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Calendar } from 'react-native-calendars';
import { EventsData } from "./EventsStack/EventsData";
import { NUColor1, NUColor2 } from "../../../components/Constants";

const EventsScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState({});

  useEffect(() => {
    const eventData = EventsData(); 
    setEvents(eventData);
  }, []);

  const onDayPress = (day) => {
    setSelectedDay(day.dateString);
  };
  
  const date = new Date(selectedDay);
  let formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  let [weekday, ...restOfDate] = formattedDate.split(', ');
  restOfDate = restOfDate.join(', ')
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={events}
        markingType={'multi-dot'}
      />

      <View style={{
        padding: 25,
        flexDirection: 'row',
      }}>
        
        <View>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>{weekday}</Text>
        <Text style={{
          fontSize: 15,
        }}>{restOfDate}</Text>
      </View>

      </View>
      


      {selectedDay && events[selectedDay] && events[selectedDay].dots.map((event, index) => (
        <View style={styles.eventContainer}>
          <TouchableOpacity 
            key={index} 
            onPress={() => navigation.navigate(event.screen)} 
            style={styles.eventItem}
          >
            <View style={styles.textContainer}>
              <Text style={styles.authorText}>{event.author}</Text>
              <Text style={[styles.eventText,]}>{event.name}</Text>
            </View>
            <ImageBackground 
              style={styles.imageStyle}
              resizeMode="cover"
              source={{ uri: event.image }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  eventContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  eventItem: {
    flexDirection: 'row',
    backgroundColor: NUColor1,
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    width: '90%',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  authorText: {
    fontSize: 12.8,
    color: NUColor2,
    //fontWeight: 'bold',
  },
  eventText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});

export default EventsScreen;
