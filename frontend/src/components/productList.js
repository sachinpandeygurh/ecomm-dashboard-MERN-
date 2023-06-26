import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

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
  

 
  return (
    <div className="container mt-3">
      
        <h2>Products List</h2>
      
      <Table striped bordered hover x-2>
        <thead>
          <tr>
            <th>sno.</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>
            <th>company</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
              <td><button onClick={()=>deleteProduct(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ProductsList;
