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




<div className={styles.spreadApart}>

<div   className={styles.socialIcons2}><a className={styles.footerOver} href="http://www.instagram.com"><TiSocialInstagram /></a></div>
  <div   className={styles.socialIcons2}><a className={styles.footerOver} href="http://www.twitter.com"><VscTwitter /></a></div>
  <div   className={styles.socialIcons2}><a className={styles.footerOver} href="http://www.vimeo.com"><FaVimeoV /></a></div>


</div>

   <div className={styles.bottomFooter2}>
          &copy; {new Date().getFullYear()} Annagra Productions
 &nbsp;&nbsp;
      <Link aria-label="Link to Privacy Policy" href="#" className={styles.bottomFooterLink}>
      Privacy Policy 
        </Link> 
        &nbsp;&nbsp;
         <Link aria-label="Link to Terms of Use" href="#" className={styles.bottomFooterLink}>
        Terms of Use
        </Link>
    </div>


</div>

       


  )
}

export default Footer
