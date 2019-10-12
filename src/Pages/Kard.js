import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import {Card,CardTitle,CardText} from 'react-mdl';
//,CardActions,Button,CardMenu,IconButton
import {NavLink} from 'react-router-dom'


import '../App.css';


const changePage= () => {
  this.props.history.push(`{props.goTo}`);
  }
  
const Kard =(props) =>{
  return (
      <div>
          <Card shadow={5} style={{margin:'auto'}} height="140px">
            <img src="https://media.gq.com/photos/55828b3f1177d66d68d5287c/master/pass/blogs-the-feed-how-i-met-your-mother-barney-stinson.jpg" alt="image"  style={{width: 275, height: 275, borderRadius: 275/ 2, alignSelf:'center'}} />
            <CardTitle style={{color:'black',dispaly:'flex'}}>
                <text>{props.nameOnCard}</text>
                </CardTitle>
                <CardActions>
                  <Button size="small">
                    <NavLink to={props.goTo} >
                      {props.nameOnButton}
                    </NavLink>
                  </Button>
                </CardActions>
        </Card>
        </div>
       )
}

export default Kard;

//background:'url(https://facebook.github.io/react-native/img/header_logo.svg) center / cover'