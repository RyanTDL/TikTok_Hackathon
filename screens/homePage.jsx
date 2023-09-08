import React from "react";
import { 
    Image,
    SafeAreaView, 
    StyleSheet, 
} from "react-native";
import BottomNavBar from "../components/bottomNavBar";

export default function HomeScreen({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={{height:'90%', width:'100%'}}
                resizeMode='cover'
                source= {require('../assets/homeScreen.png')}
            />
            <BottomNavBar navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
})