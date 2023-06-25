import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth)
    {
      navigate('/')
    }
  })

  const collectData = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    });
    
    result = await result.json();
    console.warn(result);


    if (result) {
      localStorage.setItem('user',JSON.stringify(result))
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };
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
                    className="form-control inputBox my-3 " value={name} onChange={(e)=> setName (e.target.value)}
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
                    className="form-control btn text-white appButton my-3" onClick={collectData}
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
