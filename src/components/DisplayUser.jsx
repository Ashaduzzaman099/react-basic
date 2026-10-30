import { useEffect } from "react";

export default function DisplayUser() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>User Component</h1>
    </div>
  );
}
