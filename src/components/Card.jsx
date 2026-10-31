import { useState } from "react";

export default function Card({ name, email, city }) {
  const [member, setMember] = useState("");
  const clickHandler = (memberName) => {
    setMember(memberName);
  };
  return (
    <>
      {email === email ? (
        <div onClick={() => clickHandler(name)} className="Card">
          <h1>Name: {name}</h1>
          <h3>Email: {email}</h3>
          <h3>City: {city}</h3>
          {member}
        </div>
      ) : (
        <div className="Card">
          <h1>You are too young</h1>
        </div>
      )}
    </>
  );
}
