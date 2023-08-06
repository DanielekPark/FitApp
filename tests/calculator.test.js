const fitData = {
    weight: "85",
    reps: "6",
};

  //Calculates recommended weight based on weight & repetitions data
  const calcStrength = () => {
    //converts data received from user to number
    const weight = fitData.weight / 1;
    const repetitions = fitData.reps / 1;
    
    if (!weight || weight < 7) return;
    if (!repetitions) return;
    if (repetitions < 1 || repetitions > 15) return;
    return Math.round(weight / (1.0287 - 0.0278 * repetitions));
  };

test('weight is 85 and reps is 6, one rep max is 100', () => {
    expect(calcStrength()).toBeGreaterThanOrEqual(91)
    expect(calcStrength()).toBeLessThan(101)
}); 