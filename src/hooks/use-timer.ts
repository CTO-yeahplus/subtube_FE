import { useEffect, useState } from 'react';

export const useTimer = (initialSeconds: number = 300, onEndTime?: () => void) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value <= 0) return;

    const interval = setInterval(() => setValue(value - 1), 1000);

    return () => clearInterval(interval);
  }, [value]);

  useEffect(() => {
    if (value === 0 && onEndTime) {
      onEndTime();
    }
  }, [value, onEndTime]);

  function execute() {
    setValue(initialSeconds);
  }

  function reset(stop = false) {
    setValue(stop ? 0 : initialSeconds);
  }

  return [value, execute, reset] as [number, () => void, (stop?: boolean) => void];
};
