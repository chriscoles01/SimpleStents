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
  
const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = 0
  wrapperEl.style.marginBottom = 0
}
  


class Kidney extends Component {
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
    getImage = progress =>{
      if (progress < 1/5) {
        return (<Fade id="first" bottom >
          <img style={{  width: '100%', height: '100%', objectFit: 'contain' }} src={first} alt="" />
          </Fade>)
      } else if(progress < 2/5){
        return (<Fade id="se" bottom >
          <img style={{  width: '100%', height: '100%', objectFit: 'contain' }} src={second} alt="" />
          </Fade>)
      } else if(progress < 3/5){
        return (<Fade id="third" bottom >
          <img style={{  width: '100%', height: '100%', objectFit: 'contain' }} src={third} alt="" />
          </Fade>)
      }
      else if(progress < 4/5){
        return (<Fade id="fourth" bottom >
          <img style={{  width: '100%', height: '100%', objectFit: 'contain' }} src={fourth} alt="" />
          </Fade>)
      }else if(progress <= 1.0){
        return (<Fade id="fifth" bottom >
          <img style={{  width: '100%', height: '100%', objectFit: 'contain' }} src={fifth} alt="" />
          </Fade>)
      }
    }
    // getImg = progress => {
    //   return(
        
    //     <Fade bottom >
    //         <img style={{  width: '100%', height: '100%', objectFit: 'contain' }} src={this.getImage(progress)} alt="" />
    //         </Fade>

    //   );
    // }
    render() {
      const leftstyle = {
        paddingTop:"55px",
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
            
            <Stickyroll pages={"1"}>
          
          {({page, pageIndex, pages, progress}) => {
              return (
            <Fragment>
              
              <div style={leftstyle}>
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
              <source type="video/mp4" src="./stent.mp4" />
            </video>
          </VideoScroll>
            </div>
            <div style={rightstyle}>
            {this.getImage(progress)}
              </div>
            
            </Fragment> 
                
              );
          }}
          
        </Stickyroll>
        
        
         


        </Fragment>
        
    );
  }
}

export default Kidney;
