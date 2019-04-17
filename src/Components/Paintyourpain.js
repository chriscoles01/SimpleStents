
import React, { Component, Fragment } from 'react';

import green from '../simplestents_images/pyp/green.png'
import blue from '../simplestents_images/pyp/blue.png'
import brown from '../simplestents_images/pyp/brown.png'
import orange from '../simplestents_images/pyp/orange.png'
import purple from '../simplestents_images/pyp/purple.png'
import red from '../simplestents_images/pyp/red.png'
import yellow from '../simplestents_images/pyp/yellow.png'

import {Form} from 'react-bootstrap'

import "./pyp.css"

class Paintyourpain extends Component {
    constructor(props) {
        super(props);
        this.state = {
          top: false,
          middle: false,
          bottom: false,
         };
       }
     
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
  

    render() {
      const pageStyle = {
        paddingTop:"100px",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingRight: "5%",
        paddingLeft: "5%"
      }
    
    //   const overlay= {
    //     position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,

      
    //   }
      
      // const contain= {
        
      //   position: "relative",
      //   width: "100%",
      //   maxWidth: "400px",
      // } 
      const title = {
        fontSize: "300%"
      }
      // const oneImage= {
        
      //   width: "250px",
      //   height: "250px",
      //   transition: "transform .2s",
      //   border: "1px solid red",
      //   position: "absolute"


      // } 
      // const inImage= {
        
      //   width: "150px",
      //  height: "150px",
      //   transition: "transform .2s",
      //   border: "1px solid red",
      //   position: "absolute"


      // } 
      // const div= {
        
      //   width: "250px",
      //   height: "250px",
      //   transition: "transform .2s",
      //   position: "absolute"


      // } 
      // var ctrans = 'scale(1.5)';
    
      // const enlarge = {
      //   transform: ctrans 
      // }
      const orangeStyle = {
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,

      }

    return (
        

            
           
        <Fragment >
           
        <div style={pageStyle}>
        <div style={title}>
          <Form>
            <Form.Group>
              <Form.Label>Paint your pain demo</Form.Label>
            </Form.Group>
          </Form>



    
        <div  className="picholder">
         <div    > 
          <img  className="fancypics"  src={green} alt="" />
          </div>
          
          
          <img style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }} className="overlay" src={blue} alt=""/>
          <img style={{
        bottom: 20,
        left: 0,
        top: 0, 
        right: 0,
                }} className="overlay" src={brown} alt=""/>
          <img  style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }}className="overlay" src={purple} alt=""/>
          <img  style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }}className="overlay" src={red} alt=""/>
          <img  style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }}className="overlay" src={orange} alt=""/>
          <img style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }} className="overlay" src={yellow} alt=""/>


        </div>

    

         
            


 
        
    </div>
        </div>
         </Fragment>
        
    );
  }
}

export default Paintyourpain;
