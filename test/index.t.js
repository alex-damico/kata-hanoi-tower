const Hanoi = require('../lib/hanoi');
require('should');

describe('Test', () => {
  it('disk 0', () => {
    const hanoi = new Hanoi();
    hanoi.start(0).should.length(0);
  });
  it('disk 1', () => {
    const hanoi = new Hanoi();
    const moves = hanoi.start(1);
    const expect = [['A', 'C']];
    moves.should.be.eql(expect);
  });
  it('disk 2', () => {
    const hanoi = new Hanoi();
    const moves = hanoi.start(2);
    const expect = [['A', 'B'], ['A', 'C'], ['B', 'C']];
    moves.should.be.eql(expect);
  });
  it('disk 3', () => {
    const hanoi = new Hanoi();
    const moves = hanoi.start(3);
    const expect = [['A', 'C'], ['A', 'B'], ['C', 'B'],
      ['A', 'C'], ['B', 'A'], ['B', 'C'], ['A', 'C']];
    moves.should.be.eql(expect);
  });
  it('disk 4', () => {
    const hanoi = new Hanoi();
    const moves = hanoi.start(4);
    const expect = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'],
      ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'],
      ['B', 'A'], ['C', 'A'], ['B', 'C'], ['A', 'B'], ['A', 'C'], ['B', 'C'],
    ];
    moves.should.be.eql(expect);
  });
});
