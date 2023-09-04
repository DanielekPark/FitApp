import React from "react";
import { View } from "react-native";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home"; 
import WeightsScreen from "./screens/weights";
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
      <Tab.Screen
        name="Weights"
        component={WeightsScreen}
        options={{ tabBarIcon: () => <Icon name="dumbbell" /> }}
      />
    </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
