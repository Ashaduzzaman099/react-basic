import { useState } from "react";
import "./card.css";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [members, setMembers] = useState([
    { name: "Ashik", age: 20, city: "Dhaka" },
    { name: "Kasem", age: 30, city: "Dinajpur" },
    { name: "Hasan", age: 23, city: "Rongpur" },
    { name: "Imran", age: 10, city: "Bogura" },
  ]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setMembers([...members, { name, age, city }]);
    setName("");
    setAge("");
    setCity("");
  };

  return (
    <>
      <div>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <input type="submit" value="Submit" />
        </form>

        {/* <Counter /> */}

        {members
          .filter((member) => member.age >= 18)
          .sort((a, b) => a.age - b.age)
          .map((member) => (
            <Card nam={member.name} age={member.age} city={member.city} />
          ))}
      </div>
    </>
  );
}

export default App;
