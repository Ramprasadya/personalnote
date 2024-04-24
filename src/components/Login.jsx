import React from 'react'

const Login = () => {
  return (
   <>
   <div className="container flex mx-auto justify-center mt-4">

    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button  type="submit" className="py-2 px-3 bg-violet-600 text-white rounded-[10px] ">Submit</button>
</form>
   </div>
   </>
  )
}

export default Login