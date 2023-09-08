import React from "react";
import { 
    View, 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    FlatList, 
} from "react-native";
import { 
    AntDesign,
    Feather, 
} from '@expo/vector-icons';
import BottomNavBar from "../components/bottomNavBar";
import friendList from "../constants/friends"
import profileStories from "../constants/profileStories";

export default function ActivityPage({navigation}) {

    return (
        <SafeAreaView>
            <View style={[styles.header, {height: '7%'}]}>
                <Feather name="message-square" size={26} color="black" />
                <Text style={{fontSize:18, fontWeight:'600'}}>Inbox</Text>
                <AntDesign name="search1" size={26} color="black" />            
            </View>

            <View style={[styles.storySection, {height: '15%'}]}>
                <FlatList
                    data={profileStories}
                    horizontal={true}
                    showsHorizontalScrollIndicator= {false}
                    renderItem={({item}) => 
                        <ProfileStory
                            image={item.pic}
                            name={item.name}
                        />
                    }
                />    
            </View>

            <View style={[styles.sections, {height:'25%'}]}>
                <Text style={{fontSize: 16, fontWeight:'500'}}>New Activity</Text>
                <MessageItem
                    image={require('../assets/profileIcons/followers.png')}
                    title='New Followers'
                    content='felipe.yan started following you'
                />
                <TouchableOpacity onPress={()=>navigation.navigate('Event Page')}>
                    <MessageItem
                        image={require('../assets/profileIcons/limitedtime.png')}
                        title='Special Event'
                        content='You have been invited to Secret Santa'
                    />
                </TouchableOpacity>
            </View>

            <View style={[styles.sections, {height: '43%'}]}>
                <Text style={{fontSize: 16, fontWeight:'500'}}>Messages</Text>
                <FlatList
                    data={friendList}
                    renderItem={({item}) => 
                        <MessageItem 
                            image={item.pic} 
                            title={item.name} 
                            content={item.content}
                        />
                    }
                />
            </View>

            <BottomNavBar navigation={navigation}/>
        </SafeAreaView>
    )
}

const MessageItem= ({image, title, content}) => {
    return (
        <View style={styles.messageItemInfo}>
            <Image 
                source={image}
                style={styles.profileBubble}
            />
            <View style={styles.messageItemProfile}>
                <Text style={{fontSize: 15, fontWeight:'500'}}>{title}</Text>
                <Text style={{fontSize: 14, color:'grey'}}>{content}</Text>
            </View>
        </View>
    )
}

const ProfileStory= ({image, name}) => {
    return (
        <View style={styles.oneStory}>
            <Image 
                style={styles.profileBubble}
                source={image}
            />
            <Text style={styles.profileText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    storySection: {
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 10
    },

    oneStory: {
        height: '100%',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginHorizontal: 5,
    },

    profileBubble: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    profileText: {
        fontSize:12, 
        fontWeight:'400'
    },

    activityFeed: {

    },

    sections: {
        padding: 10,
        gap: 5
    },

    messageItemInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 5,
    },
    
    messageItemProfile: {
        gap: 2
    }
})