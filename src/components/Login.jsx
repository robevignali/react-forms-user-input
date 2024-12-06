import {useState} from 'react'
import Input from './Input'
import {isEmail,isNotEmpty,hasMinLength} from '../util/validation'

export default function Login() {

  const [formData, setFormData]=useState({email:'',password:''});
  const [didEdit,setDidEdit]=useState({email:false,password:false});
  const [emailIsValid,setEmailIsValid]=useState(true);
  const [pswIsValid,setPswIsValid]=useState(true);
  
  let emailError={isInvalid:false,message:null}
  // if (didEdit.email != "" && !formData.email.includes('@')) {
  //   emailError={isInvalid:true,message:'Please enter a valid email adress.'}
  // }
  if (didEdit.email != "" && !isEmail(formData.email) ) {
    emailError={isInvalid:true,message:'Please enter a valid email adress.'}
  }
  
  let passwordError={isInvalid:false,message:null}

  // if (didEdit.password != "" && formData.password.trim().length <= 6) {
  //   passwordError={isInvalid:true,message:'Please enter a valid password.'}
  // }
    
  if (didEdit.password != "" && !hasMinLength(formData.password,8)) {
    passwordError={isInvalid:true,message:'Please enter a valid password.'}
  }
    

  function handleSubmit(event) {
    event.preventDefault();
    //if(!formData.email.includes('@')){
    if(!isEmail(formData.email)){
      setEmailIsValid(false);
      setFormData({email:'',password:''});
      setDidEdit({email:false,password:false});
      return;
    }
    if(!isNotEmpty(formData.password) && !hasMinLength(formData.password,8)){
      setPswIsValid(false);
      setFormData({email:'',password:''});
      setDidEdit({email:false,password:false});
      return;
    }

    setEmailIsValid(true);
    setPswIsValid(true);
    
    console.log(formData);
  }

  function handleOnChange(event) {
    setFormData((prev)=>{return {...prev,[event.target.name]:event.target.value}})
    setDidEdit((prev)=>{
      return {...prev,[event.target.name]:false}
    })

  }

  function handleBlur(event){
    setDidEdit((prev)=>{
      return {...prev,[event.target.name]:true}
    })

  }

  function handleResetClick(event) {
    event.preventDefault();
    setFormData({email:'',password:''});
    setDidEdit({email:false,password:false});
  }

  return (
    <form  >
      <div className="control-error">
        {!emailIsValid || !pswIsValid ? <p>Please enter valid login.</p>:null}
      </div>
      <h2>Login</h2>
      <div className="control-row">
        
        <Input 
          label="email" 
          id="email"
          error={emailError}
          type="email" 
          name="email"
          onChange={handleOnChange}
          onBlur={handleBlur}
        />  

         <Input 
            label="password" 
            id="password"
            error={passwordError}
            type="password" 
            name="password"
            onChange={handleOnChange}
            onBlur={handleBlur}
          />  

      </div>

      <p className="form-actions">
        <button 
          type="reset" 
          className="button button-flat" 
          onClick={handleResetClick}
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
