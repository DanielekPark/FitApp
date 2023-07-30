import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

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
        <Text >
          Tips
        </Text>
        <Text>
          Glossary terms
        </Text>
        <View>
          {glossaryTerms.map((item, index) => {
            return (
              <View>
                <Text key={`${item.term + index}`}>
                  {`\u2022 ${item.term}: ${item.def}`}
                </Text>
              </View>
            );
          })}
        </View>

        <Text>
          Training Age
        </Text>
        <Text>
          {`\u2022 Beginners: less than 2 months`}
        </Text>
        <Text>
          {`\u2022 Intermediate: 2 - 6 months`}
        </Text>
        <Text>
          {`\u2022 Advanced: more than or equal to 1 year`}
        </Text>

        <Text>
          Exercise frequency
        </Text>
        <Text>
          After exercising a muscle group (e.g. chest, back), wait a minimum 48
          hours train the same muscle group again.
        </Text>
        {/* strength range needs work */}
      </View>
    </View>
  );
};

export default Tips; 