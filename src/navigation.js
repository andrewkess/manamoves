import React from 'react'
//import styles from './navigation.module.css'




import { Container, Col, Row, Image } from 'react-bootstrap'
import {Link} from 'gatsby'
import styles from './menu-button.module.css'
import { IconContext } from "react-icons";
import { TiWaves } from 'react-icons/ti'
import MenuContainer from './menu-container'


import './base.css'

import logo from  "../static/annaga-logo.png" // Tell webpack this JS file uses this image



export default () => (
<Container className={styles.navigationBar} fluid>
<Row>
 

    <Col className={styles.navbarMenu} xs={6}>
<Link to="/">
<div><Image src={logo} className={styles.logoLink}  alt="First slide"  /></div>

</Link>
</Col>
    
<Col className={styles.navMenuContainer}>
    <MenuContainer />
</Col>

<Col className={styles.rightMenu}>
<IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
<span><Link to="#" className={styles.cartLink}><TiWaves /></Link></span>
</IconContext.Provider>
</Col></Row>
</Container>
)
