import React from "react";
import { View } from "react-native";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components/MyComponent";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home"; 
// import WeightsScreen from "./screens/weights";
// import CardioScreen from "./screens/cardio";
// import StretchingScreen from "./stretch";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();


const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
      <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Icon name="home" /> }}
      />
      {/* <Tab.Screen
        name="Weights"
        component={WeightsScreen}
        options={{ tabBarIcon: () => <Icon name="dumbbell" /> }}
      />
      <Tab.Screen
        name="Cardio"
        component={CardioScreen}
        options={{ tabBarIcon: () => <Icon name="bike-fast" /> }}
      />
      <Tab.Screen
        name="Stretch"
        component={StretchingScreen}
        options={{ tabBarIcon: () => <Icon name="human-handsup" /> }}
      /> */}
    </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
