import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <HomePage />
    </div>
  );
}

export default App;
