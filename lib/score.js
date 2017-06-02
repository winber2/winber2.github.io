class Score {
  constructor() {
    this.scoreText = '0000000';
    this.score = 0;
    this.scoreBar = $('aside.score');
  }

  reset() {
    this.score -= 50000;
    if (this.score <= 0) this.score = 0;
    this.convertToText();
    this.scoreBar.text(this.scoreText);
  }

  update(n) {
    this.score += n;
    this.convertToText();
    this.scoreBar.text(this.scoreText);
  }

  convertToText() {
    let score = String(this.score);
    while (score.length < 7) {
      score = '0' + score;
    }
    this.scoreText = score;
  }
}

export default Score;
