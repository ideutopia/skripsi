import React from 'react'
import {useHistory} from 'react-router-dom';
// import Routes from '../../../config/routes';

const Header = () => {
  const history = useHistory();
    return (
        <div>
          
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" onClick={() => history.push('/')}>Codelabs</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
              </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                 
                  <a className="nav-link" onClick={() => history.push('/')}>
                    Home</a> 
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Link</a> */}
                  <a className="nav-link" onClick={() => history.push('/about')}>
                    About</a> 
                  {/* <Link to="/about" classNameName="nav-link">About</Link> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Link</a> */}
                  <a className="nav-link" onClick={() => history.push('/help')}>
                    Help</a>
                  {/* <Link to="/help" classNameName="nav-link">Help</Link> */}
                </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cari Labs</button>
      </form>
    </div>
    </nav>
    
    
    </div>
        
    )
}

export default Header;
