import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { KeyboardService } from '../keyboard.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  display = '0';
  operation: string | null = null;
  prevValue: number | null = null;
  buttons: Array<string> = [
    '-',
    '.',
    '*',
    '/',
    '+',
    '=',
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

  constructor(private keyboardService: KeyboardService) {
    this.keyboardService.keyPressed$.subscribe((key) => {
      this.handleKeyPress(key);
    });
  }

  handleAdd(char: string) {
    this.display =
      this.display === '0' && char === '0' ? '0' : this.display + char;
    this.display = this.display.replace(/0*([0-9.]+)/g, '$1');
    this.display = this.display.replace(/[0-9.]+/g, (dot) => {
      return dot.split('.').reduce((a, b, i) => a + (i === 1 ? '.' : '') + b);
    });
    this.display = this.display.replace(/([+\-*/]*)([+\-*/])/g, (_, p1, p2) => {
      if (p1 === '') return p2;
      return p2 === '-' ? p1.at(-1) + p2 : p2;
    });
  }

  handleEqualsClick() {
    const result = evaluate(this.display);
    const { display } = this;
    this.display = String(result);
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
