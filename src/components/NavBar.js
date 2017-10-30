import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
  state = { width: window.innerWidth }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 900;

    if ( this.props.location.pathname === '/' ) {
      return(
        <Menu pointing secondary style={styles.navBar}>
          <Menu.Menu>
            <Menu.Item  name="Frankenstein's Monster" style={styles.logo}/>
          </Menu.Menu>
        </Menu>
      )
    } else {
      if (isMobile) {
        return(
          <div>
            <Menu pointing secondary style={styles.navBar}>
              <Menu.Menu>
                <Menu.Item name="Frankenstein's Monster" style={styles.logo}/>
              </Menu.Menu>
            </Menu>
            <Menu pointing secondary style={styles.navBarMobile}>
              <Menu.Menu>
                <Link to='/home' style={styles.links}>
                  <Menu.Item name='Home' style={styles.linkText} />
                </Link>
                <Link to='/contact_us' style={styles.links}>
                  <Menu.Item name='Contact Us' style={styles.linkText} />
                </Link>
              </Menu.Menu>
            </Menu>
            <Segment style={styles.dividerStyle}></Segment>
          </div>
        )
      } else {
        return (
          <div>
            <Menu pointing secondary style={styles.navBar}>
              <Menu.Menu>
                <Menu.Item name="Frankenstein's Monster" style={styles.logo}/>
                <Link to='/home' style={styles.links}>
                  <Menu.Item name='Home' style={styles.linkText} />
                </Link>
                <Link to='/contact_us' style={styles.links}>
                  <Menu.Item name='Contact Us' style={styles.linkText} />
                </Link>
              </Menu.Menu>
            </Menu>
          </div>
        )
      }
    }
  }
}

const styles = {
  navBar: {
    backgroundColor: '#000',
    marginBottom: '0',
    paddingLeft: '25px',
  },
  navBarMobile: {
    backgroundColor: '#000',
    marginBottom: '0',
    marginTop: '0',
    paddingBottom: '10px',
    paddingLeft: '35px',
  },
  links: {
    borderRadius: '',
    margin: '10px 10px',
    height: '40px'
  },
  linkText: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  logo: {
    color: 'green',
    fontSize: '2rem',
    fontFamily: '"Contrail One", cursive',
  },
  dividerStyle: {
    backgroundColor: '#000',
    height: '20px',
    margin: '0',
    borderRadius: '0',
  },
}

export default withRouter(NavBar);
