import { useEffect, useState } from "react";
import Card from "./Card";

export default function DisplayUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
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
