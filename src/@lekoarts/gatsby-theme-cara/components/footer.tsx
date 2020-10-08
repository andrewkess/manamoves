/** @jsx jsx */
import { Box, Link, useColorMode, jsx } from "theme-ui"

import styles from '../../../menu-button.module.css'

import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaVimeoV, FaTwitter } from 'react-icons/fa'

import { TiSocialInstagram, TiSocialVimeo, TiSocialTwitter } from 'react-icons/ti'

import { VscTwitter } from 'react-icons/vsc'

require('typeface-mukta')
require('typeface-bebas-neue')


const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">

       





      <div class="container">
        <div class="row">
      

        <div class="col-md-8 col-sm-6 col-xs-12" className={styles.bottomFooter}>
       <Link aria-label="Link to Privacy Policy" href="#" className={styles.bottomFooterLink}>About</Link> 
      <span className={styles.footerDivider}>|</span> 
      <Link aria-label="Link to Privacy Policy" href="#" className={styles.bottomFooterLink}>Projects</Link> 
      <span className={styles.footerDivider}>|</span> 
      <Link aria-label="Link to Privacy Policy" href="#" className={styles.bottomFooterLink}>Contact</Link> 
      <span className={styles.footerDivider}>|</span> 
      <Link aria-label="Link to Privacy Policy" href="#" className={styles.bottomFooterLink}>Jobs</Link> 
   
      
      
      
          </div>



          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul className={styles.socialIcons}>
<li><a className={styles.footerOver} href="http://wwww.instagram.com"><TiSocialInstagram /></a></li>
<li><a className={styles.footerOver} href="http://wwww.twitter.com"><VscTwitter /></a></li>
<li><a className={styles.footerOver} href="http://wwww.vimeo.com"><FaVimeoV /></a></li>
            </ul>
          </div>


          <div class="col-md-8 col-sm-6 col-xs-12" className={styles.bottomFooter2}>
          &copy; {new Date().getFullYear()} Annagra Media <span className={styles.footerDivider2}></span> 
      <Link aria-label="Link to Privacy Policy" href="#" className={styles.bottomFooterLink}>
      Privacy Policy 
        </Link> <span className={styles.footerDivider2}></span> 
        <Link aria-label="Link to Terms of Use" href="#" className={styles.bottomFooterLink}>
        Terms of Use
        </Link>
          </div>


        </div>
</div> 







    </Box>
  )
}

export default Footer
