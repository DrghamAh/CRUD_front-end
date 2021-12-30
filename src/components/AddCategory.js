import axios from 'axios';
import React from 'react';

class AddCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name : '',
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name : e.target.value,
    });
  }

  handleFormSubmit() {
    axios.post('http://localhost:5000/categories/add', {
      name : this.state.name,
    }).then((response) => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleFormSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Category name : </label>
          <input type="text" name='name' className='form-control' value={this.state.name} onChange={this.handleNameChange}/>
        </div>
        <button type="submit" className='btn btn-primary'>Add</button>
      </form>
    );
  }
}

export default AddCategory;