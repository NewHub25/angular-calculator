import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

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

  handleAdd(char: string) {
    this.display =
      this.display === '0' && char === '0' ? '0' : this.display + char;
    this.display = this.display.replace(/0*([0-9.]+)/g, '$1');
    this.display = this.display.replace(/[0-9.]+/g, (dot) => {
      return dot.split('.').reduce((a, b, i) => a + (i === 1 ? '.' : '') + b);
    });
    this.display = this.display.replace(
      /([+\-*/]*)([+\-*/])/g,
      (signs, p1, p2) => {
        console.log({ p1, p2 });
        if (p1 === '') return p2;
        return p2 === '-' ? p1.at(-1) + p2 : p2;
      },
    );
  }

  // handleOperationClick(op: string) {
  //   this.operation = op;
  //   this.prevValue = parseFloat(this.display.replace(/\.+/, '.'));
  //   this.display = '0';
  // }

  handleEqualsClick() {
    const result = String(evaluate(this.display));
    const { display } = this;
    console.log({ result, display });
    this.display = result;
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
    // this.operation = null;
    // this.prevValue = null;
  }
}
