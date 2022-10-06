import { TestScheduler } from 'jest';
import GalaticAge from './../src/galaticAge.js';

describe('GalaticAge', () => {
  test('should construct an age object from the given number', () => {
  const galaticAge = new GalaticAge(21);
  expect(galaticAge.age).toEqual(21);
  })

  test('should correctly calculate age on mercury using age', () => {
    const mercuryAge = new GalaticAge(21);
    expect(mercuryAge.mercuryCalculation()).toEqual(87.5);
  })

  test('should correctly calculate age on venus using age with two decimal places', () => {
    const venusAge = new GalaticAge(21);
    expect(venusAge.venusCalculation()).toEqual(33.87);
  })


});