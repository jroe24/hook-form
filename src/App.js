import React, { useState } from 'react';
import './App.css';
import UserFormLive from "./components/UserFormLive";

// Creating functional component
function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  // Show UserFormLive.jsk 
  return (
    <div className="App">
      <UserFormLive inputs={state} setInputs={setState} />
    </div>
  );
}

export default App;
