import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Container } from '@material-ui/core';
const Layout = props => {
    return (
        <div>
            <Header />
            <Container fixed>
                {props.children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout