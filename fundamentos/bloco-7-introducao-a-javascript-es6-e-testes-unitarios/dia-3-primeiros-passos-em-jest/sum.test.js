const sum = require('./sum')
describe('Exercise 1',()=>{
  it('Checks if when passed the values 2 and 1 the sum function returns 3', ()=>{
    expect(sum(2, 1)).toBe(3);
  });
  it('Checks if when passed the values "2" and 1 the sum function returns 3', ()=>{
    expect(sum("2", 1)).toThrow(Error);
  });
});