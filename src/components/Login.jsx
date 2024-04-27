import React from 'react'

const Login = () => {
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch(`http://localhost:3000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const jsn =  await response.json()
    console.log(jsn)
  }
  return (
   <>
   <div className="container flex mx-auto justify-center mt-4">

    <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label for="exampleInputEmail1" name="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="exampleInputPassword1"/>
  </div>
  <button  type="submit" className="py-2 px-3 bg-violet-600 text-white rounded-[10px] ">Submit</button>
</form>
   </div>
   </>
  )
}

export default Login