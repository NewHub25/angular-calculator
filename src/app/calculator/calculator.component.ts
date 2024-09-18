import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  display: string = '0';
  operation: string | null = null;
  prevValue: number | null = null;

  handleNumberClick(num: string): void {
    this.display = this.display === '0' ? num : this.display + num;
  }

  handleOperationClick(op: string): void {
    this.operation = op;
    this.prevValue = parseFloat(this.display);
    this.display = '0';
  }

  handleEqualsClick(): void {
    const current = parseFloat(this.display);
    let result = 0;
    switch (this.operation) {
      case '+':
        result = this.prevValue! + current;
        break;
      case '-':
        result = this.prevValue! - current;
        break;
      case '*':
        result = this.prevValue! * current;
        break;
      case '/':
        result = this.prevValue! / current;
        break;
      default:
        return;
    }
    this.display = result.toString();
    this.operation = null;
    this.prevValue = null;
  }

  handleClear(): void {
    this.display = '0';
    this.operation = null;
    this.prevValue = null;
  }
}
