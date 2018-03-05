import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// creando objetos
const coloresCubo={
  1:'red',
  2:'blue',
  3:'black',
  4:'green',
  5:'gray',
  6:'orange',
  7:'brown'
}

const fraseCubo={
  1:'JavaScript',
  2:'PHP',
  3:'HTML',
  4:'CSS',
  5:'RUBY',
  6:'PYTHON',
  7:'C#'
}

class Cubo extends React.Component{
  // indicando que la función componentDidMount se va ejecutar despues de haberse recargado el dom
  componentDidMount() { 
    this.timerID = setInterval(
  		() => {
		  	let cubo = document.querySelector('.cubo');
		  	let frase = document.querySelector('.frase');
  			let numberCubo = Math.floor(Math.random() * 7) + 1 ;
  			let numberFrase = Math.floor(Math.random() * 7) + 1 ;
  			cubo.style.backgroundColor=coloresCubo[numberCubo];
  			frase.innerHTML=fraseCubo[numberFrase]
  		},2000);
  	}

  render() {
	  return (
  	  <div  className="cubo"  style={{backgroundColor:'red', width:'120px', height:'120px',display:'flex',justifyContent:'center', alignItems:'center'}} >
	      <p   className="frase"  style={{color:'white',fontWeight:'bold',fontSize:'24px',}} >JavaScript</p>
	    </div> 
	  );
	}
};

// componente donde esta elcontenido principal
class App extends React.Component{
  render() {
    return (
    <div className="center">
      <h1>Cubo Mágico</h1>
      <Cubo/>
    </div>
    );
  }
};

export default App;
