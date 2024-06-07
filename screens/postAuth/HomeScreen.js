import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./HomeTabs/AccountScreen";
import Carousel from "../../components/Carousel";
import { ScrollView } from "react-native-gesture-handler";
import { UserContext } from "../preAuth/RegisterScreen";
import Post from "../../components/Post";
import { useNavigation } from "@react-navigation/native";
import { ChatScreen } from "./HomeTabs/ChatScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

const date = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const HomeScreen = ({ navigation }) => {
  const { user } = React.useContext(UserContext);
  const [events, setEvents] = useState([]);

  const [parsedUser, setParsedUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setParsedUser(JSON.parse(user));
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://192.168.1.170:8000/api/event/all");
        const data = await response.json();
        setEvents(data.Events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  if (!parsedUser) {
    return null; // or a loading indicator
  }

  return (
    <ScrollView>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.userName}>{parsedUser.u_lname}</Text>
        </View>

        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.featuredEventsText}>Featured Events</Text>
        <Carousel />

        <View style={styles.separator} />

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.currentEventsText}>Current Events</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>

        {events.map((event, index) => (
          <Post
            key={event._id}
            author={event.event_organizer}
            title={event.event_title}
            image={event.event_image}
            onPress={(eventData) =>
              navigation.navigate("OneEventScreen", { eventData })
            }
            eventData={event} // Pass the event data to the onPress function
          />
        ))}

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
      <Tab.Screen name="Chatroom" component={ChatScreen} />
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
  text: {
    marginTop: 0,
    fontSize: 15,
    marginBottom: 16,
    marginLeft: 16,
  },
});

export default HomeTabNavigator;
