import logo from './logo.svg';
import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Paper } from '@material-ui/core' //{} inside these are components
// typography is just texts
import { PhotoCamera } from '@material-ui/icons';

function App() {
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
        <div>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
            <Typography variant='h5' color='textSecondary' align='center'>hello this is shivam and this is a page where I'm uploading my coorg trip photos with my college friends in the year 2024.
            </Typography>
          </Container>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper>3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Paper>4</Paper>
            </Grid>
            {/* <Grid item>
              <item>5</item>
            </Grid>
            <Grid item>
              <item>6</item>
            </Grid> */}
          </Grid>
        </div>
      </main>
    </>
  );
}

export default App;
