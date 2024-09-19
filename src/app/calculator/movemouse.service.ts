import { Injectable } from '@angular/core';

@Injectable()
export class MoveMouseService {
  init() {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', e.x + 'px');
      document.documentElement.style.setProperty('--y', e.y + 'px');
    });
  }
}
