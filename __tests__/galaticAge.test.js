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

  test('should correctly calculate jupiterAge with two decimals', () => {
    const jupiterAge = new GalaticAge(21);
    expect(jupiterAge.jupiterCalculation()).toEqual(1.77);
  })

  test('should correctly determine how many years are left on mercury with two decimals', () => {
    const mercuryLeft = new GalaticAge(21);
    expect(mercuryLeft.mercuryRemaining()).toEqual(241.67);
  })

  test('should return a positive number if lived past life expectance', () => {
    const mercuryLeft = new GalaticAge(80);
    expect(mercuryLeft.mercuryRemaining()).toEqual(4.17);
  })

  test('should correctly determine how many years are left on venus with two decimals', () => {
    const venusLeft = new GalaticAge(21);
    expect(venusLeft.venusRemaining()).toEqual(93.55);
  })

  test('should return a positive number if lived passed venus life expectance', () => {
    const venusLeft =new GalaticAge(80);
    expect(venusLeft.venusRemaining()).toEqual(1.61);
  })
});