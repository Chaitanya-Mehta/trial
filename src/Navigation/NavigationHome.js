import React, { Component } from 'react'
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import {Link} from 'react-router-dom'

export default class NavigationHome extends Component {
    render() {
        return (

<div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://i.imgur.com/BZcIH6X.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/">Link</Link>
                <Link to="">Link</Link>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
            </Navigation>
        </Header>
        <Drawer title="Title" style={{color:"#000000"}}>
            <Navigation style={{color:'#000000'}}>
                <Link to ="/">Link</Link>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
                <Link to="/">Link</Link>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        )
    }
}
