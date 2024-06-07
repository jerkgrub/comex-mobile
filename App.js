import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DashboardScreen from "./screens/postAuth/HomeDrawers/AboutusScreen";
import SettingsScreen from "./screens/postAuth/HomeDrawers/NSTPScreen";
import RegisterScreen, { UserProvider } from "./screens/preAuth/RegisterScreen";
import LoginScreen from "./screens/preAuth/LoginScreen";
import HomeScreen from "./screens/postAuth/HomeScreen";
import WelcomeScreen from "./screens/preAuth/WelcomeScreen";
import DrawerNavigator from "./navigation/DrawerNavigator";
import ChangePassScreen from "./screens/preAuth/ChangePassScreen";
import EventsScreen from "./screens/postAuth/HomeDrawers/EventsScreen";

// ryoiki tenkai

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList
        {...props}
        label={(label) => (
          <Text style={{ color: "yellow", fontSize: 20 }}>{label}</Text>
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <UserProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Front" component={DrawerNavigator} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Drawer" component={DrawerNavigator} />

            {/* change pass tingz */}
            <Stack.Screen
              name="Change Pass"
              component={ChangePassScreen}
              options={{
                headerShown: true,
                headerTintColor: "#f5e293",
                headerStyle: { backgroundColor: "#35408e" },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
