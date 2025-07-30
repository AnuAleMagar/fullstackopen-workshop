import React from "react";
import SayHello from "./SayHello";

const App = () => {
  let people = [
    { firstName: "Bini", lastName: "Hamal", key: 1 },
    { firstName: "Chahana", lastName: "Hamal", key: 2 },
    { firstName: "Niru", lastName: "Hamal", key: 3 },
    { firstName: "Bibek", lastName: "Hamal", key: 4 },
    { firstName: "Bishnu Bahadur", lastName: "Hamal", key: 5 },
    { firstName: "Sonika", lastName: "Poudel", key: 6 },
  ];
  return (
    <div className="maindiv">
      <h1>Hamal Family ❤️</h1>
      {people.length > 0 ? (
        people
          .filter((person) => person.lastName === "Hamal")
          .map((person) => <SayHello person={person} key={person.key} />)
      ) : (
        <p>None are from Hamal Family</p>
      )}
    </div>
  );
};

export default App;
