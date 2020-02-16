import { HomeHeroCol, Letters } from '../store/types';
import { TweenLite } from "gsap";

class HomeLettersMovement {
  private readonly letters: Letters;
  private readonly primaryCol: HomeHeroCol;
  private ev: MouseEvent | undefined;

  constructor(letters: Letters, primaryCol: HomeHeroCol) {
    this.letters = letters;
    this.primaryCol = primaryCol;
  }

  public startHandler() {
    document.addEventListener('mousemove', ev => {
      this.ev = ev;
      this.moveBackground();
      this.transformLetters();
    });
  }

  private moveBackground() {
    TweenLite.to(this.primaryCol, 0.3, {
      width: (54 - ((this.ev.pageX / document.body.clientWidth) * 8)) + '%',
    });
  }

  private transformLetters() {
    const x = this.ev.pageX;
    const y = this.ev.pageY;
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    const a = width / 2;
    const linear = 2 * (x - a) * Math.sign(a - x) + 2 * a;
    const a1 = (linear / width) * 0.004 + (1 - 0.004);
    const b1 = 0;
    const c1 = ((2 * 0.087) / width) * x - 0.087;
    const d1 = 0;
    const a2 = 0;
    const b2 = 1;
    const c2 = 0;
    const d2 = 0;
    const a3 = -c1;
    const b3 = 0;
    const c3 = a1;
    const d3 = 0;
    const a4 = 0;
    const b4 = ((2 * 20) / height) * y - 20;
    const c4 = 0;
    const d4 = 1;

    for (const letter of this.letters) {
      letter.style.transform = `matrix3d(${a1}, ${b1}, ${c1}, ${d1}, ${a2}, ${b2}, ${c2}, ${d2}, ${a3}, ${b3}, ${c3}, ${d3}, ${a4}, ${b4}, ${c4}, ${d4})`;
    }
  }
}

export default HomeLettersMovement