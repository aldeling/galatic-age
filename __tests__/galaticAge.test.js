import { TestScheduler } from 'jest';
import GalaticAge from './../src/galaticAge.js';

describe('GalaticAge', () => {
  test('should construct an age object from the given number', () => {
  const galaticAge = new GalaticAge(21);
  expect(galaticAge.age).toEqual(21);
  })
});