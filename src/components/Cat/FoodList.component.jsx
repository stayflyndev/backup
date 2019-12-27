import React, { Component } from 'react';
import FOOD from './item.data';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FoodCategoryItem from './FoodCategoryItem.component'

// 0list-group-item list-group-item-success

class FoodList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listitems: FOOD
        }
    }


    render() {
      
        return (

            <Container >
                <GridList cellHeight={180} className>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} >
                        <ListSubheader component="div"><h1>Where Food is Bae</h1></ListSubheader>
                    </GridListTile>
                    {this.state.listitems.map(({ id, title, link, price, img }) => (
                        <GridListTile key={id}>
                            <img src={img} alt={title} cols={1} />

                            <FoodCategoryItem price={price} title={title} link={link} />

                        </GridListTile>

                    ))}
                </GridList>
            </Container>

        );
    }
}


/* 
  {this.state.listitems.map(item => (
                      <li key={item.id}>{item.title}</li>                     
                  ))}
*/
export default FoodList;
