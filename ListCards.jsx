import { Typography, AppBar, Card, CardActions, CardContent, Button, CardMedia, CssBaseline, Grid, Toolbar, Container, Paper, Box } from '@material-ui/core'
import useStyles from "../styles"

const ListCards = () => {

    const classes = useStyles()

    return (
        <>

            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} />
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h5'>Heading</Typography>
                        <Typography>This is a small description about the card.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" color='primary'>View</Button>
                        <Button variant="outlined" color='primary'>Edit</Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Add more Grid items as needed */}

        </>
    )
}

export default ListCards;