import { Injectable } from '@angular/core';

@Injectable()
export class FormatService {
  constructor() {}
  format(result: number) {
    let resultadoStr = result.toString();

    if (resultadoStr.length >= 9) {
      const sliced = resultadoStr.slice(0, 9);
      const indexPoint = sliced.indexOf('.');
      if (indexPoint === -1) {
        resultadoStr = sliced + '.';
      } else {
        resultadoStr = sliced;
      }
      resultadoStr += 'e';
      const exponente = Math.ceil(
        Math.log10(Number(result.toString().slice(9))),
      );
      resultadoStr += exponente;
    }

    return resultadoStr;
  }
}
