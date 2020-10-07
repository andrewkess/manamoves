/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

import styles from '../../../menu-button.module.css'

import { IconContext } from "react-icons";
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      &copy; {new Date().getFullYear()} ANNAGRA MEDIA. | 
      <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
      Privacy Policy 
        </Link> | 
        <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
        Terms of Use
        </Link>

        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
<span><Link to="#" className={styles.cartLink}><FaFacebook /></Link></span>
</IconContext.Provider>


      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-cara"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          LekoArts
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
