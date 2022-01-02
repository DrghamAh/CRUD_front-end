import axios from "axios";
import React from "react";

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

  handleDelete(e) {
    axios.delete(this.state.url, {
      _id : e.target.value,
    });
  }

  render() {
    return (
      <>
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
                  <button className="btn btn-primary" >Edit</button>
                  <button className="btn btn-danger"  >Delete</button>
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