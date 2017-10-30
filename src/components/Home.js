import React from 'react';
import HomeComputer from './HomeComputer';
import HomeMobile from './HomeMobile';

class Home extends React.Component {
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
    const isMobile = width <= 1300;

    if (isMobile) {
      return(
        <HomeMobile />
      )
    } else {
      return(
        <HomeComputer />
      )
    }
  }
}

export default Home;
