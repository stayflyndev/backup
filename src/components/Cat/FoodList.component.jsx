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

// 0list-group-item list-group-item-success

class FoodList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listitems: FOOD
        }
    }


    render() {
        console.log(this.state)

        return (
            <div>
                <Container >
                    <GridList cellHeight={180} className>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} >
                            <ListSubheader component="div">Where Food is Bae</ListSubheader>
                        </GridListTile>
                        {this.state.listitems.map(item => (
                            <GridListTile key={item.img}>
                                <img src={item.img} alt={item.title} cols={item.cols || 1} />
                                <GridListTileBar
                                    title={item.title}
                                    subtitle={<span>Prices Starting at: {item.price}</span>}
                                />

                            </GridListTile>
                        ))}
                    </GridList>
                </Container>
            </div>
        );
    }
}


/* 
  {this.state.listitems.map(item => (
                      <li key={item.id}>{item.title}</li>                     
                  ))}
*/
export default FoodList;
