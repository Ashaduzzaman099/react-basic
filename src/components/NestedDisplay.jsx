import { use } from "react";
import { CounterContesxt } from "../providers/counter.provider";

export default function NestedDisplay() {
  const {count} = use(CounterContesxt);
  return (
    <div className="CardBlue">
      <p>Grand Child

        <h1>{count}</h1>
      </p>
      
    </div>
    );  
}