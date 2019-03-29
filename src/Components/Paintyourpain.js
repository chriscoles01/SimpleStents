
import React, { Component, Fragment } from 'react';
import { VideoScroll } from 'react-video-scroll'
// import IconButton from '@material-ui/core/IconButton';
// import ExpandIcon from '@material-ui/icons/ArrowDropDownCircle'
import {Stickyroll} from '@stickyroll/stickyroll';
import first from '../simplestents_images/first.png'
import outside from '../simplestents_images/outside.png'
import leftinside from '../simplestents_images/leftinside.png'
import {Form} from 'react-bootstrap'
import Overlay from 'react-image-overlay'
import ReactHoverObserver from 'react-hover-observer'

class Paintyourpain extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
         };
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
      const leftstyle = {
        paddingTop:"55px",
        float: "left",
       
      }
      const rightstyle = {
        marginTop:"55px",
        float: "right",
        width: "30%"
      }

      const BorderStyle = {
        marginTop:"65px",
        
        border: "5px solid red",
      }
      const overlay= {
        position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

      
      }
      
      const contain= {
        
        position: "relative",
        width: "100%",
        maxWidth: "400px",
      } 
      const title = {
        fontSize: "300%"
      }
      const oneImage= {
        
        width: "250px",
        height: "500px",
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
        </div>
        <ReactHoverObserver>
        {({ isHovering }) => (
          isHovering ? 

          <img style={oneImage} src={leftinside} alt="" />
          :      
        <Overlay
            url={outside}
            overlayUrl={leftinside}
            imageHeight={500}
          position={'bottomRight'}
          overlayWidth={250}
          overlayHeight={500}
          overlayPadding={0}
          watermark={false}
            />

        )}
        </ReactHoverObserver>
        
        </div>
         </Fragment>
        
    );
  }
}

export default Paintyourpain;
