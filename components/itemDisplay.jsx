import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function DisplayItem({navigation, navigationItemName1, navigationItemName2, item1, item2, price1, price2, rating1, rating2, image1, image2}){
    return (
        <View style={styles.itemRow}>
            <ItemDisplay 
                navigation={navigation}
                navigationItemName={navigationItemName1}
                item={item1}
                price={price1}
                rating={rating1}
                image={image1}
            />
            <ItemDisplay 
                navigation={navigation}
                navigationItemName={navigationItemName2}
                item={item2}
                price={price2}
                rating={rating2}
                image={image2}
            />
        </View>
    )
};

const ItemDisplay= ({navigation, navigationItemName, image, item, price, rating})=>{
    return (
        <View style={{width: '50%', height: '100%', borderWidth:0.5}}>
            <Image
                style={{height: '75%', width: '100%'}}
                resizeMode="contain"
                source={image}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate(navigationItemName)}
            >
                <View style={{paddingHorizontal: 10}}>
                    <Text style={{fontWeight: '400'}}>{item}</Text>
                    <Text style={{fontWeight: '600', color:'red'}}>S${price}</Text>
                    <Text style={{fontWeight: '300'}}>Rating: {rating}/5.0</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 280,
        padding: 10,
        gap: 20,
        // borderWidth: 1,
        // borderColor: 'red',
    },
})