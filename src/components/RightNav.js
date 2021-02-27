import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const RightNav = ({open}) => {
  const {pathname} = useLocation()
  return (
    <div>
       <Ul open={open}>
        <li>
          <Link to="/">1. About Us</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }}
          animate={{width: pathname === '/' ? '50%' : '0%'}}/>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }}
          animate={{width: pathname === '/work' ? '50%' : '0%'}}/>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }}
          animate={{width: pathname === '/contact' ? '50%' : '0%'}}/>
        </li>
      </Ul>
    </div>
  )
}

export default RightNav

const Line = styled(motion.div)`
height: 0.3rem;
background: #23d997;
width: 0%;
position: absolute;
bottom: -80%;
left: 60%;
@media (max-width: 1300px) {
  left: '0%';
}
@media (max-width: 768px){
  bottom: -10%;
  left: 25%;
}
`;

const Ul = styled.ul`
display: flex;
list-style: none;


li{
  position: relative;
  padding-left: 10rem;
}

@media (max-width: 768px) {
  flex-flow: column nowrap;
  /* flex-direction: column; */
  text-align: center;
  background: #3a3939;
  position: fixed;
  transform: ${({ open }) => open ? 'translatX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  padding-top: 8rem;
  transition: transform 0.3s ease-in-out;
li{
  padding-left: 0rem;
  padding-top: 2rem;
}
} 
`