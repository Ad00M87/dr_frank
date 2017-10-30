import React from 'react';
import { Segment, Header, Image, Grid, Divider } from 'semantic-ui-react';
import intestines from '../images/intestines-1.png';
import chef from '../images/chef.png';

class Intestines extends React.Component {
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
    document.getElementById('content-4').classList.add('show');
  }
  onLeave = () => {
    document.getElementById('content-4').classList.remove('show');
  }

  onPhonePress = () => {
    let { presses } = this.state;
    this.setState({ presses: presses + 1})
    if (presses === 1) {
      document.getElementById('content-4').classList.remove('show-intestines');
      this.setState({ presses: 0 })
    } else {
      document.getElementById('content-4').classList.add('show-intestines');
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
            Intestines
          </Header>
          <Segment basic id="content-4" className='collapsed'>
            <Image
              src={chef}
              centered
              verticalalign='middle'
              size='medium'
              centered
            />
            <Image
              src={intestines}
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
              "...I thought to exclude the GI tract from the creature completely,
              but I came to my senses that I must creat a complete humanoid as to
              prove my methods are the greatest. I know that I will be granted
              all the highest honors and accolades when this is complete..."</p>
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
          <Header as='h1' color='olive'>Intestines</Header>
          <Divider hidden />
          <Grid columns={3} mobile={1} id='content-4' className='collapsed'>
            <Grid.Column>
              <Image
                src={chef}
                centered
                verticalAlign='middle'
                size='medium'
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                src={intestines}
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
              "...I thought to exclude the GI tract from the creature completely,
              but I came to my senses that I must creat a complete humanoid as to
              prove my methods are the greatest. I know that I will be granted
              all the highest honors and accolades when this is complete..."</p>
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

export default Intestines;
