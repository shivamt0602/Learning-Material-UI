import logo from './logo.svg';
import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent,Button, CardMedia, CssBaseline, Grid, Toolbar, Container, Paper } from '@material-ui/core' //{} inside these are components
// typography is just texts
import { PhotoCamera } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles' 


const useStyles = makeStyles((theme)=>({
  mainContainer : {
    backgroundColor:"purple",
    color:"white"
  }
}))

function App() {

  const classes = useStyles()
  return (
    <>
      <CssBaseline /> {/*provides a lot of default styles*/}
      <AppBar style={{ position: "relative" }}> {/*navbar*/}
        <Toolbar> {/*gives blue line*/}
          <PhotoCamera />
          <Typography variant='h6'>PhotoAlbum</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.mainContainer}>
          <Container maxWidth="sm" style={{marginTop:"100px"}}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
            <Typography variant='h5' color='textSecondary' align='center'>hello this is shivam and this is a page where I'm uploading my coorg trip photos with my college friends in the year 2024.
            </Typography>
          </Container>
        </div>
        <div>
          <Grid container spacing={3} justifyContent='center' style={{ marginTop: '10px' }}>
            <Grid item>
            <Button variant="contained" color="primary">See my Photos</Button>
            </Grid>
            <Grid item>
            <Button variant="outlined">Private Photos</Button>
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}

export default App;



