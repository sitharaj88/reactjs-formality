import React from 'react';
import { useForm } from 'reactjs-formality';

// Define the shape of your form's values
interface RegistrationFormValues {
  name: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const { formState, handleSubmit, setFormState } = useForm<RegistrationFormValues>({
    name: { value: '', validationRules: [(v: string) => (v ? null : 'Name is required')] },
    email: {
      value: '',
      validationRules: [
        (v: string) => (v ? null : 'Email is required'),
        (v: string) => (/\S+@\S+\.\S+/.test(v) ? null : 'Email is invalid'),
      ],
    },
    password: {
      value: '',
      validationRules: [
        (v: string) => (v ? null : 'Password is required'),
        (v: string) => (v.length >= 6 ? null : 'Password must be at least 6 characters long'),
      ],
    },
  });

  const onSubmit = () => {
    alert('Form submitted successfully!');
    console.log('Form Values:', formState.values);
  };

  return (
    <form
      className="needs-validation"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${formState.errors.name ? 'is-invalid' : ''}`}
          id="name"
          value={formState.values.name.value}  // Accessing the value directly
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              values: {
                ...prevState.values,
                name: { ...prevState.values.name, value: e.target.value },
              },
            }))
          }
        />
        {formState.errors.name && <div className="invalid-feedback">{formState.errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${formState.errors.email ? 'is-invalid' : ''}`}
          id="email"
          value={formState.values.email.value}  // Accessing the value directly
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              values: {
                ...prevState.values,
                email: { ...prevState.values.email, value: e.target.value },
              },
            }))
          }
        />
        {formState.errors.email && <div className="invalid-feedback">{formState.errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className={`form-control ${formState.errors.password ? 'is-invalid' : ''}`}
          id="password"
          value={formState.values.password.value}  // Accessing the value directly
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              values: {
                ...prevState.values,
                password: { ...prevState.values.password, value: e.target.value },
              },
            }))
          }
        />
        {formState.errors.password && <div className="invalid-feedback">{formState.errors.password}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
