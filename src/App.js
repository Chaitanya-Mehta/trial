import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import * as datal from './example.json';
//import { stat } from 'fs';

class App extends Component {
  constructor(){
    super() 
      this.state = {
        data: datal
      }
    
  }

  
  render(){return (
    <div>
      <h1>
        {
          this.state.data.map(function(people){
             return (<div>{people.A}</div>);
          })
        }
      </h1>
    </div>
  );
}}

export default App;
