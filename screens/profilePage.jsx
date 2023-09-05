import React from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity,
    FlatList, 
    Image,
} from "react-native";
import { 
    Ionicons,
    AntDesign,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
} from '@expo/vector-icons'; 
import BottomNavBar from "../components/bottomNavBar";
import itemList from "../constants/itemList";
import DisplayItem from "../components/itemDisplay";

export default function ProfilePage({navigation}) {
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
                <FlatList
                    data={itemList.slice(0, 2)}
                    renderItem={({item}) => 
                        <DisplayItem
                            navigation={navigation} 
                            item1={item.item1} 
                            item2={item.item2} 
                            price1={item.price1}
                            price2={item.price2}
                            rating1={item.rating1}
                            rating2={item.rating2}
                            image1={item.image1}
                            image2={item.image2}
                        />
                    }
                />
                {/* <ScrollView 
                    horizontal={true}
                    style={{width:'100%', height:'100%', borderWidth:10, padding:10}}>
                    
                    {true ? 
                        <ItemDisplay
                            navigation={navigation}
                            navigationItemName= 'Item Card 1'
                            item='Kodak F9 Film Camera'
                            price='$99'
                            rating='3.5'
                            image= {require('../assets/gifts/camera.png')}
                        /> 
                    : null}
                    
                    {true ? 
                        <ItemDisplay
                            navigation={navigation}
                            navigationItemName= 'Item Card 1'
                            item='Kodak F9 Film Camera'
                            price='$99'
                            rating='3.5'
                            image= {require('../assets/gifts/camera.png')}
                        /> 
                    : null}

                </ScrollView> */}
            </View>

            <BottomNavBar navigation={navigation}/>
        </SafeAreaView>
    )
}

// const ItemDisplay= ({navigation, navigationItemName, image, item, price, rating})=>{
//     return (
//         <View style={{width: '100%', height: '90%', borderWidth:0.5}}>
//             <Image
//                 style={{height: '75%', width: '100%'}}
//                 resizeMode="contain"
//                 source={image}
//             />
//             <TouchableOpacity
//                 onPress={() => navigation.navigate(navigationItemName)}
//             >
//                 <View style={{paddingHorizontal: 10}}>
//                     <Text style={{fontWeight: '400'}}>{item}</Text>
//                     <Text style={{fontWeight: '600', color:'red'}}>S${price}</Text>
//                     <Text style={{fontWeight: '300'}}>Rating: {rating}/5.0</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     )
// }

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
        width: '100%',
        // borderWidth: 10,
        // borderColor: 'blue',
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