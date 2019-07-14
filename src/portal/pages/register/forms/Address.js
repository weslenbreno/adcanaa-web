import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FormControl, FormGroup, ControlLabel, InputPicker, Schema,
} from 'rsuite';
import estados from './estados.json';
import cidades from './cidades.json';
import paises from './paises.json';

const FormPlus = styled.div`
  margin: 50px;
`;

const Control = styled.div`
  display: inline-block;
  padding-right: 15px;
`;

const { StringType } = Schema.Types;

export const addressModel = Schema.Model({
  pais: StringType().isRequired('Este campo é obrigatório'),
  estado: StringType().isRequired('Este campo é obrigatório'),
  cidade: StringType().isRequired('Este campo é obrigatório'),
  bairro: StringType().isRequired('Este campo é obrigatório'),
  cep: StringType().isRequired('Este campo é obrigatório'),
  logradouro: StringType().isRequired('Este campo é obrigatório'),
});

const getCidades = estado => cidades.filter(st => st.Estado === estado);

const AddressForm = () => {
  // eslint-disable-next-line react/prop-types
  const [estado, setEstado] = useState(1);

  return (
    <>
      <FormPlus>
        <h1>Informações de endereço</h1>
        <FormGroup>
          <Control>
            <ControlLabel>País</ControlLabel>
            <FormControl
              accepter={InputPicker}
              name="pais"
              placeholder="País"
              data={paises}
              labelKey="nome"
              valueKey="sigla3"
              defaultValue="Brasil"
            />
          </Control>
          <Control>
            <ControlLabel>Estado</ControlLabel>
            <FormControl
              accepter={InputPicker}
              placeholder="Escolha o seu estado"
              name="estado"
              data={estados}
              labelKey="Nome"
              valueKey="Sigla"
              onSelect={(_, item) => setEstado(item.ID)}
              style={{ width: 224 }}
            />
          </Control>
        </FormGroup>
        <FormGroup>
          <Control>
            <ControlLabel>Cidade</ControlLabel>
            <FormControl
              accepter={InputPicker}
              name="cidade"
              placeholder="Escolha sua cidade"
              data={getCidades(estado)}
              labelKey="Nome"
              valueKey="Nome"
              style={{ width: 224 }}
            />
          </Control>
          <Control>
            <ControlLabel>CEP</ControlLabel>
            <FormControl name="cep" placeholder="Digite o seu CEP" />
          </Control>
        </FormGroup>
        <FormGroup>
          <Control>
            <ControlLabel>Bairro</ControlLabel>
            <FormControl name="bairro" placeholder="Digite o nome do seu bairro" />
          </Control>
          <Control>
            <ControlLabel>Logradouro</ControlLabel>
            <FormControl name="logradouro" placeholder="Exemplo: Alício Alexandre, 71" />
          </Control>
        </FormGroup>
      </FormPlus>
    </>
  );
};

export default AddressForm;
