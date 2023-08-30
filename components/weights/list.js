import React, { useState } from "react";
import PlanItem from "./planItem";

const List = ({
  showDemo,
  setShowDemo,
  userData,
  setUserData,
  workoutBtns,
  setWorkoutBtns,
  arry
}) => {
  return userData[arry].map((exer) => {
    return (
      <PlanItem
        key={exer.name + "plan-item"}
        exer={exer}
        showDemo={showDemo}
        setShowDemo={setShowDemo}
        userData={userData}
        setUserData={setUserData}
        workoutBtns={workoutBtns}
        setWorkoutBtns={setWorkoutBtns}
      />
    );
  });
};

export default List;
