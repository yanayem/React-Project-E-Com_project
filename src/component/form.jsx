import  react from 'react';

import { useState } from 'react'; 

function Form () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');
 const [action , setAction] = useState('Sign Up')
 const handleSubmit = (e) => {
  e.preventDefault();
  if (action === "Sign Up") {
    console.log("Signing up:", { name, email, password });
  } else {
    console.log("Logging in:", { email, password });
  }
};
  return(
    <div className=" main_section card-3d-wrapper">
      <div className="header">
        <div className="text text-center">{action}</div>
        <div className="underline"></div>
        <form onSubmit={handleSubmit}>
          <div className="inputs ">
            {action === "Log in" ? <div></div> : <div className="input "> <img src="" alt="" />
          <input className='form-control' type="text" placeholder='Name' value={name}
  onChange={(e) => setName(e.target.value)}/>
        </div>}
        <div className="input">
          <img src="" alt="" />
          <input className='form-control' type="email" placeholder='E-mail' value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        </div>
        <div className="input">
          <img src="" alt="" />
          <input className='form-control' type="password" placeholder='Password' value={password}
  onChange={(e) => setPassword(e.target.value)}
 />
        </div>
         </div>
         {action === "Sign Up" ? <div className='mt-5'></div> : 
        <div className="forgot_password ">
          Lost Password 
          <a href="">Click Here</a>
          </div> }
           
        <div className="submit-container">
          <div className={action === "Sign Up" ? "submit gray" : "submit"}><button type="submit" className="signup btn " onClick={()=>{setAction("Sign Up")}}>Sign Up</button> </div>
        <div className={action === "Log in" ? "submit gray" : "submit"}><button type="submit" className="login btn " onClick={()=>{setAction("Log in")}}>Log in</button></div>
        </div>
        </form>
       </div>
       </div>
  );
  }
  export default Form;
