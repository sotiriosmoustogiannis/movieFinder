import { AbstractControl, ValidationErrors } from '@angular/forms';

export class searchMovieFormValidators {
    static minThreeChars(control: AbstractControl): ValidationErrors | null {
      const value = control.value;
      if (value && value.length < 3) {
        return { minThreeChars: true };
      }
      return null;
    }
  
    static alphanumeric(control: AbstractControl): ValidationErrors | null {
      const value = control.value;
      const regex = /^[a-zA-Z0-9 ]*$/;
      if (value && !regex.test(value)) {
        return { alphanumeric: true };
      }
      return null;
    }
  }