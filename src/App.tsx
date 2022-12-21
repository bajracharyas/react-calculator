import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="form">
      <div>
        <label htmlFor='email'>Email</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id="password" name="password" type="password" />
      </div>
      <div>
        <button id="login" type="submit">
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
