import { Component, OnDestroy, OnInit, input, signal } from '@angular/core';

const TYPE_DELAY = 100;
const ERASE_DELAY = 50;
const HOLD_AFTER_WORD = 1000;
const PAUSE_BEFORE_NEXT_WORD = 500;

@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.scss'],
})
export class AnimatedTextComponent implements OnInit, OnDestroy {
  readonly texts = input<string[]>(['']);
  readonly showCursor = input<boolean>(false);

  readonly dynamicText = signal<string>('');

  private currentWordIndex: number = 0;
  private nextStep?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.dynamicText.set('');
    this.nextStep = setTimeout(() => this.writeNextCharacter(), TYPE_DELAY);
  }

  ngOnDestroy(): void {
    clearTimeout(this.nextStep);
  }

  private writeNextCharacter(): void {
    const word = this.texts()[this.currentWordIndex];
    const text = this.dynamicText() + word.charAt(this.dynamicText().length);
    this.dynamicText.set(text);

    this.nextStep =
      text.length >= word.length
        ? setTimeout(() => this.eraseLastCharacter(), HOLD_AFTER_WORD)
        : setTimeout(() => this.writeNextCharacter(), TYPE_DELAY);
  }

  private eraseLastCharacter(): void {
    const text = this.dynamicText().slice(0, -1);
    this.dynamicText.set(text);

    if (text.length > 0) {
      this.nextStep = setTimeout(() => this.eraseLastCharacter(), ERASE_DELAY);
      return;
    }

    this.currentWordIndex = (this.currentWordIndex + 1) % this.texts().length;
    this.nextStep = setTimeout(
      () => this.writeNextCharacter(),
      PAUSE_BEFORE_NEXT_WORD
    );
  }
}
