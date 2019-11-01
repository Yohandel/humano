import React from 'react'
import {Container} from 'react-bootstrap'
import Navbar from '../Navigation/Navbar/Navbar'

 

const Layout = (props) => {
    return (
        <div>   
            <Navbar/>
        <Container fluid={false}>
            {props.children}
        </Container>
        </div>
    )
}

export default Layout
