import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreNavigator from './ExploreNavigator';
import ProfileScreen from '../screens/Profile';
import FeedScreen from '../screens/Feed';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PostScreen from "../screens/PostScreen";
import GuestsScreen from '../screens/Guests';
import SearchResultsMaps from '../screens/SearchResultsMap';
// import HomeScreen from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
      }}>
      <Tab.Screen
        name={'Home'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={25} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name={'Saved'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name={'Create a Party'}
        component={GuestsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="plus" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Feed'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;