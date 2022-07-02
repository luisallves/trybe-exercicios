import React from 'react';

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceara', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', '	Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', '	Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

class PersonalForm extends React.Component {
  render() {
    return(
      <fieldset>
        <legend>Dados pessoais</legend>
        <div className="countainer">
          Nome:
          <input
            type="name"
            name="name"
            maxLength="40"
            required
            onChange={ () => {} }
          />
        </div>
        <div className="countainer">
            Email:
            <input 
              type="email" 
              name="email"
              maxLength="50"
              required
              onChange={ () => {} }
            />
        </div>
        <div className="countainer">
            CPF:
            <input 
              type="text" 
              name="cpf"
              maxLength="11"
              required
              onChange={ () => {} }
            />
        </div>  

          <div className="countainer">
            Endereço:
            <input 
              type="text" 
              name="address"
              maxLength="200"
              required
              onChange={ () => {} }
            />
          </div>

          <div className="countainer">
            Cidade:
            <input 
            type="text" 
            name="city"
            maxLength="28"
            required
            // value={ currentState.city }
            onBlur={ () => {} }
            onChange={ () => {} }
            />            
          </div>

          <div className="countainer">
            Estado:
            <select 
              name="countryState"
              required
              onChange={ () => {} }
              defaultValue=""
              >
                <option value="">Selecione um Estado</option>
                {
                  states.map((value, key) => (
                    <option key={ `${key}${value}` }>{ value }</option>
                  ))
                }
            </select>
          </div>
          <div id="radio-house" className="countainer">
            <label htmlFor="house">
              Casa             
              <input 
                type="radio" 
                id="house" 
                name="addressType" 
                value="house"
                onChange={ () => {} }
              />
            </label>
            <label htmlFor="apart">
              Apartamento
              <input
              type="radio"
              id="apart"
              name="addressType" 
              value="apartament"
              onChange={ () => {} }
              />
            </label>
          </div>
      </fieldset>

    );
  }
}

export default PersonalForm;