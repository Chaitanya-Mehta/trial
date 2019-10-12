import React,{Component} from 'react';
//import logo from './logo.svg';
import '../App.css';
import datal from './example.json';
//import { stat } from 'fs';
import Kard from './Kard'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



class Students extends Component {
  constructor(){
    super() 
      this.state = {
        data: datal
      }
    
  }

  
  render(){return (
    <div>
      <GridList cols={5}>
        {
          this.state.data.map(function(people,index){
             return (
              <GridListTile key={people.C} cols={index%4}>
              <Kard key={people.C} nameOnCard={people.B} />
          </GridListTile>);
          })
        }
        </GridList>
    </div>
  );
}}

export default Students;
