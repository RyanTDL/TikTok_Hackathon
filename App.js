import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemCard from './components/itemCard';
import WishList from './screens/wishList';
import BottomNavBar from './components/bottomNavBar';
import ShopPage from './screens/shopPage';

export default function App() {
  return (
    <ShopPage />
    // <ItemCard 
    //   price={20}
    //   image={'../assets/headphones.png'}
    //   name={'Headphones'}
    // />
    // <BottomNavBar />
  );
}

