import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RegistrationForm } from './components/Registration/RegistrationForm';
import { Register } from './components/Registration/Register';

const App: React.FC = () => {
  return (
    <div>
      {/* <RegistrationForm/> */}
      <Register/>
    </div>
  );
};

export default App;
