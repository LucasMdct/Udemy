import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Olá jovems.</p>
        <PomodoroTimer defaultPomodoTime={2000} />
      </header>
    </div>
  );
}

export default App;
