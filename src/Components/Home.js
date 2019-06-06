import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ali from '../simplestents_images/ali.jpeg'
import dario from '../simplestents_images/Dario.jpg'
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { FormGroup } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
         };
       }
       getCard = (title, text) => {
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
  {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {text}
          </Typography>
         
        </CardContent>
        
      </Card>
  
        );
      }
  
    render() {
      const leftstyle = {
        float: "left",
      }
      // const rightstyle = {
      //   marginTop:"55px",
      //   float: "right",
      //   width: "50%"
      // }
      const pageStyle = {
        paddingTop:"100px",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingLeft: "10%",
        paddingRight: "10%"
      }
      const styles = {
        card: {
          width: "100%",
          height: "100%"
        },
        media: {
          height: 140,
        },
        gridList: {
            paddingTop:"5%",
            width:"50%"
        }
      }
      
    return (
        
        <Fragment >
            
            <div style={pageStyle}>
            <FormLabel >
            
            </FormLabel>
            {this.getCard("About","Founded by Bioengineering PhD student Ali Mosayyebi, University of Southampton spin-out Simple Stents is pioneering an innovative stent design that delivers significant healthcare improvements to patients.")}
            <FormGroup style={styles.gridList}>
            <FormLabel style={leftstyle}>Who we are:</FormLabel>

            <Grid container spacing={25} >

            
            <Grid item md={4}>
             <Card style={styles.card}>
            <CardActionArea>
                <img style={styles.media} src={ali} alt="" />
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Dr Ali Mosayyebi AMIMechE MIET
                </Typography>
                <Typography component="p">
                Ali Mosayyebi AMIMechE MIET is the founder of Simple Stents
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" href="https://www.southampton.ac.uk/engineering/postgraduate/research_students/am10n12.page?" color="primary">
                View Personal Page
                </Button>
                <Button size="small" href="https://www.linkedin.com/in/ali-mosayyebi-amimeche-miet-7528b445" color="primary">
                View LinkedIn
                </Button>
                
            </CardActions>
            </Card>
            </Grid>
            <Grid item md={4}>
            <Card style={styles.card}>
            <CardActionArea>
                <img style={styles.media} src={dario} alt="" />
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Dr Dario Carugo PhD
                </Typography>
                <Typography component="p">
                Dr Dario Carugo PhD
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" href="https://www.southampton.ac.uk/engineering/about/staff/dc7e09.page" color="primary">
                View Personal Page
                </Button>
            </CardActions>
            </Card>
            </Grid>
            </Grid>
            </FormGroup>
            </div>
        </Fragment>
    );
  }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default (Home);
