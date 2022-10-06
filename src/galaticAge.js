export default class GalaticAge{
  constructor(age) {
    this.age = age;
  }

  mercuryCalculation() {
    let mercuryAge = (this.age / .24);
    return mercuryAge;
  }

  venusCalculation() {
    let venusAge = (this.age / .62);
    return Math.round(venusAge*100)/100;
  }
}