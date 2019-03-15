import React, { Component, Fragment } from 'react';
import { VideoScroll } from 'react-video-scroll'
import IconButton from '@material-ui/core/IconButton';
import ExpandIcon from '@material-ui/icons/ArrowDropDownCircle'
import {Stickyroll} from '@stickyroll/stickyroll';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
        float: "right",
        width: "50%"
      }
    return (
        
        <Fragment>
            
            
            <div>
            <Stickyroll pages={"1"}>
          
          {({page, pageIndex, pages, progress}) => {
              return (
            <Fragment>
              <AppBar position="Static">
              <Button  color="inherit">Home</Button>
              <Button color="inherit">Kidney</Button>
              <Button color="inherit">Bladder</Button>
              </AppBar>
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
            <label>Simple Stents </label>

            <label>{progress}</label>
            </div>
            <IconButton><ExpandIcon/></IconButton>
            </Fragment>

                

                
                
              );
          }}
          
        </Stickyroll>
        
          </div>
            


        </Fragment>
    );
  }
}

export default Home;
