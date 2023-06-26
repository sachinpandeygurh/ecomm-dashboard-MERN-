import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error , setError] = useState(false)
  const addProduct = async () => {

    if (!name || !price || !category || !company) {
        setError(true)
        return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const userName = JSON.parse(localStorage.getItem("user")).name;
    let result = await fetch("http://localhost:5000/addProduct", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company, userId , userName}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

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
                {error && !name && <span  className="invalidInput text-danger text-left">Please enter product name</span>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {error && !price && <span  className="invalidInput text-danger text-left">Please enter product price</span>}

              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {error && !category && <span  className="invalidInput text-danger text-left">Please enter product category</span>}

              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                {error && !company && <span  className="invalidInput text-danger text-left">Please enter product company name</span>}

              </div>
              <div className="form-group">
                <button
                  className="form-control btn btn-primary appButton my-3"
                  onClick={addProduct}
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

export default AddProduct;
