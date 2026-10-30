
export default function NestedDisplay({ count }) {
  return (
    <div className="CardBlue">
      <p>Grand Child

        <h1>{count}</h1>
      </p>
      
    </div>
    );  
}