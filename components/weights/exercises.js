/* ==============
    EXERCISE LIST
 ================ */
const exercises = [
  // QUADRICEPS
  {
    name: "Leg press",
    muscleGroup: "Thigh",
    chosen: false,
    weight: 0,
    reps: 0, 
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/leg-press-start.png"),
    endImg: require("../../assets/images/leg-press-end.png"),
    movement: "Multi",
    showImage: false
  },
  {
    name: "Squat",
    muscleGroup: "Thigh",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/squat-start.png"),
    endImg: require("../../assets/images/squat-end.png"),
    movement: "Multi",
    showImage: false
  },
  {
    name: "Seated knee extension",
    muscleGroup: "Thigh",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/hamstring-curl-start.png"),
    endImg: require("../../assets/images/knee-extension-end.png"),
    movement: "Single",
    showImage: false
  },
  // HAMSTRING
  {
    name: "Deadlift",
    muscleGroup: "Hamstring",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/deadlift-start.png"),
    endImg: require("../../assets/images/deadlift-end.png"),
    movement: "Multi",
    showImage: false
  },
  {
    name: "Hamstring curl",
    muscleGroup: "Hamstring",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/hamstring-curl-start.png"),
    endImg: require("../../assets/images/hamstring-curl-end.png"),
    movement: "Single",
    showImage: false
  },
  // CALVES
  {
    name: "Standing calf raise",
    muscleGroup: "Calf",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/stand-calf-start.png"),
    endImg: require("../../assets/images/stand-calf-end.png"),
    movement: "Single",
    showImage: false
  },
  // {
  //   name: "Seated calf raise",
  //   muscleGroup: "Calf",
  //   chosen: false,
  //   weight: 0,
  //   reps: 0,
  //   availability: 0,
  //   goal: "",
  //   startImg: require("../../assets/favicon.png"),
  //   endImg: require("../../assets/favicon.png"),
  //   movement: "Single",
  //   showImage: false
  // },
  // CHEST
  {
    name: "Bench press",
    muscleGroup: "Chest",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/bench-press-start.png"),
    endImg: require("../../assets/images/bench-press-end.png"),
    movement: "Multi",
    showImage: false
  },
  {
    name: "Dips",
    muscleGroup: "Chest",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/dips-start.png"),
    endImg: require("../../assets/images/dips-end.png"),
    movement: "Multi",
    showImage: false
  },
  // BACK
  {
    name: "Machine rows",
    muscleGroup: "Back",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/row-start.png"),
    endImg: require("../../assets/images/row-end.png"),
    movement: "Multi",
    showImage: false
  },
  {
    name: "Pull up machine",
    muscleGroup: "Back",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/pull-up-start.png"),
    endImg: require("../../assets/images/pull-up-end.png"),
    movement: "Multi",
    showImage: false
  },
  //SHOULDERS
  {
    name: "Lateral raise",
    muscleGroup: "Shoulders",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/lateral-raise-start.png"),
    endImg: require("../../assets/images/lateral-raise-end.png"),
    movement: "Single",
    showImage: false
  },
  {
    name: "Shrugs",
    muscleGroup: "Shoulders",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/shrug-start.png"),
    endImg: require("../../assets/images/shrug-end.png"),
    movement: "Single",
    showImage: false
  },
  //CORE
  {
    name: "Leg lifts",
    muscleGroup: "Core",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/leg-lift-start.png"),
    endImg: require("../../assets/images/leg-lift-end.png"),
    movement: "Single",
    showImage: false
  },
  {
    name: "Crunches",
    muscleGroup: "Core",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/crunches-start.png"),
    endImg: require("../../assets/images/crunches-end.png"),
    movement: "Single",
    showImage: false
  },
  {
    name: "Twists",
    muscleGroup: "Core",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/twist-start.png"),
    endImg: require("../../assets/images/twists-end.png"),
    movement: "Single",
    showImage: false
  },
  //BICEPS
  {
    name: "Bicep curls",
    muscleGroup: "Biceps",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/bicep-curl-start.png"),
    endImg: require("../../assets/images/bicep-curl-end.png"),
    movement: "single",
    showImage: false
  },
  {
    name: "Hammer curls",
    muscleGroup: "Biceps",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/bicep-curl-start.png"),
    endImg: require("../../assets/images/hammer-curl-end.png"),
    movement: "single",
    showImage: false
  },
  {
    name: "Concentration curls",
    muscleGroup: "Biceps",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/concentration-curl-start.png"),
    endImg: require("../../assets/images/concentration-curl-end.png"),
    movement: "Single",
    showImage: false
  },
  //TRICEPS
  {
    name: "Cable pulldown",
    muscleGroup: "Triceps",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/cable-pull-down-start.png"),
    endImg: require("../../assets/images/cable-pull-down-end.png"),
    movement: "Single",
    edit: '',
    showImage: false
  },
  {
    name: "Tricep overhead extension",
    muscleGroup: "Triceps",
    chosen: false,
    weight: 0,
    reps: 0,
    availability: 0,
    goal: "",
    startImg: require("../../assets/images/tricep-overhead-start.png"),
    endImg: require("../../assets/images/tricep-overhead-end.png"),
    movement: "Single",
    showImage: false
  },
];
/* 
Images needed for:
Hamstring curl end
Seated calf raise, (start & end)
*/

export default exercises;
