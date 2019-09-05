import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Container, Grid } from '@material-ui/core';
const Layout = props => {
 
    return (
        <div>
            <Header />
            <Container fixed>
            <Grid container spacing={4}>
                {props.children}
            </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default Layout