import { FormField, ValidationResult } from './types';

/**
 * Validates a single form field by applying its validation rules.
 * @param field - The form field to validate.
 * @returns The first validation error encountered, or `null` if validation passes.
 */
export async function validateField<T>(field: FormField<T>): Promise<ValidationResult> {
  if (!field.validationRules) {
    return null;
  }

  for (let rule of field.validationRules) {
    const result = await rule(field.value);
    if (result) {
      return result;
    }
  }

  return null;
}
