import styled from "styled-components";

const Button = styled.button(({ active,disableButton }) => `
  height: 45px;
  width: 100%;
  background-color: ${ typeof active !== 'boolean' || active ? "#A328D6" : "#888"};
  opacity: ${ disableButton ? 0.7 : 1 };
  color: #FFFFFF;
  
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  padding: 14px;

  border-radius: 5px;
  border: none;
  
  cursor: ${ disableButton ? 'not-allowed' : 'pointer' };
  pointer-events: ${ disableButton ? 'none' : 'auto'};
`);

export default Button;