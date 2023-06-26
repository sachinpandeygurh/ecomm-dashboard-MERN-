import React, { useState } from "react";

const AddProduct =()=>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h1 className="text-center">Add Product</h1>
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
                      onClick={""}
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
      
}

export default AddProduct;