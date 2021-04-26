import React from 'react'
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'


function BootstrapNavbar(props) {
   
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                      
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">User Entertainment Dashboard</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">

                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success"className="mr-sm-2" onClick = {() => props.onRouteChange('signin')}>Sign In</Button>
                                    <Button variant="outline-success"  onClick = {() => props.onRouteChange('logout')}>Log Out</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                       
                    </div>
                </div>
            </div>
        )  
    
}

export default BootstrapNavbar;