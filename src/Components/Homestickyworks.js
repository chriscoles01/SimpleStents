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
          url: "https://www.youtube.com/watch?v=u5VwtZThygs",
          pip: false,
          playing: false,
          controls: false,
          light: false,
          volume: 0,
          muted: true,
          played: 0,
          loaded: 0,
          duration: 0,
          playbackRate: 1.0,
          loop: false
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
            
            <label>Simple Stents {this.state.scrollAmount}</label>
            <div>
            <Stickyroll pages={"1"}>
          
          {({page, pageIndex, pages, progress}) => {
              return (
            <Fragment>
            <div style={leftstyle}>
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
            </div>
            <div style={rightstyle}>
            <label>{progress} {progress == 0 ? null : this.rp.seekTo(parseFloat(progress))}</label>
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
