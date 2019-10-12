import React, { Component } from 'react'
import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import {Card,CardTitle,CardText,CardContent} from 'react-mdl';
//,CardActions,Button,CardMenu,IconButton
import {NavLink} from 'react-router-dom'
import {Grid} from 'styled-css-grid'

export default class LongKard extends Component {
  render() {
    return (
      <div>
        <Card shadow={5} style={{margin:'auto',flexDirection:'row',width:'100%'}}>
            <h1>
            Here Goes the question something like this .............?
            </h1>
            {'\n'}
          <h2>
            Answer
          </h2>
           </Card>
    
      </div>
    )
  }
}
