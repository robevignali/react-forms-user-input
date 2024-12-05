import {useState} from 'react'

export default function Login() {

  const [formData, setFormData]=useState({email:'',password:''});
  const [didEdit,setDidEdit]=useState({email:false,password:false});
  const [emailIsValid,setEmailIsValid]=useState(true);

  const emailIsInvalid =didEdit.email != "" && !formData.email.includes('@');
    

  function handleSubmit(event) {
    event.preventDefault();
    if(!formData.email.includes('@')){
      setEmailIsValid(false);
      setFormData({email:'',password:''});
      setDidEdit({email:false,password:false});
      return;
    }
    setEmailIsValid(true);
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
        {!emailIsValid && <p>Please enter a valid email adress.</p>}
      </div>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            //ref={emailButton} 
            id="email" 
            type="email" 
            name="email"
            onChange={handleOnChange}
            onBlur={handleBlur}
            value={formData.email}
              />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email adress.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            //ref={passwordButton} 
            id="password" 
            type="password" 
            name="password"
            onChange={handleOnChange}
            onBlur={handleBlur}
            value={formData.password} 
              />
        </div>
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
