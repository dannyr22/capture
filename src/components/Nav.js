import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Burger from './Burger';

const Nav = () => {
  
  return ( 
    <StyledNav>
      <h1><Link to="/" id="logo">Capture</Link></h1>
      <Burger />
      </StyledNav>
   );
}
export default Nav;

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
position: sticky;
top: 0;
z-index: 10;
a{
  color: white;
  text-decoration: none;
}

#logo{
  font-family: 'Lobster', cursive;
  font-size: 1.5rem;
  font-weight: lighter;
}

/* @media (max-width: 1300px){
  flex-direction: column;
  padding: 2rem 1rem;
  #logo{
    display: inline-block;
    margin: 2rem;
  }
  ul{
    padding: 2rem;
    justify-content: space-around;
    width: 100%;
  }
  li{ 
    padding: 0;
  }
} */

@media (max-width: 768px) {
 justify-content: center;
}
`;
