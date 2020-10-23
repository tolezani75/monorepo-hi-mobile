import React from 'react';

import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Dashboard from '../pages/Home';
import Offline from '../pages/Offline';
import SearchCourses from '../pages/SearchCourses';
import AllCourses from '../pages/AllCourses';

// menu stack
import Menu from '../pages/Menu';
import EditProfile from '../pages/Menu/EditProfile';
import Profile from '../pages/Menu/Profile';
import Help from '../pages/Menu/Help';
import MyCourses from '../pages/Menu/MyCourses';
import About from '../pages/Menu/About';
import Translate from '../pages/Menu/Translate';

import colors from '../styles/colors';

const App = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
  contentStyle: { backgroundColor: colors.primaryColor },
};

const HomeStackScreen = () => (
  <App.Navigator>
    <App.Screen options={options} name="Home" component={Dashboard} />
  </App.Navigator>
);

const MenuStackScreen = () => (
  <App.Navigator initialRouteName="Menu">
    <App.Screen options={options} name="Menu" component={Menu} />
    <App.Screen options={options} name="Profile" component={Profile} />
    <App.Screen options={options} name="EditProfile" component={EditProfile} />
    <App.Screen options={options} name="Help" component={Help} />
    <App.Screen options={options} name="MyCourses" component={MyCourses} />
    <App.Screen options={options} name="About" component={About} />
    <App.Screen options={options} name="Translate" component={Translate} />
  </App.Navigator>
);

const OfflineStackScreen = () => (
  <App.Navigator>
    <App.Screen options={options} name="Offline" component={Offline} />
  </App.Navigator>
);

const SearchCoursesStackScreen = () => (
  <App.Navigator>
    <App.Screen options={options} name="Offline" component={SearchCourses} />
  </App.Navigator>
);

const AllCoursesStackScreen = () => (
  <App.Navigator>
    <App.Screen options={options} name="Offline" component={AllCourses} />
  </App.Navigator>
);

const AppRoutes = () => (
  <Tab.Navigator
    initialRouteName="Offline"
    tabBarOptions={{
      activeTintColor: colors.activeMenuColor,
      inactiveTintColor: colors.accountIconColor,
    }}>
    <Tab.Screen
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <FontAwesome5
            name="home"
            color={focused ? colors.activeMenuColor : colors.accountIconColor}
            size={20}
          />
        ),
      }}
      name="Home"
      component={HomeStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Explorar',
        tabBarIcon: ({ focused }) => (
          <FontAwesome5
            name="search"
            color={focused ? colors.activeMenuColor : colors.accountIconColor}
            size={20}
          />
        ),
      }}
      name="Explorar"
      component={SearchCoursesStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Conteúdos',
        tabBarIcon: ({ focused }) => (
          <FontAwesome5
            name="play-circle"
            color={focused ? colors.activeMenuColor : colors.accountIconColor}
            size={20}
          />
        ),
      }}
      name="Conteúdos"
      component={AllCoursesStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Offline',
        tabBarIcon: ({ focused }) => (
          <FontAwesome5
            name="cloud-download-alt"
            color={focused ? colors.activeMenuColor : colors.accountIconColor}
            size={20}
          />
        ),
      }}
      name="Offline"
      component={OfflineStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Menu',
        tabBarIcon: ({ focused }) => (
          <FontAwesome5
            name="align-justify"
            color={focused ? colors.activeMenuColor : colors.accountIconColor}
            size={20}
          />
        ),
      }}
      name="Menu"
      component={MenuStackScreen}
    />
  </Tab.Navigator>
);

export default AppRoutes;
