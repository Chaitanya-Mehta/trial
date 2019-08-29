import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import {Card,CardTitle,CardText} from 'react-mdl';
//,CardActions,Button,CardMenu,IconButton


import '../App.css';
const Kard =(props) =>{
  return (
      <div>
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}} >
            <CardTitle style={{color:'black',height:'auto',dispaly:'flex',background:'url(https://facebook.github.io/react-native/img/header_logo.svg) center / cover'}}>
                <text>{props.dis}</text>
                </CardTitle>
        </Card>
        </div>
       )
}

export default Kard;