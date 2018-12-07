class Hanoi {
  start(numberDisk) {
    this.moves = [];
    if (numberDisk > 0) {
      this.exec(numberDisk, 'A', 'C', 'B');
    }
    return this.moves;
  }

  exec(numberDisk, from, to, aux) {
    if (numberDisk === 1) {
      console.log(`Move disk 1 from ${from} to ${to}`);
      this.moves.push([from, to]);
    }
    if (numberDisk !== 1) {
      this.exec(numberDisk - 1, from, aux, to);
      console.log(`Move disk ${numberDisk} from ${from} to ${to}`);
      this.moves.push([from, to]);
      this.exec(numberDisk - 1, aux, to, from);
    }
  }
}

module.exports = Hanoi;
