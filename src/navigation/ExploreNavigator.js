import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearcResultsScreen from '../screens/SearchResults';
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={'Welcome'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search for Parties'
        }}
      />  
    </Stack.Navigator>
  );
};

export default Router;
