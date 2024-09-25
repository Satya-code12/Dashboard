import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const LoginPage = () =>{

 const [usrname, setUsrname] = useState<string | null>(null)
 const [password, setPassword] = useState<string | null>(null)
 const navigate = useNavigate()
 console.log(usrname);
 console.log(password);
 
 const handleLogin =()=>{
  if (usrname === "Satyabrata" && password === "Hello121") {
   navigate("/dashboard")
   // alert("Login Successfull")
  }else {
   alert("Error : Incorrect Credentials, Can't Navigate to Admin Panel")
  }
 }

 return(
  <div className="h-screen flex justify-center items-center font-serif font-bold" style={{
   backgroundColor:"#36454F"
  }}>
   <div className="box-border container h-[25rem] w-[30rem] flex flex-col justify-center items-center bg-yellow-400 shadow-lg shadow-yellow-800">
    <h1 className="text-xl">Login</h1>
    <h3 className="mt-3">Welcome to the Admin panel!</h3>
    <div className="">
    <input type="text" placeholder="username" className="border-none rounded-md h-9 mt-5 w-[20rem] p-2" onChange={(e)=>setUsrname(e.target.value)}/><br/><p className="text-sm text-red-600">{usrname? "" : "*Credentials are Mandatory"}</p><br />
    <input type="password" placeholder="password" required className="border-none rounded-md h-9 w-[20rem] p-2" onChange={(e)=>setPassword(e.target.value)}/><br/><p className="text-sm text-red-600">{password? "" : "Credentials are Mandatory"}</p><br />
    </div>
    <button className=" w-[8rem] h-[2rem] cursor-pointer rounded-md text-white" style={{
   backgroundColor:"#36454F"
  }} onClick={handleLogin}>Login</button>
   </div>
  </div>
 )
}

