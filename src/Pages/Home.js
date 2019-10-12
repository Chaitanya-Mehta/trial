import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import Kard from './Kard';
import {NavLink} from 'react-router-dom'
import NavigationHome from '../Navigation/NavigationHome'


export default class Home extends Component {
    constructor(){
        super();
        this.state={show:false};
    }
    changeState=()=>{
        this.setState(
                {
                    show:! this.state.show
                }
     )
    }
    handleOnSubmit = () => {
        this.props.history.push(`/Faculty1`);
        }
    render() {
        return (
            <div>
                <NavigationHome/>
                <h1>
                    Homescreen
                </h1>
                <Kard nameOnCard="YearBook2k19" nameOnButton="GO" goTo="/Home2k19"/>
            </div>
        )
    }
}
