import React from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
} from "react-native";
import { 
    MaterialCommunityIcons, 
    Ionicons, 
    FontAwesome
} from "@expo/vector-icons";

export default function BottomNavBar(){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bottomIcons}>
                <Ionicons name="home-outline" size={24} color="black" />
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomIcons}>
                <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />                
                <Text>Shop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomIcons}>
                <FontAwesome name="plus-square" size={35} color="black" />
            </TouchableOpacity>


            <TouchableOpacity style={styles.bottomIcons}>
                <Ionicons name="ios-chatbox-ellipses-outline" size={24} color="black" />                
                <Text>Inbox</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomIcons}>
                <Ionicons name="md-person-outline" size={24} color="black" />                
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        borderWidth: 0.5,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    bottomIcons: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})