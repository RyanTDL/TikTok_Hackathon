import React from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    Image, 
    ScrollView,
    TouchableOpacity,
    FlatList, 
} from "react-native";
import { 
    Ionicons,
    MaterialIcons,
    Feather,
} from '@expo/vector-icons'; 

export default function EventPage({navigation}) {
    return (
        <SafeAreaView>
            <View style={ styles.header }>
                <TouchableOpacity onPress={() => navigation.navigate('Activity Page')}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{fontSize:18, fontWeight:'600'}}>Special Event</Text>
                <MaterialIcons name="more-horiz" size={24} color="black" />
            </View>

            <View style={styles.messageTab}>
                <View style={styles.messages}>
                    <Text style={styles.personJoin}>Keagan joined the event</Text>
                    <Text style={styles.personJoin}>Elginn_223 joined the event</Text>
                    <Text style={styles.personJoin}>Alex120 joined the event</Text>
                    <Text style={styles.personJoin}>RyanT0602 joined the event</Text>
                </View>
                <View style={styles.startEvent}>
                    <Text style={{fontSize:20, fontWeight:'800'}}>Secret Santa</Text>
                    <Text style={{fontSize:14, fontWeight:'500', color:'grey'}}>Christmas is coming! Register to join</Text>
                    <TouchableOpacity 
                        // onPress={() => console.log('Start Event')}
                        onPress={() => {
                            console.log('Start Event');
                            navigation.navigate('SecretSanta');
                          }}
                        style={styles.startButton}
                    >
                        <Text style={{fontSize: 14, fontWeight:'600', color:'white'}}>Start Event</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.textBar}>
                <View style={styles.textInput}>
                    <Text style={{color:'grey',}}>Send a message..</Text>
                    <MaterialIcons name="emoji-emotions" size={24} color="grey" />
                </View>
                <Feather name="send" size={24} color="grey" />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // borderWidth: 5,
        // borderColor: 'green',
    },

    messageTab: {
        width: '100%',
        height: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        borderWidth: 0.5,
        borderColor: 'grey',
        gap: 10,
    },

    messages: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        gap: 10,
        // justifyContent: 'space-between',
        // borderWidth: 2,
        // borderColor: 'yellow',
    },

    personJoin: {
        backgroundColor: 'lightgrey',
        paddingVertical: 2,
        paddingHorizontal: 10,
        fontWeight: '400',
    },

    startEvent: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'lightblue',
        borderRadius: 20,
        paddingVertical: 10,
    },

    startButton: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingVertical: 5,
        marginTop: 6,
        borderRadius: 20,
    },

    textBar: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'blue',
        gap: 10,
    },

    textInput: {
        width: '80%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
});