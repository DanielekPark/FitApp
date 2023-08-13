const exer =   {
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
  }

const arrayExer = (exer) => {
    if (
      exer.muscleGroup === "chest" ||
      exer.muscleGroup === "shoulders" ||
      exer.muscleGroup === "back" ||
      exer.muscleGroup === "biceps" ||
      exer.muscleGroup === "triceps"
    ) {
      return "upper";
    }
    if (
      exer.muscleGroup === "thigh" ||
      exer.muscleGroup === "hamstring" ||
      exer.muscleGroup === "calf"
    ) {
      return "lower";
    }
}

test('An array in the userData hook has been updated', () => {
    expect(arrayExer(exer)).toBe('lower')
}); 

