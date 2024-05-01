import logo from './logo.svg';
import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core' //{} inside these are components
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
            <Typography variant='h5' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
            <Typography variant='h5' color='textSecondary' align='center' paragraph>hello this is shivam and this is a page where I'm uploading my coorg trip photos with my college friends in the year 2024.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
