import React from "react";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  
  const useName = (e) => {
    setName(e.target.value);
  };
  const useEmail = (e) => {
    setEmail(e.target.value);
  };
  const usePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = () => {
  setSuccess(true);
};
  return (
    <div className="container">
      <form className="form_section">
        <label>
          <input type="text" onChange={useName} placeholder="Name" />
          <input type="email" onChange={useEmail} placeholder="Email" />
          <input type="password" onChange={usePassword} placeholder="Password" />
        </label>
      </form>
      <div className="button_section">
        <button onClick={submit}>Submit</button>
      </div>
      {success && <p className="text-success mt-3">Signup Successful!</p>}
    </div>
  );

}

export default Signup;