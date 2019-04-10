
import React, { Component, Fragment } from 'react';
import { VideoScroll } from 'react-video-scroll'
import "./Kidney.css"
// import IconButton from '@material-ui/core/IconButton';
// import ExpandIcon from '@material-ui/icons/ArrowDropDownCircle'
import {Stickyroll} from '@stickyroll/stickyroll';
import first from '../simplestents_images/first.png'
import second from '../simplestents_images/second.png'
import third from '../simplestents_images/third.png'
import fourth from '../simplestents_images/fourth.png'
import fifth from '../simplestents_images/fifth.png'
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';
import ReactHoverObserver from 'react-hover-observer'
import {Form, Row, Col, Container} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
class Kidney extends Component {
    constructor(props) {
        super(props);
        this.state = {
          top: false,
          middle: false,
          bottom: false
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
      
    getCard = text => {
      const styles = {
        card: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      };
      return(

      <Card className={styles.card}>
            <CardContent>
              <Typography className={styles.title} color="textSecondary" gutterBottom>
              Information
              </Typography>
              <Typography variant="h5" component="h2">
                {text}
              </Typography>
            
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

      );
    }

    getLeftStyled = text => {
      const oneImage= {
        
        width: "100%",
        height: "100%",
        border: "1px solid red"
      } 
      const over = {
        zIndex: 1,
        
        height: 300,
        width: 300
       

      }
      return (
        <Fragment>
        <Col>
        <div >

        {/* {this.getCard("The kidneys are two bean-shaped organs found in vertebrates. They are located on the left and right in the retroperitoneal space, and in adult humans are about 11 centimetres (4.3 in) in length. They receive blood from the paired renal arteries; blood exits into the paired renal veins. Each kidney is attached to a ureter, a tube that carries excreted urine to the bladder.")} */}
        "The kidneys are two bean-shaped organs found in vertebrates. They are located on the left and right in the retroperitoneal space, and in adult humans are about 11 centimetres (4.3 in) in length. They receive blood from the paired renal arteries; blood exits into the paired renal veins. Each kidney is attached to a ureter, a tube that carries excreted urine to the bladder."
         </div>
         </Col>
         <Col>
         <div >
        <div   onMouseEnter={() => this.toggleTop()} onMouseLeave={() => this.toggleTop()}>
         <div  id="top"  style={this.state.top ? over : null}   > 
          <img  style={oneImage} src={first} alt="" />
          </div>
        </div>
        <div  onMouseEnter={() => this.toggleMid()} onMouseLeave={() => this.toggleMid()}>

          <div id="middle" style={this.state.middle ? over : null} >
            <img style={oneImage} src={second} alt="" />
          </div>
          </div>
          <div onMouseEnter={() => this.toggleBot()} onMouseLeave={() => this.toggleBot()}>

            <div id="bottom" style={this.state.bottom ? over : null} >
            <img style={oneImage} src={third} alt="" />
            </div>
            
        </div>
        
       
        
        </div>

        </Col>
        </Fragment>
      )

    }

    getRightStyled = text => {
      const oneImage= {
        
        width: "100%",
        height: "100%",
        border: "1px solid red"
      } 
      const over = {
        zIndex: 1,
        
        height: 300,
        width: 300
       

      }
      return (
        <Fragment>
        
         <Col>
         <div >
        <div   onMouseEnter={() => this.toggleTop()} onMouseLeave={() => this.toggleTop()}>
         <div  id="top"  style={this.state.top ? over : null}   > 
          <img  style={oneImage} src={first} alt="" />
          </div>
        </div>
        <div  onMouseEnter={() => this.toggleMid()} onMouseLeave={() => this.toggleMid()}>

          <div id="middle" style={this.state.middle ? over : null} >
            <img style={oneImage} src={second} alt="" />
          </div>
          </div>
          <div onMouseEnter={() => this.toggleBot()} onMouseLeave={() => this.toggleBot()}>

            <div id="bottom" style={this.state.bottom ? over : null} >
            <img style={oneImage} src={third} alt="" />
            </div>
            
        </div>
        
       
        
        </div>

        </Col>
        <Col>
        <div >

        {/* {this.getCard("The kidneys are two bean-shaped organs found in vertebrates. They are located on the left and right in the retroperitoneal space, and in adult humans are about 11 centimetres (4.3 in) in length. They receive blood from the paired renal arteries; blood exits into the paired renal veins. Each kidney is attached to a ureter, a tube that carries excreted urine to the bladder.")} */}
        "The kidneys are two bean-shaped organs found in vertebrates. They are located on the left and right in the retroperitoneal space, and in adult humans are about 11 centimetres (4.3 in) in length. They receive blood from the paired renal arteries; blood exits into the paired renal veins. Each kidney is attached to a ureter, a tube that carries excreted urine to the bladder."
         </div>
         </Col>
        </Fragment>
      )

    }

    render() {
      const pageStyle = {
        paddingTop:"100px",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // overflow: 'hidden',
        paddingRight: "5%",
        paddingLeft: "5%",
        

      }
      const leftstyle = {
        paddingTop:"55px",
        float: "left",
        width: "60%",

       
      }
      const rightstyle = {
        marginTop:"55px",
        float: "right",
        width: "40%",
        border: "5px solid red",

      }

      
      
      const title = {
        fontSize: "300%"
      }
      const oneImage= {
        
        width: "100%",
        height: "100%",
        border: "1px solid red"
      } 
      const over = {
        zIndex: 1,
        
        height: 300,
        width: 300
       

      }
      
    return (
        

      <div style={pageStyle}>   
           
        <Fragment >
        

        <div style={title}>
          <Form>
            <Form.Group>
              <Form.Label>Kidney Product</Form.Label>
            </Form.Group>
          </Form>
        </div>
        <div >
        <Form>
          <Row>
           {this.getLeftStyled()}
        </Row>
        <Row>
          {this.getRightStyled()}
        </Row>
        </Form>

         </div>
         
     
         </Fragment>
         </div>
        
    );
  }
}

export default Kidney;
