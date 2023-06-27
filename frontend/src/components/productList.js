import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
// import { events } from "../../../backend/db/User";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    // deleteProduct();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      getProducts();
      alert(`Product deleted successfully`);
    }
  };
  const searchHandle = async (event) => {
    let key = event.target.value;

    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };
  return (
    <div className="container mt-3">
      <h2>Products List</h2>
      <input
        className="searchProductBox my-1 rounded"
        type="text"
        placeholder="Search Product here.."
        onChange={searchHandle}
      />
      <Table striped bordered hover x-2>
        <thead>
          <tr className="table-primary">
            <th scope="col">Sno.</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Company</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td>
                  <button
                    className="btn btn-sm border rounded text-danger mx-1"
                    onClick={() => deleteProduct(item._id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-sm border rounded text-success mx-1"
                    to={`/update/${item._id}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <h1>No result found</h1>
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default ProductsList;
