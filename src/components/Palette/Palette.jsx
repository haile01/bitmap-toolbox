import { React, useState, useEffect } from 'react';
import { Container, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Palette = ({
  setColorPalette, 
  addColor, 
  palette, 
  setColor,
  curColor
}) => {

  const styles = useStyles();

  return (
    <Container className={styles.containerPalette}>
      {palette.map((color, ind) => (
        <SinglePalette
          color={color}
          key={ind}
          setColorPalette={setColorPalette(ind)}
          setColor={setColor}
        />
      ))}
      <SinglePalette addColor={addColor}/>
      <SinglePalette current color={curColor}/>
    </Container>
  )
}

const SinglePalette = ({
  color, 
  setColorPalette,
  addColor,
  setColor,
  current
}) => {

  const styles = useStyles();
  const [curColor, setCurColor] = useState(null);
  const [wait, setWait] = useState(null);

  const WAITING_TIME = 200;

  useEffect(() => {
    setCurColor(color);
  }, []);

  const handleSetColor = () => {
    console.log(curColor);
    setColorPalette(curColor);
  }

  const handleChange = (e) => {
    if (wait)
      return;
    const clear = () => {
      clearTimeout(wait);
      setWait(null);
    }
    setWait(setTimeout(() => clear(), WAITING_TIME));
    setCurColor(e.target.value);
  }
  
  if (current)
    return (
      <Container className={styles.containerSinglePalette}>
        <Input disabled type="color" value={color} className={styles.currentColor}/>
      </Container>
    )

  if (color)
    return (
      <Container className={styles.containerSinglePalette}>
        <Input onChange={handleChange} onBlur={handleSetColor} type="color" value={color} className={styles.input}/>
        <Button onClick={() => setColor(curColor)} variant="outlined" className={styles.button}>{'<'}</Button>
      </Container>
    )
  else
    return (
      <Container className={styles.containerSinglePalette}>
        <Button onClick={addColor} variant="outlined" color="default" className={styles.buttonAdd}>+</Button>
      </Container>
    )
}

export default Palette;