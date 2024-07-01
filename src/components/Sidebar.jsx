import { Link } from "react-router-dom";


export default function Sidebar() {


  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{
      maxWidth: '200px'
    }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" />
      <span className="fs-4">Tetratrion</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link
            to="/"
            className={`nav-link text-white `}
            aria-current="page"
          >

            Chart1
          </Link>
        </li>
        <li

        >
          <Link
            to="/chart2"
            className={`nav-link text-white`}
          >
            Chart2
          </Link>
        </li>
      </ul>


    </div >
  );
}


