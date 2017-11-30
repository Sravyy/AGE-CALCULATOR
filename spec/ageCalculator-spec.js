import {AgeCalculator} from './../js/AgeCalculator.js';

describe('AgeCalculator', function() {
  it('should test whether age become seconds is true', function() {
    var calculator = new AgeCalculator(new Date("1989-12-12"))
    expect(calculator.convertAgeToSeconds()).toEqual(629424000 )
  });

    it('should test whether years in mercury is true', function() {
      var calculator = new AgeCalculator(new Date("1989-12-12"))
      expect(calculator.ageOnMercury()).toEqual(79)
    });

    it('should test whether years in venus is true', function() {
      var calculator = new AgeCalculator(new Date("1989-12-12"))
      expect(calculator.ageOnVenus()).toEqual(30)
    });

    it('should test whether years in mars is true', function() {
      var calculator = new AgeCalculator(new Date("1989-12-12"))
      expect(calculator.ageOnMars()).toEqual(10)
    });

    it('should test whether years in jupiter is true', function() {
      var calculator = new AgeCalculator(new Date("1989-12-12"))
      expect(calculator.ageOnJupiter()).toEqual(1)
    });

    it('should test whether remaining years in earth is true', function() {
      var calculator = new AgeCalculator(new Date("1989-12-12"))
      expect(calculator.lifeExpOnEarth()).toEqual(61)
    });

    it('should test whether remaining years in mercury is true', function() {
      var galacticCheck = new AgeCalculator(new Date("1989-12-12"))
      expect(galacticCheck.yearsOnMercury()).toEqual(254)
    });

    it('should test whether remaining years in venus is true', function() {
      var galacticCheck = new AgeCalculator(new Date("1989-12-12"))
      expect(galacticCheck.yearsOnVenus()).toEqual(98)
    });

    it('should test whether remaining years in mars is true', function() {
      var galacticCheck = new AgeCalculator(new Date("1989-12-12"))
      expect(galacticCheck.yearsOnMars()).toEqual(32)
    });

    it('should test whether remaining years in jupiter is true', function() {
      var galacticCheck = new AgeCalculator(new Date("1989-12-12"))
      expect(galacticCheck.yearsOnJupiter()).toEqual(5)
    });
});
