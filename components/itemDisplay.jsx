import React from "react";
import { 
    View, 
    StyleSheet, 
} from "react-native";
import DisplaySlot from "./displaySlot";

export default function ItemDisplay({navigation, navigationItemName1, navigationItemName2, item1, item2, price1, price2, rating1, rating2, image1, image2}){
    return (
        <View style={styles.itemRow}>
            <DisplaySlot 
                navigation={navigation}
                navigationItemName={navigationItemName1}
                item={item1}
                price={price1}
                rating={rating1}
                image={image1}
                width={'50%'}
            />
            <DisplaySlot 
                navigation={navigation}
                navigationItemName={navigationItemName2}
                item={item2}
                price={price2}
                rating={rating2}
                image={image2}
                width={'50%'}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 280,
        padding: 10,
        gap: 20,
    },
})