import NestedDisplay from "./NestedDisplay";

export default function Display({ count, setCount }) {
  return (
    <div className="CardYellow">
      <p>Child Component</p>
      <NestedDisplay/>
      {/* <h1>{count}</h1> */}
    </div>
  );
}
