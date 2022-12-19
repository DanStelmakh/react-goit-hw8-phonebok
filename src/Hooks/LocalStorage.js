import { useState } from 'react';

export const useLocalStoradge = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });
  return [state, setState];
};
