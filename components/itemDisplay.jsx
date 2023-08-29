import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";


export default function ItemDisplay({cardWidth, cardHeight, image, item, price, rating}){
    return (
        <View style={{width: cardWidth, height: cardHeight, borderWidth:0.5}}>
            <Image
                style={{height: '75%', width: '100%'}}
                resizeMode="contain"
                // source={require(image)} 
                source={require('../assets/camera.png')}
            />
            <View style={{paddingHorizontal: 10}}>
                <Text style={{fontWeight: '400'}}>{item}</Text>
                <Text style={{fontWeight: '600', color:'red'}}>S${price}</Text>
                <Text style={{fontWeight: '300'}}>Rating: {rating}/5.0</Text>
            </View>
        </View>
    )
}