
import React, { Component, Fragment } from 'react';
import "./Kidney.css"


import first from '../simplestents_images/first.png'
import second from '../simplestents_images/second.png'
import third from '../simplestents_images/third.png'

import {Form, Row, Col} from 'react-bootstrap'

var numImages =  0

class Kidney extends Component {
    constructor(props) {
        super(props);
        this.state = {
          top: false,
          middle: false,
          bottom: false,
          
         };
         
       }

      getNumImages = () => {
        return numImages
      }

      increaseNumImages = () => {
        numImages = numImages + 1
      }
      //used to toggle which image was being selected (depending which was being hovered over)
      toggleImage = event => {
        if(this.state[event.id] == null || false) {
          this.setState({
            [event.target.id]: true
          });
        } else {
          this.setState({
            [event.target.id]: false
          });
        }
      }
      //the next three are used to toggle the image respective of position
      toggleTop(){
        if(this.state.top){
          this.setState({top: false})
        }else  {
          this.setState({top: true})
        }
        console.log("top toggle")
      }

      toggleBot(){
        if(this.state.bottom){
          this.setState({bottom: false})
        }else  {
          this.setState({bottom: true})
        }
      }

      toggleMid(){
        if(this.state.middle){
          this.setState({middle: false})
        }else  {
          this.setState({middle: true})
        }
      }
   //returns the componentes with the text on the left hand side
    getLeftStyled = text => {
      const oneImage= {
        
        width: "100%",
        height: "100%",
        border: "1px solid red"
      } 
      const over = {
        zIndex: 1,
        
        height: 300,
        width: 300
      }

      return (
        <Fragment>
        <Col>
        <div >

        "The kidneys are two bean-shaped organs found in vertebrates. They are located on the left and right in the retroperitoneal space, and in adult humans are about 11 centimetres (4.3 in) in length. They receive blood from the paired renal arteries; blood exits into the paired renal veins. Each kidney is attached to a ureter, a tube that carries excreted urine to the bladder."
         </div>
         </Col>
         <Col>
         <div >
        <div  id={this.getNumImages().toString} onMouseEnter={this.toggleImage} onMouseLeave={this.toggleImage}>
        
         <div  id="top"  style={this.state[this.getNumImages().toString] == null || false ? null : over}   > 
          <img  style={oneImage} src={first} alt="" />
          </div>
          {this.increaseNumImages()}
        </div>
        <div id={this.getNumImages().toString}  onMouseEnter={this.toggleImage} onMouseLeave={this.toggleImage}>
        
          
          <div id="middle" style={this.state[this.getNumImages().toString] == null || false ? null : over} >
            <img style={oneImage} src={second} alt="" />
          </div>
          {this.increaseNumImages()}
          </div>
          <div id={this.getNumImages().toString} onMouseEnter={this.toggleImage} onMouseLeave={this.toggleImage}>

            <div id="bottom" style={this.state[this.getNumImages().toString] == null || false ? null : over} >
            <img style={oneImage} src={third} alt="" />
            </div>
            {this.increaseNumImages()}
  
        </div>
        
       
        
        </div>

        </Col>
        </Fragment>
      )

    }
   //returns the componentes with the text on the right hand side

    getRightStyled = text => {
      const oneImage= {
        
        width: "100%",
        height: "100%",
        border: "1px solid red"
      } 
      const over = {
        zIndex: 1,
        
        height: 300,
        width: 300
       

      }
      return (
        <Fragment>
        
         <Col>
         <div >
        <div   onMouseEnter={() => this.toggleTop()} onMouseLeave={() => this.toggleTop()}>
         <div  id="top"  style={this.state.top ? over : null}   > 
          <img  style={oneImage} src={first} alt="" />
          </div>
        </div>
        <div  onMouseEnter={() => this.toggleMid()} onMouseLeave={() => this.toggleMid()}>

          <div id="middle" style={this.state.middle ? over : null} >
            <img style={oneImage} src={second} alt="" />
          </div>
          </div>
          <div onMouseEnter={() => this.toggleBot()} onMouseLeave={() => this.toggleBot()}>

            <div id="bottom" style={this.state.bottom ? over : null} >
            <img style={oneImage} src={third} alt="" />
            </div>
            
        </div>
        
       
        
        </div>

        </Col>
        <Col>
        <div >

        "The kidneys are two bean-shaped organs found in vertebrates. They are located on the left and right in the retroperitoneal space, and in adult humans are about 11 centimetres (4.3 in) in length. They receive blood from the paired renal arteries; blood exits into the paired renal veins. Each kidney is attached to a ureter, a tube that carries excreted urine to the bladder."
         </div>
         </Col>
        </Fragment>
      )

    }

    render() {
      const pageStyle = {
        paddingTop:"100px",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingRight: "5%",
        paddingLeft: "5%",
        

      }
     

      
      
      const title = {
        fontSize: "300%"
      }
     
      
    return (
        

      <div style={pageStyle}>   
           
        <Fragment >
        

        <div style={title}>
          <Form>
            <Form.Group>
              <Form.Label>Kidney Product</Form.Label>
            </Form.Group>
          </Form>
        </div>
        <div >
        <Form>
          <Row>
           {this.getLeftStyled()}
        </Row>
        <Row>
          {this.getRightStyled()}
        </Row>
        </Form>

         </div>
         
     
         </Fragment>
         </div>
        
    );
  }
}

export default Kidney;
