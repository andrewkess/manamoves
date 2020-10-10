/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import Intro from "../sections/intro"


import { Carousel, Image } from 'react-bootstrap'

import logo from  "../../../../static/ramy-keyframe.jpg" // Tell webpack this JS file uses this image
import logoTwo from "../../../../static/king-keyframe.jpeg" // Tell webpack this JS file uses this image
import logoThree from "../../../../static/minari-keyframe.jpeg" // Tell webpack this JS file uses this image

require('typeface-mukta')
require('typeface-bebas-neue')
require('typeface-rubik')


import 'bootstrap/dist/css/bootstrap.min.css';



import styles2 from '../../../../src/hero-module.css'



const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (


<Carousel fade={true}  data-interval={false} indicators={false} className="preview">
<Carousel.Item >
<a href="http://www.thefyzz.com/project/driven">    

<Image src={logo} className="newFill" alt="First slide" />




<Carousel.Caption className="capp">
 <h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.7em'}} >LAW OF DESIRE</h1>
 <p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em', fontSize:'2em'}}>Fun that's as explosively bright and provocative as ever.</p>
</Carousel.Caption></a>
</Carousel.Item>


<Carousel.Item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
<Image src={logoTwo} className="newFill"  alt="First slide"  />
<Carousel.Caption className="capp">
<h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.7em'}} >PENGUIN BLOOM</h1>

<p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em', fontSize:'2em'}} className={styles2.fake}>Graceful, thought-provoking commentary on timely sociopolitical themes.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<Image src={logoThree} className="newFill"  alt="First slide"  />


<Carousel.Caption className="capp">
<h1 style={{fontFamily: "Bebas Neue", fontWeight:500, fontSize:'11vw', display:'swap', letterSpacing: '0.03em', lineHeight:'0.7em'}} >THE NEVERENDING STORY</h1>
<p style={{fontFamily: "Mukta", display:'swap', lineHeight:'1.2em', fontSize:'2em'}}>A magical journey about the power of a boy's imagination to save a dying land.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>



)

export default Hero
