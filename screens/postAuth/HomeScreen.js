import React from "react";
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
import { EventsData } from "./HomeDrawers/EventsStack/EventsData";
import { useNavigation } from "@react-navigation/native";
import { ChatScreen } from "./HomeTabs/ChatScreen";

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

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              marginTop: 5,
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "left",
              letterSpacing: 1,
              color: "#2a2aa5",
              marginLeft: 17,
            }}
          >
            Welcome,
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "left",
              letterSpacing: 1,
              color: "#b6941a",
              marginLeft: 10,
              marginBottom: 20,
            }}
          >
            {user.username}!
          </Text>
        </View>

        <Text
          style={{
            marginTop: 5,
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "left",
            letterSpacing: 1,
            color: "#65631a",
            marginLeft: 17,
          }}
        >
          {date}
        </Text>
        <Text
          style={{
            marginTop: 0,
            fontSize: 29,
            fontWeight: "bold",
            textAlign: "left",
            letterSpacing: 1,
            color: "#2a2aa5",
            marginLeft: 15,
            marginBottom: 10,
          }}
        >
          Featured Events
        </Text>
        <Carousel />

        <View
          style={{
            marginTop: 35,
            borderBottomColor: "#d3d3d3",
            borderBottomWidth: 1,
          }}
        />

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              marginTop: 40,
              fontSize: 21,
              fontWeight: "bold",
              textAlign: "left",
              letterSpacing: 1,
              color: "#282830",
              marginLeft: 15,
              marginBottom: 20,
            }}
          >
            Current Events
          </Text>
          <Text
            style={{
              marginTop: 40,
              fontSize: 15,
              // fontWeight: "bold",
              letterSpacing: 1,
              color: "#2fbad2",
              marginLeft: 110,
              marginBottom: 20,
            }}
          >
            See all
          </Text>
        </View>

        {/* posts map */}
        {Object.values(EventsData()).flatMap((dateData) =>
          dateData.dots.map((event, index) => (
            <Post
              key={`${event.name}-${index}`}
              author={event.author}
              title={event.name}
              image={event.image}
              navigation={navigation} // Pass the navigation prop here
              onPress={(navigation) => () => navigation.navigate(event.screen)}
            />
          ))
        )}

        <View
          style={{
            marginTop: 35,
            borderBottomColor: "#d3d3d3",
            borderBottomWidth: 1,
          }}
        />

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              marginTop: 40,
              fontSize: 21,
              fontWeight: "bold",
              textAlign: "left",
              letterSpacing: 1,
              color: "#282830",
              marginLeft: 15,
              marginBottom: 20,
            }}
          >
            Upcoming Events
          </Text>
          <Text
            style={{
              marginTop: 40,
              fontSize: 15,
              // fontWeight: "bold",
              textAlign: "left",
              letterSpacing: 1,
              color: "#2fbad2",
              marginLeft: 90,
              marginBottom: 20,
            }}
          >
            See all
          </Text>
        </View>

        {/* posts map */}
        {Object.values(EventsData()).flatMap((dateData) =>
          dateData.dots.map((event, index) => (
            <Post
              key={`${event.name}-${index}`}
              author={event.author}
              title={event.name}
              image={event.image}
              navigation={navigation} // Pass the navigation prop here
              onPress={(navigation) => () => navigation.navigate(event.screen)}
            />
          ))
        )}

        {/* <Text style={{
                      fontSize:12,
                      marginLeft: 17,
                      color: '#808080'
                    }}>Zoren Matthew Blardony</Text>

                    <Text style={{
                      fontSize: 15,
                      marginLeft: 17,
                      fontWeight: 'bold',
                    }}>NU MoA Campus Cleanup</Text>

                <ImageBackground 
                style={{
                    marginTop: 0,
                    height: height / 3,
                    marginBottom: 50,
                }}
                resizeMode="contain"
                source={require("../../assets/images/cleanup-drive.jpg")}
                /> */}
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
  text: {
    marginTop: 0,
    fontSize: 15,
    marginBottom: 16,
    marginLeft: 16,
  },
});

export default HomeTabNavigator;
