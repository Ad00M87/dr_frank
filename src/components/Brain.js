import React from 'react';
import { Segment, Header, Image, Grid, Divider } from 'semantic-ui-react';
import brain from '../images/brain.png'
import professor from '../images/professor.png'

class Brain extends React.Component {
  state = { width: window.innerWidth, presses: 0 }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  onHover = () => {
    document.getElementById('content').classList.add('show');
  }
  onLeave = () => {
    document.getElementById('content').classList.remove('show');
  }

  onPhonePress = () => {
    let { presses } = this.state;
    this.setState({ presses: presses + 1})
    if (presses === 1) {
      document.getElementById('content').classList.remove('show-phone');
      this.setState({ presses: 0 })
    } else {
      document.getElementById('content').classList.add('show-phone');
    }
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 1400;

    if (isMobile) {
      return(
        <Segment
          basic
          raised
          style={styles.outline}
          textAlign='center'
          onClick={this.onPhonePress}
        >
          <Header
            as='h1'
            color='olive'
          >
            Brain
          </Header>
          <Segment
            basic
            id="content"
            className='collapsed'
          >
            <Image
              src={professor}
              centered
              verticalalign='middle'
              size='medium'
              centered
            />
            <Image
              src={brain}
              centered
              verticalalign="middle"
              size='medium'
              centered
            />
            <Header
              as='h3'
              style={styles.whiteText}
            >Notes from Dr. Franks's Journal</Header>
            <p
              style={styles.journalText}
              className='handwritting'
            >
            "...The brain must be attached to the spinal cord at the level of
            the medulla or the operation will not work. Proximity of the brain
            and spinal cord are also extremely important during the first 48
            hours..."</p>
          </Segment>
        </Segment>
      )
    } else {
      return(
        <Segment
          basic
          raised
          style={styles.outline}
          textAlign='center'
          onMouseOver={this.onHover}
          onMouseLeave={this.onLeave}
        >
          <Header
            as='h1'
            color='olive'
            style={{}}
          >
            Brain
          </Header>
          <Divider hidden />
          <Grid columns={3} id='content' className='collapsed'>
            <Grid.Column>
              <Image
                src={professor}
                centered
                verticalalign='middle'
                size='medium'
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                src={brain}
                centered
                verticalalign="middle"
                size='medium'
              />
            </Grid.Column>
            <Grid.Column>
              <Header as='h3' style={styles.whiteText}>Notes from Dr. Franks's Journal</Header>
              <p
                style={styles.journalText}
                className='handwritting'
              >
              "...The brain must be attached to the spinal cord at the level of
              the medulla or the operation will not work. Proximity of the brain
              and spinal cord are also extremely important during the first 48
              hours..."</p>
            </Grid.Column>
          </Grid>
        </Segment>
      )
    }
  }
}

const styles = {
  outline: {
    border: '2px solid green',
    borderRadius: '10px',
  },
  whiteText: {
    color: '#fff',
  },
  journalText: {
    fontSize: '2rem',
    padding: '10px',
  },
}

export default Brain;
