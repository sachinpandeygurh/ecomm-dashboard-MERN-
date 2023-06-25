import React from "react";
import { useState } from "react";

const SignUp = () => {
    const [name, setname]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    // console.log(name)
    // console.log(password)
    // console.log(email)

    const collactData =()=>{console.log(name, email, password)}
    
  return (
    <div className="register mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center">Register</h1>
                <div className="form-group">
                  <input
                    className="form-control inputBox my-3 " value={name} onChange={(e)=> setname (e.target.value)}
                    type="text"
                    placeholder="What's your name?"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control inputBox my-3" value={email} onChange={(e)=> setEmail (e.target.value)}
                    type="text"
                    placeholder="What's your Email?"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control  inputBox my-3" value={password} onChange={(e)=> setPassword (e.target.value)}
                    type="password"
                    placeholder="Create Password"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="form-control btn text-white appButton my-3" onClick={collactData}
                    type="button"
                    placeholder="Submit"
                  >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
