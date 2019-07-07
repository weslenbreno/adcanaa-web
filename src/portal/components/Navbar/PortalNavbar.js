import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  position: absolute;
  color: #fff;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  -webkit-transition: background 0.4s, all 0.3s linear;
  -o-transition: background 0.4s, all 0.3s linear;
  transition: background 0.4s, all 0.3s linear;
  background-image: -webkit-linear-gradient( 0deg, rgba(188,43,255,.8) 0%, rgba(114,73,251,.8) 100%);
`;

const PortalNavbar = () => (
  <StyledNavbar>
    <h1>Igreja Canaã</h1>
  </StyledNavbar>
);

export default PortalNavbar;
