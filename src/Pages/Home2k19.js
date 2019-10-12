import React, { Component } from 'react'
import Kard from './Kard'
import Navigation from '../Navigation/Navigation'

export default class Home2k19 extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>
                    Year Book 2k19
                </h1>
                <img src="https://image.shutterstock.com/image-vector/yearbook-sign-colorful-paper-confetti-260nw-1162094863.jpg" alt="yearbook"/>
            </div>
        )
    }
}
