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

export default function BottomNavBar({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.bottomIcons}
                onPress={()=>navigation.navigate('Home Page')}
            >
                <Ionicons name="home-outline" size={24} color="grey" />
                <Text style={{color:'grey'}}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.bottomIcons}
                onPress={()=>navigation.navigate('Shop Page')}
            >
                <MaterialCommunityIcons name="shopping-outline" size={24} color="grey" />                
                <Text style={{color:'grey'}}>Shop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomIcons}>
                <FontAwesome name="plus-square" size={35} color="black" />
            </TouchableOpacity>


            <TouchableOpacity 
                style={styles.bottomIcons}
                onPress={()=>navigation.navigate('Activity Page')}
            >
                <Ionicons name="ios-chatbox-ellipses-outline" size={24} color="grey" />                
                <Text style={{color:'grey'}}>Inbox</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.bottomIcons}
                onPress={()=>navigation.navigate('Profile Page')}
            >
                <Ionicons name="md-person-outline" size={24} color="grey" />                
                <Text style={{color:'grey'}}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        height: "10%",
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