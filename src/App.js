import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import datal from './example.json';
//import { stat } from 'fs';
import Kard from './Pages/Kard'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



class App extends Component {
  constructor(){
    super() 
      this.state = {
        data: datal
      }
    
  }

  
  render(){return (
    <div>
      <GridList cols={4}>
        {
          this.state.data.map(function(people,index){
             return (
              <GridListTile key={people.C} cols={index%3}>
              <Kard key={people.C} dis={people.B} />
          </GridListTile>);
          })
        }
        </GridList>
    </div>
  );
}}

export default App;
