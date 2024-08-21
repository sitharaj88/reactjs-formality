import { FormState } from './types';

/**
 * Custom hook to manage the state and validation of a single form field.
 * @param name - The name of the form field.
 * @param formState - The current state of the form.
 * @param setFormState - The function to update the form state.
 * @returns The current value, error message, and a change handler for the form field.
 */
export function useField<T>(
  name: keyof T,
  formState: FormState<T>,
  setFormState: React.Dispatch<React.SetStateAction<FormState<T>>>
) {
  /**
   * Handles changes to the form field value.
   * Updates the form state with the new value.
   * @param value - The new value of the form field.
   */
  const handleChange = (value: T[keyof T]) => {
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  return {
    value: formState.values[name],
    error: formState.errors[name],
    handleChange,
  };
}
