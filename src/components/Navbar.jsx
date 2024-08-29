import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navbar">
      <li className="links">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="links">
        <Link
          to="/AboutMe"
          className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="links">
        <Link
          to="/Skills"
          className={currentPage === '/Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </Link>
      </li>
      <li className="links">
        <Link
          to="/ProjectList"
          className={currentPage === '/ProjectList' ? 'nav-link active' : 'nav-link'}
        >
          ProjectList
        </Link>
      </li>
      <li className="links">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
