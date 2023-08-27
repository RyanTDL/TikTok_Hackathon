import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemCard from './components/itemCard';
import WishList from './screens/wishList';
import BottomNavBar from './components/bottomNavBar';

export default function App() {
  return (
    // <WishList />
    // <ItemCard 
    //   price={20}
    //   image={'../assets/headphones.png'}
    //   name={'Headphones'}
    // />
    <BottomNavBar />
  );
}

