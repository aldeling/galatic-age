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
    let jupiterAge = (this.age / 11.86);
    return Math.round(jupiterAge*100)/100;
  }

  mercuryRemaining() {
    let mercuryLeft = ((79 - this.age)/ .24);
    if (mercuryLeft < 0) {
      return Math.round(mercuryLeft*(-1)*100)/100;
    }
    return Math.round(mercuryLeft*100)/100;
  }

  venusRemaining() {
    let venusLeft = ((79 - this.age)/ .62);
    return Math.round(venusLeft*100)/100;
  }
}