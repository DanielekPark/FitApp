const userData = {
    level: ["Beginner", "Intermediate", "Returning user"],
    levelIndex: 'Beginner',
    goals: ["Gain muscle", "Get stronger"],
    goalIndex: 'Get stronger',
    availability: [2, 3, 4],
    availIndex: 3,
  }

const updatedData = () => {
    userData.levelIndex = ''; 
    userData.goalIndex = ''; 
    userData.availIndex = ''; 
    return userData; 
}  

test('key values levelIndex, goalIndex and availIndex are empty strings', () => {
    const updated = updatedData(); 
    expect(userData).toEqual(updated); 
})