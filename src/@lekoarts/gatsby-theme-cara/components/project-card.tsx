/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
//import logo from  "../../../../static/ramy-keyframe.jpg" // Tell webpack this JS file uses this image
import {  Image, Carousel } from 'react-bootstrap'

import styles2 from '../../../../src/hero-module.css'


//import logo from  "../../../../static/ramy-keyframe.jpg" // Tell webpack this JS file uses this image
import logoTwo from "../../../../static/king-keyframe.jpeg" // Tell webpack this JS file uses this image
import logoThree from "../../../../static/minari-keyframe.jpeg" // Tell webpack this JS file uses this image

import logo from  "../../../../static/boots.jpg" // Tell webpack this JS file uses this image


type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  //imaged: string
}

const ProjectCard = ({ link, title, children, bg, imaged }: ProjectCardProps) => (
  <a
    href={link}
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
      background: bg || `none`,
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
<h1>{title}</h1>
<p>{title}</p>
</Carousel.Caption>
</Carousel.Item>


    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }} className={styles2.fake} >{children}</div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
  </a>
)

export default ProjectCard
