import {React, useState} from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    FlatList,
    ScrollView,
} from "react-native";
import { 
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome5 
} from '@expo/vector-icons'; 
import BottomNavBar from "../components/bottomNavBar";
import itemList from "../constants/itemList";
import DisplayItem from "../components/itemDisplay";

export default function ShopPage({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.searchHeader}>
                    <View style={styles.searchBar}>
                        <View style={{flexDirection:'row', alignItems:'center', gap:2}}>
                            <MaterialCommunityIcons name="magnify" size={24} color="black" />
                            <Text style={{color:'grey'}}>Search Bar</Text>
                        </View>
                        <Text style={{color:'red',fontSize:16, fontWeight: '400'}}>Search</Text>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setMoreModal(true)}
                    >
                        <FontAwesome5 name="grip-lines" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.shopDirectory}>
                    <Text style={{color: 'black', fontSize:16, fontWeight:'500', borderBottomWidth:2}}>  All  </Text>
                    <Text style={{color: 'grey', fontSize:16, fontWeight:'500'}}>Beauty</Text>
                    <Text style={{color: 'grey', fontSize:16, fontWeight:'500'}}>Toys</Text>
                    <Text style={{color: 'grey', fontSize:16, fontWeight:'500'}}>Jewellery</Text>
                    <Text style={{color: 'grey', fontSize:16, fontWeight:'500'}}>Food</Text>
                </View>
            </View>
            <View style={{width:'100%', height:'75%'}}>              
                <FlatList
                    data={itemList}
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
                            navigationItemName1={item.navigationItemName1}
                            navigationItemName2={item.navigationItemName2}
                        />
                    }
                />
            </View>
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

    topSection: {
        width:'100%', 
        height:'15%', 
    },

    searchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:'60%', 
        paddingHorizontal: 10,
        // borderWidth: 1,
    },

    searchBar: {
        flexDirection: 'row',
        width: '75%',
        height: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: 'red',
        paddingHorizontal: 10,
    },

    shopDirectory: {
        height: '40%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'blue',
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

    modalContainer: {
        justifyContent:'center', 
        alignItems:'center',
        borderWidth: 10,
        width: '100%',
        height: '100%',
    },
})