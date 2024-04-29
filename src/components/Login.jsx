import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch(`http://localhost:3000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({email,password})
    });
    const jsn =  await response.json()
    if(jsn.success){
      // alert('login')
      localStorage.setItem("token",jsn.authToken)
      navigate("/")
      console.log(jsn)

    }else{
      alert("Inavalid ")
    }
  }
  return (
   <>
   <div className="container flex mx-auto justify-center mt-4">

    <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" name="email" className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} name="password" id="exampleInputPassword1"/>
  </div>
  <button  type="submit" className="py-2 px-3 bg-violet-600 text-white rounded-[10px] ">Submit</button>
</form>
   </div>
   </>
  )
}

export default Login