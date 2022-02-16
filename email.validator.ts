import { AbstractControl } from '@angular/forms';
export function ValidateEmail(
  control: AbstractControl
): { invalidEmail: boolean } | null {
  const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return !EMAIL_REGEXP.test(control.value) ? { invalidEmail: true } : null;
} // ValidatePhone
