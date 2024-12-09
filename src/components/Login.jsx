import {useState} from 'react'
import Input from './Input'
import {isEmail,isNotEmpty,hasMinLength} from '../util/validation'
import useInput from '../hook/useInput'

export default function Login() {

  const {
    value: emailValue,
    handleOnChange: handleEmailChange,
    handleBlur:handleEmailBlur,
    hasError:emailHasError
    }=useInput('',(value)=>isEmail(value) && isNotEmpty(value));

    const {
      value: passwordValue,
      handleOnChange: handlePswChange,
      handleBlur:handlePswBlur,
      hasError:pswHasError
      }=useInput('',(value)=>hasMinLength(value,6));
  
  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || pswHasError) {
      return;
    }
    
    console.log(emailValue,passwordValue);
  }

  return (
    <form  >
      <h2>Login</h2>
      <div className="control-row">
        
        <Input 
          label="email" 
          id="email"
          error={emailHasError && 'Please enter a valid email'}
          type="email" 
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
        />  

         <Input 
            label="password" 
            id="password"
            error={pswHasError && 'Please enter a valid password'}
            type="password" 
            name="password"
            onChange={handlePswChange}
            onBlur={handlePswBlur}
            value={passwordValue}
          />  

      </div>

      <p className="form-actions">
        <button 
          type="reset" 
          className="button button-flat" 
            >
            Reset
        </button>
        <button 
 
          className="button" 
          onClick={handleSubmit}
          >
            Login
        </button>
      </p>
    </form>
  );
}
