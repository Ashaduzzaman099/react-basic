import { use } from "react";
import { CounterContesxt } from "../providers/counter.provider";

export default function Counter() {
  const {count, setCount} = use(CounterContesxt);
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
