import React from 'react';
import styled from 'styled-components';
import {
  FormControl, FormGroup, ControlLabel, Schema,
} from 'rsuite';

const { StringType } = Schema.Types;

export const accModel = Schema.Model({
  username: StringType().isRequired('O nome do usuário é obrigatório'),
  email: StringType().isEmail('O nome do email é obrigatório'),
  password: StringType().isRequired('Por favor, digite sua senha'),
  verificarSenha: StringType().isRequired('Este campo é obrigatório'),
  tel_principal: StringType().isRequired('Este campo é obrigatório'),
  tel_secundario: StringType().isRequired('Este campo é obrigatório'),
});

const FormPlus = styled.div`
  margin: 50px;
`;

const Control = styled.div`
  display: inline-block;
  padding-right: 15px;
`;

const AccountForm = () => (
  <FormPlus>
    <FormGroup>
      <Control>
        <ControlLabel>Nome de usuário</ControlLabel>
        <FormControl name="username" placeholder="Digite um nome de usuário" />
      </Control>
      <Control>
        <ControlLabel>Email</ControlLabel>
        <FormControl name="email" type="email" placeholder="Digite seu email" />
      </Control>
    </FormGroup>
    <FormGroup>
      <Control>
        <ControlLabel>Senha</ControlLabel>
        <FormControl name="password" type="password" placeholder="Digite sua senha de acesso" />
      </Control>
      <Control>
        <ControlLabel>Repetir senha</ControlLabel>
        <FormControl
          name="verificarSenha"
          type="password"
          placeholder="Digite sua senha novamente"
        />
      </Control>
    </FormGroup>
    <FormGroup>
      <Control>
        <ControlLabel>Telefone principal</ControlLabel>
        <FormControl name="tel_principal" placeholder="Digite seu número de telefone principal" />
      </Control>
      <Control>
        <ControlLabel>Telefone alternativo</ControlLabel>
        <FormControl name="tel_secundario" placeholder="Digite outro número de contato" />
      </Control>
    </FormGroup>
  </FormPlus>
);

export default AccountForm;
