export const LoginPage = () =>{

 let username = "Satyabrata123"
 let password = "1234"

 return(
  <div className="h-screen flex justify-center items-center font-serif font-bold" style={{
   backgroundColor:"#36454F"
  }}>
   <div className="border border-red-800 container h-[25rem] w-[30rem] flex flex-col justify-center items-center bg-yellow-400 shadow-lg shadow-yellow-800">
    <h1 className="text-xl">Login</h1>
    <h3 className="mt-3">Welcome to the Admin panel!</h3>
    <input type="text" placeholder="username" className="border-none rounded-md h-9 mt-5 w-[20rem] p-2"/><br />
    <input type="password" placeholder="password" required className="border-none rounded-md h-9 w-[20rem] p-2"/><br />
    <button className=" w-[8rem] h-[2rem] cursor-pointer rounded-md text-white" style={{
   backgroundColor:"#36454F"
  }}>Login</button>
   </div>
  </div>
 )
}

