import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authprovider/AuthProvider';

const Register = () => {
  const [error,setError]=useState({});
  const {creatNewUser,setUser,loginWithGoogle} = useContext(AuthContext)
  const handleRegister =(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name,email,password,photo)
    console.log('clicked')
    const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if(!passwordValidation.test(password)){
      setError({password:'Password at least one upperCase ,one lowerCase,and 6 charecter or long'});
      return
    }
    creatNewUser(email,password)
    .then(result=>{
      console.log(result.user)
      manageProfile(name,photo)
     setUser(result.user)
     navigate(location?.state?location.state:'/')
    })
    .catch((err) => {
      const errorMessage = err.message;
     setError(errorMessage)
    });
    // const handleGoogleLogin=()=>{
    //   loginWithGoogle(auth,provider)
    //   .then(result =>{
    //     setUser(result.user)
    //     navigate(location?.state?location.state:'/')
    //   })
    //   .catch((err) => {
    //     const errorMessage = err.message;
        
    //   });
  }
    return (
        <div className='my-10 w-11/12 mx-auto '>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col ">
<div className="text-center ">
  <h1 className="text-2xl font-bold">Registration now!</h1>
</div>
<div className=" card bg-base-100  max-w-xl shrink-0 shadow-2xl p-5 ">
    <form onSubmit={handleRegister}>
  <div className="card-body">
    <fieldset className="fieldset">Name
      <label  className="fieldset-label"></label>
      <input name='name' type="text" className="input" placeholder="Name" />
      <label  className="fieldset-label">Photo-URL</label>
      <input name='photo' type="text" className="input" placeholder="Photo-URL" />
      <label  className="fieldset-label">Email</label>
      <input name='email' type="email" className="input" placeholder="Email" />
   <div className='relative'>
   <label className="fieldset-label">Password</label>
   <input name='password' className="input" placeholder="Password" />
   <button  className='absolute right-3 cursor-pointer top-6'>
</button>
   </div>
      <button className="btn btn-neutral mt-4">Register</button>
    </fieldset>
  </div>
  <p className=''>Alredy Have An Account ? <Link className='text-red-400' to='/login'>Login</Link></p>
  </form>
  <button onClick={()=>handleGoogleLogin()} className="btn bg-white text-black mt-4 border-[#e5e5e5]">
<svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
Login with Google
</button>


</div>
{
        error.password && <label className="fieldset-label text-sm text-red-500">{error.password}</label>
      }
</div>

</div>
    </div>
    );
};

export default Register;