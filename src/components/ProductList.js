import React from "react";
import axios from 'axios';

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
    axios.get('http://localhost:5000/products', ).then((response) => {
      this.setState({
        products : response.data
      })
    })
  }

  handleSubmit() {
    // console.log(this.state.name + this.state.price + this.state.quantity);
    axios.post('http://localhost:5000/product/create', {
      name : this.state.name,
      price : this.state.price,
      quantity : this.state.quantity,
    }).then((response) => {
      console.log(response);
    });
  }

  handleNameChange = (e) => {
    this.setState({
      name : e.target.value,
    })
  }

  handlePriceChange = (e) => {
    this.setState({
      price : e.target.value,
    });
  }

  handleQuantityChange = (e) => {
    this.setState({
      quantity : e.target.value,
    });
  }

  render() {
    return (
      <>
        <form className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type='text' className="form-control" name="name" value={this.state.name} onChange={this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type='text' className="form-control" name="price" value={this.state.price} onChange={this.handlePriceChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type='text' className="form-control" name="quantity" value={this.state.quantity} onChange={this.handleQuantityChange}/>
          </div>
          <input type="submit" className="btn btn-primary" onClick={this.handleSubmit} />
        </form>
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