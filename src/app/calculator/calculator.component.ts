import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { KeyboardService } from '../keyboard.service';
import { MoveMouseService } from './movemouse.service';
import { CleanStringService } from './clean-string.service';
import { FormatService } from './format.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  providers: [MoveMouseService, CleanStringService, FormatService],
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: [
    './calculator.component.css',
    './button-clear.css',
    './buttons.css',
  ],
})
export class CalculatorComponent {
  display = '0';
  operation: string | null = null;
  prevValue: number | null = null;
  buttons: Array<string> = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
  ];
  buttonLabels: Record<string, string> = {
    '-': 'subtract',
    '.': 'decimal',
    '*': 'multiply',
    '/': 'divide',
    '+': 'add',
    '=': 'equals',
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
  };

  constructor(
    private readonly keyboardService: KeyboardService,
    private readonly moveMouseService: MoveMouseService,
    private readonly cleanStringService: CleanStringService,
    private readonly formatService: FormatService,
  ) {
    this.keyboardService.keyPressed$.subscribe((key) => {
      this.handleKeyPress(key);
    });
    this.moveMouseService.init();
  }

  handleAdd(newChar: string) {
    const plus =
      this.display === '0' && newChar === '0' ? '0' : this.display + newChar;
    this.display = this.cleanStringService.clean(plus);
  }

  handleEqualsClick() {
    try {
      const result = evaluate(this.display) as number;
      if (isNaN(result)) {
        throw new Error('Error in calculation 🚫');
      }
      this.display = this.formatService.format(result);
    } catch (error: any) {
      console.warn(error.message);
      this.display = 'Error 🚫';
    }
  }

  handleButtonClick(char: string) {
    if (char === '=') {
      this.handleEqualsClick();
    } else {
      this.handleAdd(char);
    }
  }

  handleClear() {
    this.display = '0';
  }

  handleBackSpace() {
    this.display = this.display.slice(0, this.display.length - 1) || '0';
  }

  handleKeyPress(key: string) {
    if (key === 'Enter') {
      this.handleEqualsClick();
    } else if (key === 'Delete') {
      this.handleClear();
    } else if (key === 'Backspace') {
      this.handleBackSpace();
    } else {
      this.handleAdd(key);
    }
  }
}
