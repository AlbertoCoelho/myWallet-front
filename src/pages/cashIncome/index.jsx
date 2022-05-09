import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Wrapper,Container,Header } from "./style";

const CashIncome = () => {
  const [ formData, setFormData ] = useState({
    amount:"",
    description:""
  });
  const [isLoading, setIsLoading] = useState( {placeholder: "Salvar entrada", disabled: false} );
  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleIncome = async (e) => {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <Container>
        <Header>Nova entrada</Header>
        <form onSubmit={handleIncome}>
          <Input
            type="number"
            value={formData.amount}
            onChange={handleInputChange}
            name="amount"
            placeholder="Valor"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Input
            type="text"
            value={formData.description}
            onChange={handleInputChange}
            name="description"
            placeholder="Descrição"
            disabled={isLoading.disabled && "disabled"}
            required
          />
          <Button type="submit" disableButton={isLoading.disabled}>
            {isLoading.placeholder}
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
}

export default CashIncome;