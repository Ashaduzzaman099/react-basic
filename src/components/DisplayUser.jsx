import { useEffect, useState } from "react";
import Card from "./Card";

export default function DisplayUser() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.message || "Something went wrong");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loding.....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {data.map((user) => (
        <Card
          name={user.name}
          email={user.email}
          city={user.address.city}
        ></Card>
      ))}
    </div>
  );
}
