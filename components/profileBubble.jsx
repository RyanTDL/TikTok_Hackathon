import React from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity 
} from "react-native";

export default function ProfileBubble() {
    return (
        <View style={styles.bubble}>
            {/* <Image></Image> */}
        </View>
    )
}


const styles = StyleSheet.create({
    bubble: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
    },
})