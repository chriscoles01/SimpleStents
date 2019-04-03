
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
// const setStyles = (wrapperEl, videoEl, playbackRate) => {
//   wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
//     playbackRate +
//     'px'})`
//   wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
//     playbackRate +
//     'px'})`
// }
  

  


class Kidney extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
         };
       }
      
  
      ref = player => {
        this.player = player
      }
    
      getImages = () => {
        const oneImage= {
          
          width: "100%",
          height: "100%",
        } 
       
        return (
          
          <div id="top" > 
            <img style={oneImage} src={first} alt="" />
            <div id={this.state.hover ? "middleover" : "middle"}>
            
  
              <img ref="hoverElement" onMouseOver={() => this.hoverOn()}
              onMouseLeave={this.hoverOff} style={oneImage} src={first} alt="" />
              <div id="bottom">
              <img style={oneImage} src={first} alt="" />
              </div>
            </div>
            </div>
  
          // <ReactHoverObserver>
          // {({ isHovering }) => (
          //   isHovering ? 
  
          //   <img style={oneImage} src={first} alt="" />
          //   :      
  
  
              
          //     <img style={rightImage} src={first} alt="" />
  
          // )}
          // </ReactHoverObserver>
          
          //   <ReactHoverObserver>
          // {({ isHovering }) => (
          //   isHovering ? 
  
          //   <img style={oneImage} src={third} alt="" />
          //   :      
  
  
              
          //     <img style={rightImage} src={third} alt="" />
  
          // )}
          // </ReactHoverObserver>
        )
      }
    render() {
      const leftstyle = {
        paddingTop:"55px",
        float: "left",
        width: "50%",
      }
      const rightstyle = {
        marginTop:"55px",
        float: "right",
        width: "30%",
        border: "5px solid red",
      }
    return (
        
        <Fragment>
            
        
            <div style={rightstyle}>
           
            <img src={first} alt="" />
              </div>
      
        </Fragment>
        
    );
  }
}

export default Kidney;
