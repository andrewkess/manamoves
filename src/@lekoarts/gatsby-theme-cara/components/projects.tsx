/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
//import ProjectsMDX from "../sections/projects"

import styles2 from '../../../../src/hero-module.css'
import {  Image, Carousel } from 'react-bootstrap'


//import logo from  "../../../../static/ramy-keyframe.jpg" // Tell webpack this JS file uses this image
import logo from  "../../../../static/brexit.jpg" // Tell webpack this JS file uses this image
import logoTwo from "../../../../static/live.jpg" // Tell webpack this JS file uses this image
import logoThree from "../../../../static/boots.jpg" // Tell webpack this JS file uses this image
import logoFour from  "../../../../static/bear.jpg" // Tell webpack this JS file uses this image


const Projects = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
  
    <Content speed={0.4} offset={offset + 0.5} factor={factor}>
      <Inner>
      
      <div className="projectsTitle">Projects</div>
      
   
      
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
          
        >
        
         <a
    href="#"
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 0,
      py: [0, 0],
      color: `white`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
        <Carousel.Item className="projectFill">
<Image src={logo} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Freiheit</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>


   


</a>

     <a
    href="#"
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 0,
      py: [0, 0],
      color: `white`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
        <Carousel.Item className="projectFill">
<Image src={logoTwo} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Bold efforts</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a>

     <a
    href="#"
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 0,
      py: [0, 0],
      color: `white`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
        <Carousel.Item className="projectFill">
<Image src={logoThree} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Boots the house down</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a>

     <a
    href="#"
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 0,
      py: [0, 0],
      color: `white`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
        <Carousel.Item className="projectFill">
<Image src={logoFour} className="projectFill"  alt="NEVER"  />
<Carousel.Caption className="cappProject">
<h1>Eagle Salmon Bear</h1>
<p>Juan Pablo Domenech</p>
</Carousel.Caption>
</Carousel.Item>
</a>
   
        
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
    
    
    </Divider>
  </div>
)

export default Projects
