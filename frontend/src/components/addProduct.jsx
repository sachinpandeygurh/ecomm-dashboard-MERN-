import React, { useState } from "react";

const AddProduct = () => {
  const initialProductState = {
    name: "",
    price: "",
    category: "",
    company: "",
  };

  const [product, setProduct] = useState(initialProductState);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!product.name || !product.price || !product.category || !product.company) {
      setError(true);
      return;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const userName = JSON.parse(localStorage.getItem("user")).name;
    const result = await fetch("http://localhost:5000/addProduct", {
      method: "POST",
      body: JSON.stringify({ ...product, userId, userName }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.warn(data);

    // Reset form fields
    setProduct(initialProductState);
    setError(false);
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
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
                {error && !product.name && (
                  <span className="invalidInput text-danger text-left">Please enter product name</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
                {error && !product.price && (
                  <span className="invalidInput text-danger text-left">Please enter product price</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                />
                {error && !product.category && (
                  <span className="invalidInput text-danger text-left">Please enter product category</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="Product Company Name"
                  name="company"
                  value={product.company}
                  onChange={handleChange}
                />
                {error && !product.company && (
                  <span className="invalidInput text-danger text-left">Please enter product company name</span>
                )}
              </div>
              <div className="form-group">
                <button
                  className="form-control btn btn-primary appButton my-3"
                  onClick={handleSubmit}
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






// import React, { useEffect, useState } from "react";

// const AddProduct = () => {

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [company, setCompany] = useState("");
//   const [error , setError] = useState(false)
//   const addProduct = async () => {

//     if (!name || !price || !category || !company) {
//         setError(true)
//         return false;
//     }

//     const userId = JSON.parse(localStorage.getItem("user"))._id;
//     const userName = JSON.parse(localStorage.getItem("user")).name;
//     let result = await fetch("http://localhost:5000/addProduct", {
//       method: "POST",
//       body: JSON.stringify({ name, price, category, company, userId , userName}),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     console.warn(result);

    
//   };
//   useEffect(() => {
//     addProduct();
//   }, []);


//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-6">
//           <div className="card">
//             <div className="card-body">
//               <h1 className="text-center">Add Product</h1>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control inputBox my-3"
//                   placeholder="Product Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 {error && !name && <span  className="invalidInput text-danger text-left">Please enter product name</span>}
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control inputBox my-3"
//                   placeholder="Product Price"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//                 {error && !price && <span  className="invalidInput text-danger text-left">Please enter product price</span>}

//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control inputBox my-3"
//                   placeholder="Product Category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                 />
//                 {error && !category && <span  className="invalidInput text-danger text-left">Please enter product category</span>}

//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control inputBox my-3"
//                   placeholder="Product Company Name"
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                 />
//                 {error && !company && <span  className="invalidInput text-danger text-left">Please enter product company name</span>}

//               </div>
//               <div className="form-group">
//                 <button
//                   className="form-control btn btn-primary appButton my-3"
//                   onClick={addProduct}
//                   type="button"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;
