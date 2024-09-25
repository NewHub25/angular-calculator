import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, CalculatorComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
