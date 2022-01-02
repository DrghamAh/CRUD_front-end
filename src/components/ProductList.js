import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products : [],
      name : '',
      price : 0,
      quantity : 0,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products').then((response) => {
      this.setState({
        products : response.data
      })
    })
  }

  render() {
    return (
      <>
        <div className="input-group">
          <Link to="/products/add">Add product</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <a href="#" className="btn btn-primary"><i className="fas fa-pen"></i></a>
                  <a href="#" className="btn btn-danger"><i className="fas fa-trash"></i></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ProductList;