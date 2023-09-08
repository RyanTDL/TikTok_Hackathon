import React, { useState, useEffect, useRef } from "react";
import {
  StatusBar,
  Animated,
  Easing,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Button,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { RandomReveal } from "react-random-reveal";
import itemList from "../constants/itemList";
import DisplayItem from "../components/itemDisplay";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function SecretSantaResults({ route,navigation }) {
  const assignments = route.params.assignments;

  const animationProgress = useRef(new Animated.Value(0));
  const [revealed, setRevealed] = useState(false);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [revealedAssignments, setRevealedAssignments] = useState(false);
  const [eventStarted, setEventStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [shuffledParticipants, setShuffledParticipants] = useState([]);
  const [initialTimerValue, setInitialTimerValue] = useState(5); // Initial timer value (delayed)
  const [timer, setTimer] = useState(null); // Initialize timer as null
  const [revealButtonDisabled, setRevealButtonDisabled] = useState(false); // Initially, the Reveal Names button is not disabled
  const [buttonText, setButtonText] = useState("Event ends in..."); // Initial button text

  useEffect(() => {
    if (showModal || revealed) {
      return; // Don't start the animation if the modal is open or already revealed
    }
  
    if (isRandomizing) {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 2500, 
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        // Animation is complete, reveal the names
        setRevealed(true);
        setIsRandomizing(false);
        shuffleParticipants(); // Shuffle the participants here
        setShowModal(true); // Set showModal to true after revealing names
        // setRevealButtonDisabled(true); 
        setButtonText("End Event!"); 
      });
    }
  }, [showModal, isRandomizing, revealed]);
  
  useEffect(() => {
    if (initialTimerValue > 0 && !revealed && !isRandomizing && !eventStarted) {
      // Delay the initial timer by 1 seconds
      setTimeout(() => {
        setTimer(initialTimerValue); 
      }, 800); 
    }
  }, [initialTimerValue, revealed, isRandomizing, eventStarted]);
  
  useEffect(() => {
    if (timer !== null && timer > 0 && !revealed) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        setButtonText(`Timer: ${timer - 1}`); 
      }, 1000); 
  
      return () => {
        clearInterval(timerInterval);
      };
    } else if (timer === 0 && !revealed) {
      // Enable the Reveal Names button when the timer reaches 0
      setRevealButtonDisabled(false);
      setEventStarted(true);
      setButtonText("Reveal Pairs");
    }
  }, [timer, revealed, isRandomizing]);

  const shuffleParticipants = () => {
    const participantsArray = Object.keys(assignments);
    let shuffledArray = [...participantsArray];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    setShuffledParticipants(shuffledArray);
  };

  const revealNames = () => {
    if (!isRandomizing && !revealed) {
      setButtonText("Searching..."); // Change button text when revealing names
      // setRevealButtonDisabled(true); // Disable the button during animation
      setIsRandomizing(true);
      setTimeout(() => {
        setRevealedAssignments(true); // After 8 second, reveal the names
      }, 8000);
    } else if (revealedAssignments) {
        setButtonText("End Event!");
        setRevealButtonDisabled(false);
        navigation.navigate('Profile Page');
    } 
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/tiktokbackground.jpg")}
        imageStyle={{ opacity: 0.3 }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={styles.title}>
            <Text style={{ fontSize: 20, fontWeight: "900", color: 'black'}}>
              {" "}
              Find a gift for {assignments["Keagan"]}!{" "}
            </Text>
            <TouchableOpacity
              style={[
                styles.revealButton,
                {
                  backgroundColor: revealButtonDisabled ? "grey" : "#69C9D0", // Grey color when disabled
                },
              ]}
              onPress={isRandomizing ? revealNames : revealNames}
              disabled={revealButtonDisabled}
            >
                <Text style={styles.participantButtonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1.5,borderWidth: 1, borderColor: 'black'}}>
            <Text style={styles.subTitle}> {assignments["Keagan"]}'s wishlist </Text>
            <FlatList
              data={itemList.slice(0, 2)}
              renderItem={({item}) => 
                <DisplayItem
                  navigation={navigation}
                  navigationItemName1={item.navigationItemName1}
                  navigationItemName2={item.navigationItemName2}
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
          </View>
        </View>

      {isRandomizing ? (
        <AnimatedLottieView
          source={require("../assets/animations/download.json")}
          progress={animationProgress.current}
          style={{ flex: 1, width: 200, height: 200 }}
          autoPlay
          loop
        />
        ) : null
      }

      {revealed ? (
        shuffledParticipants.map(participant => (
          <View key={participant} style={styles.assignmentContainer}>
            <View style={styles.gifterBox}>
              <Text style={styles.gifterText}>{participant}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>➔</Text>
            </View>
            <View style={styles.gifteeBox}>
              {revealedAssignments ? (
                <Text style={styles.assignmentText}>{assignments[participant]}</Text>
              ) : (
                <Text style={styles.assignmentText}>
                  <RandomReveal isPlaying duration={2} characters={assignments[participant]} />
                </Text>
              )}
            </View>
          </View>
        ))) : null
      }
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  background: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    flex: 0.2, 
    justifyContent: "center",
    alignItems: 'center',
  },


  revealButton: {
    borderRadius: 5,
    padding: 3,
    margin: 5,
    borderWidth: 3,
    borderColor: 'black'
  },

  participantButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "700",
  },

  subTitle: {
    fontSize: 25, 
    fontWeight:"800", 
    textAlign: 'center', 
    color: '#EE1D52',
    textDecorationLine: "underline" 
  },

  assignmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    alignItems: 'center',
  },
  gifterBox: {
    backgroundColor: '#EE1D52',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  gifteeBox: {
    backgroundColor: '#69C9D0',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },

  gifterText: {
    fontSize: 16,
    color: 'white'
  },
  assignmentText: {
    fontSize: 16,
    color: 'black'
  },

  arrow: {
    fontSize: 20,
  },

  arrowContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 10,

  },
});
