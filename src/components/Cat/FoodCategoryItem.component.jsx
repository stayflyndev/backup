import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const FoodCategory = ({id, title, url, price, img}) => {
    return (
        <div>
            <GridListTile key={img}>
                                <div>
                                <img src={img} alt={title} />
                                <GridListTileBar
                                    title={title}
                                    subtitle={<span>Prices Starting at: {price}</span>}
                                />
                                </div>

                            </GridListTile>
        </div>
    );
}

export default FoodCategory;
