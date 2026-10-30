import { use } from "react";

export default function Counter() {
  const {} = use(CounterContesxt);
  const IncreementByValue = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increement</button>
      <button onClick={() => IncreementByValue(5)}>Increement By Value</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
