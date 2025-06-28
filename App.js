import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import Welcome from "./src/screens/Welcome";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import Dashboard from "./src/screens/Dashboard";
import DonationForm from "./src/screens/DonationForm";
import Confirmation from "./src/screens/Confirmation";
import Points from "./src/screens/Points";

const Stack = createStackNavigator();

function Navigation() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {!user ? (
        // Auth screens
        <>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </>
      ) : (
        // App screens
        <>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="DonationForm" component={DonationForm} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="Points" component={Points} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
