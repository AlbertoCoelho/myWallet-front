import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from '../../components/Loading';

import { makeSignUp } from '../../services/api';

import { Wrapper,Container,Logo,StyledLink } from "./style";

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: 
    yup.string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const SignUp = () => {
  const [ formData, setFormData ] = useState({
    name:"",
    email:"",
    password:"",
    passwordConfirmation:""
  });

  const [isLoading, setIsLoading] = useState( {placeholder: "Cadastrar", disabled: false} );
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    validationSchema
      .isValid(formData)
      .then((valid) => {
        console.log("Valor válido:", valid);
    });

    isLoading.placeholder = <Loading height={100} width={100}/>
    isLoading.disabled = true;
    setIsLoading({...isLoading});
  }

  const signup = async () => {
    try {
      const response = await makeSignUp({...formData});
      console.log(response);
      setIsLoading(false);
      navigate("/");
    } catch {
      alert("Please fill in the data correctly");
      isLoading.placeholder = "Cadastrar";
      isLoading.disabled = false;
      setIsLoading({...isLoading});
    }
  }
  signup();

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Wrapper>
      <Container>
        <Logo>MyWallet</Logo>
        <form onSubmit={handleSignUp}>
          <Input 
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Nome"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Input 
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            placeholder="E-mail"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Input 
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Senha"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Input 
            type="text"
            value={formData.passwordConfirmation}
            onChange={handleInputChange}
            name="passwordConfirmation"
            placeholder="Confirme a senha"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Button type="submit" disableButton={isLoading.disabled}>
            {isLoading.placeholder}
          </Button>
        </form>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
      </Container>
    </Wrapper>
  );
}

export default SignUp;