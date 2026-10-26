import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const IncreementByValue = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increement</button>
      <button onClick={() => IncreementByValue(5)}>Increement By Value</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
