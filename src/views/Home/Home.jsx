import { React, useState } from 'react';
import { Container, FormControl, FormGroup, FormHelperText, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

import Palette from '../../components/Palette';
import Canvas from '../../components/Canvas';

const useStyles = makeStyles(styles)

const Home = () => {
  const styles = useStyles();
  const DEFAULT_COLOR = "#ffffff";

  const [palette, setPalette] = useState(['#000000', '#ff0000', '#00ff00', '#0000ff']);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [bitmap, setBitmap] = useState([]);
  const [force, setForce] = useState(0);

  const forceUpdate = () => setForce(Math.random());

  const handleSetColor = (ind) => {
    return (value) => {
      setPalette(previousState => {
        previousState[ind] = value;
        return previousState;
      });
      forceUpdate();
    }
  }

  const handleAddColor = () => {
    setPalette(previousState => {
      previousState.push(DEFAULT_COLOR);
      return previousState;
    })
    forceUpdate();
  }

  const handleSetSize = () => {
    if (width <= 0 || height <= 0)
      return;
    let newBitmap = new Array(height).fill(0).map(() => new Array(width).fill(DEFAULT_COLOR));
    setBitmap(newBitmap);
    forceUpdate();
  }

  return(
    <Container className={styles.containerHome}>
      <Container className={styles.containerToolbox}>
        <Palette
          addColor={handleAddColor}
          setColorPalette={handleSetColor}
          setColor={setColor}
          palette={palette}
          curColor={color}
        />
        <FormControl component="fieldset">
          <FormGroup>
            <TextField
              onInput={(e) => {if(e.target.value > 0) setWidth(parseInt(e.target.value));}}
              type="number" 
              label="Width" 
              value={width}
            />
            <TextField
              onInput={(e) => {if(e.target.value > 0) setHeight(parseInt(e.target.value));}}
              type="number"
              label="Height"
              value={height}
            />
            <Button
              onClick={() => handleSetSize()}
              variant="contained"
              className={styles.buttonSetSize}
            >
              Set size
            </Button>
          </FormGroup>
          <FormHelperText></FormHelperText>
        </FormControl>
      </Container>
      <Canvas
        bitmap={bitmap}
      />
    </Container>
  )
}

export default Home;