import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";



const DrawerList = [
  { icon: "home-outline", label: "Home", navigateTo: "HomeStack" },
  { icon: "information-outline", label: "About Us", navigateTo: "About Us" },
  { icon: "format-color-highlight", label: "Highlights", navigateTo: "About Us" },
  // { icon: "shield-sword", label: "NSTP", navigateTo: "NSTP" },
  { icon: "calendar-multiple", label: "Activities", navigateTo: "Events" },
  // { icon: "form-select", label: "ComEx Forms", navigateTo: "ComEx Forms" },
  // {
  //   icon: "recycle",
  //   label: "Sustainable Community Programs",
  //   navigateTo: "Sustainable Community Programs",
  // },
  // {
  //   icon: "handshake",
  //   label: "Partner Communities",
  //   navigateTo: "Partner Communities",
  // },
  // { icon: "message-draw", label: "Evaluate Us", navigateTo: "Evaluate Us" },
];
const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  // console.log(userData);
  return (
    <DrawerItem
      icon={({ color, size }) => (
        <Icon name={icon} color={"#f5e293"} size={size} />
      )}
      label={() => (
        <Text style={{ fontSize: 14, color: "white" }}>{label}</Text>
      )}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = (props) => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={el.label}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};
function DrawerContent(props) {
  const navigation = useNavigation();

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("token");
      console.log("Token removed");

      navigation.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      });
    } catch (error) {
      console.error("Error removing token:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          onPress={logOut}
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={"#f5e293"} size={size} />
          )}
          label={() => (
            <Text style={{ fontSize: 14, color: "white" }}>Sign Out</Text>
          )}
        />
      </View>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    color: "white",
    width: "100%",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    // marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#dedede",
    borderTopWidth: 1,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
