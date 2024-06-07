import { Dimensions, View, Text, StyleSheet, SafeAreaView, ImageBackground, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

const OneEventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { eventData } = route.params;

  const [parsedUser, setParsedUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const parsedUserData = JSON.parse(user);
        console.log("Parsed User Data:", parsedUserData);  // Log user data
        setParsedUser(parsedUserData);
      }
    };
    fetchUser();
  }, []);

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Date(`1970-01-01T${timeString}`).toLocaleTimeString(undefined, options);
  };

  const joinEvent = async () => {
    if (!parsedUser) {
      Alert.alert("Error", "User information not found. Please log in again.");
      return;
    }

    try {
      const response = await fetch(`http://192.168.1.170:8000/api/event/get/attendee/${eventData._id}`);
      const result = await response.json();

      if (response.ok) {
        const attendees = result.attendees;
        const hasRegistered = attendees.some(attendee => attendee.at_email === parsedUser.email);

        if (hasRegistered) {
          Alert.alert("Error", "You have already registered for this event!");
        } else {
          Alert.alert(
            "Register",
            "Do you want to register for this event?",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "Yes",
                onPress: async () => {
                  const attendee = {
                    at_email: parsedUser.email,
                    at_fname: parsedUser.u_fname,
                    at_lname: parsedUser.u_lname,
                    at_mnum: parsedUser.u_mnum
                  };

                  try {
                    const registerResponse = await fetch(`http://192.168.1.170:8000/api/event/add/attendee/${eventData._id}`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(attendee)
                    });

                    const registerResult = await registerResponse.json();

                    if (registerResponse.ok) {
                      Alert.alert("Success", "You have successfully registered for the event!");
                    } else {
                      Alert.alert("Error", registerResult.message || "Failed to join the event.");
                    }
                  } catch (error) {
                    console.error("Error registering for event:", error);
                    Alert.alert("Error", "An error occurred while registering for the event.");
                  }
                }
              }
            ]
          );
        }
      } else {
        Alert.alert("Error", result.message || "Failed to fetch attendees.");
      }
    } catch (error) {
      console.error("Error fetching attendees:", error);
      Alert.alert("Error", "An error occurred while fetching event attendees.");
    }
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground 
          style={{
            marginTop: -18,
            height: height / 3.1,
          }}
          resizeMode="contain"
          source={{ uri: eventData.event_image }}
        />
        <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
          <Text style={styles.EventTitle}>{eventData.event_title}</Text>
          <Text style={styles.EventDetails}>{eventData.event_organizer}</Text>
          <Text style={styles.EventDetails}>{formatDate(eventData.event_date)}</Text>
          <Text style={styles.EventDetails}>{formatTime(eventData.event_time)}</Text>
          <Text style={styles.EventDetails}>{eventData.event_description}</Text>
        </View>
        
        <View style={styles.joinButtonContainer}>
          <TouchableOpacity
            onPress={joinEvent}
            style={styles.joinButton}
          >
            <Text style={styles.joinButtonText}>Join Event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  EventTitle: {
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
    color: "#35408e",
  },
  EventDetails: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 12,
    paddingHorizontal: 30,
  },
  joinButtonContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  joinButton: {
    backgroundColor: "#d8b638",
    paddingVertical: 15,
    paddingHorizontal: 55,
    width: "100%",
    borderRadius: 10,
  },
  joinButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OneEventScreen;
