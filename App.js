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
          <Container maxWidth="sm" style={{ backgroundColor: "blue" }}>
            <Typography variant="h4" style={{ color: 'white' }}>Welcome to My Photo Album</Typography>
            <Typography variant="body1" style={{ color: 'white' }}>This is a sample text for the photo album.</Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
