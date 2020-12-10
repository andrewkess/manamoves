/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
  
    <Content speed={0.4} offset={offset + 0.5} factor={factor}>
      <Inner>
      
           <div style={{
fontFamily: 'Bebas Neue', 
  fontWeight: '500',
  letterSpacing: '0.03cm',
  lineHeight: '0.75em',
  paddingBottom: '0.4em',
display: 'swap',
fontSize: '3em',
          
        }}>
Projects
</div>
      
      
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
          
        >
        
   
        
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
    
    
    </Divider>
  </div>
)

export default Projects
