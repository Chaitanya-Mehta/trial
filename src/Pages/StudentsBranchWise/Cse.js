import React, { Component } from 'react'

import Cse21People from './Cse21People.json'

//import GridList from '@material-ui/core/GridList'

//import GridListTile from '@material-ui/core/GridListTile'

import Kard from '../Kard'
import { Grid, Cell } from "styled-css-grid";

export default class Cse extends Component {
    constructor(){
        super();
        this.state={
            data:Cse21People
        }
    }
    render() {
        return (
            <div>
                <Grid columns={4} gap="2px" rowGap="30px" columnGap="15px" >
                   { this.state.data.map(
                        (piece,index)=>{
                            return(
                               
                                    <Kard nameOnCard={piece.B} goTo="/Cse2k19" nameOnButton="Hello" height="350px"/>
                            )}
                    )}
                </Grid>
            </div>
        )
    }
}
