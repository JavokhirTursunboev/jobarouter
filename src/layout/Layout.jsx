import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <h1>JonaRounter</h1>
          <NavLink to="/">Home </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
