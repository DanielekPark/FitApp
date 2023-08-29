// Tests to check if if
const list = [
  {
    name: "Leg press",
    muscleGroup: "thigh",
    chosen: false,
    weight: 0,
    reps: 0,
    firstSet: 0,
    secondSet: 0,
    thirdSet: 0,
    availability: 0,
    goal: "",
    startImg: "",
    endImg: "",
    movement: "multi",
    edit: "",
  },
  {
    name: "Deadlift",
    muscleGroup: "Hamstring",
    chosen: false,
    weight: 50,
    reps: 0,
    firstSet: 0,
    secondSet: 0,
    thirdSet: 0,
    availability: 0,
    goal: "",
    startImg: "",
    endImg: "",
    movement: "multi",
    edit: "",
  },
];

const exerciseList = [
  {
    name: "Squat",
    muscleGroup: "thigh",
    chosen: false,
    weight: 50,
    reps: 0,
    firstSet: 0,
    secondSet: 0,
    thirdSet: 0,
    availability: 0,
    goal: "",
    startImg: "",
    endImg: "",
    movement: "multi",
    edit: "",
  },
  {
    name: "Hack squat",
    muscleGroup: "thigh",
    chosen: false,
    weight: 50,
    reps: 0,
    firstSet: 0,
    secondSet: 0,
    thirdSet: 0,
    availability: 0,
    goal: "",
    startImg: "",
    endImg: "",
    movement: "multi",
    edit: "",
  },
];

const countSelected = (...arry) => {
  return [].concat(...arry).reduce((total, item) => {
    if (item.weight > 4) {
      total += 1;
    }
    return total;
  }, 0);
};

test('Should return 3', () => {
    expect(countSelected(list, exerciseList)).toBe(3); 
}); 