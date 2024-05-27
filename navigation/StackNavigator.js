import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutusScreen from '../screens/postAuth/HomeDrawers/AboutusScreen';
import HomeScreen from '../screens/postAuth/HomeScreen';
import Icon from 'react-native-vector-icons/Entypo'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import SettingsScreen from '../screens/postAuth/HomeDrawers/NSTPScreen';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WelcomeScreen from '../screens/preAuth/WelcomeScreen';
import NSTPScreen from '../screens/postAuth/HomeDrawers/NSTPScreen';
import ComexFormsScreen from '../screens/postAuth/HomeDrawers/ComexFormsScreen';
import EvaluateUsScreen from '../screens/postAuth/HomeDrawers/EvaluateUsScreen';
import PartnerComScreen from '../screens/postAuth/HomeDrawers/PartnerComScreen';
import SCProgramsScreen from '../screens/postAuth/HomeDrawers/SCProgramsScreen';
import EventsScreen from '../screens/postAuth/HomeDrawers/EventsScreen';
import BGCCommunityOutreachScreen from '../screens/postAuth/HomeDrawers/EventsStack/BGCCommunityOutreachScreen';
import NUMoaCampusCleanupScreen from '../screens/postAuth/HomeDrawers/EventsStack/NUMoaCampusCleanupScreen';
import ChangePassScreen from '../screens/preAuth/ChangePassScreen';
import FormScreen from '../screens/postAuth/HomeDrawers/EventsStack/FormScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
    
    const navigation = useNavigation();

    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#35408e' },
            headerTintColor: '#f5e293',
        }}>
            <Stack.Screen name="Home" 
            component={HomeScreen}
            options={{
                headerLeft: () => {
                    return(
                        <TouchableOpacity>
                            <Icon
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                            marginLeft={10}
                            name="menu"
                            size={35}
                            color="#f5e293"
                            />
                        </TouchableOpacity>
                        
                    );
                }
            }}
            />
            <Stack.Screen name="About Us" component={AboutusScreen} />
            <Stack.Screen name="NSTP" component={NSTPScreen} />
            <Stack.Screen name="Events" component={EventsScreen} />
            <Stack.Screen name="ComEx Forms" component={ComexFormsScreen} />
            <Stack.Screen name="Sustainable Community Programs" component={SCProgramsScreen} />
            <Stack.Screen name="Partner Communities" component={PartnerComScreen} />
            <Stack.Screen name="Evaluate Us" component={EvaluateUsScreen} />
            <Stack.Screen name="BGC Community Outreach" component={BGCCommunityOutreachScreen} />
            <Stack.Screen name="NU Moa Cleanup" component={NUMoaCampusCleanupScreen} />
            <Stack.Screen name="Join Event Form" component={FormScreen} />

        </Stack.Navigator>
    );
};

export default StackNavigator;