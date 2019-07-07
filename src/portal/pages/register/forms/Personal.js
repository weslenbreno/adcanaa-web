import React from 'react';
import styled from 'styled-components';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  RadioGroup,
  Radio,
  DatePicker,
  Schema,
} from 'rsuite';

const { StringType, DateType } = Schema.Types;
export const personalModel = Schema.Model({
  first_name: StringType().isRequired('O nome do usuário é obrigatório'),
  last_name: StringType().isEmail('O nome do email é obrigatório'),
  data_nascimento: DateType().isRequired('Por favor, digite sua senha'),
  naturalidade: StringType().isRequired('Este campo é obrigatório'),
  rg: StringType().isRequired('Este campo é obrigatório'),
  cpf: StringType().isRequired('Este campo é obrigatório'),
  genero: StringType().isRequired('Este campo é obrigatório'),
  estado_civil: StringType().isRequired('Este campo é obrigatório'),
});

const FormPlus = styled.div`
  margin: 50px;
`;

const Control = styled.div`
  display: inline-block;
  width: calc(50% - 15px);
  margin-right: 15px;
`;

const PersonalForm = () => (
  <>
    <FormPlus>
      <FormGroup>
        <Control>
          <ControlLabel>Nome</ControlLabel>
          <FormControl name="first_name" placeholder="Digite seu nome" />
        </Control>
        <Control>
          <ControlLabel>Sobrenome</ControlLabel>
          <FormControl name="last_name" placeholder="Digite seu sobrenome" />
        </Control>
      </FormGroup>
      <FormGroup>
        <Control>
          <ControlLabel>Data de nascimento</ControlLabel>
          <FormControl
            accepter={DatePicker}
            value={new Date('20/08/1994')}
            name="data_nascimento"
            format="DD-MM-YYYY"
            oneTap
            style={{ width: '100%' }}
            locale={{
              sunday: 'Dom',
              monday: 'Seg',
              tuesday: 'Ter',
              wednesday: 'Qua',
              thursday: 'Qui',
              friday: 'Sex',
              saturday: 'Sab',
              ok: 'OK',
              today: 'Hoje',
              yesterday: 'Ontem',
              hours: 'Horas',
              minutes: 'Minutos',
              seconds: 'Segundos',
            }}
          />
        </Control>
        <Control>
          <ControlLabel>Gênero</ControlLabel>
          <FormControl accepter={RadioGroup} name="genero" inline defaultValue="M">
            <Radio value="M">Masculino</Radio>
            <Radio value="F">Feminino</Radio>
          </FormControl>
        </Control>
      </FormGroup>
      <FormGroup>
        <Control>
          <ControlLabel>RG</ControlLabel>
          <FormControl name="rg" placeholder="xxx.xxx.xxx" />
        </Control>
        <Control>
          <ControlLabel>CPF</ControlLabel>
          <FormControl name="cpf" placeholder="xxx.xxx.xxx-xx" />
        </Control>
      </FormGroup>
      <FormGroup controlId="genero">
        <Control>
          <ControlLabel>Estado civil</ControlLabel>
          <FormControl accepter={RadioGroup} name="estado_civil" inline defaultValue="solteiro">
            <Radio value="solteiro">Solteiro</Radio>
            <Radio value="casado">Casado</Radio>
          </FormControl>
        </Control>
      </FormGroup>
    </FormPlus>
  </>
);

export default PersonalForm;
