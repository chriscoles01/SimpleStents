import React, { Component, Fragment } from 'react';
import { VideoScroll } from 'react-video-scroll'
import IconButton from '@material-ui/core/IconButton';
import ExpandIcon from '@material-ui/icons/ArrowDropDownCircle'
import ReactPlayer from 'react-player'
import {Stickyroll} from '@stickyroll/stickyroll';

const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
  wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
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
  
    

    sticky() {
        return (
          
          <Stickyroll pages={"1"}>
          
          {({page, pageIndex, pages, progress}) => {
              return (
                <label>{progress}</label>

                // <label>vdf {() => this.rp.seekTo(parseFloat(progress))}</label>

                
                
              );
          }}
        </Stickyroll>
        )
      }
      seektomid() {
        
      }
      youtube(){
        return (
          <Fragment>
            <ReactPlayer
              ref={rp => this.rp = rp}
              className='react-player'
              width='100%'
              height='100%'
              url={this.state.url}
              pip={this.state.pip}
              playing={this.state.playing}
              controls={this.state.controls}
              light={this.state.light}
              loop={this.state.loop}
              playbackRate={this.state.playbackRate}
              volume={this.state.volume}
              muted={this.state.muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onSeek={e => console.log('onSeek', e)}
            />
           
            </Fragment>
        );
      }
      ref = player => {
        this.player = player
      }

    render() {
      const leftstyle = {
        float: "left",
        width: "50%",
        height: "1200px"
      }
      const rightstyle = {
        float: "left",
        width: "50%"
      }
    return (
        
        <Fragment>
            
            
            <div>
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
              style={{ width: '100%', objectFit: 'contain' }}
              playsInline
            >
              <source type="video/mp4" src="./stent.mp4" />
            </video>
          </VideoScroll>
            </div>
            <div style={rightstyle}>
            <label>{progress}</label>
            </div>
            </Fragment>

                

                
                
              );
          }}
        </Stickyroll>
        
          </div>
            

            <IconButton><ExpandIcon/></IconButton>
        </Fragment>
    );
  }
}

export default Home;
