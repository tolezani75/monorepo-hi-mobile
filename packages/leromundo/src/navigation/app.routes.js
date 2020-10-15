import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

import colors from '../styles/colors';

const App = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
  contentStyle: {backgroundColor: colors.primaryColor},
};

const HomeStackScreen = () => (
  <App.Navigator>
    <App.Screen options={options} name="Home" component={Dashboard} />
  </App.Navigator>
);

const MenuStackScreen = () => (
  <App.Navigator>
    <App.Screen options={options} name="Menu" component={Menu} />
    <App.Screen options={options} name="Profile" component={Profile} />
    <App.Screen options={options} name="EditProfile" component={EditProfile} />
    <App.Screen options={options} name="Help" component={Help} />
    <App.Screen options={options} name="MyCourses" component={MyCourses} />
    <App.Screen options={options} name="About" component={About} />
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
    tabBarOptions={{
      activeTintColor: colors.activeMenuColor,
      inactiveTintColor: colors.accountIconColor,
    }}>
    <Tab.Screen
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({}) => (
          <MaterialCommunityIcons
            name="home"
            color={colors.activeMenuColor}
            size={26}
          />
        ),
      }}
      name="Home"
      component={HomeStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Explorar',
        tabBarIcon: ({}) => (
          <MaterialCommunityIcons
            name="card-search-outline"
            color={colors.activeMenuColor}
            size={26}
          />
        ),
      }}
      name="Explorar"
      component={SearchCoursesStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Conteúdos',
        tabBarIcon: ({}) => (
          <MaterialCommunityIcons
            name="play-circle"
            color={colors.activeMenuColor}
            size={26}
          />
        ),
      }}
      name="Conteúdos"
      component={AllCoursesStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Offline',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="cloud-download"
            color={color}
            size={size}
          />
        ),
      }}
      name="Offline"
      component={OfflineStackScreen}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Menu',
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="menu"
            color={colors.activeMenuColor}
            size={26}
          />
        ),
      }}
      name="Menu"
      component={MenuStackScreen}
    />
  </Tab.Navigator>
);

export default AppRoutes;
