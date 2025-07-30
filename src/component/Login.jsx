import {useState} from 'react';

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <div className="login_section card">
      <h1 >Log In</h1>
<from className="login_from form-group" action="">
  <label htmlFor="">
    <div className="email_sec">
    <input type="email" className='form-style' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
    </div>
    <div className="pass_sec">
    <input type="password" className='form-style' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  required/>
    </div>
    <div class="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
    <button className="btn btn-primary mt-3">Login</button>
    <p className="mt-3">Forgot Password? <a href="#" className="text-primary">Reset</a></p>
    <p className="mt-3">Don't have an account? <a href="#" className="text-primary">Sign Up</a></p>
  </label>
</from>
    </div>
  );
}
export default Login;