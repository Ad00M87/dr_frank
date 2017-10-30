import React from 'react';
import { Segment, Header, Image, Grid, Divider } from 'semantic-ui-react';
import heart from '../images/heart_1.png';
import boxer from '../images/boxer.png';

class Heart extends React.Component {
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
    document.getElementById('content-2').classList.add('show');
  }
  onLeave = () => {
    document.getElementById('content-2').classList.remove('show');
  }

  onPhonePress = () => {
    let { presses } = this.state;
    this.setState({ presses: presses + 1})
    if (presses === 1) {
      document.getElementById('content-2').classList.remove('show-phone');
      this.setState({ presses: 0 })
    } else {
      document.getElementById('content-2').classList.add('show-phone');
    }
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 1300;

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
            Heart
          </Header>
          <Segment basic id="content-2" className='collapsed'>
            <Image
              src={boxer}
              centered
              verticalalign='middle'
              size='medium'
              centered
            />
            <Image
              src={heart}
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
              "...I need the heart of someone that has ultimate endurance.
              Athletes are my first choice, and I am fortunate that there are many
              local boxers that pass away frequently for wounds that they
              aquire..."</p>
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
          <Header as='h1' color='olive'>Heart</Header>
          <Divider hidden />
          <Grid columns={3} mobile={1} id='content-2' className='collapsed'>
            <Grid.Column>
              <Image
                src={boxer}
                centered
                verticalAlign='middle'
                size='medium'
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                src={heart}
                centered
                verticalAlign="middle"
                size='medium'
              />
            </Grid.Column>
            <Grid.Column>
              <Header as='h3' style={styles.whiteText}>Notes from Dr. Franks's Journal</Header>
              <p
                style={{
                  fontSize: '2rem',
                  padding: '10px',
                  borderRadius: '5px'
                }}
                className='handwritting'
              >
              "...I need the heart of someone that has ultimate endurance.
              Athletes are my first choice, and I am fortunate that there are many
              local boxers that pass away frequently for wounds that they
              aquire..."</p>
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

export default Heart;
