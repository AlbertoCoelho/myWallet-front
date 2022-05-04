import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8C11BE;
`

const Container = styled.div`
  min-height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const Logo = styled.div`
  width: 147px;
  height: 50px;
  margin-top: 159px;
  margin-bottom: 24px;

  font-family: 'Saira Stencil One';
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;

  color: #FFFFFF;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  margin-top: 36px;

  font-family: 'Raleway';
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  text-decoration-line: none;
`;

export {
  Wrapper,
  Container,
  Logo,
  StyledLink
}