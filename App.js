import logo from './logo.svg';
import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, Button, CardMedia, CssBaseline, Grid, Toolbar, Container, Paper, Box } from '@material-ui/core' //{} inside these are components
// typography is just texts
import { PhotoCamera } from '@material-ui/icons';
import useStyles from "./styles"
import ListCards from "./components/ListCards";


function App() {

  const classes = useStyles()


  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  {/*above is a hook*/ }

  return (
    <>
      <CssBaseline /> {/*provides a lot of default styles*/}
      <AppBar style={{ position: "relative" }}> {/*navbar*/}
        <Toolbar> {/*gives blue line*/}
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>PhotoAlbum</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.mainContainer}>
          <Container maxWidth="md" style={{ marginTop: "100px" }}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
            <Typography variant='h5' color='textSecondary' align='center' gutterBottom>hello this is shivam and this is a page where I'm uploading my coorg trip photos with my college friends in the year 2024.
            </Typography>
          </Container>
        </div>
        <div className={classes.btns}>
          <Grid container spacing={3} justifyContent='center' style={{ marginTop: '10px' }}>
            <Grid item className={classes.grisPosition}>
              <Button variant="contained" color="primary">See my Photos</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Private Photos</Button>
            </Grid>
          </Grid>
        </div>
        {/* <ListCards/> */}


        <container className={classes.containerGrid} maxWidth="md">
          <Box className={classes.boxContainer}> {/* Use Box for padding and centering */}
            <Grid container spacing={4}>
              {/* Add more Grid items as needed */}
              {
                items.map((itemId) => {
                  return (
                    <>
                      <ListCards key={itemId} />
                    </>
                  )
                })
              }
            </Grid>
          </Box>
        </container>

      </main>
    </>
  );
}

export default App;



