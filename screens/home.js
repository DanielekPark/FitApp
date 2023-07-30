import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Calculator from "../components/calculator/calculator";
import Tutorial from "../components/tutorial/tutorial";
import Tips from "../components/tips/tips";
import { ListItem } from "@rneui/themed";
import styles from "../styles/style.module";

function HomeScreen() {
  const [tabs, setTabs] = useState([
    {
      title: "Tutorial",
      isOpen: false,
    },
    {
      title: "Calculator",
      isOpen: false,
    },
    {
      title: "Tips",
      isOpen: false,
    },
    {
      title: "Strategies",
      isOpen: false,
    },
  ]);

  //Collapses or expands tab when pressed
  const toggleTab = (pressed) => {
    const findTab = tabs.map((tab) => {
      if (tab.title === pressed) {
        return { ...tab, isOpen: !tab.isOpen };
      }
      return { ...tab };
    });
    setTabs(findTab);
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {/*====== Home screen images =======*/}
        <View style={styles.homeImgContainer}>
          <Image
            source={require("../assets/images/dumbbell.png")}
            style={styles.homeImg}
          />
          <Image
            source={require("../assets/images/stretch.png")}
            style={styles.homeImg}
          />
          <Image
            source={require("../assets/images/running.png")}
            style={styles.homeImg}
          />
        </View>

        {/*==== TUTUORIAL ====*/}
        <View style={{ width: "95%" }}>
          <ListItem.Accordion
            onPress={() => toggleTab("Tutorial")}
            isExpanded={tabs[0].isOpen}
            content={
              <ListItem.Title
                style={[{ width: "90%" }, styles.accordionFont, styles.aqua]}
              >
                Tutorial
              </ListItem.Title>
            }
            topDivider
            bottomDivider
          >
            <ListItem>
              <View>
                <Tutorial />
              </View>
            </ListItem>
          </ListItem.Accordion>

          {/*====== CALCULATOR ======= */}
          <ListItem.Accordion
            onPress={() => toggleTab("Calculator")}
            isExpanded={tabs[1].isOpen}
            content={
              <ListItem.Title
                style={[{ width: "90%" }, styles.accordionFont, styles.aqua]}
              >
                Calculator
              </ListItem.Title>
            }
            topDivider
            bottomDivider
          >
            <ListItem>
              <Calculator />
            </ListItem>
          </ListItem.Accordion>

          {/* Tips */}
          <ListItem.Accordion
            onPress={() => toggleTab("Tips")}
            isExpanded={tabs[2].isOpen}
            content={
              <ListItem.Title
                style={[{ width: "90%" }, styles.accordionFont, styles.aqua]}
              >
                Tips
              </ListItem.Title>
            }
            topDivider
            bottomDivider
          >
            <ListItem>
              <Tips />
            </ListItem>
          </ListItem.Accordion>
          <ListItem.Accordion
            onPress={() => toggleTab("Strategies")}
            isExpanded={tabs[3].isOpen}
            content={
              <ListItem.Title
                style={[{ width: "90%" }, styles.accordionFont, styles.aqua]}
              >
                Strategies
              </ListItem.Title>
            }
            topDivider
            bottomDivider
          >
            <ListItem>
              <View>
                <Text>Strategies</Text>
              </View>
            </ListItem>
          </ListItem.Accordion>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
