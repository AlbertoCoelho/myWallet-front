// import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from '../../components/Loading';

import { makeSignUp } from '../../services/api';

import { Wrapper,Container,Logo,StyledLink } from "./style";

const SignUp = () => {
  const [ formData, setFormData ] = useState({
    name:"",
    email:"",
    password:"",
    passwordConfirmation:""
  });
  const [isLoading, setIsLoading] = useState( {placeholder: "Cadastrar", disabled: false} );
  // const [status,setStatus] = useState( {message: ''} );

  const navigate = useNavigate();

  //Vai colocar tudo que já tem de formData, atualizar uma propriedade que tiver o nome de e.target.name que terá o valor e.target.value 
  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  const handleSignUp = async (e) => {
    //Para não recarregar a página
    e.preventDefault();
    console.log(formData);

    // if(!(await validate())) return;

    isLoading.placeholder = <Loading height={100} width={100}/>
    isLoading.disabled = true;
    setIsLoading({...isLoading});

    try {
      await makeSignUp({...formData});
      setIsLoading(false);
      navigate("/");
    } catch {
        alert("Please fill in the data correctly");
        isLoading.placeholder = "Cadastrar";
        isLoading.disabled = false;
        setIsLoading({...isLoading});
    }
  }



  //fix me: not working
  // async function validate(){
  //   let validationSchema = yup.object().shape({
  //     passwordConfirmation: yup.string('Password confirmation is required')
  //     .oneOf([yup.ref('password'), null], 'Passwords must match')
  //     .required('Password confirmation is required'),

  //     password: yup.string('Password is required')
  //     .min(3, 'Password must be at least 3 characters long!')
  //     .max(30, 'Password must be a maximum of 3 characters')
  //     .required('Password is required'),

  //     email: yup.string('Email is required')
  //     .required('Email is required'),

  //     name: yup.string('Name is required')
  //     .min(3, 'Your name is too short.')
  //     .max(20, 'Your password is too long.')
  //     .required('Name is required')
  //   });

  //   try {
  //     await validationSchema.validate(formData)
  //     return true;
  //   } catch (err) {
  //       setStatus({message: err.errors});
  //       return false;
  //   }
  // }

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
            type="password"
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