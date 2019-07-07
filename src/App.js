import React from 'react';
import 'rsuite/styles/index.less';
import { HomePage, RegisterPage } from './portal/pages';
import './App.less';

function App() {
  return (
    <>
      <HomePage />
      <RegisterPage />
    </>
  );
}

export default App;
