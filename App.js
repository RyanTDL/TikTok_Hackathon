import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemCard from './components/itemCard';
import WishList from './screens/wishList';
import BottomNavBar from './components/bottomNavBar';
import ShopPage from './screens/shopPage';
import ProfilePage from './screens/profilePage';

export default function App() {
  return (
    // <ProfilePage />
    // <ShopPage />
    <ItemCard 
      price={220}
      name={'Camera Lens'}
    />
    // <BottomNavBar />
  );
}

