import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { logoColor, logoWhite } from "../utils/imageUpload"
import { usePath } from "./Context/LogoContext"

const NavBarS = styled.div`
  width: 100vw;
  color: white;
  height: 8rem;
  z-index: 1000000;
  top: 0;
  position: ${({ position }) => position};
`
const NavStyled = styled.nav`
  height: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 980px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  .links {
    ul {
      list-style: none;
      color: ${({ mainColor }) => mainColor};

      display: flex;
    }
    li {
      margin-left: 7rem;
      color: ${({ mainColor }) => mainColor};

      a {
        text-decoration: none;
        color: ${({ mainColor }) => mainColor};
      }

      .active {
        font-weight: bold;
      }
    }
  }
`

// activeClassName="active"

const pages = [
  { link: "/sobre-nos", text: "Sobre nós" },
  { link: "/servicos", text: "Serviços" },
]

const NavBar = () => {
  const { path } = usePath()
  const logo = path === "/" ? logoWhite : logoColor
  const mainColor = path === "/" ? "#fff" : "#000080;"
  const position = path === "/" ? "absolute" : "relative"
  return (
    <NavBarS position={position}>
      <NavStyled mainColor={mainColor}>
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="links">
          <ul>
            {pages.map(el => (
              <li key={el.link}>
                <Link to={el.link} activeClassName="active">
                  {el.text}
                </Link>
              </li>
            ))}
            {/* <li>
              <Link to="/sobre-nos">Sobre nós</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li> */}
          </ul>
        </div>
      </NavStyled>
    </NavBarS>
  )
}

export default NavBar
