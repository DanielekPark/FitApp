import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/style.module";

const Tips = () => {
  const glossaryTerms = [
    {
      term: "Strength",
      def: "maximum amount of force muscles can generate.",
    },
    {
      term: "Hypertrophy",
      def: "increase in muscle size.",
    },
    {
      term: "Muscular endurance",
      def: "ability to perform repeated movements and resisting fatigue.",
    },
  ];
  return (
    <View>
      <View>
        <Text style={styles.aqua}>
          Tips
        </Text>
        <Text style={styles.aqua}>
          Glossary terms
        </Text>
        <View>
          {glossaryTerms.map((item, index) => {
            return (
              <View key={`${item.term + index}`}>
                <Text style={styles.aqua}>
                  {`\u2022 ${item.term}: ${item.def}`}
                </Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.aqua}>
          Training Age
        </Text>
        <Text style={styles.aqua}>
          {`\u2022 Beginners: less than 2 months`}
        </Text>
        <Text style={styles.aqua}>
          {`\u2022 Intermediate: 3 - 6 months`}
        </Text>
        <Text style={styles.aqua}>
          {`\u2022 Advanced: more than or equal to 1 year`}
        </Text>

        <Text style={styles.aqua}>
          Exercise frequency
        </Text>
        <Text style={styles.aqua}>
          After exercising a muscle group (e.g. chest, back), wait a minimum 48
          hours to train the same muscle group again.
        </Text>
      </View>
    </View>
  );
};

export default Tips; 