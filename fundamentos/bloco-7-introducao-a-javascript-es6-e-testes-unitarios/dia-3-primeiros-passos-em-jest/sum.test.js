const sum = require('./sum')
describe('Exercise 1',()=>{
  it('Checks if when passed the values 2 and 1 the sum function returns 3', ()=>{
    expects(sum(2, 1)).toBe(3);
  });
});