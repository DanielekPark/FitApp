// Tests adding weights for exercises
const exer = {
  name: "Squat",
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
  edit: ''
}

let list = [{
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
  edit: ''
},
{
  name: "Squat",
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
  edit: ''
}]

const handleChange = (value) => {
  const weight = Number(value);
  const updateWeight = list.map((item) => {
    if (exer.name === item.name) {
      return { ...item, weight: weight };
    }
    return item;
  });
  list = updateWeight; 
  return list
};

const newArry = handleChange('5');

test('Exercise to have a weight of 5', () => {
  expect(newArry[1].weight).toBe(5)
})