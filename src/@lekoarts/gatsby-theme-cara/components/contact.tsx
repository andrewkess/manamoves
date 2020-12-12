/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"

import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide, waveAnimation } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`40s`)};
  }
`

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>

<Content speed={0.4} offset={offset} factor={factor}>
      <Footer />
    </Content>
    <Divider speed={0.2} offset={offset} factor={factor} bg={'#240001'} fill={'#FF2483'} >
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, height: `20px`, transform: `matrix(1, 0, 0, -1, 0, 0)`, backgroundColor: `#240001`, border: `1px solid white`}}>
        <InnerWave sx={{ position: `relative`, height: `full`, backgroundColor: `#240001`, svg: { width: `100%`, height: `30vh`, backgroundColor: `#240001` } }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
   
    
  </div>
)

export default Contact
