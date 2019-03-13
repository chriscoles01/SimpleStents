import React, { Component, Fragment } from 'react';
import { VideoScroll } from 'react-video-scroll'
import IconButton from '@material-ui/core/IconButton';
import ExpandIcon from '@material-ui/icons/ArrowDropDownCircle'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'
const setStyles = (wrapperEl, videoEl, playbackRate) => {
    wrapperEl.style.marginTop = 0
    wrapperEl.style.marginBottom = 0
  }
  



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          "scrollAmount": 0
         };
       }
       onRefresh(iScrollInstance) {
        var yScroll = iScrollInstance.y;
            
        if(this.state.scrollAmount !== yScroll) {
          this.setState({scrollAmount: yScroll})
        }
      }
  
    

    video() {
        return (
            <ReactIScroll iScroll={iScroll}>
          <VideoScroll
            onLoad={props =>
              setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
            }
            playbackRate={10}
            style={{ position: 'sticky' }}
          >
            <video
              tabIndex="0"
              autobuffer="autobuffer"
              preload="preload"
              style={{ width: '100%', objectFit: 'contain' }}
              playsInline
            >
              <source type="video/mp4" src="./oculus.mp4" />
            </video>
          </VideoScroll>
          </ReactIScroll>
        )
      }
    render() {
    return (
        
        <Fragment>
            
            <label>Simple Stents {this.state.scrollAmount}</label>
            {this.video()}

            <IconButton><ExpandIcon/></IconButton>
        </Fragment>
    );
  }
}

export default Home;
