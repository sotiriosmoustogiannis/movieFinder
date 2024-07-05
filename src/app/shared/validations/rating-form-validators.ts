import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ratingFormValidators {
  static rating(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isInteger = Number.isInteger(value);
    if (value && (!isInteger || value < 1 || value > 10)) {
      return { rating: true };
    }
    return null;
  }
}
