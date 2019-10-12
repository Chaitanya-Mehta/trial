import React, { Component } from 'react'
import Faculty1 from './Pages/Faculty/Faculty1'
import Faculty2 from './Pages/Faculty/Faculty2'
import Faculty3 from './Pages/Faculty/Faculty3'
import {Route} from 'react-router-dom'
import Home from './Pages/Home'
import Home2k19 from './Pages/Home2k19'
import Cse from './Pages/StudentsBranchWise/Cse'


export default class Organis extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />     
                <Route path="/Home2k19" component={Home2k19}/>           
                <Route path="/Faculty1" component={Faculty1} />
                <Route path="/Faculty2" component={Faculty2} />
                <Route path="/Faculty3" component={Faculty3} />
                <Route path="/Cse2k19" component={Cse} />
            </div>
        )
    }
}
