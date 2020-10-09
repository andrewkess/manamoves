/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import Intro from "../sections/intro"


import logo from  "../../../../static/ramy-keyframe.jpg" // Tell webpack this JS file uses this image


import logoTwo from "../../../../static/king-keyframe.jpeg" // Tell webpack this JS file uses this image
import logoThree from "../../../../static/minari-keyframe.jpeg" // Tell webpack this JS file uses this image

require('typeface-mukta')
require('typeface-bebas-neue')
require('typeface-rubik')

import styles from './hero.module.css'


import { Carousel, Image, Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap'


const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  
<Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}  className={styles.preview}>


<Carousel fade={true}  data-interval={false} indicators={false} className={styles.preview}>
<Carousel.Item>
<a href="http://www.thefyzz.com/project/driven">    

<Image src={logo} className={styles.newFill} alt="First slide"   />




<Carousel.Caption className={styles.capp}>
 <h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.7em'}} >LAW OF DESIRE</h1>
 <p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em'}}>Fun that's as explosively bright and provocative as ever.</p>
</Carousel.Caption></a>
</Carousel.Item>


<Carousel.Item>
<Image src={logoTwo} className={styles.newFill}  alt="First slide" />
<Carousel.Caption className={styles.capp}>
<h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.7em'}} >PENGUIN BLOOM</h1>

<p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em'}}>Graceful, thought-provoking commentary on timely sociopolitical themes.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<Image src={logoThree} className={styles.newFill}  alt="First slide"  />


<Carousel.Caption className={styles.capp}>
<h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.8em'}} >THE NEVERENDING STORY</h1>
<p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em'}}>A magical journey about the power of a boy's imagination to save a dying land.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>



        
</Content>
)

export default Hero
