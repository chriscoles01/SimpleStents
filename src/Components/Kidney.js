
import React, { Component, Fragment } from 'react';
import { VideoScroll } from 'react-video-scroll'
// import IconButton from '@material-ui/core/IconButton';
// import ExpandIcon from '@material-ui/icons/ArrowDropDownCircle'
import {Stickyroll} from '@stickyroll/stickyroll';
import first from '../simplestents_images/first.png'
import second from '../simplestents_images/second.png'
import third from '../simplestents_images/third.png'
import fourth from '../simplestents_images/fourth.png'
import fifth from '../simplestents_images/fifth.png'
import Fade from 'react-reveal/Fade';
  


class Kidney extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
         };
       }
     
  

    render() {
      const leftstyle = {
        paddingTop:"55px",
        float: "left",
        width: "70%",
      }
      const rightstyle = {
        marginTop:"55px",
        float: "right",
        width: "30%"
      }

      const BorderStyle = {
        marginTop:"55px",
        float: "right",
        width: "30%",
        border: "5px solid red",
      }
      
    return (
        

            
           
        <Fragment >
         <div style={BorderStyle}>
         <img src={first} alt="" />
       
         </div>
         

         </Fragment>
        
    );
  }
}

export default Kidney;
