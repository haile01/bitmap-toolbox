import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Canvas = ({
  bitmap
}) => {

  const styles = useStyles();

  if (bitmap)
    return (
      <Container className={styles.containerCanvas}>
        {bitmap.map((row, h_ind) => (
        <Row
          colors={row}
          key={h_ind}
          h_ind={h_ind}
        />
        ))}
      </Container>
    )
  else
    return (
      <>Something here</>
    )
}

const Row = ({
  colors,
  h_ind
}) => {
  
  const styles = useStyles();

  return (
    <Container className={styles.containerRow}>
      {colors.map((color, w_ind) => (
      <Cell
        color={color}
        key={w_ind}
      />
      ))}
    </Container>
  )
}

const Cell = ({
  color
}) => {

  const styles = useStyles({ color });

  return (
    <Container className={styles.containerCell}/>
  )
}

export default Canvas;