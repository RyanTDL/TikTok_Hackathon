import React from "react";
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
} from "react-native";

export default function DisplaySlot({navigation, navigationItemName, image, item, price, rating, width}){
    return (
        <View style={{width: width, height: '100%', borderWidth:0.5}}>
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