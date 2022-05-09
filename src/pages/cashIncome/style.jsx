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

const Header = styled.p`
  width: 100%;

  margin-top: 25px;
  margin-bottom: 40px;

  font-family: 'Raleway';
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  color: #FFFFFF;
` 

export {
  Wrapper,
  Container,
  Header
}