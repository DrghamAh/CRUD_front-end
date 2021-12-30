import React from "react";

class Categories extends React.Component {

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Shoes</td>
              <td>
                <button className="btn btn-primary" >Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Categories;