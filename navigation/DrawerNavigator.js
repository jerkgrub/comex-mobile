import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text } from 'react-native';
import DashboardScreen from '../screens/postAuth/HomeDrawers/AboutusScreen';
import SettingsScreen from '../screens/postAuth/HomeDrawers/NSTPScreen';
import HomeScreen from '../screens/postAuth/HomeScreen';
import StackNavigator from './StackNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
    drawerContent={props => <DrawerContent{...props}/>}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeDrawer" component={StackNavigator} options={{
        drawerType: 'slide',
        gestureEnabled: false,
        drawerStyle: {
          backgroundColor: '#35408e',
        },
        
        }}/>
    </Drawer.Navigator>
  );
}