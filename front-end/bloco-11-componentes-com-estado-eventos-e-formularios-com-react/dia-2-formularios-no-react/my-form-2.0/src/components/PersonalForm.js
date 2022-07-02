import React from 'react';

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceara', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', '	Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', '	Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const INITIAL_STATE = {
      nome:"",
      email:"",
      cpf:"",
      address:"",
      city:"",
      countryState:"",
      addressType:"",
}
class PersonalForm extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE
  }

  validateAddress = (address) => address.replace(/[^\w\s]/gi, '');

  changeHandle = (event) => {
    const { name } = event.target;
    let { value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);
    this.setState({
      [name]: value,
    });
  }

  onBlurHandle = (event) => {
    const {name} = event.target;
    let { value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value; 
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, address, city } = this.state;
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <div className="countainer">
          Nome:
          <input
            type="name"
            name="name"
            maxLength="40"
            value={ name }
            required
            onChange={this.changeHandle}
          />
        </div>
        <div className="countainer">
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            required
            onChange={this.changeHandle}
          />
        </div>
        <div className="countainer">
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            required
            onChange={this.changeHandle}
          />
        </div>

        <div className="countainer">
          Endereço:
          <input
            type="text"
            name="address"
            maxLength="200"
            value={address}
            required
            onChange={this.changeHandle}
          />
        </div>

        <div className="countainer">
          Cidade:
          <input
            type="text"
            name="city"
            maxLength="28"
            required
            onBlur={this.onBlurHandle}
            onChange={this.changeHandle}
            value={ city }
          />
        </div>

        <div className="countainer">
          Estado:
          <select
            name="countryState"
            required
            onChange={this.changeHandle}
            defaultValue=""
          >
            <option value="">Selecione um Estado</option>
            {
              states.map((value, key) => (
                <option key={`${key}${value}`}>{value}</option>
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
              onChange={this.changeHandle}
            />
          </label>
          <label htmlFor="apart">
            Apartamento
            <input
              type="radio"
              id="apart"
              name="addressType"
              value="apartament"
              onChange={this.changeHandle}
            />
          </label>
        </div>
      </fieldset>

    );
  }
}

export default PersonalForm;