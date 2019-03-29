
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
import Grid from '@material-ui/core/Grid';
import ReactHoverObserver from 'react-hover-observer'
import {Form} from 'react-bootstrap'
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
         
         };
         
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

    render() {
      const pageStyle = {
        paddingTop:"100px",
        // display: 'flex',
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
      const leftImage= {
        float: "left",
        width: "30%",
        height: "100%",
      }
      const rightImage= {
        float: "right",
        width: "30%",
        height: "100%",
      }
      const middleImage= {
        
        width: "30%",
        height: "100%",
      } 
      const oneImage= {
        
        width: "100%",
        height: "100%",
      } 
      const title = {
        fontSize: "300%"
      }
    return (
        

            
           
        <Fragment >
        <div style={pageStyle}>
        <div style={title}>
          <Form>
            <Form.Group>
              <Form.Label>Kidney Product</Form.Label>
            </Form.Group>
          </Form>
        </div>
        <div>

        <Grid container spacing={25} >

        <Grid item md={4}>

        <div style={leftstyle}>
        {this.getCard("The kidneys are two bean-shaped organs found in vertebrates. They are located on the left and right in the retroperitoneal space, and in adult humans are about 11 centimetres (4.3 in) in length. They receive blood from the paired renal arteries; blood exits into the paired renal veins. Each kidney is attached to a ureter, a tube that carries excreted urine to the bladder.")}
         </div>
         </Grid>
        <Card>
        <CardContent>

         <Grid item md={4}>
         <div >

         <ReactHoverObserver>
        {({ isHovering }) => (
          isHovering ? 

          <img style={oneImage} src={first} alt="" />
          :      


            
            <img style={rightImage} src={first} alt="" />

        )}
    </ReactHoverObserver>
          <ReactHoverObserver>
              {({ isHovering }) => (
                isHovering ? 

                <img style={oneImage} src={second} alt="" />
                :      


                  
                  <img style={rightImage} src={second} alt="" />

              )}
          </ReactHoverObserver>
          <ReactHoverObserver>
        {({ isHovering }) => (
          isHovering ? 

          <img style={oneImage} src={third} alt="" />
          :      


            
            <img style={rightImage} src={third} alt="" />

        )}
    </ReactHoverObserver>
          </div>

          </Grid>
            </CardContent>
          </Card>

         </Grid>
         </div>
     
         </div>
         </Fragment>
        
    );
  }
}

export default Kidney;
