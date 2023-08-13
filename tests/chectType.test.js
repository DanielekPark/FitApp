import exercises from "../components/weights/exercises";
//Counts the number of exercises selected

const listCopy = exercises.map((exerc) => {
  if (exerc.name === "Leg lifts") {
    return { ...exerc, chosen: true };
  }
  return exerc;
});

const numOfSelect = listCopy.reduce((list, item) => {
  if (item.chosen) {
    list += 1;
  }
  return list;
}, 0);

test("Should return 2, 2 exercises we're selected.", () => {
  expect(numOfSelect).toBe(1);
});
