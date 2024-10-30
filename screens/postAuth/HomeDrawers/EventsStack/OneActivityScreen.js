import { Dimensions, View, Text, StyleSheet, SafeAreaView, ImageBackground, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetchUserData from "../../../../hooks/useFetchUserData";
import api from "../../../../hooks/api";

const { height } = Dimensions.get("window");

const OneActivityScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const activity = route.params?.activity;  // Safely access activity

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
    if (!dateString) return "No date provided";
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    if (!timeString) return "No time provided";
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Date(`1970-01-01T${timeString}`).toLocaleTimeString(undefined, options);
  };

  const joinActivity = async () => {
    if (!parsedUser) {
      Alert.alert("Error", "User information not found. Please log in again.");
      return;
    }

    try {
      const response = await fetch(`http://192.168.43.82:8000/api/activity/get/attendee/${activity._id}`);
      const result = await response.json();

      if (response.ok) {
        const attendees = result.attendees;
        const hasRegistered = attendees.some(attendee => attendee.at_email === parsedUser.email);

        if (hasRegistered) {
          Alert.alert("Error", "You have already registered for this activity!");
        } else {
          Alert.alert(
            "Register",
            "Do you want to register for this activity?",
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
                    const registerResponse = await fetch(`http://192.168.43.82:8000/api/activity/add/attendee/${activity._id}`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(attendee)
                    });

                    const registerResult = await registerResponse.json();

                    if (registerResponse.ok) {
                      Alert.alert("Success", "You have successfully registered for the activity!");
                    } else {
                      Alert.alert("Error", registerResult.message || "Failed to join the activity.");
                    }
                  } catch (error) {
                    console.error("Error registering for activity:", error);
                    Alert.alert("Error", "An error occurred while registering for the activity.");
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
      Alert.alert("Error", "An error occurred while fetching activity attendees.");
    }
  };

  if (!activity) {
    return (
      <SafeAreaView>
        <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
          <Text style={styles.EventTitle}>Activity not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <ImageBackground 
          style={{
            marginTop: -18,
            height: height / 3.1,
          }}
          resizeMode="contain"
          source={{ uri: activity.image || 'default_image_url' }}  // Fallback if activity.image is undefined
        />
        <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
          <Text style={styles.ActivityTitle}>{activity.title || 'No title provided'}</Text>
          <Text style={styles.ActivityDetails}>{activity.organizer || 'No organizer provided'}</Text>
          <Text style={styles.ActivityDetails}>{formatDate(activity.startDate)}</Text>
          <Text style={styles.ActivityDetails}>{formatTime(activity.time)}</Text>
          <Text style={styles.ActivityDetails}>{activity.description || 'No description provided'}</Text>
        </View>
        
        <View style={styles.joinButtonContainer}>
          <TouchableOpacity
            onPress={joinActivity}
            style={styles.joinButton}
          >
            <Text style={styles.joinButtonText}>Join Activity</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ActivityTitle: {
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
    color: "#35408e",
  },
  ActivityDetails: {
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

export default OneActivityScreen;
