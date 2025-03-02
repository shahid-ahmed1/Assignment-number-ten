import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen'>
        <div className="hero bg-base-200 min-h-screen ">
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
<h3 className='
    text-2xl font-semibold text-center'>Login Your Acount</h3>
    <form >
  <div className="card-body">
    <fieldset className="fieldset">
      <label className="fieldset-label">Email</label>
      <input type="email" name='email'  className="input" placeholder="Email" />
      <label  className="fieldset-label">Password</label>
      <input type="password" name='password' className="input" placeholder="Password" />
      <div><a className="link link-hover">Forgot password?</a></div>

     {/* {
      error && <label  className="fieldset-label text-red-500 textarea-sm">{error}</label>
     } */}
      <button className="btn btn-neutral mt-4">Login</button>
    </fieldset>

    
  </div>
  </form>
  
  <p>Don't Have An Account ? <Link className='text-red-400' to='/register'>Register</Link></p>
  <button  className="btn bg-white text-black mt-4 border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
</div>

</div>
</div>

    </div>
    );
};

export default Login;