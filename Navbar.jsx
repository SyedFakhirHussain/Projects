import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="announcement-bar">
        <p className="mb-0">Welcome to Store - 5% off Each Product</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/Home">
          <img src="Store\src\assets\moss.jpg" style={{ width: "25%" }} alt="" />            
            <span className="brand-name">Moss</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-4 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Kids">Kids</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Men">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Sports">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Women">Women</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Collections">Collections</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search products..." 
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                <i className="bi bi-search"></i>
                <span className="d-none d-md-inline"> Search</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}