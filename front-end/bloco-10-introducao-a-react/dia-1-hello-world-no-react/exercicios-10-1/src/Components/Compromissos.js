import React from "react";

class Compromissos extends React.Component {
  render() {
    const compromissos = ['Lavar roupas', 'Alimentar os Pets', 'Ir para o Futebol', 'Abastecer o carro'];
    return (
      <ul className="lista-compromissos">Compromissos:
        {
          compromissos.map((compromisso, index) => <li key={`${compromisso}${index}`}>{compromisso}</li>)
        }
      </ul>
    )
  }
}

export default Compromissos;