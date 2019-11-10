class RecursiveDescentParser {
  constructor(input) {
    this.input = input.split(/\s+/);
    this.lookahead = this.input[0];
    this.iteratorIndex = 1;
  }

  next() {
    if (this.iteratorIndex < this.input.length) {
      this.lookahead = this.input[this.iteratorIndex]
      this.iteratorIndex++;
    } else {
      return 0
    }
  }

  parseExpr() {
    let result = this.parseTerm();
    if (this.lookahead === '+') {
      this.next();
      result = result + this.parseExpr()
    } else if (this.lookahead === '-') {
      this.next();
      result = result - this.parseExpr()
    }
    return result;
  }

  parseTerm() {
    let result = this.parseFact();
    if (this.lookahead === '*') {
      this.next();
      result = result * this.parseTerm();
    } else if (this.lookahead === '/') {
      this.next();
      result = result / this.parseTerm();
    }
    return result;
  }

  parseFact() {
    let result = 0;
    if (this.lookahead === '(') {
      this.next();
      result = this.parseExpr();
      if (this.lookahead === ')') {
        this.next();
      } else {
        console.log("Error: no closing parenthesis.");
      }
    } else if (!isNaN(this.lookahead)) {
      result = this.lookahead;
      this.next();
    }
    return parseFloat(result);
  }
}

test = new RecursiveDescentParser('9 / ( 5 - 3 )')
console.log(test.input);
console.log(test.parseExpr());