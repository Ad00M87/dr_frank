import React from 'react';
import Brain from './Brain';
import Heart from './Heart';
import Lungs from './Lungs';
import Intestines from './Intestines';

class Organs extends React.Component {
  render() {
    return(
      <div style={styles.pageFormat}>
        <Brain />
        <Heart />
        <Lungs />
        <Intestines />
      </div>
    )
  }
}

const styles = {
  pageFormat: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 50px',
  }
}

export default Organs;
