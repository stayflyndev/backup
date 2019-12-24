import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Container from '@material-ui/core/Container';




export default function FoodCategoryItem({id, img, url, price, title}) {
    return (
        <div>
             <GridListTileBar key={id}
                   title={title}
                   subtitle={<span>Prices Starting at: {price}</span>}
                   
               />
            
        </div>
    )
}

