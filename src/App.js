import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import datal from './example.json';
//import { stat } from 'fs';
import Kard from './Pages/Kard'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import Students from './Pages/Students'
import Navigation from './Navigation/Navigation'
import Organis from './Organis'
import Home from './Pages/Home'
import LongKard from './LongKard'

//<Kard2/>

class App extends Component {

  
  render(){return (
    <div>
    <Organis/>
      <LongKard/>
    </div>
  );
}}

export default App;
