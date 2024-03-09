import React, {useState, useRef} from 'react'
import axios from 'axios';

const Register = () => {

  const cssclass = { textAlign:'center'}
  const [index,setIndex] = useState('');
  const elem1 = useRef();
  const [message, setMessage] = useState({name:'',email:'',password:""});

  const regrun = (e) =>
  {
    e.preventDefault();
    console.log(message);
    
      const load = async ()=>{
       
       axios.post("http://localhost:5000/login",{message})
      .then(res=>{
        console.log(res.data)
        console.log(res)
      });                     }

      load();                            
  }


  return (
    <>
      <p>Register</p>
      <form type="POST"><br></br><br></br>
        
        <label htmlFor='name'> Name </label>
        <input type='text' name='name' onChange={
          e=>{ setMessage({...message,name:e.target.value})}} 
        style={cssclass}></input>
        <br></br><br></br>
        
        <label htmlFor='email'> Email </label>
        <input type='email'  name='email' onChange={
        e=>{ setMessage({...message,email:e.target.value})}}
        style={cssclass}></input>
        <label htmlFor='email' ref={elem1}>Error</label>
        <br></br><br></br>
        
        <label htmlFor='pass'> Password </label>
        <input type='password' name='pass' onChange={
        e=>{ setMessage({...message,password:e.target.value})}}
        style={cssclass}></input>
        <br></br><br></br>
        
        <button type="submit" onClick={(e)=>{ regrun(e)}}>Submit</button>
      </form>
      </>
  )
}

export default Register
