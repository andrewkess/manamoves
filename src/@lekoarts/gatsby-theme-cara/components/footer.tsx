/** @jsx jsx */
import { Box, Link, useColorMode, jsx } from "theme-ui"


import styles from '../../../menu-button.module.css'

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaVimeoV, FaTwitter } from 'react-icons/fa'

import { TiSocialInstagram, TiSocialVimeo, TiSocialTwitter } from 'react-icons/ti'

import { VscTwitter } from 'react-icons/vsc'
import { Container, Col, Row } from 'react-bootstrap'

require('typeface-mukta')
require('typeface-bebas-neue')


const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
<div className={styles.fullWidth}> 


<Container fluid className={styles.mainFooter}>
  <Row>
    <Col className={styles.bottomFooter}>
    
    <Link aria-label="Link to About Us" href="#" className={styles.bottomFooterLink}>About</Link><span className={styles.footerDivider}></span> 
      <Link aria-label="Link to Our Projects" href="#" className={styles.bottomFooterLink}>Projects</Link> 
      <span className={styles.footerDivider}></span> 
      <Link aria-label="Link to Contact Us" href="#" className={styles.bottomFooterLink}>Contact</Link> 
      <span className={styles.footerDivider}></span> 
      <Link aria-label="Link to Our Jobs" href="#" className={styles.bottomFooterLink}>Jobs</Link> 
    
    </Col>
  </Row></Container>
  <Container>
  
  <Row className="justify-content-md-center">
    <Col className={styles.bottomFooter2} sm="auto">
          &copy; {new Date().getFullYear()} Annagra Media Productions
    </Col>      
      <Col className={styles.bottomFooter2} sm="auto">
      <Link aria-label="Link to Privacy Policy" href="#" className={styles.bottomFooterLink}>
      Privacy Policy 
        </Link> 
      </Col>  
        <Col className={styles.bottomFooter2} sm="auto">
         <Link aria-label="Link to Terms of Use" href="#" className={styles.bottomFooterLink}>
        Terms of Use
        </Link>
    </Col>

    <Col className={ styles.socialIcons}>
    <Container fluid className={styles.spreadApart}>
  <Row>
  <Col   className={styles.socialIcons2}><a className={styles.footerOver} href="http://wwww.instagram.com"><TiSocialInstagram /></a></Col>
  <Col   className={styles.socialIcons2}><a className={styles.footerOver} href="http://wwww.twitter.com"><VscTwitter /></a></Col>
  <Col   className={styles.socialIcons2}><a className={styles.footerOver} href="http://wwww.vimeo.com"><FaVimeoV /></a></Col>
  </Row>
</Container>

    </Col>

  </Row>
</Container>



</div>

       


  )
}

export default Footer
