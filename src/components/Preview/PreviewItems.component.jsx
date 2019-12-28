import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css'


const useStyles = makeStyles({
    card: {
        padding: '5px',
        margin: '20px',
        backgroundColor: '#ff980099'
    },
    media: {
        height: 140,
    }
});


function PreviewItems({ items, title }) {
    const classes = useStyles();
    console.log({ items })
    return (
        <div className>

            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                            <div>
                                {items
                                    .filter((item, idx) => idx < 2)
                                    .map(item => (
                                        <div className="padding">
                                            {item.name} $ {item.price}
                                        </div>
                                    ))}
                            </div>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        ORDER
        </Button>
                    <Button size="small" color="primary">
                        GET OUT MY FACE!!
        </Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default PreviewItems;



