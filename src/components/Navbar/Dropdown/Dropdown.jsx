import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        
        <li className="nav-item dropdown">
          <a className="A dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu text-center">
            <Link className="dropdown-item nav-link" to="/category/1"><li>Europa</li></Link>
            <Link className="dropdown-item nav-link" to="/category/2"><li>Sudamérica</li></Link>
            <Link className="dropdown-item nav-link" to="/category/3"><li>Asia</li></Link>
            <Link className="dropdown-item nav-link" to="/category/4"><li>África</li></Link>
            <Link className="dropdown-item nav-link" to="/category/5"><li>Concacaf</li></Link>
          </ul>
        </li>
        
    );
}

export default Dropdown;
