import axios from "axios";
import React from "react";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories : [],
      name : '',
      price : 0,
      quantity : 0,
      category_id : 0,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleCategoryIdChange = this.handleCategoryIdChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/categories').then(response => {
      this.setState({
        categories : response.data,
      });
    }).catch(err => {
      console.log(err);
    });
  }

  handleNameChange(e) {
    this.setState({
      name : e.target.value,
    });
  }

  handlePriceChange(e) {
    this.setState({
      price : e.target.value,
    });
  }

  handleQuantityChange(e) {
    this.setState({
      quantity : e.target.value,
    });
  }

  handleCategoryIdChange(e) {
    this.setState({
      category_id : e.target.value
    });
  }

  handleFormSubmit() {
    axios.post('http://localhost:5000/products/create', {
      name : this.state.name,
      price : this.state.price,
      quantity : this.state.quantity,
      category_id : this.state.category_id,
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <>
        <form className="w-50 my-2 mx-auto" onSubmit={this.handleFormSubmit} >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" name="price" className="form-control" value={this.state.price} onChange={this.handlePriceChange} />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name="quantity" className="form-control" value={this.state.quantity} onChange={this.handleQuantityChange} />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select name="category_id" onChange={this.handleCategoryIdChange}>
              <option>Select</option>
              {this.state.categories.map(category => <option value={category._id}>{category.name}</option>)}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </>
    )
  }
}

export default AddProduct;