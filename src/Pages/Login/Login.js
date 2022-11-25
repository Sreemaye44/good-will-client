import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login from '../../../src/assets/illustration-people-login.png';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const [loginError, setLoginError]=useState('');
    const {register, formState: {errors}, handleSubmit}=useForm();
    const handleLogin=(data)=>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result=>{
            const user=result.user;
            
        })
        .catch(error=>{
            console.error(error.message)
            setLoginError(error.message); 
        }
            )
    }
    
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div>
            <img className='w-3/4' src={login} alt="" />
        </div>
        <div className='w-96 p-7 mr-5 bg-accent rounded-md'>
        <h2 className='text-2xl font-extrabold text-transparent bg-clip-text text-center bg-gradient-to-r from-purple-400 to-pink-600'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
      


      <div className="form-control w-full max-w-xs">
  <label className="label"><span className="label-text">Email</span></label>
  <input type="text"
   {...register("email", 
   {required:"Email is required"})} 
   className="input input-bordered w-full max-w-xs"/>
   {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
  
</div>
      <div className="form-control w-full max-w-xs">
  <label className="label"><span className="label-text">Password</span></label>
  <input type="password" {...register("password",
   {required: "Password is required",
    minLength: {value: 6, message: 'Password must be 6 character or longer'}   
   }) 
  } className="input input-bordered w-full max-w-xs"/>
  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

  <label className="label"><span className="label-text">Forget Password?</span></label>
  
</div>
      <input className="btn btn-primary w-full my-3 " value='Login' type="submit" />
      <div>
        {
            loginError && <p>{loginError}</p>
        }
      </div>
    </form>
    <p>Don't have an account? Please <Link className='text-secondary' to="/signup">Register</Link> </p>
    <div className='divider'>OR</div>
    <button className='btn btn-primary w-full'>CONTINUE WITH GOOGLE</button>
        </div>
        
        
        </div>
    );
};

export default Login;