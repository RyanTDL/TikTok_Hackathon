
import React, { useEffect, useRef, useState} from "react";
import { Animated, Easing, StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { RandomReveal } from 'react-random-reveal';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';

//Participants list hard coded for now
const participants = ["Keagan","Elginn_223","Alex120","RyanT0602"]; // List of participants

export default function SecretSanta({navigation}) {

  const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  //Randomising algorithm
  const [assignments, setAssignments] = useState({});
  const [revealedParticipants, setRevealedParticipants] = useState([]);
  const [revealedAssignments, setRevealedAssignments] = useState(false);
  const [isRandomizing, setIsRandomizing] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const assignSecretSanta = () => {
    setIsRandomizing(true);
    const remainingParticipants = [...participants];
    shuffleArray(remainingParticipants);

    const newAssignments = {};

    for (let i = 0; i < remainingParticipants.length; i++) {
      const participant = remainingParticipants[i];
      const recipient = remainingParticipants[(i + 1) % remainingParticipants.length];
      newAssignments[participant] = recipient;
      //newAssignments stores the gifter, giftee pairs
      // console.log(newAssignments); 
    }

    setIsRandomizing(false);
    setAssignments(newAssignments);
    setRevealedParticipants([]);
    setRevealedAssignments(false); // Reset revealedAssignments when assignments are assigned
    
    setTimeout(() => {
      navigation.navigate('SecretSantaResults', { assignments: newAssignments });
    }, 1000); 
  };
  
  // //Reveal all pairs
  // const revealAllParticipants = () => {
  //   setRevealedAssignments(true);
  // };

  //Santa animation
  const [showSantaAnimation, setShowSantaAnimation] = useState(false);
  const santaPosition = useRef(new Animated.Value(0)).current;

  const startSantaAnimation = () => {
    setShowSantaAnimation(true);
    Animated.timing(santaPosition, {
      toValue: 2,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      // Animation completion callback
      setShowSantaAnimation(false);
      // Reset Santa's position
      santaPosition.setValue(0);
    });
  };

  return (

    <ImageBackground style={styles.background} 
    source={require('../assets/tiktokbackground.jpg')}
    imageStyle={{opacity: 0.3}}
    > 
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          {showSantaAnimation && (
              <AnimatedLottieView
                source={require("../assets/animations/santa.json")}
                progress={santaPosition}
                style={[
                  styles.santaLottie, 
                  {
                    marginLeft: santaPosition.interpolate({
                      inputRange: [0, 5],
                      outputRange: ["0%", "100%"], // Move to the right outside the screen
                    }),
                  },
                ]}
                // autoPlay
                // loop={false} 
                resizeMode="cover"
             
              />
            )}
        
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.randomButton}
              onPress={() => {
                startSantaAnimation();
                assignSecretSanta();
              }}
              
              disabled={showSantaAnimation}
            >
              <Text style={styles.santaButtonText}>Assign Secret Santas</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <AnimatedLottieView
            source={require("../assets/animations/present.json")}
            progress={animationProgress.current}
            style = {{flex: 0.8}}
            autoPlay
            loop
          />
        </View>
      </View>


    </ImageBackground>




  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  santaLottie: {
    flex: 1,
  },

  buttonContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  randomButton: {
    backgroundColor: '#EE1D52', 
    borderRadius: 5, 
    padding: 20, 
    margin: 10,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  
  },

  santaButtonText: {
    color: 'white', 
    fontSize: 30,
    fontWeight: '600',

  },


})