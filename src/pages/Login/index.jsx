import { useState } from 'react';

import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

import { Wrapper,Container,Logo,StyledLink } from "./style";

const Login = () => {

  const [ formData, setFormData ] = useState({
    email:"",
    password:""
  });
  const [isLoading, setIsLoading] = useState( {placeholder: "Entrar", disabled: false} );

  const handleLogin = (e) => {
    e.preventDefault();

    isLoading.placeholder = <Loading height={100} width={100} />
    isLoading.disabled = true;
    setIsLoading({...isLoading});
  }


  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper>
      <Container>
        <Logo>MyWallet</Logo>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            placeholder="E-mail"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Input height={58}
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Senha"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Button type="submit" disableButton={isLoading.disabled}>
            {isLoading.placeholder}
          </Button>
        </form>
        <StyledLink to="/signup">Primeira vez? Cadastre-se!</StyledLink>
      </Container>
    </Wrapper>
  );
}

export default Login;