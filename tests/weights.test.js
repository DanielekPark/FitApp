const userData = {
    level: ["Beginner", "Intermediate", "Returning user"],
    levelIndex: '',
    goals: ["Gain muscle", "Get stronger"],
    goalIndex: '',
    availability: [2, 3, 4],
    availIndex: '',
  }

  const updateUserData = (value, key) => {
    return { ...userData, [key]: value };
  };

test('Data object to equal userData', () => {
    const data = updateUserData('Beginner', 'levelIndex'); 
    
    expect(data).toEqual({
        level: ["Beginner", "Intermediate", "Returning user"],
        levelIndex: 'Beginner',
        goals: ["Gain muscle", "Get stronger"],
        goalIndex: '',
        availability: [2, 3, 4],
        availIndex: '',
      })
})