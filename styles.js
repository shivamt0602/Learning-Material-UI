import { makeStyles } from '@material-ui/core/styles';
import fruitsImage from './fruits.jpeg'; // Import the image

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "white"
  },
  icon: {
    marginRight: "10px"
  },
  card: {
    padding: "5px 0px",
    // display: "flex",
    // flexDirection: "column"
  },
  boxContainer: {
    padding: "0px 200px", // Apply padding to Box
    // display: "flex",
    // justifyContent: "center",
  },

  cardMedia: {
    height : "220px",
    backgroundImage: `url(${fruitsImage})`, // Use the imported image
    backgroundSize: 'cover', // Optional: adjust background size as needed
    backgroundPosition : 'center'
  },
  btns : {
    marginBottom : "50px"
  }
}));

export default useStyles;
