import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private keyPressedSource = new Subject<string>();

  keyPressed$ = this.keyPressedSource.asObservable();

  constructor() {
    window.addEventListener('keydown', this.handleKeyPress.bind(this));
  }

  handleKeyPress(event: KeyboardEvent) {
    const key = event.key;
    const validKeys = [
      '-',
      '.',
      '*',
      '/',
      '+',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Backspace',
      'Enter',
      'Delete',
    ];

    if (validKeys.includes(key)) {
      event.preventDefault();
      this.keyPressedSource.next(key);
    }
  }
}
