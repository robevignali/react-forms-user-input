import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function handleFetchData(data) {
    console.log(data);
  }

  return (
    <form  
      onSubmit={handleSubmit((data)=>{handleFetchData(data)})}
      >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          {/* <input id="email" type="email" name="email" /> */}
          <input {...register("email", {required:true})} />
          <div className="control-error">
            {errors.email && <p>Email error</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input {...register("password",{required:true,maxLength:8,minLength:6})} />
          <div className="control-error">
            {errors.password && <p>Password error</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button 
          type="submit" 
          className="button" 
          >
            Login
        </button>

      </p>
    </form>
  );
}
