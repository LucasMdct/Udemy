import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  defaultPomodoTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You Are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="teste" onClick={() => console.log('teste')}></Button>
    </div>
    // <div> lucas {secondsToTime(mainTime)}</div>
  );
}
