export default class GalaticAge{
  constructor(age) {
    this.age = age;
  }

  mercuryCalculation() {
    let mercuryAge = (this.age / .24);
    return Math.round(mercuryAge*100)/100;
  }

  venusCalculation() {
    let venusAge = (this.age / .62);
    return Math.round(venusAge*100)/100;
  }

  marsCalculation() {
    let marsAge = (this.age / 1.88);
    return Math.round(marsAge*100)/100;
  }

  jupiterCalculation() {
    
  }
}