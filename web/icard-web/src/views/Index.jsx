import Home from "./Home";
import MyICardView from "./MyICardView";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOption from "../utilites/ScreenOption";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import RegistrationView from "./RegistrationView";
import VendorView from "./VendorView";
import { getNavigationCache } from "../utilites/NavigationCache";
import * as RootNavigation from "../utilites/RootNavigation";
import { View } from "react-native-web";

const Tab = createBottomTabNavigator();
const Loading = () => {
  return <View>Loading</View>;
};

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
export default function Index({}) {
  const { user } = useContext(AuthContext);
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  useEffect(() => {
    const caching = async () => {
      let navigationCache = await getNavigationCache();
      if (navigationCache) {
        if (navigationCache.lastVisitedPage === "My ICard") {
          RootNavigation.navigate(
            user === null ? "My ICard" : "My ICard"
          );
        } else {
          RootNavigation.navigate(navigationCache.lastVisitedPage);
        }
      }
    };
    caching();
  }, []);

  return (
    <Tab.Navigator screenOptions={ScreenOption} styles={{fontFamily: "Poppins_600SemiBold"}}>
      <Tab.Screen
        name="Loading"
        component={Loading}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Vendors" component={VendorView} />
      {user === null ? (
        <Tab.Screen name={"My ICard"} component={RegistrationView} />
      ) : (
        <Tab.Screen name={"My ICard"} component={MyICardView} />
      )}
    </Tab.Navigator>
  );
}
