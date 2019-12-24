import React from 'react'
import FoodList from '../../components/Cat/FoodList.component';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container';
import ListSubheader from '@material-ui/core/ListSubheader';


function Homepage() {


    return (
        <div>
            
            {/* display the categories */}
            <FoodList />  
        
            
        </div>
    )
}

export default Homepage
