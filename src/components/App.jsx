import React from "react";
import Title from "./Title";

import Form from "./Form.jsx";
//Check id user is register
var isLoggedIn = true;
//
function App() {
  return (
    <div className="container">
      <Title />
      <Form loggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
