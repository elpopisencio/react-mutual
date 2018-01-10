import React, { Component } from 'react';

class Tabla extends Component {
  constructor(props) {
    super(props);
    this.state = { tabla: '', values: this.props.values };

  }
  componentDidMount(){

    let tab = this.state.values;
    console.log(tab);   
    /* 
    if(this.props.values !== undefined){
      tab = tab.map((item) => {
          <tr>
          <td>{item.apellido}</td>
          <td>{item.nombre}</td>
          <td>{item.numero_documento}</td>
          <td>{item.id_estado}</td>
          <td>{item.id_delegacion}</td>
          </tr>
      });
      this.setState({
        tabla: tab
      });
  }
      */
}

  render(){
    let tab = this.props.values;
    if(this.props.values.lenght !== 0){
      tab = tab.map((item) => {
    console.log(item.numero_documento);   
          return <tr>
          <td className="apellido">{item.apellido}</td>
          <td className="nombre">{item.nombre}</td>
          <td className="numero">{item.numero_documento}</td>
          <td className="estado">{item.id_estado}</td>
          <td className="acciones">
            <button className="button is-small">pepe</button>
            <button className="button is-small">pepe</button>
            <button className="button is-small">pepe</button>
            <button className="button is-small">pepe</button>
          </td>
          </tr>
      });
    
    
    
      return (
        <div >
            <table className="table is-fullwidth">
  <thead>
    <tr>
      <th className="apellido">Apellido</th>
      <th className="nombre">Nombre</th>
      <th className="numero">Numero</th>
      <th className="estado">Estado</th>
      <th className="acciones">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {this.state.tabla}
  </tbody>
  {tab}
</table>
        </div>
      ); 
    }else{
      return(<div></div>)
    }
  }
}

export default Tabla;
