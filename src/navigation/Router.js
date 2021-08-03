import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";
import EditScreen from "../screens/Profile/edit";

import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/PostScreen";
import SearchResultsMaps from "../screens/SearchResultsMap";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination"
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "How many people?"
          }}
        />

        <Stack.Screen
          name={"Map"}
          component={SearchResultsMaps}
          options={{
            title: "Map"
          }}
        />

        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Party"
          }}
        />

        <Stack.Screen
          name={"Edit"}
          component={EditScreen}
          options={{
            title: "Edit Profile"
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;