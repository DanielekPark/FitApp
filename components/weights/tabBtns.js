import React from "react";
import styles from "../../styles/style.module";
import { Tab } from "@rneui/base";

const TabBtns = ({ userData, index, setIndex }) => {
  // 2 DAY AVAILABILITY
  if (userData.availability === 0) {
    return (
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        containerStyle={styles.aquaBg}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Day 1"
          titleStyle={{ fontSize: 20 }}
        />
        <Tab.Item
          title="Day 2"
          titleStyle={{ fontSize: 20 }}
        />
      </Tab>
    );
  }

  // 3 DAY AVAILABILITY
  if (userData.availability === 1) {
    return (
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        containerStyle={styles.aquaBg}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Day 1"
          titleStyle={{ fontSize: 20 }}
        />
        <Tab.Item
          title="Day 2"
          titleStyle={{ fontSize: 20 }}
        />
        <Tab.Item
          title="Day 3"
          titleStyle={{ fontSize: 20 }}
        />
      </Tab>
    );
  }

  // 4 DAY AVAILABILITY
  if (userData.availability === 2) {
    return (
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Recent"
          titleStyle={{ fontSize: 20 }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 20 }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 20 }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 20 }}
        />
      </Tab>
    );
  }
};

export default TabBtns;
