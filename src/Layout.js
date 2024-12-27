import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        
            <Link to="/login"></Link>
            <Link to="/register"></Link>
            <Link to="/details"></Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;