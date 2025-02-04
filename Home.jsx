import React, { useState } from 'react'

const Home = () => {
    const[email,setemail]= useState('');
    const[password,setpassword]= useState('');
    const[error,seterror]= useState({});
    const validateEmail=(email)=>{
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
    }
    const validatePassword=(password)=>{
        return password.length >= 6
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        let formErrors={};
        if(!validateEmail(email)){
            formErrors.email="invalid email formate"
        }
        if(!validatePassword(password)){
            formErrors.password="password must be atleast 6"
        }
        if(Object.keys(formErrors).length>0){
            seterror(formErrors);
        }
        else{
            console.log('form submitted',{email,password})
            setemail('')
            setpassword('')
            seterror({});
        }
    }
  return (
    <form onSubmit={handleSubmit}>
    <div>
<label>Email</label>
<input type='email' id='' value={email} placeholder='ennter email' onChange={(e)=>setemail(e.target.value)}></input>
{error.email&&<p style={{color:'red'}}>{error.email}</p>}
    </div>
    <div>
<label>Password</label>
<input type='password' id='' value={password} placeholder='enter password' onChange={(e)=>setpassword(e.target.value)}></input>
{error.password&&<p style={{color:'red'}}>{error.password}</p>}
    </div>
    <div>
<button type='submit'>Submit</button>
    </div>
    </form>
  )
}

export default Home