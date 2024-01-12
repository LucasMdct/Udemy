import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
  defaultPomodoTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div> lucas {secondsToTime(mainTime)}</div>;
}
