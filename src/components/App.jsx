import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function hOnSubmit(event) {
    setUser(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {user} </h1>
      <form onSubmit={hOnSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
