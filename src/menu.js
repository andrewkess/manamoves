import React, { Component } from "react";
import "./menu.css";
import { Link } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'
import styles from './menu-button.module.css'
import { FiShoppingCart } from 'react-icons/fi'

import { IconContext } from "react-icons";

class Menu extends Component {
    render() {
      var visibility = "hide";
  
      if (this.props.menuVisibility) {
        visibility = "show";
      }
  
      return (
       
       <Container className="settingRight"><Row id="flyoutMenu"
             
       className={visibility}><Col className="menu-left-column">
        <div >
                 <button className="hamburger hamburger--slider is-active" type="button" onMouseDown={this.props.handleMouseDown}>
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>  
         
         <div className="menuContainer">

          <h2><a href="#">About</a></h2>
          <h2><Link to="/instructors/">Projects</Link></h2>
          </div>

          <div className="instructorBar">

          <h4><Link to="/instructors/lara-laquiz">Law of Desire</Link></h4>
          <h4><Link to="/blog/">Penguin Bloom</Link></h4>
          <h4><Link to="/blog/">Neverending Story</Link></h4>

          </div> 
          <div className="menuContainer2">
          <h2><a href="#">Jobs</a></h2>
          <h2><a href="#">Contact</a></h2>
          </div>
        
       
       
        </div>

</Col>


          </Row>
        
        
        
        </Container>


      );
    }
  }
  
  export default Menu;