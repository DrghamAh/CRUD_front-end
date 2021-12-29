import React from 'react';

class Header extends React.Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" hrefLang="#">Expand at sm</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" hrefLang="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" hrefLang="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" hrefLang="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" hrefLang="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown03">
                <a className="dropdown-item" hrefLang="#">Action</a>
                <a className="dropdown-item" hrefLang="#">Another action</a>
                <a className="dropdown-item" hrefLang="#">Something else here</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input className="form-control" type="text" placeholder="Search" />
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;