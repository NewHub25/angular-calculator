import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '/': 'divide',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '*': 'multiply',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '-': 'subtract',
    '0': 'zero',
    '.': 'decimal',
    '=': 'equals',
    '+': 'add',
  };

  handleNumberClick(num: string) {
    this.display = this.display === '0' ? num : this.display + num;
  }

  handleOperationClick(op: string) {
    this.operation = op;
    this.prevValue = parseFloat(this.display);
    this.display = '0';
  }

  handleEqualsClick() {
    const current = parseFloat(this.display);
    let result = 0;
    switch (this.operation) {
      case '+':
        result = (this.prevValue ?? 0) + current;
        break;
      case '-':
        result = (this.prevValue ?? 0) - current;
        break;
      case '*':
        result = (this.prevValue ?? 0) * current;
        break;
      case '/':
        result = (this.prevValue ?? 0) / current;
        break;
      default:
        return;
    }
    this.display = result.toString();
    this.operation = null;
    this.prevValue = null;
  }

  handleButtonClick(btn: string) {
    if (btn === '=') {
      this.handleEqualsClick();
    } else if (['+', '-', '*', '/'].includes(btn)) {
      this.handleOperationClick(btn);
    } else {
      this.handleNumberClick(btn);
    }
  }

  handleClear() {
    this.display = '0';
    this.operation = null;
    this.prevValue = null;
  }
}
