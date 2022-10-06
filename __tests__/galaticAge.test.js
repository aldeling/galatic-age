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

  test('should return mercuryAge with two decimal', () => {
    const mercuryAge = new GalaticAge(20);
    expect(mercuryAge.mercuryCalculation()).toEqual(83.33);
  })

  test('should correctly calculate marsAge with two decimals', () => {
    const marsAge = new GalaticAge(21);
    expect(marsAge.marsCalculation()).toEqual(11.17);
  })
});