import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';
function App() {
  return (
    <div className="container">
      <header className="App-header">
        <p>Olá jovems.</p>
        <PomodoroTimer
          pomodoroTime={1500}
          shortRestTime={300}
          longRestTime={900}
          cycles={4}
        />
      </header>
    </div>
  );
}

export default App;
