import React from 'react';
import RegistrationForm from './RegistrationForm';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Registration</h1>
      <p className="text-center">
        Please fill out the form below to create an account.
      </p>
      <RegistrationForm />
    </div>
  );
};

export default App;
