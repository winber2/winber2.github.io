class Score {
  constructor() {
    this.scoreText = '000000';
    this.score = 0;
    this.scoreBar = $('aside');
  }

  reset() {
    this.score = 0;
    this.scoreBar.text('000000');
  }

  update(n) {
    this.score += n;
    this.convertToText();
    this.scoreBar.text(this.scoreText);
  }

  convertToText() {
    let score = String(this.score);
    while (score.length < 6) {
      score = '0' + score;
    }
    this.scoreText = score;
  }
}

export default Score;
