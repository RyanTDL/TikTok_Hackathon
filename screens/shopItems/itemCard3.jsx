import {React} from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity, 
} from "react-native";
import { 
    MaterialCommunityIcons, 
    MaterialIcons, 
    Ionicons, 
    Fontisto,
    AntDesign 
} from "@expo/vector-icons";

export default function ItemCard3({navigation, price, name}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topHeader}>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate('Shop Page')}>
                        <Ionicons name="chevron-back-sharp" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.topHeaderRight}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="share-outline" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="shoppingcart" size={30} color="black" />                       
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="more-horiz" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.productImage}>
                <Image 
                    style={{height: '100%', width: '100%'}}
                    resizeMode="contain"
                    // source={require(image)} 
                    source={require('../../assets/gifts/dollhouse.png')} 
                />
            </View>
            
            <View style={styles.itemDescriptor}>
                {/* <Text style={{fontSize: 20, fontWeight: '600'}}>{name}</Text>
                <Text style={{fontSize: 20, fontWeight: '600'}}>${price}</Text> */}
                <Text style={{fontSize: 20, fontWeight: '600'}}>Barbie Dollhouse</Text>
                <Text style={{fontSize: 20, fontWeight: '600'}}>$72</Text>
                <Text>Product Description:</Text>
                <Text>This is some filler product description that describes the product in great detail</Text>
            </View>

            <View style={styles.bottomBar}>
                <View>
                    <TouchableOpacity>
                        <Fontisto name="shopping-store" size={24} color="grey" />
                        <Text style={{color: 'grey'}}>Shop</Text>                
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Fontisto name="hipchat" size={24} color="grey" />
                        <Text style={{color: 'grey'}}>Chat</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.wishlistButton}
                    onPress={() => alert('Item added to wishlist')}
                >
                    <Text style={{color:'red', fontSize: 15, fontWeight: '500'}}>Add to wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyButton}>
                    <Text style={{color:'white', fontSize: 15, fontWeight: '500'}}>Buy now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
        // alignItems:'center',
        // justifyContent: 'center',  
        // gap: 10,    
    },

    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: '10%'
    },

    topHeaderRight: {
        flexDirection: 'row',
        gap: 15,
    },

    productImage: {
        width: '100%',
        height: '60%',
        // borderWidth: 0.5,
    },

    itemDescriptor: {
        height: '20%',
        padding: 15,
        gap: 4,
    },

    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        // borderWidth: 1,
        gap: 20,
    },

    wishlistButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        // borderRadius: 10,
    },

    buyButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
    },
})