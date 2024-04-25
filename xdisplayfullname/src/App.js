import { useRef, useState } from "react";

function App() {
   
   const [fullName,setFullName] = useState('');
   const firstName =useRef()
   const lastName =useRef()
   
   const addName =(e)=>{

     setFullName(`${firstName.current.value} ${lastName.current.value}`)
   }
   
  return (
    <>
       <h1>Full Name Display</h1>
       <span>First Name:</span><input type="text" ref={firstName}/><br/>
       <span>Last Name:</span><input type='text' ref={lastName} /><br/>
        <button onClick={addName}>Submit</button>

        {fullName.length>0&&<p>Full Name:{fullName}</p>}
    </>
  );
}

export default App;
