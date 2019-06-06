/*This file was for making use of a video animation, and making it so 
that when the user scrolled or dragged on the screen the animation was 
advanced as needed. Eventually this was decided not to be used, however, 
I have left it here in case it is needed again. - Christopher Coles 06/06/19
This may contain depricated code, left in case it wanted to be impolemented again
*/

import React, { Component, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandIcon from '@material-ui/icons/ArrowDropDownCircle'
import {Stickyroll} from '@stickyroll/stickyroll';
import { VideoScroll } from 'react-video-scroll'

import Kidneystones from '../simplestents_images/kidneystones.jpg'

  
const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = 0
  wrapperEl.style.marginBottom = 0
}
  


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
         };
       }
       onRefresh(iScrollInstance) {
        var yScroll = iScrollInstance.y;
            
        if(this.state.scrollAmount !== yScroll) {
          this.setState({scrollAmount: yScroll})
        }
      }
  
      ref = player => {
        this.player = player
      }
   
    render() {
      const leftstyle = {
        float: "left",
        width: "50%",
      }
      const rightstyle = {
        marginTop:"55px",
        float: "right",
        width: "50%"
      }
    return (
        
        <Fragment>
            <div style={leftstyle}>
            <Stickyroll pages={"1"}>
          
          {({page, pageIndex, pages, progress}) => {
              return (
            <Fragment>
              
            <div     style={{paddingTop:"55px"}}>
            <VideoScroll
            onLoad={props =>
              setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
            }
            playbackRate={15}
            style={{ position: 'sticky' }}
          >
            <video
              tabIndex="0"
              autobuffer="autobuffer"
              preload="preload"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              playsInline
            >
              {/* The video has to be in the public folder */}
              <source type="video/mp4" src="./stent.mp4" />
            </video>
          </VideoScroll>
            </div>
           
            </Fragment>             
              );
          }}
          
        </Stickyroll>
        
          </div>
          <div style={rightstyle}>
            
          <img style={{  width: '100%', height: '100%', objectFit: 'contain' }} src={Kidneystones} alt="" />
           
            </div>
          
            <IconButton><ExpandIcon/></IconButton>


        </Fragment>
    );
  }
}

export default Home;
