import { Dimensions, View, Text, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const OneActivityScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const activity = route.params?.activity;  // Safely access activity

  useEffect(() => {
    // Add any setup logic here if necessary
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

  const joinActivity = () => {
    navigation.navigate("Register Activity", { activity });
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