import React from 'react';
import { Segment, Header, Image, Divider } from 'semantic-ui-react';
import Moon from '../images/bloodMoon.jpg';
import Heart from '../images/heart.png';
import { Redirect } from 'react-router-dom';

class LandingPage extends React.Component {
  state = { beatCount: 0, width: window.innerWidth }

  componentWillMount() {
    let { width } = this.state;
    console.log(width)
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  heartUp = () => {
    document.getElementById('heart').classList.add('beating-heart');
  }

  heartDown = () => {
    let { beatCount } = this.state;
    console.log(beatCount)
    document.getElementById('heart').classList.remove('beating-heart');
    setTimeout( () => {
      this.setState({ beatCount: beatCount + 1 });
    }, 200)
  }

  beatingHeart = () => {
    this.heartUp();
    setTimeout( () => {
      this.heartDown();
      setTimeout( () => {
        this.heartUp();
        setTimeout( () => {
          this.heartDown();
          setTimeout( () => {
            this.heartUp();
            setTimeout( () => {
              this.heartDown();
              setTimeout( () => {
                this.heartUp();
                setTimeout( () => {
                  this.heartDown();
                  setTimeout( () => {
                    this.heartUp();
                    setTimeout( () => {
                      this.heartDown();
                      setTimeout( () => {
                        this.heartUp();
                        setTimeout( () => {
                          this.heartDown();
                        }, 250)
                      }, 250)
                    }, 250)
                  }, 250)
                }, 250)
              }, 250)
            }, 250)
          }, 250)
        }, 500)
      }, 500)
    }, 500);
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 900;

    if (this.state.beatCount === 6) {
      return(
        <Redirect push to="/home" />
      )
    } else {
      if (isMobile) {
        return(
          <Segment
            textAlign='center'
            style={styles.background}
            verticalAlign="middle"
          >
            <Header
              as='h3'
              style={styles.whiteText}
            >
              Start the heart...by pushing on it.
            </Header>
            <Image
              src={Heart}
              id='heart'
              className='resting-heart'
              centered
              verticalAlign="middle"
              style={styles.heartStyle}
              onClick={this.beatingHeart}
            />
          </Segment>
        )
      } else {
        return(
          <Segment
            textAlign='center'
            style={styles.background}
            verticalAlign="middle"
            >
            <Divider hidden />
            <Header
              as='h2'
              style={styles.whiteText}
            >
              Start the heart...by pushing on it.
            </Header>
            <Image
              src={Heart}
              id='heart'
              className='resting-heart'
              centered
              verticalAlign="middle"
              style={styles.heartStyle}
              onClick={this.beatingHeart}
            />
            <Divider hidden />
            <Divider hidden />
          </Segment>
        )
      }
    }
  }
}

const styles = {
  background: {
    margin: '0',
    border: '0',
    background: `url(${Moon}) no-repeat center`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: '0'
  },
  whiteText: {
    color: 'white',
  },
  heartStyle: {
    margin: '10% 0',
    cursor: 'pointer',
  },
}

export default LandingPage;
