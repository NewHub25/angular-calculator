import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
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
  prevValue: string = '';
  currentValue: string = '';
  operatorClickedLast = false;
  isNegativeInput = false; // Bandera para identificar si el número es negativo
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

  constructor() {
    document.addEventListener('mousemove', (e) => {
      document.documentElement.style.setProperty('--x', e.x + 'px');
      document.documentElement.style.setProperty('--y', e.y + 'px');
    });
  }

  handleNumberClick(num: string) {
    if (this.operatorClickedLast) {
      this.display = num;
      this.operatorClickedLast = false;
    } else {
      if (num === '.' && this.display.includes('.')) return; // Evitar múltiples puntos decimales
      this.display = this.display === '0' ? num : this.display + num;
    }
    this.currentValue = this.display;
  }

  handleOperationClick(op: string) {
    // Manejar números negativos después de un operador
    if (op === '-' && (this.operatorClickedLast || this.display === '0')) {
      if (this.operatorClickedLast) {
        this.display = '-';
        this.isNegativeInput = true; // Indica que el siguiente número será negativo
      } else if (this.display === '0') {
        this.display = '-';
      }
      this.operatorClickedLast = true;
      return;
    }

    // Reemplazar operadores consecutivos (excepto para el signo negativo)
    if (this.operatorClickedLast && !this.isNegativeInput) {
      this.operation = op;
      return;
    }

    if (this.prevValue && !this.operatorClickedLast) {
      this.calculate();
    } else {
      this.prevValue = this.display;
    }

    this.operation = op;
    this.operatorClickedLast = true;
    this.isNegativeInput = false; // Resetear la bandera de número negativo
  }

  calculate() {
    let result = 0;
    const prev = parseFloat(this.prevValue);
    const current = parseFloat(this.currentValue);

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    this.display = result.toString();
    this.prevValue = this.display;
    this.currentValue = '';
    this.operation = null;
  }

  handleEqualsClick() {
    if (!this.prevValue || !this.operation) return;
    this.calculate();
    this.operatorClickedLast = false;
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
    this.prevValue = '';
    this.currentValue = '';
    this.operation = null;
    this.operatorClickedLast = false;
    this.isNegativeInput = false;
  }
}
