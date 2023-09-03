import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { RandomReveal } from 'react-random-reveal';
import * as Animatable from 'react-native-animatable';

const participants = ["yogee", "ryans", "elgin", "zakir", "keagan", "Jeanette", "khaining"]; // List of participants

export default function Randomiser() {
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

  const assignSecretSanta = async () => {
    setIsRandomizing(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second randomization delay

    const remainingParticipants = [...participants];
    shuffleArray(remainingParticipants);

    const newAssignments = {};

    for (let i = 0; i < remainingParticipants.length; i++) {
      const participant = remainingParticipants[i];
      const recipient = remainingParticipants[(i + 1) % remainingParticipants.length];
      newAssignments[participant] = recipient;
      //newAssignments stores the gifter, giftee pairs
      console.log(newAssignments); 
    }

    setIsRandomizing(false);
    setAssignments(newAssignments);
    setRevealedParticipants([]);
    setRevealedAssignments(false); // Reset revealedAssignments when assignments are assigned
  };

  const revealAllParticipants = () => {
    setRevealedAssignments(true);
  };

  return (
    
    <View style={styles.container}>
    <ImageBackground style={styles.background} 
    source={require('../assets/tiktokbackground.jpg')}
    imageStyle={{opacity: 0.3}}

    > 
      <TouchableOpacity
        style={styles.randomButton}
        onPress={assignSecretSanta}
        disabled={isRandomizing}
      >
        <Text style={styles.santaButtonText}>Assign Secret Santas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.revealButton}
        onPress={revealAllParticipants}
        disabled={isRandomizing}
      >
        <Text style={styles.participantButtonText}>Reveal All Participants</Text>
      </TouchableOpacity>

      {isRandomizing ? (
        <Animatable.View animation="rotate" easing="linear" iterationCount="infinite" style={styles.spinner}>
          <Image
          style={{flex: 0.5,resizeMode: 'contain',}} 
          source ={require('../assets/tiktok.png')}
          />
        </Animatable.View>
      ) : (
        Object.keys(assignments).map(participant => (
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
                  <RandomReveal isPlaying duration={2} characters="???????" />
                </Text>
              )}
            </View>
          </View>
        ))
      )}
      <StatusBar style="auto" />
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  randomButton: {
    backgroundColor: '#EE1D52', 
    borderRadius: 5, 
    padding: 10, 
    margin: 5,
  },

  revealButton: {
    backgroundColor: '#69C9D0', 
    borderRadius: 5, 
    padding: 10, 
    margin: 5
  },

  santaButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: '700',
  },

  participantButtonText: {
    color: 'black', 
    fontSize: 16,
    fontWeight: '700',
  },

  assignmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center'

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
    // borderWidth: 1,
    // borderColor: 'red'
  },
  
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
