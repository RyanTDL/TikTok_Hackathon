import React from 'react';

import HomeScreen from './screens/homePage';
import ProfilePage from './screens/profilePage';
import ActivityPage from './screens/activityPage';
import EventPage from './screens/eventPage';
import ShopPage from './screens/shopPage';
import ItemCard1 from './screens/shopItems/itemCard1';
import ItemCard2 from './screens/shopItems/itemCard2';
import ItemCard3 from './screens/shopItems/itemCard3';
import ItemCard4 from './screens/shopItems/itemCard4';
import ItemCard5 from './screens/shopItems/itemCard5';
import ItemCard6 from './screens/shopItems/itemCard6';
import SecretSanta from './screens/SecretSanta';
import SecretSantaResults from './screens/SecretSantaResults';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name="Home Page" component={HomeScreen}/>
        <Stack.Screen name="Activity Page" component={ActivityPage}/>
        <Stack.Screen name="Shop Page" component={ShopPage}/>
        <Stack.Screen name="Profile Page" component={ProfilePage}/>
        <Stack.Screen name='Event Page' component={EventPage}/>
        <Stack.Screen name="Item Card 1" component={ItemCard1}/>
        <Stack.Screen name="Item Card 2" component={ItemCard2}/>
        <Stack.Screen name="Item Card 3" component={ItemCard3}/>
        <Stack.Screen name="Item Card 4" component={ItemCard4}/>
        <Stack.Screen name="Item Card 5" component={ItemCard5}/>
        <Stack.Screen name="Item Card 6" component={ItemCard6}/>
        <Stack.Screen name='SecretSanta' component={SecretSanta} />
        <Stack.Screen name='SecretSantaResults' component={SecretSantaResults}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}