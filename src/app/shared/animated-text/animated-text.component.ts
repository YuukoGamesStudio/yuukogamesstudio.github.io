import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.scss'],
})
export class AnimatedTextComponent implements OnInit {
  readonly texts = input<string[]>(['']);
  readonly showCursor = input<boolean>(false);

  currentWordIndex: number = 0;
  dynamicText: string = '';
  currentInterval!: NodeJS.Timeout;

  ngOnInit(): void {
    this.dynamicText = '';
    this.currentInterval = setInterval(this.writeNextCharacter, 100, this);
  }

  private writeNextCharacter(that: this) {
    that.dynamicText += that.texts()[that.currentWordIndex].charAt(
      that.dynamicText.length
    );

    if (that.dynamicText.length >= that.texts()[that.currentWordIndex].length) {
      clearInterval(that.currentInterval);
      setTimeout(() => {
        that.currentInterval = setInterval(that.eraseLastCharacter, 50, that);
      }, 1000);
    }
  }

  private eraseLastCharacter(that: this) {
    that.dynamicText = that.dynamicText.slice(0, -1);

    if (that.dynamicText.length <= 0) {
      clearInterval(that.currentInterval);
      that.currentWordIndex = (that.currentWordIndex + 1) % that.texts().length;
      setTimeout(() => {
        that.currentInterval = setInterval(that.writeNextCharacter, 100, that);
      }, 500);
    }
  }
}
