import { Injectable } from '@angular/core';

@Injectable()
export class CleanStringService {
  constructor() {}
  clean(str: string): string {
    return str
      .replace(/0*([0-9.]+)/g, '$1')
      .replace(/[0-9.]+/g, (dot) => {
        return dot.split('.').reduce((a, b, i) => a + (i === 1 ? '.' : '') + b);
      })
      .replace(/([+\-*/]*)([+\-*/])/g, (_, p1, p2) => {
        if (p1 === '') return p2;
        return p2 === '-' ? p1.at(-1) + p2 : p2;
      });
  }
}
