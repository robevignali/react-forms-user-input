import {useState, useRef} from 'react'

export default function Login() {

  const [formData, setFormData]=useState({email:'',password:''});
  const emailButton=useRef();
  const passwordButton=useRef();
  console.log(formData);

  function handleResetClick(event) {
    event.preventDefault();
    emailButton.current.value="",
    passwordButton.current.value="";
  }

  function handleLoginClick(event) {
    event.preventDefault();
    setFormData({email:emailButton.current.value, password:passwordButton.current.value})
  }

  return (
    <form  >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            ref={emailButton} 
            id="email" 
            type="email" 
            name="email" 
              />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            ref={passwordButton} 
            id="password" 
            type="password" 
            name="password" 
              />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat" onClick={handleResetClick}>Reset</button>
        <button 
 
          className="button" 
          onClick={handleLoginClick}
          >
            Login
        </button>
      </p>
    </form>
  );
}
