import React, { useState } from "react";
import { View, Image } from "react-native";
import styles from "../../styles/style.module";
import { ButtonGroup, Text } from "@rneui/themed";

const Tutorial = () => {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Text style={[styles.aqua, { paddingBottom: 10 }]}>
        Please ensure you do not have any medical conditions before exercising
      </Text>
      <ButtonGroup
        buttons={["Step 1", "Step 2", "Step 3", "Step 4"]}
        selectedIndex={index}
        onPress={(value) => setIndex(value)}
        buttonContainerStyle={{backgroundColor: '#33cccc'}}
        selectedTextStyle={{color: "#33cccc"}}
        selectedButtonStyle={{backgroundColor: "white"}}
        textStyle={{color: 'white'}}
      />
      {index === 0 && (
        <View>
          <Text style={[{marginBottom: 15}, styles.aqua]}>Answer all questions in the questionaire</Text>
          <Image
            source={require('../../assets/screenshots/stepone.png')}
            style={{    
              flex: 1,
              resizeMode: 'contain',
              height: 300, 
              width: "95%", 
              }}
          />
        </View>
      )}
      {index === 1 && (
        <View>
          <Text style={[{marginBottom: 15}, styles.aqua]}>Select one exercise from each muscle and press next</Text>
          <Image
            source={require('../../assets/screenshots/steptwo.png')}
            style={{    
              flex: 1,
              resizeMode: 'contain',
              height: 300, 
              width: "95%", 
              }}
          />
        </View>
      )}
      {index === 2 && (
        <View>
          <Text style={[{marginBottom: 15}, styles.aqua]}>Add your 1 repetition maximum for an exercise. A calculator is at the bottom to help calculate.</Text>
          <Image
            source={require('../../assets/screenshots/stepthree.png')}
            style={{    
              flex: 1,
              resizeMode: 'contain',
              height: 300, 
              width: "95%", 
              }}
          />
        </View>
      )}
      {index === 3 && (
        <View>
        <Text style={[{marginBottom: 15}, styles.aqua]}>Press next to view your workout</Text>
        <Image
            source={require('../../assets/screenshots/stepfour.png')}
            style={{    
              flex: 1,
              resizeMode: 'contain',
              height: 300, 
              width: "95%", 
              }}
          />
        </View>
      )}
    </View>
  );
};

export default Tutorial;
