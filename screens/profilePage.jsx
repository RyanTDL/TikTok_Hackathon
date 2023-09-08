import { React, useEffect, useState } from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity,
} from "react-native";
import { 
    Ionicons,
    AntDesign,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
} from '@expo/vector-icons'; 
import BottomNavBar from "../components/bottomNavBar";
import DisplaySlot from "../components/displaySlot";


import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";


export default function ProfilePage({navigation}) {

    const [isItem1Saved, setisItem1Saved] = useState(false);
    const [isItem2Saved, setisItem2Saved] = useState(false);
    const [isItem3Saved, setisItem3Saved] = useState(false);
    const [isItem4Saved, setisItem4Saved] = useState(false);
    const [isItem5Saved, setisItem5Saved] = useState(false);
    const [isItem6Saved, setisItem6Saved] = useState(false);

    
    const retrieveSavedItems= async() => {
        const docRef = doc(firestore, "wishlist", "user1");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setisItem1Saved(docSnap.data().item1Saved);
            setisItem2Saved(docSnap.data().item2Saved);
            setisItem3Saved(docSnap.data().item3Saved);
            setisItem4Saved(docSnap.data().item4Saved);
            setisItem5Saved(docSnap.data().item5Saved);
            setisItem6Saved(docSnap.data().item6Saved);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        retrieveSavedItems();
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.topHeader}>
                <Ionicons name="ios-person-add-outline" size={28} color="black" />
                <Text style={{fontSize: 16, fontWeight:'500'}}>Keagan</Text>
                <MaterialIcons name="more-horiz" size={28} color="black" />
            </View>

            <View style={styles.profileInfo}>
                <FontAwesome name="user-circle" size={100} color="grey" />
                <Text style={{fontSize: 18, fontWeight:'500'}}>@keagann</Text>
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
                <ScrollView
                    horizontal={true}
                >
                    {isItem1Saved ? 
                        <View style={{width:200, height:'100%', padding:10, alignItems:'center', justifyContent:'center'}}>
                            <DisplaySlot
                                width={'100%'}
                                navigation={navigation}
                                navigationItemName='Item Card 1'
                                image={require('../assets/gifts/camera.png')}
                                item='Kodak F9 Film Camera'
                                price='$99'
                                rating='3.5'
                            />
                        </View>
                    : null }

                    {isItem2Saved ? 
                        <View style={{width:200, height:'100%', padding:10, alignItems:'center', justifyContent:'center'}}>
                            <DisplaySlot
                                width={'100%'}
                                navigation={navigation}
                                navigationItemName='Item Card 2'
                                image={require('../assets/gifts/guitar.png')}
                                item='Electric Guitar'
                                price='$325'
                                rating='4.6'
                            />
                        </View>
                    : null }

                    {isItem3Saved ? 
                        <View style={{width:200, height:'100%', padding:10, alignItems:'center', justifyContent:'center'}}>
                            <DisplaySlot
                                width={'100%'}
                                navigation={navigation}
                                navigationItemName='Item Card 3'
                                image={require('../assets/gifts/dollhouse.png')}
                                item='Barbie Dollhouse'
                                price='$72'
                                rating='3.9'
                            />
                        </View>
                    : null }

                    {isItem4Saved ? 
                        <View style={{width:200, height:'100%', padding:10, alignItems:'center', justifyContent:'center'}}>
                            <DisplaySlot
                                width={'100%'}
                                navigation={navigation}
                                navigationItemName='Item Card 4'
                                image={require('../assets/gifts/laptop.png')}
                                item='Macbook Pro'
                                price='$3,100'
                                rating='4.1'
                            />
                        </View>
                    : null }   
                    
                    {isItem5Saved ? 
                        <View style={{width:200, height:'100%', padding:10, alignItems:'center', justifyContent:'center'}}>
                            <DisplaySlot
                                width={'100%'}
                                navigation={navigation}
                                navigationItemName='Item Card 5'
                                image={require('../assets/gifts/camera.png')}
                                item='Canon EOS 400D'
                                price='$620'
                                rating='4.5'
                            />
                        </View>
                    : null }

                    {isItem6Saved ? 
                        <View style={{width:200, height:'100%', padding:10, alignItems:'center', justifyContent:'center'}}>
                            <DisplaySlot
                                width={'100%'}
                                navigation={navigation}
                                navigationItemName='Item Card 6'
                                image={require('../assets/gifts/laptop.png')}
                                item='Lenovo Laptop'
                                price='$2,650'
                                rating='5.0'
                            />
                        </View>
                    : null }
                
                </ScrollView>
            </View>

            <BottomNavBar navigation={navigation}/>
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
    },

    profileInfo: {
        height: '36%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    profileStatSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
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
    },

    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 280,
        padding: 10,
        gap: 20,
    },
})