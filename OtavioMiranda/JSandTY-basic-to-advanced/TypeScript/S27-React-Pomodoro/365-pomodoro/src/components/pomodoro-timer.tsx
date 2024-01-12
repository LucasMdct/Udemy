import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You Are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="teste" onClick={() => console.log('teste')}></Button>
        <Button text="teste" onClick={() => console.log('teste')}></Button>
        <Button text="teste" onClick={() => console.log('teste')}></Button>
      </div>

      <div className="details">
        <p>Tesntado sdfsafkjasdfjsadj adjfasdfads fs jhfhasdfsdfjsj</p>
        <p>Tesntado sdfsafkjasdfjsadj adjfasdfads fs jhfhasdfsdfjsj</p>
        <p>Tesntado sdfsafkjasdfjsadj adjfasdfads fs jhfhasdfsdfjsj</p>
        <p>Tesntado sdfsafkjasdfjsadj adjfasdfads fs jhfhasdfsdfjsj</p>
      </div>
    </div>
  );
}
