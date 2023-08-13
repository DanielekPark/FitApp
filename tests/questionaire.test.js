import exercises from "../components/weights/exercises";

//tests updateUserData function

const userData = {
    levels: ["Beginner", "Intermediate", "Returning user"],
    goals: ["Gain muscle", "Get stronger"],
    days: [2, 3, 4], 
    exercises, 
    component: "questionaire",
    exp: "",
    availability: "", //based on index
    objective: "",
    selectedNum: 0, //selected number of different exercises 
    upper: exercises.filter((exer) => {
      if (
        exer.muscleGroup === "shoulders" ||
        exer.muscleGroup === "chest" ||
        exer.muscleGroup === "back"
      ) {
        return exer;
      }
    }),
    lower: exercises.filter((exer) => {
      if (
        exer.muscleGroup === "thigh" ||
        exer.muscleGroup === "hamstring" ||
        exer.muscleGroup === "calf"
      ) {
        return exer;
      }
    }),
    previewPlan: false,
  }

  const updateUserData = (key, value) => {
    return { ...userData, [key]: value };
  };

  test('testing dynamic object key value pair', () => {
    const testObj = updateUserData('exp', 'intermediate')
    userData['exp'] = 'intermediate'; 
    expect(userData.upper).toEqual(testObj.upper)
  }); 
  
