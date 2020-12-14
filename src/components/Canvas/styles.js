const styles = {
  containerCanvas:
  {
    width: 500,
    height: 500,
    position: 'relative',
  },
  containerRow:
  {
    width: '100%',
    height: 30,
  },
  containerCell:
  {
    float: 'left',
    width: 26,
    height: 26,
    border: '1px solid black',
    padding: 0,
    margin: 1,
    backgroundColor: props => props.color,
  }
}

export default styles;