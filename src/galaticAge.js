export default class GalaticAge{
  constructor(age) {
    this.age = age;
  }

  mercuryCalculation() {
    let mercuryAge = (this.age / .24)
    return mercuryAge;
  }
}