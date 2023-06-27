import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate= useNavigate()

  useEffect(() => {
    getProductDetails();
  
  }, []);


  const getProductDetails = async ()=>{
    console.warn(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    result = await result.json()
    console.warn(result);
  setName (result.name)
  setPrice (result.price)
  setCategory (result.category)
  setCompany (result.company)
  }

  const updateProduct = async () => {
    console.warn(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      method:'Put',
      body:JSON.stringify({name, price, category, company}),
      headers:{'Content-Type':'application/json'}
    })
    result= await result.json()
    // alert(result);
    navigate("/")

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">Update Product</h1>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button
                  className="form-control btn btn-primary appButton my-3"
                  onClick={updateProduct}
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
