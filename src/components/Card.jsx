import { useState } from "react";

export default function Card({ nam, age, city }) {
  const [member, setMember] = useState("");
  const clickHandler = (memberName) => {
    setMember(memberName);
  };
  return (
    <>
      {age > 18 ? (
        <div onClick={() => clickHandler(nam)} className="Card">
          <h1>Name: {nam}</h1>
          <h3>Age: {age}</h3>
          <h3>Cite: {city}</h3>
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
