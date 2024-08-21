import { useState } from 'react';
import { FormField, FormState } from './types'; // Ensure these types are correctly defined
import { validateField } from './validation'; // Ensure validateField is correctly typed

/**
 * Custom hook to manage the state and validation of a form.
 * @param initialValues - The initial values of the form fields.
 * @returns The current form state, a function to set the form state, and a submit handler.
 */
export function useForm<T extends Record<string, any>>(initialValues: { [K in keyof T]: FormField<T[K]> }) {
  const [formState, setFormState] = useState<FormState<T>>({
    values: initialValues,
    errors: {} as Partial<Record<keyof T, string>>,
    isValid: true,
  });

  /**
   * Validates the entire form.
   * @returns A boolean indicating whether the form is valid.
   */
  const validate = async (): Promise<boolean> => {
    const errors: Partial<Record<keyof T, string>> = {};

    // Using Object.keys to ensure proper type inference
    for (const key of Object.keys(formState.values) as Array<keyof T>) {
      const field = formState.values[key];
      const error = await validateField(field); // Correct typing is ensured here
      if (error) {
        errors[key] = error;
      }
    }

    setFormState((prev) => ({
      ...prev,
      errors,
      isValid: Object.keys(errors).length === 0,
    }));

    return Object.keys(errors).length === 0;
  };

  /**
   * Handles form submission.
   * Validates the form and, if valid, calls the provided submit handler.
   * @param onSubmit - The function to call upon successful validation.
   */
  const handleSubmit = async (onSubmit: () => void) => {
    if (await validate()) {
      onSubmit();
    }
  };

  return {
    formState,
    setFormState,
    handleSubmit,
  };
}
