import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  Steps, Form, Schema, Button, Uploader, Icon,
} from 'rsuite';
import { setDate } from 'date-fns';
import {
  PersonalForm,
  AddressForm,
  AccountForm,
  accModel,
  personalModel,
  addressModel,
} from './forms';

const UserModel = Schema.Model.combine(personalModel, accModel, addressModel);

const StepsItem = styled(Steps.Item)`
  cursor: pointer;
`;

const StepsPlus = styled(Steps)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const RegisterContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  padding: 0px 15px;
  justify-content: center;
  padding-bottom: 50px;
  h1 {
    margin: 35px 0px;
    font-family: 'Bariol';
  }
`;

const WelcomeText = styled.p`
  font-family: 'Open Sans';
  font-size: 18px;
  padding: 25px 0px;
`;

const ButtonsWraper = styled.div`
  padding: 0px 50px;
`;

const FinalStep = (props) => {
  // eslint-disable-next-line react/prop-types
  const { formValue } = props;
  const [isImageSelected, setImageSelected] = useState(false);

  const salvarEndereco = async (data) => {
    const endereco = await axios.post('http://localhost:8000/api/enderecos/', {
      pais: data.pais,
      estado: data.estado,
      cidade: data.cidade,
      bairro: data.bairro,
      cep: data.cep,
      logradouro: data.logradouro,
    });
    return endereco.data.id;
  };

  const salvarMembro = async (data, enderecoID) => {
    const newMembroRequest = await axios.post('http://localhost:8000/api/membros/', {
      ...data,
      igreja: 1,
      endereco: enderecoID,
    });

    return newMembroRequest;
  };

  const handleSubmit = async (data) => {
    const enderecoID = await salvarEndereco(data);
    if (enderecoID) {
      salvarMembro(data, enderecoID);
    }
  };

  const handleImageUpload = (data) => {
    console.log();
    setImageSelected(!isImageSelected);
  };

  const setData = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <Uploader
          action="http://localhost:8000/api/igrejas_imagens/"
          data={{ igreja: 1 }}
          accept="image/jpeg"
          disabled={isImageSelected}
          multiple={false}
          listType="picture"
          onChange={handleImageUpload}
          name="pic"
        >
          <button type="button">
            <Icon icon="camera-retro" size="lg" />
          </button>
        </Uploader>
        <p>Selecione uma foto</p>
      </div>
      <WelcomeText>Após concluir, seu cadastro será enviado para validação.</WelcomeText>
      <Button appearance="primary" onClick={() => handleSubmit(formValue)}>
        Concluir Cadastro
      </Button>
      <a href="/" style={{ marginLeft: 15 }}>
        Voltar para o página inicial
      </a>
    </div>
  );
};

const RegisterPage = () => {
  const [step, setStep] = useState(0);
  const [formValue, setFormValue] = useState({});

  const formSteps = [
    <AccountForm step={step} form={formValue} />,
    <PersonalForm setStep={setStep} form={formValue} />,
    <AddressForm setStep={setStep} form={formValue} />,
    <FinalStep formValue={formValue} />,
  ];

  return (
    <RegisterContainer id="cadastro">
      <StepsPlus current={step} vertical style={{ paddingLeft: 25, paddingRight: 25 }}>
        <StepsItem title="Conta" onClick={() => setStep(0)} />
        <StepsItem title="Info. Pessoais" onClick={() => setStep(1)} />
        <StepsItem title="Endereço" onClick={() => setStep(2)} />
        <StepsItem title="Finalizar" onClick={() => setStep(3)} />
      </StepsPlus>
      <Form style={{ background: '#fff' }} model={UserModel} onChange={data => setFormValue(data)}>
        {formSteps[step]}
        <ButtonsWraper>
          {step !== 3 && (
            <Button
              appearance="primary"
              onClick={() => setStep(step + 1)}
              style={{ marginRight: 15 }}
            >
              Continuar
            </Button>
          )}

          {step !== 0 && step !== 3 && (
            <Button appearance="subtle" onClick={() => setStep(step - 1)}>
              Voltar
            </Button>
          )}
        </ButtonsWraper>
      </Form>
    </RegisterContainer>
  );
};

export default RegisterPage;
