import React, { Component } from 'react';
import COLLECTIONS from './collections.js'
import PreviewItems from '../../components/Preview/PreviewItems.component'
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 
import { makeStyles } from '@material-ui/core/styles';


class Shop extends Component {
    constructor(props) {
        super(props);

            this.state ={
                collections: COLLECTIONS
            }
    }
    

    render() {
  
        return (
            
            <div>
                <Container>
                {this.state.collections.map(({ id, title, link,  img, items, routeName }) => (
                                                           
                    <PreviewItems title={title} routeName={routeName}  items={items}/>
                    
                                       
                    
                ))}
                
                </Container>
               
            </div>
        );
    }
}


export default Shop;