import React from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity 
} from "react-native";
import { 
    Ionicons,
    AntDesign,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
} from '@expo/vector-icons'; 
import BottomNavBar from "../components/bottomNavBar";
import ItemDisplay from "../components/itemDisplay";

export default function ProfilePage() {
    return (
        <SafeAreaView>
            <View style={styles.topHeader}>
                <Ionicons name="ios-person-add-outline" size={28} color="black" />
                <Text style={{fontSize: 16, fontWeight:'500'}}>Yogeeswaran</Text>
                <MaterialIcons name="more-horiz" size={28} color="black" />
            </View>

            <View style={styles.profileInfo}>
                <FontAwesome name="user-circle" size={100} color="grey" />
                <Text style={{fontSize: 18, fontWeight:'500'}}>@yogee_swaran</Text>
                <View style={styles.profileStatSection}>
                    <View style={styles.profileStats}>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>91</Text>
                        <Text style={{color:'grey'}}>Following</Text>
                    </View>
                    <View style={styles.profileStats}>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>83</Text>
                        <Text style={{color:'grey'}}>Followers</Text>
                    </View>
                    <View style={styles.profileStats}>
                        <Text style={{fontSize: 18, fontWeight: '700'}}>621</Text>
                        <Text style={{color:'grey'}}>Likes</Text>
                    </View>
                </View>
                <View style={styles.profileButtons}>
                    <TouchableOpacity style={{borderWidth:0.5, borderColor:'grey', paddingVertical:10, paddingHorizontal:40}}>
                        <Text style={{fontSize:14, fontWeight:'600'}}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth:0.5, borderColor:'grey', paddingVertical:5.5, paddingHorizontal:10}}>
                        <Ionicons name="bookmark-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.eventsTab}>
                <Ionicons name="ios-options-outline" size={26} color="grey" />
                <AntDesign name="lock" size={26} color="grey" />  
                <MaterialCommunityIcons name="shopping-outline" size={26} color="black"/>
                <Ionicons name="refresh" size={26} color="grey" />
                <Ionicons name="heart-outline" size={26} color="grey" />
            </View>

            <View style={styles.wishListItems}>
                <ScrollView>
                    <View style={styles.itemRow}>
                        <ItemDisplay 
                            item={'Item 1'}
                            price={'100'}
                            rating={'4.7'}
                        />
                        <ItemDisplay 
                            item={'Item 6'}
                            price={'120'}
                            rating={'3.7'}
                        />
                    </View>
                    <View style={styles.itemRow}>
                        <ItemDisplay 
                            item={'Item 4'}
                            price={'225'}
                            rating={'4.6'}
                        />
                        <ItemDisplay 
                            item={'Item 3'}
                            price={'65'}
                            rating={'3.9'}
                        />
                    </View>
                </ScrollView>
            </View>

            <BottomNavBar/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topHeader: {
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 5,
        // borderWidth: 1,
        // borderColor: 'blue',
    },

    profileInfo: {
        height: '36%',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },

    profileStatSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        // borderWidth: 1,
        // borderColor: 'green'
    },

    profileStats: {
        alignItems: 'center',
    },

    profileButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },

    eventsTab: {
        height: '5%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
    },

    wishListItems: {
        height: '42%',
        // borderWidth: 5,
    },

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