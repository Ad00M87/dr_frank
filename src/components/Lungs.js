import React from 'react';
import { Segment, Header, Image, Grid, Divider } from 'semantic-ui-react';
import lungs from '../images/lungs.jpg';
import guard from '../images/guard.png';

class Lungs extends React.Component {
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
    document.getElementById('content-3').classList.add('show');
  }
  onLeave = () => {
    document.getElementById('content-3').classList.remove('show');
  }

  onPhonePress = () => {
    let { presses } = this.state;
    this.setState({ presses: presses + 1})
    if (presses === 1) {
      document.getElementById('content-3').classList.remove('show-lungs');
      this.setState({ presses: 0 })
    } else {
      document.getElementById('content-3').classList.add('show-lungs');
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
            Lungs
          </Header>
          <Segment basic id="content-3" className='collapsed'>
            <Image
              src={guard}
              centered
              verticalalign='middle'
              size='medium'
              centered
            />
            <Image
              src={lungs}
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
              "...the lungs are going to be tricky. Just attaching them will
              not do. They will take 72 to 96 hours of saturation in the chemicals
              before they will respond to the shock..."</p>
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
          <Header as='h1' color='olive'>Lungs</Header>
          <Divider hidden />
          <Grid columns={3} mobile={1} id='content-3' className='collapsed'>
            <Grid.Column>
              <Image
                src={guard}
                centered
                verticalAlign='middle'
                size='medium'
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                src={lungs}
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
              "...the lungs are going to be tricky. Just attaching them will
              not do. They will take 72 to 96 hours of saturation in the chemicals
              before they will respond to the shock..."</p>
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

export default Lungs;
