import { useState } from 'react';

function useInputChange() {
  const [input, setInput] = useState({});

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return [input, handleInputChange];
}

export { useInputChange };
