import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  //   console.warn(products);
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
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ProductsList;
