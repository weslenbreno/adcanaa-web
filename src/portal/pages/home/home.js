import React from 'react';
import styled from 'styled-components';
import bg from '../../../assets/images/bg2.jpg';

const HomeContainer = styled.div`
  background: url(${bg});
  background-size: cover;
  height: 100vh;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wraper = styled.div`
  width: fit-content;
  text-align: center;
  padding: 50px;
`;

const BrandTitle = styled.h1`
  color: #222;
  font-family: 'Gandhi', 'Bariol', 'Open Sans';
  font-size: 60px;
  color: #e6c019;
  margin: 0px;
`;

const CadastroButton = styled.a`
  cursor: pointer;
  display: inline-block;
  padding: 10px 50px;
  border-radius: 5px;
  background: #fff;
  margin: 15px 0px;
  font-family: 'Bariol';
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #222;
  margin-top: 100px;
  &:hover {
    text-decoration: none;
  }
`;

const Text = styled.p`
  font-family: arkipelago;
  font-size: 28px;
  color: #e0e0e0;
`;

const HomePage = () => (
  <HomeContainer>
    <Wraper>
      <BrandTitle>Igreja AD Canaã</BrandTitle>
      <Text>Cuidando de vidas</Text>
      <CadastroButton href="#cadastro">Realizar Cadastro</CadastroButton>
    </Wraper>
  </HomeContainer>
);

export default HomePage;
