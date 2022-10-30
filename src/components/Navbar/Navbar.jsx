
import { NavLink } from "react-router-dom"
import { NavMenu, NavItem } from "./Navbar.module"

export default function Navbar() {
  return (
    <header>
      <nav>
          <NavMenu>
              <NavItem>
                  <NavLink to="/" end>Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/movies">Movies</NavLink>
              </NavItem>
          </NavMenu>
      </nav>
    </header>
  )
}