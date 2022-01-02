import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories : [],
      url : 'http://localhost:5000/categories'
    };
  }

  componentDidMount() {
    axios.get(this.state.url).then(response => {
      this.setState({
        categories : response.data,
      });
    });
  }

  handleDelete(id) {
    axios.delete(`${this.state.url}/delete?id=${id}`).then(result => {
      window.Headers(this.state.url)
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <>
        <div className="input-group">
          <Link to="/categories/add">Add Category</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map(category => (
              <tr>
                <td>{category.name}</td>
                <td>
                  <button className="btn btn-primary" value={category._id} >Edit</button>
                  <button className="btn btn-danger" >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Categories;