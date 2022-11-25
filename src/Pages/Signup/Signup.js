import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const [loginError, setLoginError]=useState('');
    const {createUser,updateUser}=useContext(AuthContext);
    const {register, formState: {errors}, handleSubmit}=useForm();
    const handleSignUp=(data)=>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const user=result.user;
            setLoginError('');
            swal('User created Successfully');
            console.log(user);
            const userInfo={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUserDb(data.name, data.email, data.userCategory)
                
            })
            .catch(err=>console.log(err))
        })
         .catch(error=>{console.error(error.message);
         setLoginError(error.message); 
        })
    }
    const saveUserDb=(name,email,userCategory)=>{
        const user={name,email,userCategory};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
           // setCreatedUserEmail(email);
           console.log(data);
            
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7 mr-5 bg-accent rounded-md'>
        <h2 className='text-2xl font-extrabold text-transparent bg-clip-text text-center bg-gradient-to-r from-purple-400 to-pink-600'>Register</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full max-w-xs">
        <label className="label"><span className="label-text">Name</span></label>
        <input type="text" {...register("name", {required: "Name is required"})} className="input input-bordered w-full max-w-xs"/>  
             {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
        </div>
        
        <div className="form-control w-full max-w-xs">
        <label className="label"><span className="label-text">Category</span></label>
        <select {...register("userCategory")} className="select select-secondary w-full max-w-xs">
         <option defaultValue >Buyer</option>
         <option>Seller</option>
        </select>

        </div>


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
      <input className="btn btn-primary w-full my-3 " value='Register' type="submit" />
      <div>
        {
            loginError && <p>{loginError}</p>
        }
      </div>
    </form>
    <p>Already have an account? Please <Link className='text-secondary' to="/login">Login</Link> </p>
    <div className='divider'>OR</div>
    <button className='btn btn-primary w-full'>CONTINUE WITH GOOGLE</button>
        </div>
        
        
        </div>
    );
};

export default Signup;