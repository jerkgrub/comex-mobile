// src/screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./HomeTabs/AccountScreen";
import Carousel from "../../components/Carousel";
import Post from "../../components/Post";
import api from "./../../hooks/api";
import useFetchUserData from "./../../hooks/useFetchUserData";

const { height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

const date = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const HomeScreen = ({ navigation }) => {
  const [activities, setActivities] = useState([]);
  const [activitiesLoading, setActivitiesLoading] = useState(true); // Loading state for activities

  // Use the custom hook to fetch user data
  const { user, loading: userLoading } = useFetchUserData();

  // Fetch activities from the /activity/all endpoint
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        console.log("Sending request to /activity/all...");
        const response = await api.get("/activity/all");
        console.log("Activities Response:", response);

        // Debug: Inspect the first activity's organizer
        if (response.data && response.data.Activities && response.data.Activities.length > 0) {
          console.log("First Activity Organizer:", response.data.Activities[0].organizer);
        }

        // Update state with the fetched activities
        if (response.data && response.data.Activities) {
          setActivities(response.data.Activities);
        } else {
          Alert.alert("Error", "No activities found.");
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
        Alert.alert("Error", "Unable to fetch activities.");
      } finally {
        setActivitiesLoading(false);
      }
    };
    fetchActivities();
  }, []);

  // If either user data or activities are loading, show the loading indicator
  if (userLoading || activitiesLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // If user data is not available, show an error message
  if (!user) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>User not found. Please log in.</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>{user.lastName || "User"}</Text>
        </View>

        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.featuredEventsText}>Featured Activities</Text>
        <Carousel />

        <View style={styles.separator} />

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.currentEventsText}>Current Activities</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>

        {activities.map((activity) => {
          console.log("Rendering activity:", activity);
          let authorName = "Unknown Organizer";

          if (activity.organizer) {
            if (typeof activity.organizer === "object") {
              authorName = activity.organizer.name || "Unknown Organizer";
            } else if (typeof activity.organizer === "string") {
              authorName = activity.organizer;
            }
          }

          console.log("Author name to pass:", authorName);

          return (
            <Post
              key={activity._id}
              author={authorName}
              title={activity.title || "Untitled Activity"}
              image={activity.image || ""}
              onPress={() =>
                navigation.navigate("OneActivityScreen", { activity })
              }
              eventData={activity} // Pass the activity data to the onPress function
            />
          );
        })}

        <View style={styles.separator} />
      </View>
    </ScrollView>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Chatroom") {
            iconName = focused ? "forum" : "forum-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "account" : "account-box";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#f5e293",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "#35408e",
        tabBarInactiveBackgroundColor: "#35408e",
        tabBarStyle: {
          display: "flex",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Chatroom" component={ChatScreen} /> */}
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 1,
    color: "#2a2aa5",
    marginLeft: 17,
  },
  userName: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 1,
    color: "#b6941a",
    marginLeft: 10,
    marginBottom: 20,
  },
  dateText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 1,
    color: "#65631a",
    marginLeft: 17,
  },
  featuredEventsText: {
    marginTop: 0,
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 1,
    color: "#2a2aa5",
    marginLeft: 15,
    marginBottom: 10,
  },
  separator: {
    marginTop: 35,
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
  },
  currentEventsText: {
    marginTop: 40,
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 1,
    color: "#282830",
    marginLeft: 15,
    marginBottom: 20,
  },
  seeAllText: {
    marginTop: 40,
    fontSize: 15,
    letterSpacing: 1,
    color: "#2fbad2",
    marginLeft: 110,
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default HomeTabNavigator;
